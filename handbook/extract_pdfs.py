import pdfplumber

def extract(pdf_path, out_txt):
    print(f'Extracting {pdf_path}...')
    try:
        with pdfplumber.open(pdf_path) as pdf:
            with open(out_txt, 'w', encoding='utf-8') as f:
                for i, page in enumerate(pdf.pages):
                    text = page.extract_text()
                    if text:
                        f.write(f'--- Page {i+1} ---\n{text}\n\n')
        print(f'Done extracting to {out_txt}')
    except Exception as e:
        print(f'Error extracting {pdf_path}: {e}')

extract(r'竹子观察手册【PDF】.pdf', r'bamboo_text.txt')
extract(r'泉州研学手册【对折版】.pdf', r'quanzhou_text.txt')
