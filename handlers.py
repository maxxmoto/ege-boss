import os
import logging
from datetime import datetime

from aiogram import Router, F
from aiogram.types import (
    Message, CallbackQuery, LabeledPrice,
    PreCheckoutQuery, FSInputFile
)
from aiogram.filters import Command, CommandStart
from aiogram.utils.keyboard import InlineKeyboardBuilder

from config import (
    SUBJECTS, SUBJECT_DATIVE, STAR_PRICES, PRICE_LABELS,
    ADMIN_IDS, FREE_TASK_COUNT, DAILY_TASK_COUNT, DEFAULT_REMINDER,
    FREE_INFO, SUBSCRIPTION_INFO, FREE_TEST_COUNT, PRO_TEST_COUNT,
    PRIVATE_CHAT_LINK
)
from database import db
from keyboards import (
    reply_menu, main_menu, subject_selection, task_answer_keyboard,
    after_answer_keyboard, subscription_keyboard,
    reminder_keyboard, profile_keyboard, stats_keyboard,
    confirm_subscription_keyboard
)
from pdf_service import generate_pdf

logger = logging.getLogger(__name__)
router = Router()

EMOJI = {
    "wave": "\U0001f44b", "rocket": "\U0001f680", "fire": "\U0001f525",
    "star": "\U00002b50", "chart": "\U0001f4ca", "pdf": "\U0001f5b2",
    "bell": "\U0001f514", "settings": "\U00002699\ufe0f", "back": "\U0001f519",
    "check": "\u2705", "cross": "\u274c", "trophy": "\U0001f3c6",
    "brain": "\U0001f9e0", "book": "\U0001f4da", "sub": "\U0001f48e",
    "menu": "\U0001f4cb", "help_em": "\u2753", "done": "\U0001f389",
}

# ── Reply keyboard router ────────────────────

@router.message(F.text == "Задания")
async def rp_tasks(message: Message):
    await show_today_tasks(message.from_user.id, message)

@router.message(F.text == "Статистика")
async def rp_stats(message: Message):
    await show_stats_menu(message.from_user.id, message)

@router.message(F.text == "Профиль")
async def rp_profile(message: Message):
    await show_profile(message.from_user.id, message)

@router.message(F.text == "Помощь")
async def rp_help(message: Message):
    await cmd_help(message)

# ── Commands ─────────────────────────────────

@router.message(CommandStart())
async def cmd_start(message: Message):
    uid = message.from_user.id
    await db.add_user(
        uid, message.from_user.username,
        message.from_user.first_name, message.from_user.last_name
    )
    user = await db.get_user(uid)

    await message.answer(
        f"{EMOJI['wave']} Привет, {message.from_user.first_name}!\n"
        f"Добро пожаловать в <b>EGE-BOSS</b> — твоего личного помощника "
        f"для подготовки к ЕГЭ 2026.",
        reply_markup=reply_menu()
    )

    if user and user["selected_subject"]:
        subj = SUBJECTS.get(user["selected_subject"], "")
        await message.answer(
            f"{EMOJI['book']} Твой предмет: {subj}\n"
            f"{EMOJI['fire']} Сегодня ждут {DAILY_TASK_COUNT} новых заданий. "
            f"Поехали!",
            reply_markup=main_menu()
        )
    else:
        await message.answer(
            f"{EMOJI['brain']} С какого предмета начнём?\n"
            f"Выбери ниже \u2193",
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
        f"{EMOJI['help_em']} <b>EGE-BOSS — справка</b>\n\n"
        f"{EMOJI['menu']} <b>Меню снизу</b> — быстрые кнопки:\n"
        f"\u2022 Задания — получить задания на сегодня\n"
        f"\u2022 Статистика — твои успехи и ошибки\n"
        f"\u2022 Профиль — предмет, подписка, напоминания\n"
        f"\u2022 Помощь — эта подсказка\n\n"
        f"{EMOJI['pdf']} <b>PDF</b> — в меню можно скачать "
        f"персональный вариант со своими ошибками\n\n"
        f"{EMOJI['rocket']} <b>Подписка</b> — открывает все предметы, "
        f"статистику, PDF и напоминания",
        reply_markup=main_menu()
    )

