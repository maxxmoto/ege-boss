"""Scrape informatics tasks from openfipi.devinf.ru v3"""
import urllib.request, re, json, os, ssl, time, html

ssl_ctx = ssl.create_default_context()
ssl_ctx.check_hostname = False
ssl_ctx.verify_mode = ssl.CERT_NONE
HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

BASE = "https://openfipi.devinf.ru"
seen_ids = set()
all_tasks = []

def get_page(page=1):
    url = f"{BASE}/tasks_ege/page/{page}" if page > 1 else f"{BASE}/tasks_ege/"
    req = urllib.request.Request(url, headers=HEADERS)
    resp = urllib.request.urlopen(req, context=ssl_ctx, timeout=30)
    raw = resp.read()
    try:
        return raw.decode("utf-8")
    except:
        return raw.decode("cp1251", errors="replace")

def extract_answer(block):
    """Extract answer from a task block."""
    # Find the dropdown-menu section
    m = re.search(r'Показать ответ.*?<p>(.*?)</p>', block, re.DOTALL)
    if m:
        ans = re.sub(r'<[^>]+>', '', m.group(1))
        ans = html.unescape(ans).strip()
        if ans:
            return ans
    return ""

def extract_question(block):
    """Extract question text from a task block."""
    # Find the td with colspan=5
    m = re.search(r'<td colspan="5">(.*?)</td>', block, re.DOTALL)
    if m:
        q = m.group(1)
    else:
        # Try to find content inside the block
        q = block
    
    # Clean
    q = re.sub(r'<img[^>]+src="data:image[^>]+>', ' [рисунок] ', q)
    q = re.sub(r'<img[^>]+>', ' [изображение] ', q)
    q = re.sub(r'<script[^>]*>.*?</script>', '', q, flags=re.DOTALL)
    q = re.sub(r'<style[^>]*>.*?</style>', '', q, flags=re.DOTALL)
    q = re.sub(r'<a\s[^>]*>', '', q)
    q = re.sub(r'</a>', '', q)
    q = re.sub(r'<[^>]+>', ' ', q)
    q = html.unescape(q)
    q = re.sub(r'\s+', ' ', q).strip()
    return q

def parse_page(html_text):
    """Extract all tasks from one page."""
    # Split by tr class="text-center" 
    blocks = re.split(r'<tr class="text-center">', html_text)
    
    count = 0
    for i, block in enumerate(blocks):
        if i == 0:
            continue  # Skip everything before first task
        
        # Extract task ID
        tid_m = re.search(r'/task/([a-fA-F0-9]{5,6})', block)
        if not tid_m:
            continue
        tid = tid_m.group(1)
        if tid in seen_ids:
            continue
        seen_ids.add(tid)
        
        # Extract task number
        num_m = re.search(r'<td>(\d+)</td>', block)
        task_num = int(num_m.group(1)) if num_m else 0
        
        # Extract question and answer
        q_text = extract_question(block)
        answer = extract_answer(block)
        
        if len(q_text) < 15:
            continue
        
        # Determine topic based on task number (1-27)
        topic_map = {1:"Информация и кодирование",2:"Системы счисления",3:"Логика",4:"Пользовательский курс"}
        if task_num <= 4:
            topic = topic_map.get(task_num, "Информатика")
        elif task_num <= 7:
            topic = "Системы счисления"
        elif task_num <= 10:
            topic = "Логика"
        elif task_num <= 16:
            topic = "Пользовательский курс"
        elif task_num <= 22:
            topic = "Алгоритмизация"
        else:
            topic = "Программирование"
        
        all_tasks.append({
            "id": f"inf_{tid}",
            "num": task_num,
            "q": q_text[:800],
            "a": answer,
            "t": topic,
        })
        count += 1
    
    return count

# Scrape all pages
print("Scraping OpenFIPI informatics tasks...")
for page in range(1, 165):
    try:
        html_text = get_page(page)
        n = parse_page(html_text)
        if n == 0 and page > 2:
            # Still count total tasks on page via IDs
            print(f"  Page {page}: no new tasks (total {len(all_tasks)})")
            if page > 5:
                break
        else:
            print(f"  Page {page}: +{n} (total {len(all_tasks)})")
        time.sleep(0.3)
    except Exception as e:
        print(f"  Page {page}: error {e}")
        if page > 5:
            break
        time.sleep(1)

# Save
out = os.path.join(os.path.dirname(__file__), "inf_tasks.json")
with open(out, "w", encoding="utf-8") as f:
    json.dump(all_tasks, f, ensure_ascii=False, indent=2)

print(f"\nSaved {len(all_tasks)} informatics tasks")
print(f"With answers: {sum(1 for t in all_tasks if t['a'])}")
