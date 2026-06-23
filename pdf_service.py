import os
import logging
from datetime import date
from pathlib import Path

FONTS_DIR = Path(__file__).parent / "fonts"
FONT_PATH = FONTS_DIR / "DejaVuSans.ttf"

logger = logging.getLogger(__name__)

_FONT_CANDIDATES = [
    str(FONT_PATH),
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    "/usr/share/fonts/liberation/LiberationSans-Regular.ttf",
    "/usr/share/fonts/truetype/msttcorefonts/Arial.ttf",
    "C:/Windows/Fonts/arial.ttf",
    "C:/Windows/Fonts/segoeui.ttf",
]


def _find_font() -> str:
    for path in _FONT_CANDIDATES:
        if os.path.exists(path):
            logger.info(f"PDF font found: {path}")
            return path
    return ""


def _download_font() -> bool:
    urls = [
        "https://raw.githubusercontent.com/dejavu-fonts/dejavu-fonts/master/ttf/DejaVuSans.ttf",
        "https://cdn.jsdelivr.net/gh/dejavu-fonts/dejavu-fonts@master/ttf/DejaVuSans.ttf",
        "https://github.com/dejavu-fonts/dejavu-fonts/raw/master/ttf/DejaVuSans.ttf",
    ]
    for url in urls:
        try:
            import urllib.request
            FONTS_DIR.mkdir(parents=True, exist_ok=True)
            logger.info(f"Downloading font from {url[:50]}...")
            urllib.request.urlretrieve(url, str(FONT_PATH))
            size = os.path.getsize(str(FONT_PATH))
            if size > 100000:
                logger.info(f"Font downloaded OK ({size} bytes)")
                return True
        except Exception as e:
            logger.warning(f"Download from {url[:40]} failed: {e}")
    return False


def ensure_font() -> bool:
    found = _find_font()
    if found:
        return True
    return _download_font()


async def generate_pdf(user_id: int, subject_name: str, tasks: list) -> str:
    from fpdf import FPDF

    font_path = _find_font()
    if not font_path:
        font_path = str(FONT_PATH)
        if not os.path.exists(font_path):
            if not _download_font():
                raise RuntimeError(
                    "Не удалось загрузить шрифт для PDF. "
                    "Попробуйте позже или напишите в поддержку."
                )

    pdf = FPDF()
    pdf.add_font("UF", "", font_path, uni=True)
    pdf.alias_nb_pages()

    pdf.add_page()
    pdf.set_font("UF", "B", 22)
    pdf.cell(0, 15, "EGE-BOSS", 0, 1, "C")
    pdf.set_font("UF", "", 14)
    pdf.cell(0, 10, f"Предмет: {subject_name}", 0, 1, "C")
    pdf.cell(0, 10, f"Дата: {date.today().isoformat()}", 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("UF", "", 11)
    pdf.multi_cell(0, 7, "Инструкция: решите задания и проверьте ответы в конце файла.")
    pdf.ln(5)
    pdf.set_font("UF", "B", 11)
    pdf.cell(0, 7, f"Количество заданий: {len(tasks)}", 0, 1)
    pdf.ln(10)

    for i, task in enumerate(tasks, 1):
        pdf.add_page()
        pdf.set_font("UF", "B", 12)
        pdf.cell(0, 10, f"Задание {i}", 0, 1)
        pdf.set_font("UF", "", 11)
        pdf.multi_cell(0, 7, task["question"])
        pdf.ln(3)
        for j, opt in enumerate(task["options"]):
            pdf.multi_cell(0, 7, f"{chr(65+j)}) {opt}")
            pdf.ln(1)
        pdf.ln(5)

    pdf.add_page()
    pdf.set_font("UF", "B", 16)
    pdf.cell(0, 10, "Ответы", 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("UF", "", 12)
    for i, task in enumerate(tasks, 1):
        pdf.cell(0, 8, f"Задание {i}: {chr(65 + task['correct_answer'])}", 0, 1)

    pdf.ln(15)
    pdf.set_font("UF", "I", 10)
    pdf.multi_cell(0, 7, "Проверьте ответы в боте, чтобы получить статистику и рекомендации.")

    out = os.path.join(os.environ.get("DATA_DIR", str(FONTS_DIR.parent)), f"ege_{user_id}.pdf")
    pdf.output(out)
    return out