# ── Admin commands ────────────────────────────

async def admin_only(message: Message) -> bool:
    if message.from_user.id not in ADMIN_IDS:
        await message.answer("Эта команда только для администратора.")
        return False
    return True


@router.message(Command("give_sub"))
async def cmd_give_sub(message: Message):
    if not await admin_only(message):
        return
    args = message.text.split()
    if len(args) < 3:
        await message.answer("Формат: /give_sub @username <месяцы>")
        return
    username = args[1].lstrip("@")
    try:
        months = int(args[2])
    except ValueError:
        await message.answer("Месяцы должны быть числом.")
        return

    all_users = await db.get_all_users()
    target = None
    for u in all_users:
        if u.get("username") == username:
            target = u
            break
    if not target:
        await message.answer(f"Пользователь @{username} не найден.")
        return

    ok = await db.give_subscription(target["telegram_id"], months)
    if ok:
        await message.answer(
            f"Подписка выдана @{username} на {months} мес."
        )
        try:
            await message.bot.send_message(
                target["telegram_id"],
                f"Администратор выдал тебе Pro-подписку на {months} мес.!",
                reply_markup=main_menu()
            )
        except:
            pass
    else:
        await message.answer("Не удалось выдать подписку.")


@router.message(Command("revoke_sub"))
async def cmd_revoke_sub(message: Message):
    if not await admin_only(message):
        return
    args = message.text.split()
    if len(args) < 2:
        await message.answer("Формат: /revoke_sub @username")
        return
    username = args[1].lstrip("@")

    all_users = await db.get_all_users()
    target = None
    for u in all_users:
        if u.get("username") == username:
            target = u
            break
    if not target:
        await message.answer(f"Пользователь @{username} не найден.")
        return

    ok = await db.revoke_subscription(target["telegram_id"])
    if ok:
        await message.answer(f"Подписка отозвана у @{username}.")
        try:
            await message.bot.send_message(
                target["telegram_id"],
                "Твоя Pro-подписка была отозвана администратором."
            )
        except:
            pass
    else:
        await message.answer("У пользователя нет активной подписки.")


@router.message(Command("admin_stats"))
async def cmd_admin_stats(message: Message):
    if not await admin_only(message):
        return
    stats = await db.get_admin_stats()
    await message.answer(
        f"Статистика бота:\n\n"
        f"Всего пользователей: {stats['total_users']}\n"
        f"С подпиской: {stats['paid_users']}\n"
        f"Заданий сегодня: {stats['today_tasks']}\n"
        f"Всего платежей: {stats['total_payments']}"
    )


@router.message(Command("broadcast"))
async def cmd_broadcast(message: Message):
    if not await admin_only(message):
        return
    text = message.text.removeprefix("/broadcast").strip()
    if not text:
        await message.answer("Формат: /broadcast <сообщение>")
        return

    users = await db.get_all_users()
    sent = 0
    failed = 0
    for u in users:
        try:
            await message.bot.send_message(
                u["telegram_id"], text, parse_mode="HTML"
            )
            sent += 1
        except:
            failed += 1

    await message.answer(f"Рассылка завершена.\nДоставлено: {sent}\nОшибок: {failed}")


# ── Callbacks ────────────────────────────────

@router.callback_query(F.data.startswith("select_subject:"))
async def cb_select_subject(callback: CallbackQuery):
    subject_code = callback.data.split(":")[1]
    uid = callback.from_user.id
    await db.set_subject(uid, subject_code)
    subj_name = SUBJECTS[subject_code]

    builder = InlineKeyboardBuilder()
    builder.button(text="Подробнее о подписке", callback_data="show_subscription_info")
    builder.button(text="Меню", callback_data="main_menu")
    builder.adjust(1)

    await callback.message.edit_text(
        f"{subj_name}\n\n"
        f"{EMOJI['check']} Отличный выбор!\n"
        f"Чтобы начать заниматься, оформи подписку.",
        reply_markup=builder.as_markup()
    )
    await callback.answer()


