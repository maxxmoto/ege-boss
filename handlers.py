import os
import logging
from datetime import datetime

from aiogram import Router, F
from aiogram.types import (
    Message, CallbackQuery, LabeledPrice,
    PreCheckoutQuery, FSInputFile
)
from aiogram.filters import Command, CommandStart

from config import (
    SUBJECTS, STAR_PRICES, PRICE_LABELS,
    ADMIN_IDS, DAILY_TASK_COUNT, DEFAULT_REMINDER
)
from database import db
from keyboards import (
    main_menu, subject_selection, task_answer_keyboard,
    after_answer_keyboard, subscription_keyboard,
    reminder_keyboard, profile_keyboard, stats_keyboard,
    confirm_subscription_keyboard
)
from pdf_service import generate_pdf

logger = logging.getLogger(__name__)

router = Router()


# ============= COMMANDS =============

@router.message(CommandStart())
async def cmd_start(message: Message):
    uid = message.from_user.id
    await db.add_user(
        uid, message.from_user.username,
        message.from_user.first_name, message.from_user.last_name
    )
    user = await db.get_user(uid)
    if user and user["selected_subject"]:
        await message.answer(
            f"Привет, {message.from_user.first_name}!\n"
            f"Твой предмет: {SUBJECTS.get(user['selected_subject'], 'не выбран')}\n"
            f"Сегодня у тебя {DAILY_TASK_COUNT} новых заданий.",
            reply_markup=main_menu()
        )
    else:
        await message.answer(
            f"Привет, {message.from_user.first_name}!\n"
            "Добро пожаловать в EGE-BOSS.\n"
            "Сначала выбери предмет для подготовки:",
            reply_markup=subject_selection()
        )


@router.message(Command("tasks"))
async def cmd_tasks(message: Message):
    await show_today_tasks(message.from_user.id, message)


@router.message(Command("stats"))
async def cmd_stats(message: Message):
    await show_stats_menu(message.from_user.id, message)


@router.message(Command("profile"))
async def cmd_profile(message: Message):
    await show_profile(message.from_user.id, message)


@router.message(Command("pdf"))
async def cmd_pdf(message: Message):
    await handle_generate_pdf(message.from_user.id, message)


@router.message(Command("help"))
async def cmd_help(message: Message):
    await message.answer(
        "EGE-BOSS - бот для подготовки к ЕГЭ 2026\n\n"
        "Команды:\n"
        "/start - Начать работу\n"
        "/tasks - Задания на сегодня\n"
        "/stats - Статистика\n"
        "/profile - Профиль и подписка\n"
        "/pdf - Сгенерировать PDF с заданиями\n"
        "/help - Помощь\n\n"
        "Подписка дает доступ ко всем предметам и функциям.",
        reply_markup=main_menu()
    )


# ============= CALLBACKS =============

@router.callback_query(F.data.startswith("select_subject:"))
async def cb_select_subject(callback: CallbackQuery):
    subject_code = callback.data.split(":")[1]
    uid = callback.from_user.id
    await db.set_subject(uid, subject_code)

    await callback.message.edit_text(
        f"Предмет '{SUBJECTS[subject_code]}' выбран!\n"
        "Чтобы получить доступ к заданиям, оформи подписку.",
        reply_markup=(await subscription_required_keyboard(uid))
    )
    await callback.answer()


async def subscription_required_keyboard(telegram_id: int):
    from aiogram.utils.keyboard import InlineKeyboardBuilder
    builder = InlineKeyboardBuilder()
    builder.button(text="Оформить подписку", callback_data="show_subscription")
    builder.button(text="Главное меню", callback_data="main_menu")
    builder.adjust(1)
    return builder.as_markup()


@router.callback_query(F.data == "main_menu")
async def cb_main_menu(callback: CallbackQuery):
    uid = callback.from_user.id
    user = await db.get_user(uid)
    subj = SUBJECTS.get(user["selected_subject"], "не выбран") if user else "не выбран"
    await callback.message.edit_text(
        f"Главное меню\nПредмет: {subj}",
        reply_markup=main_menu()
    )
    await callback.answer()


