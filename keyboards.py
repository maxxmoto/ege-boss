from aiogram.utils.keyboard import InlineKeyboardBuilder, ReplyKeyboardBuilder
from config import SUBJECTS, STAR_PRICES, PRICE_LABELS, REMINDER_TIMES


def reply_menu(is_subscribed: bool = False):
    builder = ReplyKeyboardBuilder()
    builder.button(text="Задания")
    builder.button(text="Статистика")
    builder.button(text="Профиль")
    builder.button(text="Помощь")
    builder.adjust(2)
    return builder.as_markup(resize_keyboard=True, input_field_placeholder="Выберите раздел...")


# ── Inline keyboards ──────────────────────────

def main_menu():
    builder = InlineKeyboardBuilder()
    builder.button(text="Задания на сегодня", callback_data="today_tasks")
    builder.button(text="Тест по теме", callback_data="topic_test")
    builder.button(text="Вариант КИМ", callback_data="full_variant")
    builder.button(text="Статистика", callback_data="show_stats")
    builder.button(text="Профиль", callback_data="show_profile")
    builder.button(text="Помощь", callback_data="show_help")
    builder.adjust(1)
    return builder.as_markup()


def subject_selection(selected: list = None):
    builder = InlineKeyboardBuilder()
    selected = selected or []
    for code, name in SUBJECTS.items():
        mark = " \u2705" if code in selected else ""
        builder.button(text=f"{name}{mark}", callback_data=f"toggle_subject:{code}")
    if selected:
        builder.button(text="Готово", callback_data="subjects_done")
    builder.adjust(2)
    return builder.as_markup()


def task_answer_keyboard(task_id: str, options: list):
    if not options or len(options) == 0 or (len(options) == 1 and options[0] == ""):
        return None
    builder = InlineKeyboardBuilder()
    for i, opt in enumerate(options):
        short = opt if len(opt) <= 40 else opt[:37] + "..."
        builder.button(text=short, callback_data=f"answer:{task_id}:{i}")
    builder.adjust(1)
    return builder.as_markup()


def after_answer_keyboard(has_next: bool = True):
    builder = InlineKeyboardBuilder()
    if has_next:
        builder.button(text="Следующее", callback_data="next_task")
    builder.button(text="Результаты", callback_data="finish_tasks")
    builder.button(text="Меню", callback_data="main_menu")
    builder.adjust(1)
    return builder.as_markup()


def subscription_keyboard():
    builder = InlineKeyboardBuilder()
    for months, stars in STAR_PRICES.items():
        price_rub = {1: 199, 3: 399, 6: 699, 12: 1199}
        builder.button(
            text=f"{PRICE_LABELS[months]} — {stars} звезд | {price_rub[months]} руб/мес",
            callback_data=f"subscribe:{months}"
        )
    builder.button(text="Назад", callback_data="show_profile")
    builder.adjust(1)
    return builder.as_markup()


def confirm_subscription_keyboard(months: int, stars: int):
    builder = InlineKeyboardBuilder()
    builder.button(
        text=f"Оплатить {stars} звезд",
        callback_data=f"confirm_payment:{months}:{stars}"
    )
    builder.button(text="Другой тариф", callback_data="show_subscription")
    builder.button(text="Меню", callback_data="main_menu")
    builder.adjust(1)
    return builder.as_markup()


def reminder_keyboard(current_time: str):
    builder = InlineKeyboardBuilder()
    for t in REMINDER_TIMES:
        marker = " (сейчас)" if t == current_time else ""
        builder.button(text=f"{t}{marker}", callback_data=f"set_reminder:{t}")
    builder.button(text="Выключить", callback_data="disable_reminder")
    builder.button(text="Назад", callback_data="show_profile")
    builder.adjust(2)
    return builder.as_markup()


def profile_keyboard(has_sub: bool = False):
    builder = InlineKeyboardBuilder()
    if not has_sub:
        builder.button(text="Подписка", callback_data="show_subscription")
    else:
        builder.button(text="Продлить", callback_data="show_subscription")
    builder.button(text="Напоминания", callback_data="show_reminder")
    builder.button(text="Сменить предмет", callback_data="change_subject")
    builder.button(text="Меню", callback_data="main_menu")
    builder.adjust(1)
    return builder.as_markup()


def stats_keyboard():
    builder = InlineKeyboardBuilder()
    builder.button(text="По темам", callback_data="stats_by_topic")
    builder.button(text="По предметам", callback_data="stats_by_subject")
    builder.button(text="Назад", callback_data="main_menu")
    builder.adjust(1)
    return builder.as_markup()
