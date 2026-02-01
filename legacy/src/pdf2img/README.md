# PDF to Image Converter

A Python tool to convert PDF files to images (JPG/PNG format) with configurable DPI settings.

## Features

- Convert PDF files to JPG or PNG images
- Configurable DPI for image quality
- Batch processing of multiple PDF files
- Support for network paths (UNC paths)
- Progress logging

## Requirements

- Python 3.6+
- Required packages:
  - PyMuPDF (fitz)
  - Pillow (PIL)

## Installation

1. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

### Command Line

```bash
# Basic usage
python pdf_to_img.py <input_folder> <output_folder>

# With custom format and DPI
python pdf_to_img.py <input_folder> <output_folder> --format png --dpi 200

# Example with your network paths
python pdf_to_img.py "\\\\192.168.0.100\\wang_存储空间1\\报销\\独墅湖" "\\\\192.168.0.100\\wang_存储空间1\\报销\\图片" --format jpg --dpi 150
```

### Windows Batch File

You can also use the provided batch file:

```cmd
convert.bat "\\\\192.168.0.100\\wang_存储空间1\\报销\\独墅湖" "\\\\192.168.0.100\\wang_存储空间1\\报销\\图片" --format jpg --dpi 150
```

## Parameters

- `input_folder`: Path to folder containing PDF files
- `output_folder`: Path to folder where images will be saved
- `--format`: Output image format (jpg or png, default: jpg)
- `--dpi`: DPI for output images (default: 150)

## Output

Images are saved with the naming pattern:
- `{pdf_filename}_page_001.{format}`
- `{pdf_filename}_page_002.{format}`
- etc.

## Example

```bash
# Convert all PDFs in network folder to JPG with 200 DPI
python pdf_to_img.py "\\\\192.168.0.100\\wang_存储空间1\\报销\\独墅湖" "\\\\192.168.0.100\\wang_存储空间1\\报销\\图片" --format jpg --dpi 200

# Convert to PNG format
python pdf_to_img.py "\\\\192.168.0.100\\wang_存储空间1\\报销\\独墅湖" "\\\\192.168.0.100\\wang_存储空间1\\报销\\图片" --format png
```

## Notes

- The tool automatically creates the output folder if it doesn't exist
- Each page of a PDF becomes a separate image file
- Higher DPI values result in better quality but larger file sizes
- Network paths (UNC paths) are supported on Windows