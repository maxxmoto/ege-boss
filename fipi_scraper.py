"""
FIPI Open Bank Scraper — скачивает реальные задания ЕГЭ с fipi.ru
и конвертирует их в формат task_data.py.

Запускать ТОЛЬКО на сервере с доступом в интернет (DevMaax).

Usage: python fipi_scraper.py
       python fipi_scraper.py --subject math --pages 5
"""

import urllib.request, urllib.parse
import ssl, re, json, os, sys, html, time, random

ssl_ctx = ssl.create_default_context()
ssl_ctx.check_hostname = False
ssl_ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

# ── Subject IDs from FIPI ──
SUBJECTS_FIPI = {
    "math":    { "id": "AC437B34557F88EA4115D2F374B0A07B", "name": "Математика (профиль)" },
    "math_b":  { "id": "E040A72A1A3DABA14C90C97E0B6EE7DC", "name": "Математика (база)" },
    "russian": { "id": "AF0ED3F2557F8FFC4C06F80B6803FD26", "name": "Русский язык" },
    "physics": { "id": "BA1F39653304A5B041B656915DC36B38", "name": "Физика" },
    "chemistry":{ "id": "EA45D8517ABEB35140D0D83E76F14A41", "name": "Химия" },
    "biology": { "id": "CA9D848A31849ED149D382C32A7A2BE4", "name": "Биология" },
    "history": { "id": "068A227D253BA6C04D0C832387FD0D89", "name": "История" },
    "society": { "id": "756DF168F63F9A6341711C61AA5EC578", "name": "Обществознание" },
    "informatics":{"id": "B9ACA5BBB2E19E434CD6BEC25284C67F", "name": "Информатика" },
    "english": { "id": "4B53A6CB75B0B5E1427E596EB4931A2A", "name": "Английский язык" },
    "literature":{"id": "4F431E63B9C9B25246F00AD7B5253996", "name": "Литература" },
    "geography":{ "id": "20E79180061DB32845C11FC7BD87C7C8", "name": "География" },
}

def fetch_page(proj_id, page=0, pagesize=10):
    """Fetch one page of tasks from FIPI bank."""
    params = urllib.parse.urlencode({
        "proj": proj_id,
        "page": page,
        "pagesize": pagesize,
        "rfsh": str(random.randint(10000, 99999))
    })
    url = f"https://ege.fipi.ru/bank/questions.php?{params}"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        resp = urllib.request.urlopen(req, context=ssl_ctx, timeout=30)
        data = resp.read()
        # Try to decode — bank uses cp1251
        try:
            return data.decode("utf-8")
        except:
            try:
                return data.decode("cp1251")
            except:
                return data.decode("utf-8", errors="replace")
    except Exception as e:
        print(f"  Error fetching page {page}: {e}")
        return ""

def parse_tasks(html_text):
    """Extract tasks from FIPI HTML. Returns list of task dicts."""
    tasks = []
    
    # Split by qblock
    blocks = re.split(r'<div class=[\'\"]qblock[\'\"]', html_text)
    
    for block in blocks[1:]:  # Skip first (before first qblock)
        try:
            # Extract question text
            q_match = re.search(r'cell_0[\'\"]>(.*?)</TD>', block, re.DOTALL)
            if not q_match:
                continue
            q_html = q_match.group(1)
            
            # Clean HTML tags
            text = re.sub(r'<[^>]+>', ' ', q_html)
            text = html.unescape(text)
            text = re.sub(r'\s+', ' ', text).strip()
            
            if len(text) < 10:
                continue
            
            # Extract type
            type_match = re.search(r'Тип задания:</td><td[^>]*>(.*?)</td>', block, re.DOTALL)
            q_type = type_match.group(1).strip() if type_match else ""
            
            # Extract theme
            theme_match = re.search(r'Тема:</td><td[^>]*>(.*?)</td>', block, re.DOTALL)
            theme = ""
            if theme_match:
                theme_raw = theme_match.group(1)
                theme = re.sub(r'<[^>]+>', '', theme_raw).strip()
            
            # Extract GUID
            guid_match = re.search(r'guid[=\s]+[\"\']([^\"\']+)[\"\']', block)
            qid = guid_match.group(1)[:8] if guid_match else f"f{len(tasks)}"
            
            tasks.append({
                "id": qid,
                "q": text[:500],  # Limit length
                "o": ["Верно", "Неверно", "", ""],  # placeholder
                "a": 0,
                "e": "",
                "t": theme[:100] if theme else "Разное",
                "d": 2,
                "type": q_type
            })
        except Exception as e:
            print(f"  Parse error: {e}")
            continue
    
    return tasks

