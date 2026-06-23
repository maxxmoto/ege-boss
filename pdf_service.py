import os
import io
import tarfile
import logging
from datetime import date
from pathlib import Path

FONTS_DIR = Path(__file__).parent / "fonts"
FONT_PATH = FONTS_DIR / "DejaVuSans.ttf"

logger = logging.getLogger(__name__)


def _find_system_font() -> str:
    candidates = [
        str(FONT_PATH),
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        "C:/Windows/Fonts/arial.ttf",
    ]
    for p in candidates:
        if os.path.exists(p):
            return p
    return ""


def _download_font() -> bool:
    urls = [
        (
            "https://mirrors.kernel.org/debian/pool/main/f/fonts-dejavu/"
            "fonts-dejavu-core_2.37-8_all.deb",
            "deb"
        ),
        (
            "https://raw.githubusercontent.com/dejavu-fonts/dejavu-fonts/"
            "master/ttf/DejaVuSans.ttf",
            "ttf"
        ),
    ]
    for url, fmt in urls:
        try:
            import urllib.request, ssl
            ssl_ctx = ssl.create_default_context()
            ssl_ctx.check_hostname = False
            ssl_ctx.verify_mode = ssl.CERT_NONE
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            resp = urllib.request.urlopen(req, context=ssl_ctx, timeout=60)
            data = resp.read()
            if fmt == "ttf" and len(data) > 50000:
                FONTS_DIR.mkdir(parents=True, exist_ok=True)
                with open(str(FONT_PATH), "wb") as f:
                    f.write(data)
                return True
            if fmt == "deb" and len(data) > 100000:
                pos = 8 if data[:8] == b"!<arch>\n" else 0
                while pos < len(data):
                    if pos + 60 > len(data):
                        break
                    hdr = data[pos:pos+60].decode("ascii", errors="replace")
                    name = hdr[:16].strip()
                    try:
                        sz = int(hdr[48:58].strip())
                    except:
                        sz = 0
                    pos += 60
                    if not name or not sz:
                        break
                    content = data[pos:pos+sz]
                    pos += sz
                    if pos % 2:
                        pos += 1
                    if name.startswith("data.tar"):
                        tf = tarfile.open(fileobj=io.BytesIO(content))
                        for m in tf.getmembers():
                            if m.name.endswith("DejaVuSans.ttf"):
                                f = tf.extractfile(m)
                                if f:
                                    FONTS_DIR.mkdir(parents=True, exist_ok=True)
                                    with open(str(FONT_PATH), "wb") as out:
                                        out.write(f.read())
                                    return True
                        tf.close()
                        break
        except Exception:
            pass
    return False


def ensure_font() -> bool:
    return bool(_find_system_font()) or _download_font()


def _grid(pdf, x, y, w, h, step=5):
    """Draw checkered grid inside a rectangle."""
    pdf.set_draw_color(200, 200, 200)
    pdf.set_line_width(0.1)
    for xx in range(int(x), int(x + w), step):
        pdf.line(xx, y, xx, y + h)
    for yy in range(int(y), int(y + h), step):
        pdf.line(x, yy, x + w, yy)
    # Border
    pdf.set_draw_color(0, 0, 0)
    pdf.set_line_width(0.5)
    pdf.rect(x, y, w, h)


def _frame(pdf, x, y, w, h):
    """Draw a frame around a task."""
    pdf.set_draw_color(0, 0, 0)
    pdf.set_line_width(0.8)
    pdf.rect(x, y, w, h)


