import os
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN", "8938481505:AAEsNm-9IEeeBQRbQeGMfXt9mK-TepDQUP0")
DATABASE_PATH = "data/bot.db"
ADMIN_IDS = [903104535]

SUBJECTS = {
    "math": "\U0001f4d0 Математика (профиль)",
    "russian": "\U0001f4d6 Русский язык",
    "physics": "\u26a1 Физика",
    "chemistry": "\U0001f9ea Химия",
    "english": "\U0001f30d Английский язык",
    "biology": "\U0001f33f Биология",
    "history": "\U0001f4dc История",
    "society": "\U0001f465 Обществознание",
    "informatics": "\U0001f4bb Информатика",
}

SUBJECTS_CLEAN = {
    "math": "Математике", "russian": "Русскому языку",
    "physics": "Физике", "chemistry": "Химии",
    "english": "Английскому", "biology": "Биологии",
    "history": "Истории", "society": "Обществознанию",
    "informatics": "Информатике",
}

SUBJECT_DATIVE = SUBJECTS_CLEAN

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

SUBSCRIPTION_INFO = (
    "\U0001f680 <b>Что даёт подписка?</b>\n\n"
    "\U0001f4dd <b>5 заданий каждый день</b> — актуальные задания ЕГЭ 2026\n"
    "\U0001f4ca <b>Статистика ошибок</b> — слабые темы под микроскопом\n"
    "\U0001f5b2 <b>PDF с вариантом</b> — персональная подборка ваших ошибок\n"
    "\U0001f514 <b>Напоминания</b> — не пропустите занятие\n"
    "\U0001f4f0 <b>Все предметы</b> — математика, русский, физика и другие\n\n"
    "\u2601\ufe0f Данные хранятся в облаке — не потеряются\n"
    "\U0001f504 Задания обновляются каждый день\n\n"
    "\U0001f48e <b>Выберите тариф:</b>"
)