@router.callback_query(F.data == "main_menu")
async def cb_main_menu(callback: CallbackQuery):
    uid = callback.from_user.id
    user = await db.get_user(uid)
    subj = SUBJECTS.get(user["selected_subject"], "не выбран") if user else "не выбран"
    await safe_edit(
        callback,
        f"{EMOJI['menu']} <b>Главное меню</b>\n\nПредмет: {subj}",
        main_menu()
    )


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


@router.callback_query(F.data == "show_subscription_info")
async def cb_show_sub_info(callback: CallbackQuery):
    await safe_edit(callback, SUBSCRIPTION_INFO, subscription_keyboard())


@router.callback_query(F.data == "show_subscription")
async def cb_show_subscription(callback: CallbackQuery):
    uid = callback.from_user.id
    user = await db.get_user(uid)
    has_sub = await db.check_subscription(user["id"]) if user else False

    if has_sub and user.get("subscription_end"):
        try:
            end = datetime.fromisoformat(user["subscription_end"]).strftime("%d.%m.%Y")
        except:
            end = user["subscription_end"]
        text = (
            f"{EMOJI['sub']} <b>Подписка активна</b> до {end}\n\n"
            f"Ты можешь продлить или выбрать новый тариф:"
        )
    else:
        text = SUBSCRIPTION_INFO

    await safe_edit(callback, text, subscription_keyboard())


@router.callback_query(F.data.startswith("subscribe:"))
async def cb_subscribe(callback: CallbackQuery):
    months = int(callback.data.split(":")[1])
    stars = STAR_PRICES.get(months)
    if not stars:
        await callback.answer("Неверный тариф", show_alert=True)
        return
    price_rub = {1: 199, 3: 399, 6: 699, 12: 1199}
    await safe_edit(
        callback,
        f"{EMOJI['star']} <b>{PRICE_LABELS[months]}</b>\n\n"
        f"\u2022 Цена: {stars} звезд ({price_rub[months]} руб/мес)\n"
        f"\u2022 Доступ ко всем предметам\n"
        f"\u2022 PDF с вариантом\n"
        f"\u2022 Статистика и напоминания\n\n"
        f"Подтверди оплату:",
        confirm_subscription_keyboard(months, stars)
    )


