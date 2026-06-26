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


async def generate_topic_pdf(user_id: int, subject_name: str, topic: str, tasks: list) -> str:
    """Generate topic-based PDF: framed tasks with grid fields, 2 per page, answers at end."""
    from fpdf import FPDF

    font_path = _find_system_font()
    if not font_path:
        if not _download_font():
            raise RuntimeError("Не удалось загрузить шрифт для PDF.")
        font_path = str(FONT_PATH)

    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.add_font("UF", "", font_path, uni=True)
    l_margin = 20
    usable_w = 170

    # Cover
    pdf.add_page()
    pdf.set_font("UF", "", 22)
    pdf.ln(20)
    pdf.cell(0, 15, "ЕГЭ 2027", 0, 1, "C")
    pdf.set_font("UF", "", 16)
    pdf.cell(0, 10, subject_name, 0, 1, "C")
    pdf.cell(0, 10, f"Тема: {topic}", 0, 1, "C")
    pdf.set_font("UF", "", 12)
    pdf.cell(0, 8, f"Количество заданий: {len(tasks)}", 0, 1, "C")
    pdf.cell(0, 8, f"Дата: {date.today().isoformat()}", 0, 1, "C")

    # Tasks: 2 per page, framed + grid field
    for i in range(0, len(tasks), 2):
        pdf.add_page()
        for j in range(2):
            if i + j >= len(tasks):
                break
            task = tasks[i + j]
            num = i + j + 1
            y0 = 15 + j * 140

            # Task frame
            _frame(pdf, l_margin, y0, usable_w, 50)
            pdf.set_xy(l_margin + 3, y0 + 3)
            pdf.set_font("UF", "", 11)
            pdf.multi_cell(usable_w - 6, 5.5, f"{num}. {task['question']}")

            # Options
            oy = pdf.get_y() + 2
            pdf.set_font("UF", "", 10)
            for k, opt in enumerate(task["options"]):
                pdf.set_xy(l_margin + 5, oy + k * 5)
                pdf.cell(usable_w - 10, 5, f"{chr(65+k)}) {opt}")

            # Grid field
            gy = y0 + 53
            _grid(pdf, l_margin, gy, usable_w, 82, step=5)
            pdf.set_font("UF", "", 8)
            pdf.set_xy(l_margin + usable_w - 12, gy + 82 - 4)
            pdf.cell(10, 4, f"N{num}", 0, 0, "R")

    # Answers
    pdf.add_page()
    pdf.set_font("UF", "", 18)
    pdf.cell(0, 15, "ОТВЕТЫ", 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("UF", "", 12)
    for i, task in enumerate(tasks, 1):
        pdf.cell(0, 9, f"{i}. {chr(65 + task['correct_answer'])}", 0, 1)

    out = os.path.join(os.environ.get("DATA_DIR", str(FONTS_DIR.parent)), f"topic_{user_id}.pdf")
    pdf.output(out)
    return out


async def generate_kim_pdf(user_id: int, subject_name: str, tasks: list) -> str:
    """Full KIM-format EGE variant: instruction, tasks, answer sheets, draft, answers."""
    from fpdf import FPDF

    font_path = _find_system_font()
    if not font_path:
        if not _download_font():
            raise RuntimeError("Не удалось загрузить шрифт для PDF.")
        font_path = str(FONT_PATH)

    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.add_font("UF", "", font_path, uni=True)
    l_margin = 20
    usable_w = 170

    # ── Title page ──
    pdf.add_page()
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
    pdf.multi_cell(usable_w, 6,
        "ИНСТРУКЦИЯ ПО ВЫПОЛНЕНИЮ РАБОТЫ\n\n"
        f"Экзаменационная работа состоит из {len(tasks)} заданий.\n"
        "На выполнение отводится 3 часа 55 минут (235 минут).\n\n"
        "Ответы записываются в бланки ответов N 1 и N 2.\n"
        "Все бланки заполняются яркими чёрными чернилами.\n"
        "Допускается использование гелевой или капиллярной ручки.\n\n"
        "Желаем успеха!"
    )
    pdf.ln(5)
    pdf.set_font("UF", "", 10)
    pdf.multi_cell(usable_w, 5,
        "Фамилия _______________  Имя _______________  Отчество _______________\n"
        f"Предмет: {subject_name}      Номер варианта: 1"
    )

    # ── Tasks (2/page, framed + grid) ──
    for i in range(0, len(tasks), 2):
        pdf.add_page()
        for j in range(2):
            if i + j >= len(tasks):
                break
            task = tasks[i + j]
            num = i + j + 1
            y0 = 15 + j * 140

            # Check if short-answer (empty options)
            opts = task.get("options", [])
            is_short = not opts or (len(opts) == 1 and opts[0] == "")

            # Task frame — adjust height based on content
            frame_h = 50 if not is_short else 45
            _frame(pdf, l_margin, y0, usable_w, frame_h)
            pdf.set_xy(l_margin + 3, y0 + 3)
            pdf.set_font("UF", "", 11)
            pdf.multi_cell(usable_w - 6, 5.5, f"{num}. {task['question']}")

            if not is_short:
                oy = pdf.get_y() + 2
                pdf.set_font("UF", "", 10)
                for k, opt in enumerate(opts):
                    if opt:
                        pdf.set_xy(l_margin + 5, oy + k * 5)
                        pdf.cell(usable_w - 10, 5, f"{chr(65+k)}) {opt}")
            else:
                pdf.set_xy(l_margin + 5, pdf.get_y() + 3)
                pdf.set_font("UF", "", 9)
                pdf.cell(usable_w - 10, 5, "[Короткий ответ]")

            # Grid field below task
            gy = y0 + frame_h + 3
            _grid(pdf, l_margin, gy, usable_w, 72, step=5)
            pdf.set_font("UF", "", 8)
            pdf.set_xy(l_margin + usable_w - 12, gy + 72 - 4)
            pdf.cell(10, 4, f"N{num}", 0, 0, "R")

    # ── Answer Sheet 1 ──
    pdf.add_page()
    pdf.set_font("UF", "", 16)
    pdf.cell(0, 12, "БЛАНК ОТВЕТОВ N 1", 0, 1, "C")
    pdf.ln(3)
    pdf.set_font("UF", "", 9)
    pdf.multi_cell(usable_w, 5,
        "Фамилия _______________  Имя _______________  Отчество _______________"
    )
    pdf.cell(0, 5, f"Предмет: {subject_name}      Номер варианта: 1", 0, 1)
    pdf.ln(5)
    pdf.set_font("UF", "", 10)
    cols = 4
    cw = 40
    rows_count = (len(tasks) + cols - 1) // cols
    for r in range(rows_count):
        y = pdf.get_y()
        for c in range(cols):
            idx = r * cols + c
            if idx >= len(tasks):
                break
            x = l_margin + c * (cw + 2)
            _frame(pdf, x, y, cw, 10)
            pdf.set_xy(x + 2, y + 1)
            pdf.cell(cw - 4, 8, f"{idx+1}. ___", 0, 0)
        pdf.ln(12)

    # ── Answer Sheet 2 (2 pages) ──
    for _ in range(2):
        pdf.add_page()
        pdf.set_font("UF", "", 16)
        pdf.cell(0, 12, "БЛАНК ОТВЕТОВ N 2", 0, 1, "C")
        pdf.ln(3)
        pdf.set_font("UF", "", 9)
        pdf.multi_cell(usable_w, 5,
            "Фамилия _______________  Имя _______________  Отчество _______________"
        )
        _grid(pdf, l_margin, pdf.get_y(), usable_w, 245, step=5)

    # ── Draft ──
    pdf.add_page()
    pdf.set_font("UF", "", 16)
    pdf.cell(0, 12, "ЧЕРНОВИК", 0, 1, "C")
    _grid(pdf, l_margin, pdf.get_y() + 3, usable_w, 260, step=5)

    # ── Answers ──
    pdf.add_page()
    pdf.set_font("UF", "", 18)
    pdf.cell(0, 15, "ОТВЕТЫ", 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("UF", "", 12)
    for i, task in enumerate(tasks, 1):
        opts = task.get("options", [])
        is_short = not opts or (len(opts) == 1 and opts[0] == "")
        if is_short:
            pdf.cell(0, 9, f"{i}. {task['correct_answer']}", 0, 1)
        else:
            pdf.cell(0, 9, f"{i}. {chr(65 + task['correct_answer'])}", 0, 1)

    out = os.path.join(os.environ.get("DATA_DIR", str(FONTS_DIR.parent)), f"kim_{user_id}.pdf")
    pdf.output(out)
    return out
