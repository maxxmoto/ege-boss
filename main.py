import asyncio
import os
import logging

from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from apscheduler.schedulers.asyncio import AsyncIOScheduler

from config import BOT_TOKEN, REMINDER_TIMES, SUBJECT_DATIVE
from database import db
from task_data import TASKS
from handlers import router
from keyboards import task_answer_keyboard, reply_menu
from pdf_service import ensure_font

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

scheduler = AsyncIOScheduler()

# ── Health check server (keeps hosting alive during conflict retries) ──
async def health_server():
    """Simple HTTP server that responds 200 OK to keep hosting happy."""
    try:
        import aiohttp
        from aiohttp import web
        app = web.Application()
        async def health(request):
            return web.Response(text="ok", status=200)
        app.router.add_get("/", health)
        app.router.add_get("/health", health)
        port = int(os.environ.get("PORT", 8080))
        runner = web.AppRunner(app)
        await runner.setup()
        site = web.TCPSite(runner, "0.0.0.0", port)
        await site.start()
        logger.info(f"Health server started on port {port}")
    except ImportError:
        logger.info("aiohttp not installed, health server disabled")
    except Exception as e:
        logger.warning(f"Health server failed: {e}")

async def send_daily_tasks(bot: Bot, time_str: str):
    users = await db.get_users_by_reminder(time_str)
    for user in users:
        try:
            if not user.get("selected_subject"):
                continue

            today_tasks = await db.get_today_tasks(user["id"])
            if not today_tasks:
                today_tasks = await db.assign_daily_tasks(user["id"], user["selected_subject"])

            unanswered = [t for t in today_tasks if t["is_correct"] is None]
            if not unanswered:
                continue

            subj_name = SUBJECT_DATIVE.get(user["selected_subject"], "выбранному предмету")
            await bot.send_message(
                user["telegram_id"],
                f"Пришло время занятий!\n"
                f"У тебя {len(unanswered)} новых заданий по {subj_name}.\n\n"
                f"Задание 1 из {len(unanswered)}:",
            )

            first = unanswered[0]
            await bot.send_message(
                user["telegram_id"],
                f"Задание:\n{first['question']}\n\nТема: {first['topic']}",
                reply_markup=task_answer_keyboard(str(first["id"]), first["options"])
            )

        except Exception as e:
            logger.error(f"Failed to send daily tasks to {user.get('telegram_id')}: {e}")


def setup_scheduler(bot: Bot):
    for time_str in REMINDER_TIMES:
        hour, minute = map(int, time_str.split(":"))
        scheduler.add_job(
            send_daily_tasks,
            trigger="cron",
            hour=hour,
            minute=minute,
            args=[bot, time_str],
            id=f"daily_{time_str.replace(':', '_')}",
            replace_existing=True,
        )
    logger.info(f"Scheduler set up with {len(REMINDER_TIMES)} reminder times")


async def on_startup(bot: Bot):
    # Start health check server FIRST — before anything else
    asyncio.create_task(health_server())
    await db.connect()
    await db.seed_subjects()
    await db.seed_tasks(TASKS)
    asyncio.create_task(asyncio.to_thread(ensure_font))
    setup_scheduler(bot)
    scheduler.start()
    logger.info("Bot started successfully")


async def on_shutdown():
    scheduler.shutdown()
    await db.close()
    logger.info("Bot shut down")


async def main():
    if BOT_TOKEN == "ВАШ_ТОКЕН_БОТА":
        logger.error("Please set your BOT_TOKEN in config.py or environment variable")
        return

    bot = Bot(
        token=BOT_TOKEN,
        default=DefaultBotProperties(parse_mode=ParseMode.HTML)
    )
    dp = Dispatcher()
    dp.include_router(router)

    dp.startup.register(on_startup)
    dp.shutdown.register(on_shutdown)

    await bot.delete_webhook(drop_pending_updates=True)
    try:
        await dp.start_polling(bot, drop_pending_updates=True)
    finally:
        await bot.session.close()

if __name__ == "__main__":
    asyncio.run(main())
