# Program for Kids - Learning Python (Python 少儿编程)

这是一个基于 Web 的 Python 学习工具，主要面向儿童。它可以作为简单的 Web 服务器运行，也可以使用 Tauri 打包为桌面应用程序。

## 1. 简单模式 (Python 服务器)

如果您只想在本地运行应用程序，而不需要编译任何内容，请使用此模式。

**前提条件：**
- 已安装 Python

**如何运行：**
1. 在当前目录下打开终端。
2. 运行服务器命令：
   ```bash
   python learning-python/server.py
   ```
3. 打开浏览器并访问：[http://localhost:8000](http://localhost:8000)

## 2. Tauri 模式 (发布桌面应用)

用于将应用程序构建为独立的 `.exe` 安装包。

**前提条件：**
- 已安装 Node.js
- 已安装 Rust (包含 Cargo)

**如何构建：**
1. 进入项目目录：
   ```bash
   cd learning-python
   ```
2. 安装依赖 (仅首次需要)：
   ```bash
   npm install
   ```
3. 构建应用程序：
   ```bash
   npx tauri build
   ```

**输出：**
构建完成后，您可以在以下位置找到可执行文件和安装程序：
- **安装程序：** `learning-python/src-tauri/target/release/bundle/nsis/learning-python_0.1.0_x64-setup.exe`
- **可执行文件：** `learning-python/src-tauri/target/release/learning-python.exe`
