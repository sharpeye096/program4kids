#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PDF Merger
Merges multiple PDF files from a folder into a single PDF file, ordered by filename.

Usage:
    python merge_pdfs.py <input_folder> <output_file>

Example:
    python merge_pdfs.py "D:\dev\报销\合并" "D:\dev\报销\merged_receipts.pdf"
"""

import os
import sys
import argparse
from pathlib import Path
import fitz  # PyMuPDF
import logging

# Set UTF-8 encoding for Windows compatibility
if sys.platform == "win32":
    import locale
    if os.name == 'nt':
        # For Windows, set the console to UTF-8
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class PDFMerger:
    def __init__(self, input_folder, output_file):
        self.input_folder = Path(input_folder)
        self.output_file = Path(output_file)

        # Create output directory if it doesn't exist
        self.output_file.parent.mkdir(parents=True, exist_ok=True)

    def get_sorted_pdf_files(self):
        """Get all PDF files from input folder, sorted by filename"""
        if not self.input_folder.exists():
            logger.error(f"Input folder does not exist: {self.input_folder}")
            return []

        pdf_files = list(self.input_folder.glob("*.pdf"))

        if not pdf_files:
            logger.warning(f"No PDF files found in {self.input_folder}")
            return []

        # Sort files by filename
        pdf_files.sort(key=lambda x: x.name.lower())

        logger.info(f"Found {len(pdf_files)} PDF files to merge:")
        for pdf_file in pdf_files:
            logger.info(f"  - {pdf_file.name}")

        return pdf_files

    def merge_pdfs(self):
        """Merge all PDF files into a single output file"""
        pdf_files = self.get_sorted_pdf_files()

        if not pdf_files:
            return False

        merged_document = None

        try:
            # Create a new PDF document
            merged_document = fitz.open()

            total_pages = 0
            successful_files = 0
            failed_files = 0

            # Log initial summary
            logger.info(f"Starting merge of {len(pdf_files)} PDF files")
            logger.info("=" * 50)

            for pdf_file in pdf_files:
                logger.info(f"Processing: {pdf_file.name}")

                try:
                    # Open each PDF file
                    pdf_document = fitz.open(pdf_file)

                    # Get page count before merging
                    pages_in_document = len(pdf_document)
                    logger.info(f"  Pages in this document: {pages_in_document}")

                    # Insert all pages from current PDF into merged document
                    merged_document.insert_pdf(pdf_document)

                    total_pages += pages_in_document
                    pdf_document.close()

                    logger.info(f"  ✓ Successfully added {pages_in_document} pages")
                    successful_files += 1

                except Exception as e:
                    logger.error(f"  ✗ Error processing {pdf_file.name}: {str(e)}")
                    failed_files += 1
                    continue

            # Save the merged document
            if total_pages > 0:
                merged_document.save(self.output_file)

                # Final summary
                logger.info("=" * 50)
                logger.info("MERGE SUMMARY:")
                logger.info(f"  Total input files: {len(pdf_files)}")
                logger.info(f"  Successfully processed: {successful_files}")
                logger.info(f"  Failed to process: {failed_files}")
                logger.info(f"  Total pages in final document: {total_pages}")
                logger.info(f"  Output file: {self.output_file}")

                # Verify the final document
                final_document = fitz.open(self.output_file)
                actual_pages = len(final_document)
                final_document.close()

                logger.info(f"  Verified pages in output: {actual_pages}")

                if total_pages == actual_pages:
                    logger.info("✓ Page count verification: SUCCESS")
                else:
                    logger.warning(f"⚠ Page count mismatch: Expected {total_pages}, Got {actual_pages}")

                return True
            else:
                logger.error("No pages were successfully merged")
                return False

        except Exception as e:
            logger.error(f"Error merging PDFs: {str(e)}")
            return False
        finally:
            # Ensure the document is closed properly
            if merged_document:
                merged_document.close()

def main():
    parser = argparse.ArgumentParser(description='Merge multiple PDF files into a single PDF')
    parser.add_argument('input_folder', help='Input folder containing PDF files to merge')
    parser.add_argument('output_file', help='Output PDF file path')

    args = parser.parse_args()

    try:
        # Debug: print the arguments to see if they're being received correctly
        logger.info(f"Input folder: {args.input_folder}")
        logger.info(f"Output file: {args.output_file}")

        merger = PDFMerger(
            input_folder=args.input_folder,
            output_file=args.output_file
        )

        success = merger.merge_pdfs()

        if success:
            logger.info("PDF merging completed successfully!")
            sys.exit(0)
        else:
            logger.error("PDF merging failed or no files were processed")
            sys.exit(1)

    except Exception as e:
        logger.error(f"Fatal error: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()