@router.callback_query(F.data == "today_tasks")
async def cb_today_tasks(callback: CallbackQuery):
    await show_today_tasks(callback.from_user.id, callback.message)
    await callback.answer()


@router.callback_query(F.data == "show_stats")
async def cb_show_stats(callback: CallbackQuery):
    await show_stats_menu(callback.from_user.id, callback.message)
    await callback.answer()


@router.callback_query(F.data == "show_profile")
async def cb_show_profile(callback: CallbackQuery):
    await show_profile(callback.from_user.id, callback.message)
    await callback.answer()


@router.callback_query(F.data == "show_subscription")
async def cb_show_subscription(callback: CallbackQuery):
    uid = callback.from_user.id
    user = await db.get_user(uid)
    has_sub = await db.check_subscription(user["id"]) if user else False

    if has_sub:
        end = user.get("subscription_end", "")
        try:
            end_date = datetime.fromisoformat(end) if end else None
            end_str = end_date.strftime("%d.%m.%Y") if end_date else "неизвестно"
        except:
            end_str = end
        await callback.message.edit_text(
            f"Подписка активна до {end_str}\n\n"
            "Вы можете продлить подписку или выбрать другой тариф:",
            reply_markup=subscription_keyboard()
        )
    else:
        await callback.message.edit_text(
            "Оформите подписку для доступа к заданиям:\n\n"
            "50 звезд - 1 месяц\n"
            "130 звезд - 3 месяца\n"
            "240 звезд - 6 месяцев\n"
            "450 звезд - 12 месяцев",
            reply_markup=subscription_keyboard()
        )
    await callback.answer()


@router.callback_query(F.data.startswith("subscribe:"))
async def cb_subscribe(callback: CallbackQuery):
    months = int(callback.data.split(":")[1])
    stars = STAR_PRICES[months]
    await callback.message.edit_text(
        f"Тариф: {PRICE_LABELS[months]}\n"
        f"Стоимость: {stars} звезд\n\n"
        "Подтвердите оплату:",
        reply_markup=confirm_subscription_keyboard(months, stars)
    )
    await callback.answer()


@router.callback_query(F.data.startswith("confirm_payment:"))
async def cb_confirm_payment(callback: CallbackQuery):
    _, months_str, stars_str = callback.data.split(":")
    months, stars = int(months_str), int(stars_str)
    uid = callback.from_user.id

    await callback.message.edit_text(
        "Отправляю счет на оплату..."
    )

    await callback.message.bot.send_invoice(
        chat_id=uid,
        title=f"Подписка EGE-BOSS - {PRICE_LABELS[months]}",
        description=f"Доступ ко всем предметам и функциям на {PRICE_LABELS[months]}",
        payload=f"sub_{months}_{stars}",
        provider_token="",
        currency="XTR",
        prices=[LabeledPrice(label=PRICE_LABELS[months], amount=stars)],
    )
    await callback.answer()


@router.callback_query(F.data == "show_reminder")
async def cb_show_reminder(callback: CallbackQuery):
    uid = callback.from_user.id
    user = await db.get_user(uid)
    current = user["reminder_time"] if user and user["reminder_time"] else DEFAULT_REMINDER
    enabled = user["reminder_enabled"] if user else 1
    status = "Включены" if enabled else "Отключены"
    await callback.message.edit_text(
        f"Напоминания: {status}\n"
        f"Текущее время: {current}\n\n"
        "Выберите время для ежедневных напоминаний:",
        reply_markup=reminder_keyboard(current)
    )
    await callback.answer()


@router.callback_query(F.data.startswith("set_reminder:"))
async def cb_set_reminder(callback: CallbackQuery):
    time_str = callback.data.split(":")[1]
    uid = callback.from_user.id
    await db.update_user(uid, reminder_time=time_str, reminder_enabled=1)
    await callback.message.edit_text(
        f"Напоминание установлено на {time_str}.\n"
        "Каждый день в это время я буду присылать задания.",
        reply_markup=main_menu()
    )
    await callback.answer()


