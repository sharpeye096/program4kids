#!/usr/bin/env python3
"""
PDF to Image Converter
Converts PDF files to images (JPG/PNG) with configurable DPI settings.

Usage:
    python pdf_to_img.py <input_folder> <output_folder> [--format jpg|png] [--dpi 150]

Example:
    python pdf_to_img.py "\\\\192.168.0.100\\wang_存储空间1\\报销\\独墅湖" "\\\\192.168.0.100\\wang_存储空间1\\报销\\图片" --format jpg --dpi 200
"""

import os
import sys
import argparse
from pathlib import Path
import fitz  # PyMuPDF
from PIL import Image
import logging
import io  # For BytesIO

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class PDFToImageConverter:
    def __init__(self, input_folder, output_folder, image_format='jpg', dpi=150):
        self.input_folder = Path(input_folder)
        self.output_folder = Path(output_folder)
        self.image_format = image_format.lower()
        self.dpi = dpi

        # Validate format
        if self.image_format not in ['jpg', 'jpeg', 'png']:
            raise ValueError("Image format must be 'jpg' or 'png'")

        # Create output folder if it doesn't exist
        self.output_folder.mkdir(parents=True, exist_ok=True)

    def convert_pdf(self, pdf_path):
        """Convert a single PDF file to images"""
        try:
            pdf_document = fitz.open(pdf_path)
            pdf_name = pdf_path.stem

            logger.info(f"Converting {pdf_path.name} with {len(pdf_document)} pages")

            for page_num in range(len(pdf_document)):
                page = pdf_document[page_num]

                # Render page to image
                mat = fitz.Matrix(self.dpi / 72, self.dpi / 72)  # Convert DPI to matrix
                pix = page.get_pixmap(matrix=mat)

                # Convert to PIL Image
                img_data = pix.tobytes("ppm")
                img = Image.open(io.BytesIO(img_data))

                # Save image
                output_filename = f"{pdf_name}_page_{page_num + 1:03d}.{self.image_format}"
                output_path = self.output_folder / output_filename

                if self.image_format in ['jpg', 'jpeg']:
                    img = img.convert('RGB')  # Ensure RGB for JPEG
                    img.save(output_path, 'JPEG', quality=95)
                else:
                    img.save(output_path, 'PNG')

                logger.info(f"  Saved page {page_num + 1} as {output_filename}")

            pdf_document.close()
            return True

        except Exception as e:
            logger.error(f"Error converting {pdf_path.name}: {str(e)}")
            return False

    def convert_all_pdfs(self):
        """Convert all PDF files in the input folder"""
        if not self.input_folder.exists():
            logger.error(f"Input folder does not exist: {self.input_folder}")
            return False

        pdf_files = list(self.input_folder.glob("*.pdf"))

        if not pdf_files:
            logger.warning(f"No PDF files found in {self.input_folder}")
            return False

        logger.info(f"Found {len(pdf_files)} PDF files to convert")

        success_count = 0
        for pdf_file in pdf_files:
            if self.convert_pdf(pdf_file):
                success_count += 1

        logger.info(f"Successfully converted {success_count}/{len(pdf_files)} PDF files")
        return success_count > 0

def main():
    parser = argparse.ArgumentParser(description='Convert PDF files to images')
    parser.add_argument('input_folder', help='Input folder containing PDF files')
    parser.add_argument('output_folder', help='Output folder for converted images')
    parser.add_argument('--format', choices=['jpg', 'png'], default='jpg',
                       help='Output image format (default: jpg)')
    parser.add_argument('--dpi', type=int, default=150,
                       help='DPI for output images (default: 150)')

    args = parser.parse_args()

    try:
        print("Running0")
        converter = PDFToImageConverter(
            input_folder=args.input_folder,
            output_folder=args.output_folder,
            image_format=args.format,
            dpi=args.dpi
        )
        print("Running1")
        success = converter.convert_all_pdfs()
        print("Running2")
        print(success)
        if success:
            logger.info("PDF to image conversion completed successfully!")
            sys.exit(0)
        else:
            logger.error("PDF to image conversion failed or no files were processed")
            sys.exit(1)

    except Exception as e:
        logger.error(f"Fatal error: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    print("Running")
    main()