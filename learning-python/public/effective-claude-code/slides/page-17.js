import { html } from '../app.js';

export default html`
    <style>
        .mcp-stage {
            background: linear-gradient(135deg, #f8fafc, #eff6ff);
            border: 1px solid #bfdbfe;
            border-radius: 12px;
            padding: 1rem 1.2rem;
            margin-top: 0.6rem;
            display: grid;
            grid-template-columns: 1fr 50px 1fr 50px 1fr;
            gap: 0.6rem;
            align-items: center;
        }
        .mcp-block {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 0.85rem;
            text-align: center;
            min-height: 110px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .mcp-block h4 {
            margin: 0 0 0.3rem;
            font-size: 1.05rem;
            color: #1e40af;
        }
        .mcp-block p {
            font-size: 0.88rem;
            color: #475569;
            margin: 0;
            line-height: 1.5;
        }
        .mcp-arrow {
            text-align: center;
            font-size: 1.8rem;
            color: #94a3b8;
            font-weight: 700;
        }
        .mcp-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0.75rem;
            margin-top: 0.8rem;
        }
        .mcp-card {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 0.7rem 0.8rem;
            text-align: center;
        }
        .mcp-card h4 {
            margin: 0 0 0.2rem;
            color: #0f172a;
            font-size: 1rem;
        }
        .mcp-card p {
            font-size: 0.82rem;
            color: #64748b;
            line-height: 1.45;
            margin: 0;
        }
        .skill-vs-mcp {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-top: 0.8rem;
        }
    </style>

    <h2>17. MCP：让 AI 长出"任意外挂"</h2>
    <p><strong>MCP（Model Context Protocol）</strong>是一种通用插头——任何系统只要做了 MCP 接口，AI 就能直接调用。Playwright、Tavily、数据库……都是 MCP。</p>

    <div class="mcp-stage">
        <div class="mcp-block">
            <h4>🤖 Claude Code</h4>
            <p>你的 AI 助手</p>
        </div>
        <div class="mcp-arrow">⇄</div>
        <div class="mcp-block" style="background: linear-gradient(135deg, #fef3c7, #fde68a); border-color:#fcd34d;">
            <h4>🔌 MCP 协议</h4>
            <p>通用插头</p>
        </div>
        <div class="mcp-arrow">⇄</div>
        <div class="mcp-block">
            <h4>🌍 外部系统</h4>
            <p>浏览器 / 搜索 / 数据库 / GitHub</p>
        </div>
    </div>

    <h3 style="margin-top: 1rem;">📦 常用 MCP 服务（让 AI 帮你装）</h3>
    <div class="mcp-grid">
        <div class="mcp-card">
            <div style="font-size:1.6rem;">🌐</div>
            <h4>Playwright</h4>
            <p>操作浏览器、爬网页</p>
        </div>
        <div class="mcp-card">
            <div style="font-size:1.6rem;">🔍</div>
            <h4>Tavily</h4>
            <p>实时联网搜索</p>
        </div>
        <div class="mcp-card">
            <div style="font-size:1.6rem;">🐙</div>
            <h4>GitHub</h4>
            <p>提 Issue / 看 PR</p>
        </div>
        <div class="mcp-card">
            <div style="font-size:1.6rem;">🗄️</div>
            <h4>SQLite / Postgres</h4>
            <p>直接查数据库</p>
        </div>
    </div>

    <div class="skill-vs-mcp">
        <div class="card" style="background:#f0f9ff; border-color:#bae6fd;">
            <h3 style="margin-top:0; color:#0369a1;">🛠️ Skill</h3>
            <p style="font-size:0.95rem; margin:0;">教 AI<strong>怎么做一件事</strong>的"说明书 + 脚本"，放本地。<br/>例：docx、xlsx、pdf2html。</p>
        </div>
        <div class="card" style="background:#fff7ed; border-color:#fdba74;">
            <h3 style="margin-top:0; color:#9a3412;">🔌 MCP</h3>
            <p style="font-size:0.95rem; margin:0;">给 AI<strong>连一个外部系统</strong>的"插头"，是一个独立运行的服务。<br/>例：Playwright、Tavily、GitHub。</p>
        </div>
    </div>

    <div class="card" style="width: 100%; margin-top: 0.8rem; background: linear-gradient(135deg, #eff6ff, #ede9fe); border-color: #c4b5fd;">
        <p style="font-size: 1.05rem; margin: 0; color: #4c1d95;">
            💡 <strong>一句话区分：</strong>Skill 是<strong>本地的技能</strong>，MCP 是<strong>对外的接口</strong>。两个都用上，AI 才真正"既能动手，又能伸手"。
        </p>
    </div>
`;
