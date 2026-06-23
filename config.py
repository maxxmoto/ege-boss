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
    1: 1,
    3: 3,
    6: 6,
    12: 10,
}

PRICE_LABELS = {
    1: "1 месяц",
    3: "3 месяца",
    6: "6 месяцев",
    12: "12 месяцев",
}

FREE_TASK_COUNT = 1
DAILY_TASK_COUNT = 5
REMINDER_TIMES = ["09:00", "12:00", "15:00", "18:00", "20:00"]
DEFAULT_REMINDER = "12:00"

FREE_INFO = (
    "\U0001f9e0 <b>Бесплатный доступ</b>\n\n"
    "\u2705 1 задание в день\n"
    "\u2705 Базовая статистика\n"
    "\u274c Подробная статистика по темам\n"
    "\u274c PDF с персональным вариантом\n"
    "\u274c Напоминания\n"
    "\u274c Приоритетная поддержка\n\n"
    "\U0001f48e Чтобы снять ограничения — оформи Pro"
)

SUBSCRIPTION_INFO = (
    "\U0001f680 <b>Pro подписка</b>\n\n"
    "\U0001f4dd <b>5 заданий каждый день</b> — вместо 1 в бесплатной версии\n"
    "\U0001f4ca <b>Полная статистика</b> — слабые темы под микроскопом\n"
    "\U0001f5b2 <b>PDF с вариантом</b> — персональная подборка ваших ошибок\n"
    "\U0001f514 <b>Напоминания</b> — не пропустите занятие\n"
    "\U0001f4f0 <b>Все предметы</b> — без ограничений\n\n"
    "\u2601\ufe0f Данные в облаке\n"
    "\U0001f504 Задания обновляются каждый день\n"
    "\U0001f4a1 Приоритетная поддержка\n\n"
    "\U0001f48e <b>Выберите тариф:</b>"
)
