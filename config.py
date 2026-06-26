import os
import base64
import logging

logger = logging.getLogger(__name__)

def _load_env_file(path: str) -> bool:
    """Load .env file, handling both plain text and Base64-encoded content."""
    if not os.path.exists(path):
        return False
    
    with open(path, "rb") as f:
        raw = f.read().strip()
    
    if not raw:
        return False
    
    text = ""
    
    # Try Base64 first (hosting file manager may encode files)
    try:
        decoded = base64.b64decode(raw).decode("utf-8").strip()
        if "=" in decoded and len(decoded) < 500:
            text = decoded
    except:
        pass
    
    # If not Base64, try as plain text
    if not text or "=" not in text:
        try:
            t = raw.decode("utf-8").strip()
            if "=" in t:
                text = t
        except:
            pass
    
    # Parse KEY=VALUE lines
    loaded = False
    for line in text.split("\n"):
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        if "=" in line:
            key, _, val = line.partition("=")
            key = key.strip()
            val = val.strip().strip("\"'")
            os.environ[key] = val
            loaded = True
    
    return loaded


# .env → .env.example → system env
_loaded = _load_env_file(".env")
if not _loaded:
    _loaded = _load_env_file(".env.example")
if not _loaded:
    logger.info("No .env file — using fallback")

# Fallback: Base64-encoded token for hosting (survives git clean clone)
_FALLBACK_TOKEN_B64 = "Qk9UX1RPS0VOID0gODkzODQ4MTUwNTpBQUhZYXJ3R2MzMWJrZnBqa1l1NE1yTzFlTmVMdWxGaXlDWQ=="
try:
    _fd = base64.b64decode(_FALLBACK_TOKEN_B64).decode("utf-8").strip()
    if "=" in _fd:
        _, _, _fv = _fd.partition("=")
        _fv = _fv.strip()
        if _fv and not os.getenv("BOT_TOKEN", ""):
            os.environ["BOT_TOKEN"] = _fv
except:
    pass

BOT_TOKEN = os.getenv("BOT_TOKEN", "")
if BOT_TOKEN:
    logger.info(f"BOT_TOKEN loaded (prefix: {BOT_TOKEN[:10]}...)")
else:
    logger.warning("BOT_TOKEN is empty!")
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

MAX_SUBJECTS = 3
FREE_TASK_COUNT = 1
DAILY_TASK_COUNT = 5
REMINDER_TIMES = ["09:00", "12:00", "15:00", "18:00", "20:00"]
DEFAULT_REMINDER = "12:00"

FREE_TEST_COUNT = 1
PRO_TEST_COUNT = 3
SPACED_REPEAT_LIMIT = 3

PRIVATE_CHAT_LINK = "https://t.me/+YYwNG0CcqwVhNGYy"

FREE_INFO = (
    "\U0001f9e0 <b>Бесплатный доступ</b>\n\n"
    "\u2705 1 задание в день\n"
    "\u2705 Базовая статистика\n"
    "\u2705 1 тест-режим в день с PDF\n"
    "\u274c Подробный разбор ошибок\n"
    "\u274c Статистика по темам\n"
    "\u274c PDF с персональным вариантом\n"
    "\u274c Напоминания\n"
    "\u274c Закрытый чат\n\n"
    "\U0001f48e Чтобы снять ограничения — оформи Pro"
)

SUBSCRIPTION_INFO = (
    "\U0001f680 <b>Pro подписка</b>\n\n"
    "\U0001f4dd <b>5 заданий каждый день</b> — вместо 1 в бесплатной\n"
    "\U0001f50d <b>Подробный разбор</b> — полное объяснение каждого задания\n"
    "\U0001f4ca <b>Полная статистика</b> — слабые темы под микроскопом\n"
    "\U0001f5b2 <b>PDF с вариантом</b> — персональная подборка ваших ошибок\n"
    "\U0001f514 <b>Напоминания</b> — не пропустите занятие\n"
    "\U0001f3af <b>Тест-режим</b> — 3 полных варианта в день\n"
    "\U0001f91d <b>Закрытый чат</b> — обсуждение с единомышленниками\n\n"
    "\u2601\ufe0f Данные в облаке\n"
    "\U0001f504 Задания обновляются каждый день\n"
    "\U0001f4a1 Приоритетная поддержка\n\n"
    f"\U0001f48e <b>Выберите тариф:</b>\n\n"
    f"\U0001f517 <a href='{PRIVATE_CHAT_LINK}'>Вступить в чат</a>"
)