def generate_options(text):
    """Try to generate plausible options for open-ended tasks."""
    # Extract numbers from the text
    numbers = re.findall(r'\d+', text)
    if numbers:
        # Use the last number as correct, generate distractors
        correct = numbers[-1]
        correct_num = int(correct)
        opts = [correct]
        used = {correct}
        for delta in [1, -1, 2, -2, 5, -5, 10, -10]:
            val = str(correct_num + delta)
            if val not in used and int(val) >= 0:
                used.add(val)
                opts.append(val)
            if len(opts) >= 4:
                break
        while len(opts) < 4:
            opts.append(str(random.randint(1, 100)))
        random.shuffle(opts)
        correct_idx = opts.index(correct)
        return opts, correct_idx
    return ["A", "Б", "В", "Г"], 0

def scrape_subject(subj_key, max_pages=10):
    """Scrape tasks for one subject."""
    info = SUBJECTS_FIPI.get(subj_key)
    if not info:
        print(f"Unknown subject: {subj_key}")
        return []
    
    print(f"\n=== {info['name']} ({info['id']}) ===")
    all_tasks = []
    existing_ids = set()
    
    for page in range(max_pages):
        print(f"  Page {page+1}...", end=" ", flush=True)
        html = fetch_page(info["id"], page, 20)
        if not html:
            print("no data")
            break
        
        tasks = parse_tasks(html)
        if not tasks:
            print("no more tasks")
            break
        
        # Generate options for each task
        for t in tasks:
            if t["type"] == "Выбор ответа":
                pass  # Keep original if possible
            else:
                opts, correct = generate_options(t["q"])
                t["o"] = opts
                t["a"] = correct
        
        # Deduplicate
        new = 0
        for t in tasks:
            if t["id"] not in existing_ids:
                existing_ids.add(t["id"])
                all_tasks.append(t)
                new += 1
        
        print(f"{len(tasks)} tasks, {new} new, total {len(all_tasks)}")
        time.sleep(0.3)  # Be nice to the server
    
    print(f"  Total: {len(all_tasks)} tasks")
    return all_tasks


if __name__ == "__main__":
    # Parse args
    target_subj = None
    max_pages = 10
    
    for arg in sys.argv[1:]:
        if arg.startswith("--subject="):
            target_subj = arg.split("=")[1]
        elif arg.startswith("--pages="):
            max_pages = int(arg.split("=")[1])
    
    if target_subj:
        subjects_to_scrape = [target_subj]
    else:
        subjects_to_scrape = list(SUBJECTS_FIPI.keys())
    
    all_results = {}
    for subj in subjects_to_scrape:
        tasks = scrape_subject(subj, max_pages)
        if tasks:
            all_results[subj] = tasks
    
    # Output as Python dict
    print("\n\n=== RESULT ===")
    print(f"Scraped subjects: {len(all_results)}")
    
    # Generate JSON output
    output = {}
    for subj, tasks in all_results.items():
        output[subj] = [{"id": t["id"], "q": t["q"], "o": t["o"], "a": t["a"], "e": t["e"], "t": t["t"], "d": t["d"]} for t in tasks]
    
    # Save to file
    out_path = os.path.join(os.path.dirname(__file__), "fipi_scraped.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    total = sum(len(v) for v in output.values())
    print(f"Saved {total} tasks to fipi_scraped.json")
    print(f"\nTo import into task_data.py, run:")
    print(f"  python fipi_scraper.py --import")
