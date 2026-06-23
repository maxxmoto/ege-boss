from aiogram.utils.keyboard import InlineKeyboardBuilder
from config import SUBJECTS, STAR_PRICES, PRICE_LABELS, REMINDER_TIMES


def main_menu():
    builder = InlineKeyboardBuilder()
    builder.button(text="Задания на сегодня", callback_data="today_tasks")
    builder.button(text="Статистика", callback_data="show_stats")
    builder.button(text="Профиль", callback_data="show_profile")
    builder.button(text="Сгенерировать PDF", callback_data="generate_pdf")
    builder.button(text="Помощь", callback_data="show_help")
    builder.adjust(1)
    return builder.as_markup()


def subject_selection():
    builder = InlineKeyboardBuilder()
    for code, name in SUBJECTS.items():
        builder.button(text=name, callback_data=f"select_subject:{code}")
    builder.adjust(2)
    return builder.as_markup()


def task_answer_keyboard(task_id: str, options: list):
    builder = InlineKeyboardBuilder()
    for i, opt in enumerate(options):
        short = opt if len(opt) <= 40 else opt[:37] + "..."
        builder.button(text=short, callback_data=f"answer:{task_id}:{i}")
    builder.adjust(1)
    return builder.as_markup()


def after_answer_keyboard(has_next: bool = True):
    builder = InlineKeyboardBuilder()
    if has_next:
        builder.button(text="Следующее задание", callback_data="next_task")
    builder.button(text="Завершить", callback_data="finish_tasks")
    builder.button(text="Главное меню", callback_data="main_menu")
    builder.adjust(1)
    return builder.as_markup()


def subscription_keyboard():
    builder = InlineKeyboardBuilder()
    for months, stars in STAR_PRICES.items():
        builder.button(
            text=f"{PRICE_LABELS[months]} - {stars} звезд",
            callback_data=f"subscribe:{months}"
        )
    builder.button(text="Главное меню", callback_data="main_menu")
    builder.adjust(1)
    return builder.as_markup()


def reminder_keyboard(current_time: str):
    builder = InlineKeyboardBuilder()
    for t in REMINDER_TIMES:
        marker = " [Вкл]" if t == current_time else ""
        builder.button(text=f"{t}{marker}", callback_data=f"set_reminder:{t}")
    builder.button(text="Отключить напоминания", callback_data="disable_reminder")
    builder.button(text="Главное меню", callback_data="main_menu")
    builder.adjust(2)
    return builder.as_markup()


def profile_keyboard():
    builder = InlineKeyboardBuilder()
    builder.button(text="Подписка", callback_data="show_subscription")
    builder.button(text="Напоминания", callback_data="show_reminder")
    builder.button(text="Сменить предмет", callback_data="change_subject")
    builder.button(text="Главное меню", callback_data="main_menu")
    builder.adjust(1)
    return builder.as_markup()


def stats_keyboard():
    builder = InlineKeyboardBuilder()
    builder.button(text="По темам", callback_data="stats_by_topic")
    builder.button(text="По предметам", callback_data="stats_by_subject")
    builder.button(text="Главное меню", callback_data="main_menu")
    builder.adjust(1)
    return builder.as_markup()


def confirm_subscription_keyboard(months: int, stars: int):
    builder = InlineKeyboardBuilder()
    builder.button(
        text=f"Оплатить {stars} звезд",
        callback_data=f"confirm_payment:{months}:{stars}"
    )
    builder.button(text="Назад", callback_data="show_subscription")
    builder.adjust(1)
    return builder.as_markup()
