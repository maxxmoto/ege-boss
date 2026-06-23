import os
import tempfile
from datetime import date
from fpdf import FPDF


class EGEPDF(FPDF):
    def header(self):
        if self.page_no() > 1:
            self.set_font("Arial", "I", 9)
            self.cell(0, 8, "EGE-BOSS - Персональный вариант", 0, 1, "C")
            self.ln(3)

    def footer(self):
        self.set_y(-15)
        self.set_font("Arial", "I", 8)
        self.cell(0, 10, f"Страница {self.page_no()}/{{nb}}", 0, 0, "C")


async def generate_pdf(user_id: int, subject_name: str, tasks: list) -> str:
    pdf = EGEPDF()
    pdf.alias_nb_pages()

    pdf.add_page()
    pdf.set_font("Arial", "B", 22)
    pdf.cell(0, 15, "EGE-BOSS", 0, 1, "C")
    pdf.set_font("Arial", "", 14)
    pdf.cell(0, 10, f"Предмет: {subject_name}", 0, 1, "C")
    pdf.cell(0, 10, f"Дата: {date.today().isoformat()}", 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("Arial", "", 11)
    pdf.multi_cell(0, 7, (
        "Инструкция: Решите предложенные задания. "
        "Проверьте свои ответы в боте или в конце документа."
    ))
    pdf.ln(5)
    pdf.set_font("Arial", "B", 11)
    pdf.cell(0, 7, f"Количество заданий: {len(tasks)}", 0, 1)
    pdf.ln(10)

    for i, task in enumerate(tasks, 1):
        pdf.add_page()
        pdf.set_font("Arial", "B", 12)
        pdf.cell(0, 10, f"Задание {i}", 0, 1, "L")
        pdf.set_font("Arial", "", 11)
        pdf.multi_cell(0, 7, task["question"])
        pdf.ln(3)
        for j, opt in enumerate(task["options"]):
            letter = chr(65 + j)
            pdf.multi_cell(0, 7, f"{letter}) {opt}")
            pdf.ln(1)
        pdf.ln(5)

    pdf.add_page()
    pdf.set_font("Arial", "B", 16)
    pdf.cell(0, 10, "Ответы", 0, 1, "C")
    pdf.ln(10)
    pdf.set_font("Arial", "", 12)
    for i, task in enumerate(tasks, 1):
        answer_letter = chr(65 + task["correct_answer"])
        pdf.cell(0, 8, f"Задание {i}: {answer_letter}", 0, 1, "L")

    pdf.ln(15)
    pdf.set_font("Arial", "I", 10)
    pdf.multi_cell(0, 7, (
        "Проверьте свои ответы в боте, чтобы получить "
        "персональную статистику и рекомендации."
    ))

    temp_dir = tempfile.gettempdir()
    filepath = os.path.join(temp_dir, f"ege_boss_{user_id}.pdf")
    pdf.output(filepath)
    return filepath
