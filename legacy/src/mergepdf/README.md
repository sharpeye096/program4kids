# PDF Merger

A Python script to merge multiple PDF files from a folder into a single PDF file, ordered by filename.

## Usage

### Using Python script directly:
```bash
"C:\Users\wangx\AppData\Local\Programs\Python\Python311\python.exe" merge_pdfs.py <input_folder> <output_file>
```

### Using batch file:
```bash
merge.bat <input_folder> <output_file>
```

## Example

To merge PDFs from `D:\dev\报销\合并` and save to `D:\dev\报销\merged_receipts.pdf`:

```bash
python merge_pdfs.py "D:\dev\报销\合并" "D:\dev\报销\merged_receipts.pdf"
```

## Features

- Automatically finds all PDF files in the input folder
- Sorts files by filename (case-insensitive)
- Merges all pages into a single output PDF
- Creates output directory if it doesn't exist
- Provides detailed logging of the merging process

## Dependencies

- PyMuPDF (fitz)

Install dependencies:
```bash
pip install -r requirements.txt
```