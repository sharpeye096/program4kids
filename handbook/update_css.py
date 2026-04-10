import os
import re

css_replacement = """        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'PingFang SC', 'Microsoft YaHei', 'Nunito', sans-serif; background-color: #CFD8DC; color: var(--text-main); display: flex; flex-direction: column; align-items: center; gap: 20px; padding: 20px 0; }
        .page { width: 210mm; height: 296mm; background-color: var(--background); border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); position: relative; overflow: hidden; padding: 15mm; display: flex; flex-direction: column; background-image: radial-gradient(var(--box-bg) 10%, transparent 10%), radial-gradient(var(--box-bg) 10%, transparent 10%); background-size: 30px 30px; background-position: 0 0, 15px 15px; }
        @page { size: A4 portrait; margin: 0; }
        @media print { body { background-color: transparent; padding: 0; gap: 0; } .page { margin: 0; border-radius: 0; box-shadow: none; page-break-after: always; page-break-inside: avoid; -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
        h1 { font-size: 3rem; color: var(--primary); text-align: center; letter-spacing: 4px; font-weight: bold; text-shadow: 2px 2px 0px var(--secondary); margin-bottom: 10px; }
        h2 { font-size: 1.8rem; color: var(--primary); margin-top: 5px; margin-bottom: 15px; border-bottom: 4px dashed var(--accent); display: inline-block; padding-bottom: 5px; }
        h3 { font-size: 1.3rem; color: var(--accent); margin-bottom: 5px; font-weight: bold; }
        p { font-size: 1.15rem; line-height: 1.5; margin-bottom: 10px; }
        .card { background: var(--box-bg); border: 3px solid var(--primary); border-radius: 12px; padding: 15px; margin-bottom: 15px; box-shadow: 4px 4px 0px var(--accent); }
        .checklist-item { display: flex; align-items: center; font-size: 1.2rem; margin-bottom: 8px; }
        .checklist-box { width: 25px; height: 25px; border: 3px solid var(--text-main); border-radius: 6px; margin-right: 15px; background: #fff; flex-shrink: 0; }
        .drawing-area { flex-grow: 1; border: 4px dashed var(--accent); border-radius: 20px; background-color: #ffffff; display: flex; justify-content: center; align-items: flex-end; padding-bottom: 15px; color: var(--text-light); font-size: 1.3rem; min-height: 200px; margin-top: 10px; text-align: center; }
        .page-number { position: absolute; bottom: 8mm; right: 15mm; font-weight: bold; font-size: 1.1rem; color: var(--text-main); }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .cover { justify-content: center; align-items: center; text-align: center; background: linear-gradient(135deg, var(--background) 0%, #FFF 100%); border: 15px solid var(--primary); }
        .cover img { max-width: 65%; border-radius: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); margin: 20px 0; border: 6px solid white; object-fit: contain; max-height: 45%; }
        .name-tag { background: #fff; padding: 10px 30px; border-radius: 50px; border: 4px dashed var(--accent); font-size: 1.3rem; margin-top: 15px; color: var(--text-main); font-weight: bold;}"""

def process_file(path):
    try:
        if not os.path.exists(path):
            print(f"Skipping {path}, file not found")
            return
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace everything from `* { box-sizing:` to the end of `<style>` block
        pattern = re.compile(r'\*\s*\{\s*box-sizing:.*?(?=</style>)', re.DOTALL)
        
        if pattern.search(content):
            new_content = pattern.sub(css_replacement + '\n    ', content)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {path}")
        else:
            print(f"Pattern not found in {path}")
    except Exception as e:
        print(f"Error on {path}: {e}")

base_dir = r"D:\Coding\program4kids"
targets = [
    r".claude\skills\handbook\template\english.html",
    r".claude\skills\handbook\template\chinese.html",
    r"handbook\fuzhou\index.html",
    r"handbook\suzhou\index.html",
    r"handbook\hangzhou\index.html",
    r"handbook\guangzhou\index.html",
    r"dinosaur-handbook\index.html",
    r"dinosaur-handbook\chinese.html"
]

for t in targets:
    process_file(os.path.join(base_dir, t))
