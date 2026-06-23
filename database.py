import aiosqlite
import logging
from datetime import datetime, date, timedelta
from functools import lru_cache
from typing import Optional, Dict, List, Any
from config import DATABASE_PATH, DAILY_TASK_COUNT

logger = logging.getLogger(__name__)


class Database:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._db = None
            cls._instance._user_cache: Dict[int, Dict] = {}
        return cls._instance

    async def connect(self):
        if self._db is None:
            self._db = await aiosqlite.connect(DATABASE_PATH)
            self._db.row_factory = aiosqlite.Row
            await self._db.execute("PRAGMA journal_mode=WAL")
            await self._db.execute("PRAGMA synchronous=NORMAL")
            await self._db.execute("PRAGMA cache_size=-8000")
            await self._db.execute("PRAGMA busy_timeout=5000")
            await self._create_tables()
        return self._db

    async def close(self):
        if self._db:
            await self._db.close()
            self._db = None
            self._user_cache.clear()

    async def _create_tables(self):
        await self._db.executescript("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                telegram_id INTEGER UNIQUE NOT NULL,
                username TEXT,
                first_name TEXT,
                last_name TEXT,
                selected_subject TEXT,
                subscription_end TEXT,
                reminder_time TEXT DEFAULT '12:00',
                reminder_enabled INTEGER DEFAULT 1,
                created_at TEXT DEFAULT (datetime('now')),
                updated_at TEXT DEFAULT (datetime('now'))
            );

            CREATE TABLE IF NOT EXISTS subjects (
                code TEXT PRIMARY KEY,
                name TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS tasks (
                id TEXT PRIMARY KEY,
                subject_code TEXT NOT NULL,
                question TEXT NOT NULL,
                options TEXT NOT NULL,
                correct_answer INTEGER NOT NULL,
                explanation TEXT DEFAULT '',
                topic TEXT DEFAULT '',
                difficulty INTEGER DEFAULT 1,
                year INTEGER DEFAULT 2026,
                FOREIGN KEY (subject_code) REFERENCES subjects(code)
            );

            CREATE TABLE IF NOT EXISTS user_tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                task_id TEXT NOT NULL,
                assigned_date TEXT NOT NULL,
                user_answer INTEGER,
                is_correct INTEGER,
                answered_at TEXT,
                FOREIGN KEY (user_id) REFERENCES users(id),
                FOREIGN KEY (task_id) REFERENCES tasks(id)
            );

            CREATE TABLE IF NOT EXISTS payments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                charge_id TEXT DEFAULT '',
                stars_amount INTEGER NOT NULL,
                months INTEGER NOT NULL,
                status TEXT DEFAULT 'completed',
                created_at TEXT DEFAULT (datetime('now')),
                FOREIGN KEY (user_id) REFERENCES users(id)
            );

            CREATE INDEX IF NOT EXISTS idx_user_tasks_user_date
                ON user_tasks(user_id, assigned_date);
            CREATE INDEX IF NOT EXISTS idx_user_tasks_user_correct
                ON user_tasks(user_id, is_correct);
            CREATE INDEX IF NOT EXISTS idx_tasks_subject
                ON tasks(subject_code, topic);
            CREATE INDEX IF NOT EXISTS idx_users_reminder
                ON users(reminder_time, reminder_enabled);
            CREATE INDEX IF NOT EXISTS idx_payments_user
                ON payments(user_id);
        """)
        await self._db.commit()

    # ── User cache ──────────────────────────────────

    def _invalidate_user(self, telegram_id: int):
        self._user_cache.pop(telegram_id, None)

    async def add_user(self, telegram_id: int, username: str = None,
                       first_name: str = None, last_name: str = None) -> Optional[int]:
        await self._db.execute(
            """INSERT OR IGNORE INTO users (telegram_id, username, first_name, last_name)
               VALUES (?, ?, ?, ?)""",
            (telegram_id, username, first_name, last_name)
        )
        await self._db.commit()
        cursor = await self._db.execute(
            "SELECT id FROM users WHERE telegram_id = ?", (telegram_id,)
        )
        row = await cursor.fetchone()
        user_id = row["id"] if row else None
        self._invalidate_user(telegram_id)
        return user_id

    async def get_user(self, telegram_id: int) -> Optional[Dict]:
        cached = self._user_cache.get(telegram_id)
        if cached:
            return cached
        cursor = await self._db.execute(
            "SELECT * FROM users WHERE telegram_id = ?", (telegram_id,)
        )
        row = await cursor.fetchone()
        if row:
            user = dict(row)
            self._user_cache[telegram_id] = user
            return user
        return None

    async def update_user(self, telegram_id: int, **kwargs):
        if not kwargs:
            return
        set_clause = ", ".join(f"{k} = ?" for k in kwargs)
        values = list(kwargs.values()) + [telegram_id]
        await self._db.execute(
            f"UPDATE users SET {set_clause}, updated_at = datetime('now') WHERE telegram_id = ?",
            values
        )
        await self._db.commit()
        self._invalidate_user(telegram_id)

    async def set_subject(self, telegram_id: int, subject_code: str):
        await self._db.execute(
            "UPDATE users SET selected_subject = ?, updated_at = datetime('now') WHERE telegram_id = ?",
            (subject_code, telegram_id)
        )
        await self._db.commit()
        self._invalidate_user(telegram_id)

    async def check_subscription(self, user_db_id: int) -> bool:
        cursor = await self._db.execute(
            "SELECT subscription_end FROM users WHERE id = ?", (user_db_id,)
        )
        row = await cursor.fetchone()
        if not row or not row["subscription_end"]:
            return False
        try:
            end_date = datetime.fromisoformat(row["subscription_end"])
            return end_date > datetime.now()
        except (ValueError, TypeError):
            return False

    # ── Tasks ───────────────────────────────────────

    @lru_cache(maxsize=256)
    def _parse_options(self, raw: str) -> List[str]:
        return raw.split("||")

    def _row_to_dict(self, row: aiosqlite.Row) -> Dict[str, Any]:
        d = dict(row)
        if "options" in d:
            d["options"] = self._parse_options(d["options"])
        return d

    async def seed_subjects(self):
        subjects = [
            ("math", "Математика (профиль)"), ("russian", "Русский язык"),
            ("physics", "Физика"), ("chemistry", "Химия"),
            ("english", "Английский язык"), ("biology", "Биология"),
            ("history", "История"), ("society", "Обществознание"),
            ("informatics", "Информатика"),
        ]
        await self._db.executemany(
            "INSERT OR IGNORE INTO subjects (code, name) VALUES (?, ?)", subjects
        )
        await self._db.commit()

    async def seed_tasks(self, tasks_dict: Dict[str, list]):
        for subject_code, tasks in tasks_dict.items():
            rows = []
            for task in tasks:
                rows.append((
                    task["id"], subject_code, task["q"],
                    "||".join(task["o"]), task["a"],
                    task.get("e", ""), task.get("t", ""),
                    task.get("d", 1), task.get("y", 2026),
                ))
            await self._db.executemany(
                """INSERT OR IGNORE INTO tasks
                   (id, subject_code, question, options, correct_answer, explanation, topic, difficulty, year)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
                rows
            )
        await self._db.commit()

    async def get_user_task(self, user_task_id: int) -> Optional[Dict]:
        cursor = await self._db.execute(
            """SELECT ut.*, t.question, t.options, t.correct_answer, t.explanation, t.topic, t.subject_code
               FROM user_tasks ut JOIN tasks t ON ut.task_id = t.id
               WHERE ut.id = ?""",
            (user_task_id,)
        )
        row = await cursor.fetchone()
        return self._row_to_dict(row) if row else None

    async def get_next_unanswered(self, user_db_id: int, after_id: int = 0) -> Optional[Dict]:
        today = date.today().isoformat()
        cursor = await self._db.execute(
            """SELECT ut.*, t.question, t.options, t.correct_answer, t.explanation, t.topic, t.subject_code
               FROM user_tasks ut JOIN tasks t ON ut.task_id = t.id
               WHERE ut.user_id = ? AND ut.assigned_date = ?
                 AND ut.is_correct IS NULL AND ut.id > ?
               ORDER BY ut.id LIMIT 1""",
            (user_db_id, today, after_id)
        )
        row = await cursor.fetchone()
        return self._row_to_dict(row) if row else None

    async def assign_daily_tasks(self, user_db_id: int, subject_code: str) -> List[Dict]:
        today = date.today().isoformat()

        cursor = await self._db.execute(
            "SELECT task_id FROM user_tasks WHERE user_id = ? AND assigned_date = ?",
            (user_db_id, today)
        )
        assigned_today = {row["task_id"] for row in await cursor.fetchall()}

        cursor = await self._db.execute(
            """SELECT * FROM tasks WHERE subject_code = ? AND id NOT IN (
                   SELECT task_id FROM user_tasks WHERE user_id = ? AND assigned_date = ?
               ) ORDER BY RANDOM() LIMIT ?""",
            (subject_code, user_db_id, today, DAILY_TASK_COUNT)
        )
        tasks = [dict(row) for row in await cursor.fetchall()]

        if len(tasks) < DAILY_TASK_COUNT:
            cursor = await self._db.execute(
                "SELECT * FROM tasks WHERE subject_code = ? ORDER BY RANDOM() LIMIT ?",
                (subject_code, DAILY_TASK_COUNT - len(tasks))
            )
            tasks.extend([dict(row) for row in await cursor.fetchall()])

        inserts = [(user_db_id, t["id"], today) for t in tasks]
        await self._db.executemany(
            "INSERT INTO user_tasks (user_id, task_id, assigned_date) VALUES (?, ?, ?)",
            inserts
        )
        await self._db.commit()

        for task in tasks:
            task["options"] = task["options"].split("||")
        return tasks

    async def get_today_tasks(self, user_db_id: int) -> List[Dict]:
        today = date.today().isoformat()
        cursor = await self._db.execute(
            """SELECT ut.*, t.question, t.options, t.correct_answer, t.explanation, t.topic, t.subject_code
               FROM user_tasks ut JOIN tasks t ON ut.task_id = t.id
               WHERE ut.user_id = ? AND ut.assigned_date = ?
               ORDER BY ut.id""",
            (user_db_id, today)
        )
        return [self._row_to_dict(row) for row in await cursor.fetchall()]

    async def answer_task(self, user_task_id: int, user_answer: int, is_correct: bool):
        await self._db.execute(
            """UPDATE user_tasks
               SET user_answer = ?, is_correct = ?, answered_at = datetime('now')
               WHERE id = ?""",
            (user_answer, int(is_correct), user_task_id)
        )
        await self._db.commit()

    async def get_today_summary(self, user_db_id: int) -> Dict[str, int]:
        today = date.today().isoformat()
        cursor = await self._db.execute(
            """SELECT COUNT(*) as total,
                      SUM(CASE WHEN is_correct IS NOT NULL THEN 1 ELSE 0 END) as answered,
                      SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct
               FROM user_tasks
               WHERE user_id = ? AND assigned_date = ?""",
            (user_db_id, today)
        )
        row = await cursor.fetchone()
        d = dict(row)
        return {
            "total": d["total"] or 0,
            "answered": d["answered"] or 0,
            "correct": d["correct"] or 0,
        }

    # ── Stats ────────────────────────────────────────

    async def get_stats(self, user_db_id: int) -> Dict:
        cursor = await self._db.execute(
            """SELECT COUNT(*) as total,
                      SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct,
                      SUM(CASE WHEN is_correct = 0 THEN 1 ELSE 0 END) as wrong,
                      SUM(CASE WHEN is_correct IS NULL THEN 1 ELSE 0 END) as unanswered
               FROM user_tasks WHERE user_id = ?""",
            (user_db_id,)
        )
        row = await cursor.fetchone()
        stats = dict(row) if row else {"total": 0, "correct": 0, "wrong": 0, "unanswered": 0}

        cursor = await self._db.execute(
            """SELECT s.name, COUNT(*) as total,
                      SUM(CASE WHEN ut.is_correct = 1 THEN 1 ELSE 0 END) as correct
               FROM user_tasks ut
               JOIN tasks t ON ut.task_id = t.id
               JOIN subjects s ON t.subject_code = s.code
               WHERE ut.user_id = ?
               GROUP BY s.name""",
            (user_db_id,)
        )
        by_subject = {}
        for row in await cursor.fetchall():
            d = dict(row)
            by_subject[d["name"]] = {"total": d["total"], "correct": d["correct"] or 0}
        stats["by_subject"] = by_subject

        cursor = await self._db.execute(
            """SELECT t.topic, COUNT(*) as total,
                      SUM(CASE WHEN ut.is_correct = 0 THEN 1 ELSE 0 END) as errors
               FROM user_tasks ut
               JOIN tasks t ON ut.task_id = t.id
               WHERE ut.user_id = ? AND t.topic != ''
               GROUP BY t.topic
               ORDER BY errors DESC""",
            (user_db_id,)
        )
        by_topic = {}
        for row in await cursor.fetchall():
            d = dict(row)
            by_topic[d["topic"]] = {"total": d["total"], "errors": d["errors"] or 0}
        stats["by_topic"] = by_topic
        return stats

    async def get_topic_errors(self, user_db_id: int, subject_code: str) -> List[Dict]:
        cursor = await self._db.execute(
            """SELECT t.topic, COUNT(*) as total,
                      SUM(CASE WHEN ut.is_correct = 0 THEN 1 ELSE 0 END) as errors
               FROM user_tasks ut
               JOIN tasks t ON ut.task_id = t.id
               WHERE ut.user_id = ? AND t.subject_code = ? AND ut.is_correct IS NOT NULL
               GROUP BY t.topic
               HAVING errors > 0
               ORDER BY errors DESC""",
            (user_db_id, subject_code)
        )
        return [dict(row) for row in await cursor.fetchall()]

    async def get_tasks_by_topics(self, subject_code: str, topics: List[str], limit: int = 5) -> List[Dict]:
        placeholders = ",".join("?" for _ in topics)
        cursor = await self._db.execute(
            f"""SELECT * FROM tasks
                WHERE subject_code = ? AND topic IN ({placeholders})
                ORDER BY RANDOM() LIMIT ?""",
            (subject_code, *topics, limit)
        )
        tasks = [dict(row) for row in await cursor.fetchall()]
        for task in tasks:
            task["options"] = task["options"].split("||")
        return tasks

    # ── Payments ─────────────────────────────────────

    async def add_payment(self, user_db_id: int, charge_id: str, stars: int, months: int):
        await self._db.execute(
            "INSERT INTO payments (user_id, charge_id, stars_amount, months) VALUES (?, ?, ?, ?)",
            (user_db_id, charge_id, stars, months)
        )
        cursor = await self._db.execute(
            "SELECT subscription_end FROM users WHERE id = ?", (user_db_id,)
        )
        row = await cursor.fetchone()
        current = row["subscription_end"] if row and row["subscription_end"] else None

        try:
            end = datetime.fromisoformat(current) if current else datetime.now()
        except (ValueError, TypeError):
            end = datetime.now()
        if end < datetime.now():
            end = datetime.now()

        new_end = end + timedelta(days=30 * months)
        await self._db.execute(
            "UPDATE users SET subscription_end = ? WHERE id = ?",
            (new_end.isoformat(), user_db_id)
        )
        await self._db.commit()

    async def get_users_by_reminder(self, time_str: str) -> List[Dict]:
        cursor = await self._db.execute(
            """SELECT * FROM users
               WHERE reminder_time = ? AND reminder_enabled = 1
               AND subscription_end IS NOT NULL
               AND datetime(subscription_end) > datetime('now')""",
            (time_str,)
        )
        return [dict(row) for row in await cursor.fetchall()]


db = Database()
