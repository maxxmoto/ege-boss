import os

BOT_TOKEN = os.getenv("BOT_TOKEN", "ВАШ_ТОКЕН_БОТА")
DATABASE_PATH = "data/bot.db"
ADMIN_IDS = [903104535]

SUBJECTS = {
    "math": "Математика (профиль)",
    "russian": "Русский язык",
    "physics": "Физика",
    "chemistry": "Химия",
    "english": "Английский язык",
    "biology": "Биология",
    "history": "История",
    "society": "Обществознание",
    "informatics": "Информатика",
}

STAR_PRICES = {
    1: 50,
    3: 130,
    6: 240,
    12: 450,
}

PRICE_LABELS = {
    1: "1 месяц",
    3: "3 месяца",
    6: "6 месяцев",
    12: "12 месяцев",
}

DAILY_TASK_COUNT = 5
REMINDER_TIMES = ["09:00", "12:00", "15:00", "18:00", "20:00"]
DEFAULT_REMINDER = "12:00"