@router.callback_query(F.data == "disable_reminder")
async def cb_disable_reminder(callback: CallbackQuery):
    uid = callback.from_user.id
    await db.update_user(uid, reminder_enabled=0)
    await callback.message.edit_text(
        "Напоминания отключены.",
        reply_markup=main_menu()
    )
    await callback.answer()


@router.callback_query(F.data == "change_subject")
async def cb_change_subject(callback: CallbackQuery):
    await callback.message.edit_text(
        "Выберите предмет:",
        reply_markup=subject_selection()
    )
    await callback.answer()


@router.callback_query(F.data.startswith("answer:"))
async def cb_answer(callback: CallbackQuery):
    _, task_id, ans_idx = callback.data.split(":")
    ans_idx = int(ans_idx)
    user_task_id = int(task_id)

    user_task = await db.get_user_task(user_task_id)
    if not user_task:
        await callback.answer("Задание не найдено", show_alert=True)
        return

    if user_task["is_correct"] is not None:
        await callback.answer("Вы уже ответили на это задание", show_alert=True)
        return

    is_correct = (ans_idx == user_task["correct_answer"])
    await db.answer_task(user_task_id, ans_idx, is_correct)

    correct_letter = chr(65 + user_task["correct_answer"])
    answer_letter = chr(65 + ans_idx)

    if is_correct:
        result = "Верно!"
    else:
        result = f"Неверно. Правильный ответ: {correct_letter}"

    exp = user_task.get("explanation", "")
    exp_text = f"\n\nОбъяснение:\n{exp}" if exp else ""

    has_next = await db.get_next_unanswered(
        user_task["user_id"], user_task_id
    )

    await callback.message.edit_text(
        f"Задание:\n{user_task['question']}\n\n"
        f"Ваш ответ: {answer_letter}\n"
        f"{result}{exp_text}",
        reply_markup=after_answer_keyboard(bool(has_next))
    )
    await callback.answer()


@router.callback_query(F.data == "next_task")
async def cb_next_task(callback: CallbackQuery):
    uid = callback.from_user.id
    user = await db.get_user(uid)
    if not user:
        await callback.answer("Пользователь не найден")
        return

    next_task = await db.get_next_unanswered(user["id"])
    if next_task:
        await send_task_message(callback.message, next_task)
    else:
        await callback.message.edit_text(
            "Все задания на сегодня выполнены!",
            reply_markup=main_menu()
        )
    await callback.answer()


@router.callback_query(F.data == "finish_tasks")
async def cb_finish_tasks(callback: CallbackQuery):
    uid = callback.from_user.id
    user = await db.get_user(uid)
    if not user:
        await callback.answer("Пользователь не найден")
        return

    today_tasks = await db.get_today_tasks(user["id"])
    answered = sum(1 for t in today_tasks if t["is_correct"] is not None)
    correct = sum(1 for t in today_tasks if t["is_correct"] == 1)

    await callback.message.edit_text(
        f"Результаты за сегодня:\n"
        f"Всего заданий: {len(today_tasks)}\n"
        f"Решено: {answered}\n"
        f"Верно: {correct}\n"
        f"Ошибок: {answered - correct}\n\n"
        f"Точность: {int(correct/answered*100) if answered else 0}%",
        reply_markup=main_menu()
    )
    await callback.answer()


