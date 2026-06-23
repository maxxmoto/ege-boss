import asyncio
import os
import logging

from aiogram import Bot, Dispatcher, types
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.exceptions import TelegramConflictError
from aiogram.webhook.aiohttp_server import SimpleRequestHandler, setup_application
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from aiohttp import web

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
            await bot.send_message(user["telegram_id"],
                f"Пришло время занятий!\nУ тебя {len(unanswered)} новых заданий по {subj_name}.\n\nЗадание 1 из {len(unanswered)}:")
            first = unanswered[0]
            await bot.send_message(user["telegram_id"],
                f"Задание:\n{first['question']}\n\nТема: {first['topic']}",
                reply_markup=task_answer_keyboard(str(first["id"]), first["options"]))
        except Exception as e:
            logger.error(f"Failed to send daily tasks to {user.get('telegram_id')}: {e}")

def setup_scheduler(bot: Bot):
    for time_str in REMINDER_TIMES:
        hour, minute = map(int, time_str.split(":"))
        scheduler.add_job(send_daily_tasks, trigger="cron", hour=hour, minute=minute,
            args=[bot, time_str], id=f"daily_{time_str.replace(':', '_')}", replace_existing=True)
    logger.info(f"Scheduler set up with {len(REMINDER_TIMES)} reminder times")

async def on_startup(bot: Bot):
    await db.connect()
    await db.seed_subjects()
    await db.seed_tasks(TASKS)
    asyncio.create_task(asyncio.to_thread(ensure_font))
    setup_scheduler(bot)
    scheduler.start()
    # Set webhook
    if WEBHOOK_URL:
        await bot.set_webhook(url=WEBHOOK_URL, drop_pending_updates=True)
        logger.info(f"Webhook set to {WEBHOOK_URL}")
    logger.info("Bot started successfully")

async def on_shutdown():
    scheduler.shutdown()
    await db.close()
    logger.info("Bot shut down")

WEBHOOK_URL = os.environ.get("WEBHOOK_URL", "")
WEBHOOK_PATH = os.environ.get("WEBHOOK_PATH", "/webhook")
PORT = int(os.environ.get("PORT", 8080))

async def main():
    if BOT_TOKEN == "ВАШ_ТОКЕН_БОТА":
        logger.error("Please set your BOT_TOKEN in config.py or environment variable")
        return

    bot = Bot(token=BOT_TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))
    dp = Dispatcher()
    dp.include_router(router)
    dp.startup.register(on_startup)
    dp.shutdown.register(on_shutdown)

    if WEBHOOK_URL:
        # Webhook mode — no polling conflicts
        app = web.Application()
        webhook_requests_handler = SimpleRequestHandler(dispatcher=dp, bot=bot)
        webhook_requests_handler.register(app, path=WEBHOOK_PATH)
        setup_application(app, dp, bot=bot)
        runner = web.AppRunner(app)
        await runner.setup()
        site = web.TCPSite(runner, "0.0.0.0", PORT)
        await site.start()
        logger.info(f"Webhook server started on {PORT}, path={WEBHOOK_PATH}")
        await asyncio.Event().wait()  # run forever
    else:
        # Polling mode with conflict handling
        await bot.delete_webhook(drop_pending_updates=True)
        logger.info("Waiting 10s for old container to stop...")
        await asyncio.sleep(10)
        logger.info("Starting polling")
        for attempt in range(20):
            try:
                await dp.start_polling(bot, drop_pending_updates=True)
                break
            except TelegramConflictError:
                logger.warning(f"Conflict on attempt {attempt+1}, waiting 10s...")
                await asyncio.sleep(10)
            except Exception as e:
                logger.warning(f"Polling attempt {attempt+1} failed: {e}")
                await asyncio.sleep(5)

if __name__ == "__main__":
    asyncio.run(main())