@router.callback_query(F.data.startswith("confirm_payment:"))
async def cb_confirm_payment(callback: CallbackQuery):
    _, months_str, stars_str = callback.data.split(":")
    months, stars = int(months_str), int(stars_str)
    uid = callback.from_user.id

    try:
        await callback.message.edit_text("Отправляю счёт на оплату...")
    except:
        await callback.message.answer("Отправляю счёт на оплату...")

    await callback.message.bot.send_invoice(
        chat_id=uid,
        title=f"Подписка EGE-BOSS — {PRICE_LABELS[months]}",
        description=f"Полный доступ к EGE-BOSS на {PRICE_LABELS[months]}",
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
    status = f"{EMOJI['bell']} Вкл" if enabled else "Выкл"
    await safe_edit(
        callback,
        f"{EMOJI['bell']} <b>Напоминания</b>\n"
        f"Статус: {status}\n"
        f"Время: {current}\n\n"
        f"Выбери удобное время для ежедневных занятий:",
        reminder_keyboard(current)
    )


@router.callback_query(F.data.startswith("set_reminder:"))
async def cb_set_reminder(callback: CallbackQuery):
    time_str = callback.data.split(":")[1]
    uid = callback.from_user.id
    await db.update_user(uid, reminder_time=time_str, reminder_enabled=1)
    await safe_edit(
        callback,
        f"{EMOJI['check']} Напоминание установлено на {time_str}.\n"
        f"{EMOJI['bell']} Каждый день в {time_str} я пришлю задания.",
        main_menu()
    )


@router.callback_query(F.data == "disable_reminder")
async def cb_disable_reminder(callback: CallbackQuery):
    uid = callback.from_user.id
    await db.update_user(uid, reminder_enabled=0)
    await safe_edit(callback, "Напоминания отключены. Включить можно в любой момент.", main_menu())


@router.callback_query(F.data == "change_subject")
async def cb_change_subject(callback: CallbackQuery):
    await safe_edit(
        callback,
        f"{EMOJI['brain']} Какой предмет будем штурмовать?",
        subject_selection()
    )


@router.callback_query(F.data.startswith("answer:"))
async def cb_answer(callback: CallbackQuery):
    uid = callback.from_user.id
    _, task_id, ans_idx = callback.data.split(":")
    ans_idx = int(ans_idx)
    user_task_id = int(task_id)

    user_task = await db.get_user_task(user_task_id)
    if not user_task:
        await callback.answer("Задание не найдено", show_alert=True)
        return
    if user_task["is_correct"] is not None:
        await callback.answer("Ты уже ответил на это задание", show_alert=True)
        return

    user = await db.get_user(uid)
    if not user or user_task["user_id"] != user["id"]:
        await callback.answer("Это не твоё задание", show_alert=True)
        return

    is_correct = (ans_idx == user_task["correct_answer"])
    await db.answer_task(user_task_id, ans_idx, is_correct)

    correct_letter = chr(65 + user_task["correct_answer"])
    answer_letter = chr(65 + ans_idx)

    has_sub = await db.check_subscription(user["id"])

    if is_correct:
        result = f"{EMOJI['check']} <b>Верно!</b>"
    else:
        result = f"{EMOJI['cross']} <b>Неверно.</b> Правильный ответ: {correct_letter}"

    exp = user_task.get("explanation", "")
    if exp and has_sub:
        exp_text = f"\n\n{EMOJI['book']} <b>Разбор:</b>\n{exp}"
    elif exp and not has_sub:
        builder = InlineKeyboardBuilder()
        builder.button(text="Разбор в Pro", callback_data="show_subscription_info")
        builder.button(text="Главное меню", callback_data="main_menu")
        builder.adjust(1)
        exp_text = f"\n\n{EMOJI['star']} <b>Разбор доступен в Pro</b>"
        has_next = await db.get_next_unanswered(user["id"], user_task_id)
        await safe_edit(
            callback,
            f"<b>Задание:</b>\n{user_task['question']}\n\n"
            f"<b>Твой ответ:</b> {answer_letter}\n{result}{exp_text}",
            builder.as_markup()
        )
        return
    else:
        exp_text = ""

    has_next = await db.get_next_unanswered(user["id"], user_task_id)

    await safe_edit(
        callback,
        f"<b>Задание:</b>\n{user_task['question']}\n\n"
        f"<b>Твой ответ:</b> {answer_letter}\n{result}{exp_text}",
        after_answer_keyboard(bool(has_next))
    )


@router.callback_query(F.data == "next_task")
async def cb_next_task(callback: CallbackQuery):
    uid = callback.from_user.id
    user = await db.get_user(uid)
    if not user:
        await callback.answer("Пользователь не найден")
        return

    has_sub = await db.check_subscription(user["id"])
    next_task = await db.get_next_unanswered(user["id"])
    if next_task:
        text = (
            f"<b>Задание:</b>\n{next_task['question']}\n\n"
            f"Тема: {next_task['topic']}"
        )
        try:
            await callback.message.edit_text(
                text,
                reply_markup=task_answer_keyboard(str(next_task["id"]), next_task["options"])
            )
        except:
            await callback.message.answer(
                text,
                reply_markup=task_answer_keyboard(str(next_task["id"]), next_task["options"])
            )
    else:
        await finish_tasks(callback.message, user["id"], has_sub)
    await callback.answer()


@router.callback_query(F.data == "finish_tasks")
async def cb_finish_tasks(callback: CallbackQuery):
    uid = callback.from_user.id
    user = await db.get_user(uid)
    if not user:
        await callback.answer("Пользователь не найден")
        return
    has_sub = await db.check_subscription(user["id"])
    await finish_tasks(callback.message, user["id"], has_sub)
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
        await safe_edit(callback,
            f"{EMOJI['chart']} Пока нет данных.\n"
            f"Начни решать задания, и статистика появится!",
            main_menu()
        )
        await callback.answer()
        return

    lines = [f"{EMOJI['chart']} <b>Слабые места:</b>\n"]
    for topic, data in sorted(topics.items(), key=lambda x: -x[1]["errors"]):
        err_pct = int(data["errors"] / data["total"] * 100) if data["total"] else 0
        bar = ""
        for _ in range(10):
            bar += "\U0001f7e5" if err_pct > (_ * 10) else "\u2b1c"
        lines.append(
            f"{topic}: {bar} {data['errors']}/{data['total']} ошибок ({err_pct}%)"
        )

    await safe_edit(callback, "\n".join(lines), stats_keyboard())
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
        await safe_edit(callback,
            f"{EMOJI['chart']} Ещё нет статистики.\n"
            f"Начни решать!",
            main_menu()
        )
        await callback.answer()
        return

    lines = [f"{EMOJI['chart']} <b>По предметам:</b>\n"]
    for name, data in subjects.items():
        pct = int(data["correct"] / data["total"] * 100) if data["total"] else 0
        trophy = EMOJI["trophy"] if pct >= 80 else EMOJI["fire"] if pct >= 50 else EMOJI["brain"]
        lines.append(f"{trophy} {name}: {data['correct']}/{data['total']} ({pct}%)")

    await safe_edit(callback, "\n".join(lines), stats_keyboard())
    await callback.answer()


@router.callback_query(F.data == "generate_pdf")
async def cb_generate_pdf(callback: CallbackQuery):
    await handle_generate_pdf(callback.from_user.id, callback.message)
    await callback.answer()


@router.callback_query(F.data == "test_mode")
async def cb_test_mode(callback: CallbackQuery):
    await handle_test_mode(callback.from_user.id, callback.message)
    await callback.answer()


@router.callback_query(F.data == "show_help")
async def cb_show_help(callback: CallbackQuery):
    await safe_edit(callback,
        f"{EMOJI['help_em']} <b>EGE-BOSS — справка</b>\n\n"
        f"{EMOJI['menu']} <b>Меню снизу</b> — быстрые кнопки:\n"
        f"\u2022 Задания — получить задания на сегодня\n"
        f"\u2022 Статистика — твои успехи и ошибки\n"
        f"\u2022 Профиль — предмет, подписка, напоминания\n"
        f"\u2022 Помощь — эта подсказка\n\n"
        f"{EMOJI['pdf']} <b>PDF</b> — в меню можно скачать "
        f"персональный вариант со своими ошибками\n\n"
        f"{EMOJI['rocket']} <b>Подписка</b> — открывает все предметы, "
        f"статистику, PDF и напоминания",
        main_menu()
    )

# ── Payments ─────────────────────────────────

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

        try:
            end_date = datetime.fromisoformat(user["subscription_end"]) + timedelta(days=30*months)
            end_str = end_date.strftime("%d.%m.%Y")
        except:
            end_str = ""

        await message.answer(
            f"{EMOJI['done']} <b>Оплата прошла успешно!</b>\n\n"
            f"{EMOJI['sub']} Подписка на {PRICE_LABELS.get(months, f'{months} мес.')} активирована.\n"
            f"{EMOJI['rocket']} Тебе доступны все предметы и функции.\n"
            f"{EMOJI['fire']} Время заниматься!\n",
            reply_markup=main_menu()
        )

        try:
            await message.bot.send_message(
                ADMIN_IDS[0],
                f"\U0001f4b0 Новый платёж!\n"
                f"Пользователь: {uid} (@{message.from_user.username})\n"
                f"Сумма: {stars} звёзд\n"
                f"Тариф: {months} мес."
            )
        except Exception as e:
            logger.error(f"Failed to notify admin: {e}")

# ── Helpers ──────────────────────────────────

async def safe_edit(callback: CallbackQuery, text: str, markup=None):
    try:
        await callback.message.edit_text(text, reply_markup=markup, parse_mode="HTML")
    except Exception as e:
        logger.warning(f"edit_text failed: {e}")
        await callback.message.answer(text, reply_markup=markup, parse_mode="HTML")


async def finish_tasks(target, user_db_id: int, has_sub: bool = True):
    summary = await db.get_today_summary(user_db_id)
    pct = int(summary["correct"] / summary["answered"] * 100) if summary["answered"] else 0

    if pct >= 80:
        mood = f"{EMOJI['trophy']} Отличная работа!"
    elif pct >= 50:
        mood = f"{EMOJI['fire']} Хорошо, можно лучше!"
    else:
        mood = f"{EMOJI['brain']} Ничего, в следующий раз получится!"

    text = (
        f"{EMOJI['chart']} <b>Результаты за сегодня:</b>\n\n"
        f"Всего заданий: {summary['total']}\n"
        f"Решено: {summary['answered']}\n"
        f"Верно: {summary['correct']}\n"
        f"Ошибок: {summary['answered'] - summary['correct']}\n"
        f"Точность: {pct}%\n\n"
        f"{mood}"
    )

    if not has_sub:
        text += (
            f"\n\n{EMOJI['rocket']} <b>Хочешь больше?</b>\n"
            f"В Pro: 5 заданий в день, PDF, статистика по темам и напоминания!"
        )

    markup = main_menu()

    if hasattr(target, "edit_text"):
        try:
            if not has_sub:
                builder = InlineKeyboardBuilder()
                builder.button(text="Оформить Pro", callback_data="show_subscription_info")
                builder.button(text="Меню", callback_data="main_menu")
                builder.adjust(1)
                markup = builder.as_markup()
            await target.edit_text(text, reply_markup=markup, parse_mode="HTML")
            return
        except:
            pass

    if not has_sub:
        builder = InlineKeyboardBuilder()
        builder.button(text="Оформить Pro", callback_data="show_subscription_info")
        builder.button(text="Меню", callback_data="main_menu")
        builder.adjust(1)
        markup = builder.as_markup()

    await target.answer(text, reply_markup=markup, parse_mode="HTML")


async def show_today_tasks(telegram_id: int, target):
    user = await db.get_user(telegram_id)
    if not user:
        await target.answer(f"{EMOJI['wave']} Привет! Напиши /start, чтобы начать.")
        return
    if not user["selected_subject"]:
        await target.answer(
            f"{EMOJI['brain']} Сначала выбери предмет:", reply_markup=subject_selection()
        )
        return

    has_sub = await db.check_subscription(user["id"])
    task_limit = DAILY_TASK_COUNT if has_sub else FREE_TASK_COUNT

    today_tasks = await db.get_today_tasks(user["id"])
    if not today_tasks:
        await db.assign_daily_tasks(user["id"], user["selected_subject"], count=task_limit)
        today_tasks = await db.get_today_tasks(user["id"])

    unanswered = [t for t in today_tasks if t["is_correct"] is None]

    if not unanswered:
        summary = await db.get_today_summary(user["id"])
        pct = int(summary["correct"] / summary["total"] * 100) if summary["total"] else 0
        mood = EMOJI["trophy"] if pct >= 80 else EMOJI["fire"]

        msg = f"{mood} Все задания на сегодня выполнены!\nВерно: {summary['correct']}/{summary['total']} ({pct}%)"
        if not has_sub:
            msg += (
                f"\n\n{EMOJI['rocket']} Хочешь больше? В Pro — 5 заданий в день, "
                f"статистика по темам и PDF с вариантом!"
            )
            builder = InlineKeyboardBuilder()
            builder.button(text="Оформить Pro", callback_data="show_subscription_info")
            builder.button(text="Меню", callback_data="main_menu")
            builder.adjust(1)
            await target.answer(msg, reply_markup=builder.as_markup())
        else:
            await target.answer(msg, reply_markup=main_menu())
        return

    subj_name = SUBJECTS.get(user["selected_subject"], "")
    first = unanswered[0]
    done = len(today_tasks) - len(unanswered)
    total = len(today_tasks)

    header = f"{EMOJI['book']} <b>{subj_name}</b>"
    if not has_sub:
        header += f" ({EMOJI['star']} бесплатно {done}/{total})"
    else:
        header += f" ({done}/{total})"

    await target.answer(
        f"{header}\n\n<b>Задание:</b>\n{first['question']}\n\nТема: {first['topic']}",
        reply_markup=task_answer_keyboard(str(first["id"]), first["options"]),
        parse_mode="HTML"
    )


async def show_stats_menu(telegram_id: int, target):
    user = await db.get_user(telegram_id)
    if not user:
        await target.answer("Напиши /start, чтобы начать.")
        return

    has_sub = await db.check_subscription(user["id"])
    stats = await db.get_stats(user["id"])
    total = stats["total"]
    correct = stats["correct"] or 0
    wrong = stats["wrong"] or 0
    pct = int(correct / total * 100) if total else 0

    if total == 0:
        await target.answer(
            f"{EMOJI['chart']} Пока нет статистики.\nНачни решать задания!",
            reply_markup=main_menu()
        )
        return

    # Free: basic stats only
    base = (
        f"{EMOJI['chart']} <b>Твоя статистика:</b>\n\n"
        f"Всего решено: {total}\n"
        f"Верно: {correct} {EMOJI['check']}\n"
        f"Ошибок: {wrong} {EMOJI['cross']}\n"
        f"Точность: {pct}%\n"
    )

    if not has_sub:
        builder = InlineKeyboardBuilder()
        builder.button(text="Полная статистика в Pro", callback_data="show_subscription_info")
        builder.button(text="Меню", callback_data="main_menu")
        builder.adjust(1)
        await target.answer(
            base + f"\n{EMOJI['star']} В Pro — статистика по темам и предметам!",
            reply_markup=builder.as_markup(), parse_mode="HTML"
        )
        return

    # Pro: detailed stats
    await target.answer(
        base + "\nПодробнее \u2193",
        reply_markup=stats_keyboard(), parse_mode="HTML"
    )


async def show_profile(telegram_id: int, target):
    user = await db.get_user(telegram_id)
    if not user:
        await target.answer("Напиши /start, чтобы начать.")
        return

    subj = SUBJECTS.get(user["selected_subject"], "не выбран")
    has_sub = await db.check_subscription(user["id"])
    sub_status = f"{EMOJI['check']} Активна" if has_sub else f"{EMOJI['cross']} Не активна"

    sub_end = ""
    if has_sub and user.get("subscription_end"):
        try:
            sub_end = f" до {datetime.fromisoformat(user['subscription_end']).strftime('%d.%m.%Y')}"
        except:
            pass

    reminder = user["reminder_time"] or DEFAULT_REMINDER
    rem_status = f"{EMOJI['bell']} Вкл" if user.get("reminder_enabled") else "Выкл"

    limits = ""
    if not has_sub:
        limits = (
            f"\n{EMOJI['star']} <b>Бесплатно:</b> 1 задание/день\n"
            f"{EMOJI['rocket']} <b>Pro:</b> 5 заданий + PDF + статистика + напоминания\n"
        )

    await target.answer(
        f"{EMOJI['settings']} <b>Профиль</b>\n\n"
        f"{EMOJI['book']} Предмет: {subj}\n"
        f"{EMOJI['sub']} Подписка: {sub_status}{sub_end}\n"
        f"{EMOJI['bell']} Напоминания: {rem_status} ({reminder})\n"
        f"{limits}",
        reply_markup=profile_keyboard(has_sub),
        parse_mode="HTML"
    )


async def handle_generate_pdf(telegram_id: int, target):
    user = await db.get_user(telegram_id)
    if not user:
        await target.answer("Напиши /start, чтобы начать.")
        return
    if not user["selected_subject"]:
        await target.answer(
            f"{EMOJI['brain']} Сначала выбери предмет.",
            reply_markup=subject_selection()
        )
        return

    has_sub = await db.check_subscription(user["id"])
    if not has_sub:
        builder = InlineKeyboardBuilder()
        builder.button(text="Оформить Pro", callback_data="show_subscription_info")
        builder.button(text="Меню", callback_data="main_menu")
        builder.adjust(1)
        await target.answer(
            f"{EMOJI['pdf']} <b>PDF доступен в Pro</b>\n\n"
            f"\u2022 Персональная подборка твоих ошибок\n"
            f"\u2022 Ответы в конце файла\n"
            f"\u2022 Можно распечатать и решать офлайн",
            reply_markup=builder.as_markup(), parse_mode="HTML"
        )
        return

    await target.answer(f"{EMOJI['pdf']} Генерирую персональный вариант...")

    topics = await db.get_topic_errors(user["id"], user["selected_subject"])
    weak_topics = [t["topic"] for t in topics[:3]] if topics else []

    if weak_topics:
        tasks = await db.get_tasks_by_topics(user["selected_subject"], weak_topics, 5)
    else:
        tasks = await db.get_today_tasks(user["id"])
        if not tasks:
            tasks = await db.assign_daily_tasks(user["id"], user["selected_subject"])

    if not tasks:
        await target.answer("Нет заданий для PDF.")
        return

    subject_name = SUBJECTS[user["selected_subject"]]
    filepath = await generate_pdf(telegram_id, subject_name, tasks)

    doc = FSInputFile(filepath)
    await target.answer_document(
        doc,
        caption=f"{EMOJI['pdf']} <b>Персональный вариант</b>\n"
                f"Предмет: {subject_name}\n"
                f"Заданий: {len(tasks)}. Ответы в конце файла.",
        parse_mode="HTML"
    )

    try:
        os.remove(filepath)
    except:
        pass


async def handle_test_mode(telegram_id: int, target):
    user = await db.get_user(telegram_id)
    if not user:
        await target.answer("Напиши /start, чтобы начать.")
        return
    if not user["selected_subject"]:
        await target.answer(
            f"{EMOJI['brain']} Сначала выбери предмет.",
            reply_markup=subject_selection()
        )
        return

    has_sub = await db.check_subscription(user["id"])
    test_limit = PRO_TEST_COUNT if has_sub else FREE_TEST_COUNT
    subject_name = SUBJECTS[user["selected_subject"]]

    if not has_sub:
        builder = InlineKeyboardBuilder()
        builder.button(text="Ещё тесты в Pro", callback_data="show_subscription_info")
        builder.button(text="Меню", callback_data="main_menu")
        builder.adjust(1)
        await target.answer(
            f"{EMOJI['trophy']} <b>Тест-режим</b>\n\n"
            f"10 заданий по {subject_name}\n"
            f"Формат PDF — как на реальном ЕГЭ\n\n"
            f"Бесплатно: {FREE_TEST_COUNT} тест в день\n"
            f"Pro: {PRO_TEST_COUNT} теста в день\n\n"
            f"Генерирую бесплатный тест...",
            reply_markup=builder.as_markup(), parse_mode="HTML"
        )
    else:
        await target.answer(
            f"{EMOJI['trophy']} <b>Тест-режим Pro</b>\n\n"
            f"Генерирую вариант из 10 заданий по {subject_name}...",
            parse_mode="HTML"
        )

    tasks = await db.get_tasks_for_test(user["selected_subject"], 10)
    if not tasks:
        await target.answer("Недостаточно заданий для теста.")
        return

    filepath = await generate_pdf(telegram_id, subject_name, tasks)

    doc = FSInputFile(filepath)
    await target.answer_document(
        doc,
        caption=f"{EMOJI['trophy']} <b>Тест-режим</b>\n"
                f"Предмет: {subject_name}\n"
                f"Заданий: 10. Ответы в конце файла.\n"
                f"Проверь себя и введи результат в боте!",
        parse_mode="HTML"
    )

    if not has_sub:
        builder = InlineKeyboardBuilder()
        builder.button(text="Pro — ещё 2 теста в день", callback_data="show_subscription_info")
        builder.button(text="Меню", callback_data="main_menu")
        builder.adjust(1)
        await target.answer(
            f"{EMOJI['rocket']} Хочешь больше? В Pro — {PRO_TEST_COUNT} теста в день!",
            reply_markup=builder.as_markup()
        )

    try:
        os.remove(filepath)
    except:
        pass
