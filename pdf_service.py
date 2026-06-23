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
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        "/usr/share/fonts/truetype/msttcorefonts/Arial.ttf",
        "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/segoeui.ttf",
    ]
    for p in candidates:
        if os.path.exists(p):
            logger.info(f"PDF font found: {p}")
            return p
    return ""


def _download_font() -> bool:
    """Download DejaVuSans.ttf from the Debian mirror (proven to work)."""
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
        (
            "https://cdn.jsdelivr.net/gh/dejavu-fonts/dejavu-fonts@master/"
            "ttf/DejaVuSans.ttf",
            "ttf"
        ),
    ]

    for url, fmt in urls:
        try:
            import urllib.request, ssl
            ssl_ctx = ssl.create_default_context()
            ssl_ctx.check_hostname = False
            ssl_ctx.verify_mode = ssl.CERT_NONE
            req = urllib.request.Request(
                url, headers={"User-Agent": "Mozilla/5.0 (X11; Linux x86_64)"}
            )
            logger.info(f"Downloading font from {url[:50]}...")
            resp = urllib.request.urlopen(req, context=ssl_ctx, timeout=60)
            data = resp.read()

            if fmt == "ttf" and len(data) > 50000:
                FONTS_DIR.mkdir(parents=True, exist_ok=True)
                with open(str(FONT_PATH), "wb") as f:
                    f.write(data)
                logger.info(f"Font saved directly ({len(data)} bytes)")
                return True

            if fmt == "deb" and len(data) > 100000:
                # Extract from .deb archive
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
                                    logger.info(f"Font extracted from deb ({os.path.getsize(str(FONT_PATH))} bytes)")
                                    return True
                        tf.close()
                        break
        except Exception as e:
            logger.warning(f"Font download from {url[:40]} failed: {type(e).__name__}")
    return False


def ensure_font() -> bool:
    if _find_system_font():
        return True
    return _download_font()


async def generate_pdf(user_id: int, subject_name: str, tasks: list) -> str:
    from fpdf import FPDF

    font_path = _find_system_font()
    if not font_path:
        if not _download_font():
            raise RuntimeError(
                "Не удалось загрузить шрифт для PDF. "
                "Попробуйте позже или напишите в поддержку."
            )
        font_path = str(FONT_PATH)

    pdf = FPDF()
    pdf.add_font("UF", "", font_path, uni=True)
    pdf.alias_nb_pages()

    pdf.add_page()
    pdf.set_font("UF", "", 22)
    pdf.cell(0, 15, "EGE-BOSS", 0, 1, "C")
    pdf.set_font("UF", "", 14)
    pdf.cell(0, 10, f"Предмет: {subject_name}", 0, 1, "C")
    pdf.cell(0, 10, f"Дата: {date.today().isoformat()}", 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("UF", "", 11)
    pdf.multi_cell(0, 7, "Инструкция: решите задания и проверьте ответы в конце файла.")
    pdf.ln(5)
    pdf.set_font("UF", "", 11)
    pdf.cell(0, 7, f"Количество заданий: {len(tasks)}", 0, 1)
    pdf.ln(10)

    for i, task in enumerate(tasks, 1):
        pdf.add_page()
        pdf.set_font("UF", "", 12)
        pdf.cell(0, 10, f"Задание {i}", 0, 1)
        pdf.set_font("UF", "", 11)
        pdf.multi_cell(0, 7, task["question"])
        pdf.ln(3)
        for j, opt in enumerate(task["options"]):
            pdf.multi_cell(0, 7, f"{chr(65+j)}) {opt}")
            pdf.ln(1)
        pdf.ln(5)

    pdf.add_page()
    pdf.set_font("UF", "", 16)
    pdf.cell(0, 10, "Ответы", 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("UF", "", 12)
    for i, task in enumerate(tasks, 1):
        pdf.cell(0, 8, f"Задание {i}: {chr(65 + task['correct_answer'])}", 0, 1)

    pdf.ln(15)
    pdf.set_font("UF", "", 10)
    pdf.multi_cell(0, 7, "Проверьте ответы в боте, чтобы получить статистику и рекомендации.")

    out = os.path.join(os.environ.get("DATA_DIR", str(FONTS_DIR.parent)), f"ege_{user_id}.pdf")
    pdf.output(out)
    return out
