import os
import logging
from datetime import date
from pathlib import Path

FONTS_DIR = Path(__file__).parent / "fonts"
FONT_PATH = FONTS_DIR / "DejaVuSans.ttf"
FONT_FALLBACK = FONTS_DIR / "arial.ttf"

logger = logging.getLogger(__name__)


def get_font_path() -> str:
    if FONT_PATH.exists():
        return str(FONT_PATH)
    if FONT_FALLBACK.exists():
        return str(FONT_FALLBACK)
    return ""


def ensure_font():
    if FONT_PATH.exists():
        return True
    if FONT_FALLBACK.exists():
        return True
    try:
        import urllib.request
        FONTS_DIR.mkdir(parents=True, exist_ok=True)
        url = "https://raw.githubusercontent.com/dejavu-fonts/dejavu-fonts/master/ttf/DejaVuSans.ttf"
        urllib.request.urlretrieve(url, str(FONT_PATH))
        logger.info("DejaVuSans font downloaded")
        return True
    except Exception as e:
        logger.warning(f"Cannot download DejaVu font: {e}")
        return False


async def generate_pdf(user_id: int, subject_name: str, tasks: list) -> str:
    from fpdf import FPDF

    font_path = get_font_path()
    if not font_path:
        raise RuntimeError(
            "Нет шрифта для PDF. Установи DejaVuSans.ttf в папку fonts/"
        )

    pdf = FPDF()
    pdf.add_font("UserFont", "", font_path, uni=True)
    pdf.alias_nb_pages()

    pdf.add_page()
    pdf.set_font("UserFont", "B", 22)
    pdf.cell(0, 15, "EGE-BOSS", 0, 1, "C")
    pdf.set_font("UserFont", "", 14)
    pdf.cell(0, 10, f"Предмет: {subject_name}", 0, 1, "C")
    pdf.cell(0, 10, f"Дата: {date.today().isoformat()}", 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("UserFont", "", 11)
    pdf.multi_cell(0, 7,
        "Инструкция: решите задания и проверьте ответы в конце файла."
    )
    pdf.ln(5)
    pdf.set_font("UserFont", "B", 11)
    pdf.cell(0, 7, f"Количество заданий: {len(tasks)}", 0, 1)
    pdf.ln(10)

    for i, task in enumerate(tasks, 1):
        pdf.add_page()
        pdf.set_font("UserFont", "B", 12)
        pdf.cell(0, 10, f"Задание {i}", 0, 1)
        pdf.set_font("UserFont", "", 11)
        pdf.multi_cell(0, 7, task["question"])
        pdf.ln(3)
        for j, opt in enumerate(task["options"]):
            pdf.multi_cell(0, 7, f"{chr(65+j)}) {opt}")
            pdf.ln(1)
        pdf.ln(5)

    pdf.add_page()
    pdf.set_font("UserFont", "B", 16)
    pdf.cell(0, 10, "Ответы", 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("UserFont", "", 12)
    for i, task in enumerate(tasks, 1):
        pdf.cell(0, 8, f"Задание {i}: {chr(65 + task['correct_answer'])}", 0, 1)

    pdf.ln(15)
    pdf.set_font("UserFont", "I", 10)
    pdf.multi_cell(0, 7,
        "Проверьте ответы в боте, чтобы получить статистику и рекомендации."
    )

    out = os.path.join(os.environ.get("DATA_DIR", os.path.dirname(__file__)), f"ege_{user_id}.pdf")
    pdf.output(out)
    return out
