import { html } from '../app.js';

export default html`
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
    </div>
    
    <div class="slide-number">5 / 10</div>
`;
