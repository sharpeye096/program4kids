==================================================
        Python 少儿编程课件 - 使用说明
==================================================

【第一步：安装 Python】

1. 下载 Python：
   访问 https://www.python.org/downloads/
   点击 "Download Python 3.x.x" 按钮下载

2. 安装时注意：
   - 勾选 "Add Python to PATH"（非常重要！）
   - 点击 "Install Now"

3. 验证安装：
   打开命令提示符（按 Win+R，输入 cmd，回车）
   输入以下命令：
   
   python --version
   
   如果显示 "Python 3.x.x" 则安装成功
   如果提示"不是内部命令"，请重新安装并勾选 PATH 选项


【第二步：启动课件服务器】

1. 打开命令提示符（cmd）或 PowerShell

2. 切换到课件目录：
   cd D:\Coding\pp\slides-maker\playground
   
   （请根据实际路径修改）

3. 启动服务器：
   python server.py

4. 看到以下提示表示启动成功：
   Starting server...
   Serving from: ...
   Open http://localhost:8000
   Server running. Press Ctrl+C to stop.


【第三步：打开课件】

1. 打开浏览器（推荐 Chrome 或 Edge）

2. 访问以下地址：
   http://localhost:8000

3. 选择课程：
   - python-001: Python 入门基础（变量、循环、函数）
   - python-002: 条件判断 If-Else（缩进与作用域）


【操作说明】

- 按 → 或 空格键：下一页
- 按 ←：上一页
- 点击右侧箭头按钮：下一页
- 点击左侧箭头按钮：上一页


【停止服务器】

在命令行窗口按 Ctrl+C 即可停止服务器


==================================================
                    祝学习愉快！
==================================================
