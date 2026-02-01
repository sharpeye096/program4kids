#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Test script to check Unicode/Chinese character handling
"""

import sys
import os

# Set UTF-8 encoding for Windows
if sys.platform == "win32":
    import locale
    if os.name == 'nt':
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')

print("Testing Unicode character handling...")
print(f"Command line arguments: {sys.argv}")

if len(sys.argv) > 1:
    print(f"First argument: {sys.argv[1]}")
    print(f"First argument (repr): {repr(sys.argv[1])}")

# Test Chinese characters directly
test_path = "D:\\dev\\报销\\合并"
print(f"Test path: {test_path}")
print(f"Test path (repr): {repr(test_path)}")

print("Test completed successfully!")