@echo off
echo PDF to Image Converter
echo.

REM Check if Python is available
py --version >nul 2>&1
if errorlevel 1 (
    echo Error: Python is not installed or not in PATH
    pause
    exit /b 1
)

REM Run the converter
echo Running PDF to Image Converter...
py pdf_to_img.py %*

pause