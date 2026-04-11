import { html } from '../app.js';

export const onMount = (container) => {
    const toggleBtn = container.querySelector('#toggle-prereq');
    const prereqPanel = container.querySelector('#prereq-panel');
    if (toggleBtn && prereqPanel) {
        toggleBtn.addEventListener('click', () => {
            const isVisible = prereqPanel.style.maxHeight && prereqPanel.style.maxHeight !== '0px';
            if (isVisible) {
                prereqPanel.style.maxHeight = '0px';
                prereqPanel.style.opacity = '0';
                toggleBtn.querySelector('.arrow').textContent = '▸';
            } else {
                prereqPanel.style.maxHeight = prereqPanel.scrollHeight + 'px';
                prereqPanel.style.opacity = '1';
                toggleBtn.querySelector('.arrow').textContent = '▾';
            }
        });
    }
};

export default html`
    <style>
        .prereq-toggle {
            cursor: pointer;
            user-select: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #64748b;
            font-size: 1.05rem;
            font-weight: 500;
            padding: 4px 0;
            transition: color 0.2s;
            background: none;
            border: none;
            font-family: inherit;
        }
        .prereq-toggle:hover { color: var(--primary); }
        .prereq-panel {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: max-height 0.35s ease, opacity 0.3s ease;
        }
        .prereq-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0.8rem;
            margin-top: 0.8rem;
        }
        .prereq-item {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 0.8rem;
            text-align: center;
        }
        .prereq-item img {
            width: 28px;
            height: 28px;
            margin-bottom: 4px;
        }
        .prereq-item .name { font-weight: 600; font-size: 0.95rem; color: #1e293b; }
        .prereq-item .desc { font-size: 0.8rem; color: #64748b; margin: 0; line-height: 1.3; }
    </style>

    <h2>3. 普通人如何起步：写代码配置指南</h2>
    <p>工欲善其事，必先利其器。根据不同的网络环境，我推荐以下两大配置方案：</p>
    
    <div class="flex-col" style="gap: 1.5rem;">
        <div class="card">
            <h3>方案 A：国内网络环境（推荐）</h3>
            <p>无需特殊网络设置，体验流畅，响应极快：</p>
            <ul>
                <li>
                    <span class="highlight">Claude Code (客户端) + GLM (智谱大模型API)</span>
                    <a href="https://docs.bigmodel.cn/cn/guide/develop/claude" target="_blank" style="margin-left: 0.5rem; color: var(--secondary); text-decoration: none; font-size: 1rem;">[ 📖 查看官方配置教程 ]</a>
                </li>
                <li><strong>体感评测：</strong> 这是我目前体感最好、最省心的国内直连方案，能够快速理解需求并给出高质量代码。</li>
            </ul>
        </div>

        <div class="card">
            <h3>方案 B：具备外网访问条件</h3>
            <p>直接接驳国际最强模型的原生体验：</p>
            <ul>
                <li><span class="highlight">Antigravity (谷歌系架构)</span> - 极具潜力的智能体平台。</li>
                <li><span class="highlight">Claude Code + Claude Opus 模型</span> - Anthropic目前推理能力最强、复杂重构和逻辑分析最为稳妥的组合。</li>
            </ul>
        </div>

        <!-- 前置环境 -->
        <div>
            <button class="prereq-toggle" id="toggle-prereq">
                <span class="arrow">▸</span> 🛠️ 无论哪种方案，都需要提前安装的软件
            </button>
            <div class="prereq-panel" id="prereq-panel">
                <div class="prereq-grid">
                    <div class="prereq-item">
                        <img src="https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=64" alt="VS Code">
                        <div class="name">VS Code</div>
                        <p class="desc">微软出品的代码编辑器，免费、轻量、插件丰富</p>
                    </div>
                    <div class="prereq-item">
                        <img src="https://www.google.com/s2/favicons?domain=nodejs.org&sz=64" alt="Node.js">
                        <div class="name">Node.js</div>
                        <p class="desc">JavaScript 运行环境，安装后自带 npm，是跑 Claude Code 的前提</p>
                    </div>
                    <div class="prereq-item">
                        <img src="https://www.google.com/s2/favicons?domain=git-scm.com&sz=64" alt="Git">
                        <div class="name">Git</div>
                        <p class="desc">版本控制工具，Claude Code 强制要求</p>
                    </div>
                    <div class="prereq-item" style="background: #fefce8; border-color: #fde68a;">
                        <img src="https://www.google.com/s2/favicons?domain=github.com&sz=64" alt="GitHub">
                        <div class="name">GitHub 账号</div>
                        <p class="desc">（可选）远程代码仓库，方便协作与备份</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
