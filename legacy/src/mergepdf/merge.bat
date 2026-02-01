@echo off
chcp 65001 >nul
echo PDF Merger
echo.

REM Use full Python path to avoid encoding issues
SET PYTHON_PATH=C:\Users\wangx\AppData\Local\Programs\Python\Python311\python.exe

REM Check if Python is available
"%PYTHON_PATH%" --version >nul 2>&1
if errorlevel 1 (
    echo Error: Python is not installed or not in PATH
    pause
    exit /b 1
)

REM Run the merger
echo Running PDF Merger...
"%PYTHON_PATH%" merge_pdfs.py %*

pause