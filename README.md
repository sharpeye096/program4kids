# Program for Kids - Learning Python

This project is a web-based educational tool for learning Python, which can be run as a simple web server or packaged as a desktop application using Tauri.

## 1. Simple Mode (Python Server)

If you just want to run the application locally without compiling anything.

**Prerequisites:**
- Python installed

**How to Run:**
1. Open a terminal in this directory.
2. Run the server command:
   ```bash
   python learning-python/server.py
   ```
3. Open your browser and visit: [http://localhost:8000](http://localhost:8000)

## 2. Tauri Mode (Release Desktop App)

To build the application as a standalone `.exe` installer.

**Prerequisites:**
- Node.js installed
- Rust installed (including Cargo)

**How to Build:**
1. Navigate to the project directory:
   ```bash
   cd learning-python
   ```
2. Install dependencies (first time only):
   ```bash
   npm install
   ```
3. Build the application:
   ```bash
   npx tauri build
   ```

**Output:**
After the build completes, you will find the executable and installer in:
- **Installer:** `learning-python/src-tauri/target/release/bundle/nsis/learning-python_0.1.0_x64-setup.exe`
- **Executable:** `learning-python/src-tauri/target/release/learning-python.exe`