async def generate_kim_pdf(user_id: int, subject_name: str, tasks: list) -> str:
    """Generate KIM-format EGE PDF with framing, grid fields, answer sheets."""
    from fpdf import FPDF

    font_path = _find_system_font()
    if not font_path:
        if not _download_font():
            raise RuntimeError("Не удалось загрузить шрифт для PDF.")
        font_path = str(FONT_PATH)

    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.add_font("UF", "", font_path, uni=True)
    pdf.add_page()
    _, page_h = pdf.w, pdf.h
    l_margin = 20
    usable_w = 210 - 2 * l_margin  # ~170mm

    # ── Cover page ──
    pdf.set_font("UF", "", 24)
    pdf.ln(30)
    pdf.cell(0, 15, "ЕГЭ 2027", 0, 1, "C")
    pdf.set_font("UF", "", 18)
    pdf.cell(0, 12, subject_name, 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("UF", "", 12)
    pdf.cell(0, 8, "Тренировочный вариант", 0, 1, "C")
    pdf.cell(0, 8, f"Дата: {date.today().isoformat()}", 0, 1, "C")
    pdf.ln(15)
    pdf.set_font("UF", "", 10)
    instructions = (
        "ИНСТРУКЦИЯ ПО ВЫПОЛНЕНИЮ РАБОТЫ\n\n"
        "Экзаменационная работа состоит из двух частей, "
        f"включающих в себя {len(tasks)} заданий.\n"
        "На выполнение работы отводится 3 часа 55 минут (235 минут).\n\n"
        "Ответы к заданиям 1-? записываются в бланк ответов N 1.\n"
        "Ответы к заданиям ?-? записываются в бланк ответов N 2.\n\n"
        "Все бланки заполняются яркими чёрными чернилами.\n"
        "Допускается использование гелевой или капиллярной ручки.\n\n"
        "Желаем успеха!"
    )
    pdf.multi_cell(usable_w, 6, instructions)
    pdf.ln(10)
    pdf.set_font("UF", "", 10)
    pdf.multi_cell(usable_w, 5,
        "Заполните поля в бланках ответов:\n"
        "  - Фамилия\n  - Имя\n  - Отчество\n"
        "  - Номер варианта: 1\n  - Предмет: " + subject_name
    )

    # ── Tasks (2 per page, framed + grid) ──
    for i in range(0, len(tasks), 2):
        pdf.add_page()
        task_top = 15
        for j in range(2):
            if i + j >= len(tasks):
                break
            task = tasks[i + j]
            num = i + j + 1
            y_start = task_top + j * 135

            # Task frame
            _frame(pdf, l_margin, y_start, usable_w, 55)
            pdf.set_xy(l_margin + 2, y_start + 2)
            pdf.set_font("UF", "", 11)
            pdf.multi_cell(usable_w - 4, 5.5, f"{num}. {task['question']}")

            # Options
            opt_y = pdf.get_y() + 2
            pdf.set_font("UF", "", 10)
            for k, opt in enumerate(task["options"]):
                txt = f"{chr(65+k)}) {opt}"
                pdf.set_xy(l_margin + 5, opt_y + k * 5)
                pdf.cell(usable_w - 10, 5, txt)

            # Grid field below task
            grid_y = y_start + 58
            _grid(pdf, l_margin, grid_y, usable_w, 72, step=5)

            # Task number on the right side of grid
            pdf.set_font("UF", "", 8)
            pdf.set_xy(l_margin + usable_w - 15, grid_y + 72 - 4)
            pdf.cell(12, 4, f"N{num}", 0, 0, "R")

    # ── Answer Sheet 1 ──
    pdf.add_page()
    pdf.set_font("UF", "", 16)
    pdf.cell(0, 12, "БЛАНК ОТВЕТОВ N 1", 0, 1, "C")
    pdf.ln(5)
    pdf.set_font("UF", "", 9)
    pdf.multi_cell(usable_w, 5,
        "Фамилия _______________  Имя _______________  Отчество _______________"
    )
    pdf.ln(3)
    pdf.cell(0, 5, f"Предмет: {subject_name}      Номер варианта: 1", 0, 1)
    pdf.ln(5)

    # Table of answers
    col_w = 18
    cols = 4
    rows_count = (len(tasks) + cols - 1) // cols
    pdf.set_font("UF", "", 10)
    for r in range(rows_count):
        for c in range(cols):
            idx = r * cols + c
            if idx >= len(tasks):
                break
            x = l_margin + c * (col_w * 2 + 2)
            y = pdf.get_y()
            _frame(pdf, x, y, col_w * 2, 10)
            pdf.set_xy(x + 1, y + 1)
            pdf.cell(col_w * 2 - 2, 8, f"{idx+1}. ___", 0, 0, "L")
        pdf.ln(12)

    # ── Answer Sheet 2 (2 pages) ──
    for _ in range(2):
        pdf.add_page()
        pdf.set_font("UF", "", 16)
        pdf.cell(0, 12, "БЛАНК ОТВЕТОВ N 2", 0, 1, "C")
        pdf.ln(5)
        pdf.set_font("UF", "", 9)
        pdf.multi_cell(usable_w, 5,
            "Фамилия _______________  Имя _______________  Отчество _______________"
        )
        pdf.ln(3)
        _grid(pdf, l_margin, pdf.get_y(), usable_w, 240, step=5)

    # ── Draft ──
    pdf.add_page()
    pdf.set_font("UF", "", 16)
    pdf.cell(0, 12, "ЧЕРНОВИК", 0, 1, "C")
    pdf.ln(3)
    _grid(pdf, l_margin, pdf.get_y(), usable_w, 255, step=5)

    # ── Answer Key ──
    pdf.add_page()
    pdf.set_font("UF", "", 18)
    pdf.cell(0, 15, "ОТВЕТЫ", 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("UF", "", 12)
    for i, task in enumerate(tasks, 1):
        letter = chr(65 + task["correct_answer"])
        pdf.cell(0, 9, f"{i}. {letter}", 0, 1)

    pdf.ln(15)
    pdf.set_font("UF", "", 10)
    pdf.multi_cell(usable_w, 6,
        "Проверьте свои ответы в боте, чтобы получить "
        "персональную статистику и рекомендации."
    )

    out = os.path.join(os.environ.get("DATA_DIR", str(FONTS_DIR.parent)), f"ege_{user_id}.pdf")
    pdf.output(out)
    return out


# Keep old name for backward compat
generate_pdf = generate_kim_pdf