@router.callback_query(F.data == "stats_by_topic")
async def cb_stats_by_topic(callback: CallbackQuery):
    uid = callback.from_user.id
    user = await db.get_user(uid)
    if not user:
        await callback.answer("Пользователь не найден")
        return

    stats = await db.get_stats(user["id"])
    topics = stats.get("by_topic", {})

    if not topics:
        await callback.message.edit_text(
            "Нет данных по темам. Начните решать задания!",
            reply_markup=main_menu()
        )
        await callback.answer()
        return

    lines = ["Статистика по темам:\n"]
    for topic, data in sorted(topics.items(), key=lambda x: -x[1]["errors"]):
        err_pct = int(data["errors"] / data["total"] * 100) if data["total"] else 0
        bar = "#" * (err_pct // 10) + "-" * (10 - err_pct // 10)
        lines.append(f"{topic}:")
        lines.append(f"  {bar} {data['errors']}/{data['total']} ошибок ({err_pct}%)")

    await callback.message.edit_text(
        "\n".join(lines),
        reply_markup=stats_keyboard()
    )
    await callback.answer()


@router.callback_query(F.data == "stats_by_subject")
async def cb_stats_by_subject(callback: CallbackQuery):
    uid = callback.from_user.id
    user = await db.get_user(uid)
    if not user:
        await callback.answer("Пользователь не найден")
        return

    stats = await db.get_stats(user["id"])
    subjects = stats.get("by_subject", {})

    if not subjects:
        await callback.message.edit_text(
            "Нет данных по предметам. Начните решать задания!",
            reply_markup=main_menu()
        )
        await callback.answer()
        return

    lines = ["Статистика по предметам:\n"]
    for name, data in subjects.items():
        pct = int(data["correct"] / data["total"] * 100) if data["total"] else 0
        lines.append(f"{name}: {data['correct']}/{data['total']} ({pct}%)")

    await callback.message.edit_text(
        "\n".join(lines),
        reply_markup=stats_keyboard()
    )
    await callback.answer()


@router.callback_query(F.data == "generate_pdf")
async def cb_generate_pdf(callback: CallbackQuery):
    await handle_generate_pdf(callback.from_user.id, callback.message)
    await callback.answer()


@router.callback_query(F.data == "show_help")
async def cb_show_help(callback: CallbackQuery):
    await cmd_help(callback.message)
    await callback.answer()


# ============= PAYMENTS =============

@router.pre_checkout_query()
async def pre_checkout(pre_checkout_q: PreCheckoutQuery):
    await pre_checkout_q.answer(ok=True)


@router.message(F.successful_payment)
async def successful_payment(message: Message):
    uid = message.from_user.id
    sp = message.successful_payment
    payload = sp.invoice_payload
    charge_id = sp.telegram_payment_charge_id
    stars = sp.total_amount

    if payload.startswith("sub_"):
        _, months_str, stars_str = payload.split("_")
        months = int(months_str)

        user = await db.get_user(uid)
        if user:
            await db.add_payment(user["id"], charge_id, stars, months)

        await message.answer(
            f"Оплата прошла успешно!\n"
            f"Подписка на {PRICE_LABELS.get(months, f'{months} мес.')} активирована.\n"
            "Теперь вам доступны все задания.",
            reply_markup=main_menu()
        )

        try:
            await message.bot.send_message(
                ADMIN_IDS[0],
                f"Новый платеж!\n"
                f"Пользователь: {uid} (@{message.from_user.username})\n"
                f"Сумма: {stars} звезд\n"
                f"Тариф: {months} мес."
            )
        except Exception as e:
            logger.error(f"Failed to notify admin: {e}")


# ============= HELPERS =============

async def show_today_tasks(telegram_id: int, target):
    user = await db.get_user(telegram_id)
    if not user:
        await target.answer("Пользователь не найден. Используйте /start")
        return

    if not user["selected_subject"]:
        await target.answer(
            "Сначала выберите предмет:",
            reply_markup=subject_selection()
        )
        return

    has_sub = await db.check_subscription(user["id"])
    if not has_sub:
        await target.answer(
            "Для доступа к заданиям необходима подписка.",
            reply_markup=(await subscription_required_keyboard(telegram_id))
        )
        return

    today_tasks = await db.get_today_tasks(user["id"])

    if not today_tasks:
        await db.assign_daily_tasks(user["id"], user["selected_subject"])
        today_tasks = await db.get_today_tasks(user["id"])

    unanswered = [t for t in today_tasks if t["is_correct"] is None]

    if not unanswered:
        correct = sum(1 for t in today_tasks if t["is_correct"] == 1)
        total = len(today_tasks)
        await target.answer(
            f"Все задания на сегодня выполнены!\n"
            f"Верно: {correct}/{total}",
            reply_markup=main_menu()
        )
        return

    first = unanswered[0]
    await send_task_message(target, first)


async def send_task_message(target, task: dict):
    text = (
        f"Задание:\n{task['question']}\n\n"
        f"Тема: {task['topic']}\n"
    )
    await target.answer(
        text,
        reply_markup=task_answer_keyboard(str(task["id"]), task["options"])
    )


async def show_stats_menu(telegram_id: int, target):
    user = await db.get_user(telegram_id)
    if not user:
        await target.answer("Пользователь не найден. Используйте /start")
        return

    stats = await db.get_stats(user["id"])
    total = stats["total"]
    correct = stats["correct"] or 0
    wrong = stats["wrong"] or 0

    pct = int(correct / total * 100) if total else 0

    text = (
        f"Ваша статистика:\n\n"
        f"Всего решено: {total}\n"
        f"Верно: {correct}\n"
        f"Ошибок: {wrong}\n"
        f"Точность: {pct}%\n"
    )

    await target.answer(text, reply_markup=stats_keyboard())


async def show_profile(telegram_id: int, target):
    user = await db.get_user(telegram_id)
    if not user:
        await target.answer("Пользователь не найден. Используйте /start")
        return

    subj = SUBJECTS.get(user["selected_subject"], "не выбран")

    has_sub = await db.check_subscription(user["id"])
    sub_status = "Активна" if has_sub else "Не активна"

    sub_end = ""
    if has_sub and user.get("subscription_end"):
        try:
            end_date = datetime.fromisoformat(user["subscription_end"])
            sub_end = f" до {end_date.strftime('%d.%m.%Y')}"
        except:
            pass

    reminder = user["reminder_time"] if user.get("reminder_time") else DEFAULT_REMINDER
    rem_status = "Вкл" if user.get("reminder_enabled") else "Выкл"

    text = (
        f"Профиль:\n\n"
        f"Предмет: {subj}\n"
        f"Подписка: {sub_status}{sub_end}\n"
        f"Напоминания: {rem_status} ({reminder})\n"
    )

    await target.answer(text, reply_markup=profile_keyboard())


async def handle_generate_pdf(telegram_id: int, target):
    user = await db.get_user(telegram_id)
    if not user:
        await target.answer("Пользователь не найден. Используйте /start")
        return

    if not user["selected_subject"]:
        await target.answer(
            "Сначала выберите предмет.",
            reply_markup=subject_selection()
        )
        return

    has_sub = await db.check_subscription(user["id"])
    if not has_sub:
        await target.answer(
            "PDF-генерация доступна только по подписке.",
            reply_markup=(await subscription_required_keyboard(telegram_id))
        )
        return

    await target.answer("Генерирую PDF с персонализированными заданиями...")

    topics = await db.get_topic_errors(user["id"], user["selected_subject"])
    weak_topics = [t["topic"] for t in topics[:3]] if topics else []

    if weak_topics:
        tasks = await db.get_tasks_by_topics(
            user["selected_subject"], weak_topics, 5
        )
    else:
        tasks = await db.get_today_tasks(user["id"])
        if not tasks:
            tasks = await db.assign_daily_tasks(
                user["id"], user["selected_subject"]
            )

    if not tasks:
        await target.answer("Нет заданий для PDF.")
        return

    subject_name = SUBJECTS[user["selected_subject"]]
    filepath = await generate_pdf(telegram_id, subject_name, tasks)

    doc = FSInputFile(filepath)
    await target.answer_document(
        doc,
        caption=f"Персональный вариант - {subject_name}\n"
                f"Заданий: {len(tasks)}. Ответы в конце файла."
    )

    try:
        os.remove(filepath)
    except:
        pass
