import { html } from '../app.js';

export default html`
    <style>
        .skill-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0.8rem;
            margin: 0.8rem 0;
        }
        .skill-card {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 0.9rem;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.04);
        }
        .skill-icon {
            font-size: 2rem;
            margin-bottom: 0.3rem;
        }
        .skill-card h4 {
            margin: 0 0 0.3rem 0;
            color: #1e40af;
            font-size: 1.05rem;
        }
        .skill-card p {
            font-size: 0.88rem;
            color: #64748b;
            margin: 0;
            line-height: 1.45;
        }
    </style>

    <h2>5. Skills：给 AI 安装"机械臂"</h2>
    <p>AI 默认只懂纯文本。要处理 Word / PPT / Excel / PDF，必须装 <strong>Skills（技能插件）</strong>。</p>

    <div class="skill-grid">
        <div class="skill-card">
            <div class="skill-icon">📄</div>
            <h4>docx</h4>
            <p>读写 Word 文档<br/>表格 / 目录 / 页眉</p>
        </div>
        <div class="skill-card">
            <div class="skill-icon">📊</div>
            <h4>xlsx</h4>
            <p>处理 Excel 表格<br/>数据统计 / 公式</p>
        </div>
        <div class="skill-card">
            <div class="skill-icon">📕</div>
            <h4>pdf</h4>
            <p>提取 PDF 内容<br/>合并 / 拆分 / OCR</p>
        </div>
        <div class="skill-card">
            <div class="skill-icon">📺</div>
            <h4>pptx</h4>
            <p>生成 PPT 幻灯片<br/>批量调整模板</p>
        </div>
    </div>

    <div class="grid-2" style="gap: 1.2rem; margin-top: 0.5rem;">
        <div class="card" style="background: #f0f9ff; border-color: #bae6fd;">
            <h3 style="color: #0369a1; margin-top: 0;">📦 安装方式</h3>
            <ul style="font-size: 1rem;">
                <li>从官方仓库下载 <a href="https://github.com/anthropics/skills" target="_blank" style="color:#0369a1; text-decoration:underline;">anthropics/skills</a></li>
                <li>解压到 <code class="highlight">.claude/skills</code> 目录</li>
                <li><strong>仅本 Repo 可用</strong> → <code class="highlight">./.claude/skills/</code></li>
                <li><strong>全局可用</strong>：
                    <br/>Win： <code class="highlight">C:/Users/&lt;你&gt;/.claude/skills/</code>
                    <br/>Mac： <code class="highlight">~/.claude/skills/</code>
                </li>
                <li>💡 一句话："请帮我装一下官方的 docx / xlsx / pdf Skills"</li>
            </ul>
        </div>

        <div class="card" style="background: linear-gradient(135deg, #fff7ed, #fef3c7); border-color: #fcd34d;">
            <h3 style="color: #92400e; margin-top: 0;">🚀 网络加速小贴士</h3>
            <p style="font-size: 1rem; margin-bottom: 0.5rem; color: #78350f;">Skill 经常需要装 Python / Node 工具，海外源极慢。直接命令 AI：</p>
            <pre style="font-size: 0.82rem; margin: 0; background: #1e293b;"><code>装 Python 工具用清华大学镜像源
装 Node/npm 工具用淘宝镜像源</code></pre>
        </div>
    </div>
`;
