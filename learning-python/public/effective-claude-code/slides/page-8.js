import { html } from '../app.js';

export default html`
    <style>
        .eye-card {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 1.1rem 1.3rem;
            box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
            position: relative;
        }
        .eye-card h3 {
            margin: 0 0 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }
        .eye-tag {
            display: inline-block;
            background: #fef3c7;
            color: #92400e;
            font-size: 0.78rem;
            padding: 2px 10px;
            border-radius: 12px;
            margin-left: 0.4rem;
            font-weight: 600;
        }
        .eye-card ul { padding-left: 1.2rem; }
        .eye-card li {
            padding-left: 0 !important;
            font-size: 1rem !important;
            margin-bottom: 0.4rem !important;
        }
        .eye-card li::before { display: none; }
    </style>

    <h2>8. 给 AI 加上"眼睛和手"</h2>
    <p>除了读你电脑里的文件，AI 还能<strong>上网搜索 + 操作浏览器</strong>——这两件事都是通过 <strong>MCP（外挂插件协议）</strong>实现的，跟 Skills 是两条不同的路（详见后续 MCP 一节）。</p>

    <div class="grid-2" style="gap: 1.2rem; margin-top: 0.5rem;">
        <div class="eye-card">
            <h3 style="color: #1e40af;">🌐 Playwright 浏览器自动化<span class="eye-tag">MCP · 虚拟鼠标</span></h3>
            <p style="font-size: 1rem; color: #475569; margin-bottom: 0.6rem;">AI 的"虚拟鼠标 + 键盘"。让它自己打开浏览器、点按钮、截图、提取网页内容。</p>
            <ul>
                <li>抓取网页数据并整理成表</li>
                <li>自动登录系统、批量填表</li>
                <li>对某个网站做截图存档</li>
                <li>调试你做的网页 / 应用</li>
            </ul>
        </div>

        <div class="eye-card">
            <h3 style="color: #1e40af;">🔍 Tavily 联网搜索<span class="eye-tag">MCP · 实时上网</span></h3>
            <p style="font-size: 1rem; color: #475569; margin-bottom: 0.6rem;">让 AI 拥有实时上网搜索能力，再结合它的整理能力——比你自己 Google 更高效。</p>
            <ul>
                <li><strong>Tavily</strong>：每月 ~1000 次免费额度</li>
                <li>核实数据、查最新政策</li>
                <li>查行业资讯、对手动态</li>
                <li>给报告补充资料引用</li>
            </ul>
        </div>
    </div>

    <div class="card" style="width: 100%; margin-top: 1rem; background: linear-gradient(135deg, #eff6ff, #f0fdf4); border-color: #bfdbfe;">
        <p style="font-size: 1.1rem; margin: 0; color: #0f172a;">
            💡 <strong>注意：</strong>带浏览器自动化时，最好<strong>专门为它开一个浏览器窗口</strong>，不要让它操作你正在工作的浏览器。
        </p>
    </div>
`;
