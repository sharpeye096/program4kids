import { html } from '../app.js';

export const onMount = (container) => {
    // Expand Logic
    const headers = container.querySelectorAll('.expand-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.toggle-icon');
            if (content.style.maxHeight) {
                // Collapse
                content.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                // Expand
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = '−';
            }
        });
    });

    // Hidden Chip Reveal Logic
    const revealBtn = container.querySelector('#reveal-chip-btn');
    const chipLayer = container.querySelector('#hidden-chip-layer');
    if (revealBtn && chipLayer) {
        revealBtn.addEventListener('click', () => {
            chipLayer.style.display = 'block';
            // trigger reflow
            void chipLayer.offsetWidth;
            chipLayer.style.opacity = '1';
            chipLayer.style.transform = 'translateY(0)';
            revealBtn.style.display = 'none';
        });
        revealBtn.addEventListener('mouseenter', () => revealBtn.style.opacity = '1');
        revealBtn.addEventListener('mouseleave', () => revealBtn.style.opacity = '0.3');
    }
};

export default html`
    <style>
        .expand-card {
            cursor: pointer;
            transition: background 0.3s ease;
        }
        .expand-card:hover {
            background: #f1f5f9 !important;
        }
        .expand-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        .expand-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }
        .expand-content-inner {
            padding-top: 1rem;
            border-top: 1px dashed #cbd5e1;
            margin-top: 0.5rem;
            color: #334155;
        }
        .toggle-icon {
            font-weight: bold;
            color: #94a3b8;
            font-size: 2rem;
            line-height: 1;
            width: 30px;
            text-align: center;
        }
    </style>

    <h2>1. 认识AI领域的基本工具层级</h2>
    <p>当下我们可以接触到的AI工具，可以形象地分为以下三个层级：</p>
    
    <div class="flex-col" style="gap: 1.2rem; margin-top: 1.5rem;">
        
        <!-- 大脑 -->
        <div class="card expand-card">
            <div class="expand-header">
                <div style="flex: 1;">
                    <h3 style="margin-top:0; color: #0369a1;">🧠 基础大模型 (Web端) —— “全能博学但手残的顾问” (大脑)</h3>
                    <p style="font-size: 1rem; margin-bottom: 0;">
                        <strong>特点：</strong>什么都知道，能出主意、写文档，但它<strong>不直接触碰</strong>你的本地文件。
                    </p>
                </div>
                <div class="toggle-icon">+</div>
            </div>
            <div class="expand-content">
                <div class="expand-content-inner">
                    <p style="font-size: 1rem; margin-bottom: 0.5rem;">🌍 <strong>国际顶尖水平：</strong>ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google)</p>
                    <p style="font-size: 1rem; margin-bottom: 0;">🇨🇳 <strong>国内优质平替：</strong>DeepSeek (深度求索), GLM (智谱清言), 豆包 (字节跳动), Kimi (月之暗面)</p>
                </div>
            </div>
        </div>

        <!-- 双手 -->
        <div class="card expand-card" style="border-left: 4px solid var(--accent);">
            <div class="expand-header">
                <div style="flex: 1;">
                    <h3 style="margin-top:0; color: #b45309;">🛠️ Coding Agent —— “带工具进场的熟练技工” (双手)</h3>
                    <p style="font-size: 1rem; margin-bottom: 0;">
                        <strong>特点：</strong>不仅有脑子还有手。能读文件、运行代码、改错，是效率提升的<strong>核心飞跃</strong>（带同事落地的关键）。
                    </p>
                </div>
                <div class="toggle-icon">+</div>
            </div>
            <div class="expand-content">
                <div class="expand-content-inner">
                    <p style="font-size: 1rem; margin-bottom: 0.5rem;">🌍 <strong>国际顶尖水平：</strong>Cursor, Claude Code, GitHub Copilot, Antigravity, Open Code</p>
                    <p style="font-size: 1rem; margin-bottom: 0;">🇨🇳 <strong>国内优质平替：</strong>Trae (字节跳动), 通义灵码 (阿里云)</p>
                </div>
            </div>
        </div>

        <!-- 能量 -->
        <div class="card expand-card" style="background: #f8fafc; border: 1px dashed #cbd5e1;">
            <div class="expand-header">
                <div style="flex: 1;">
                    <h3 style="margin-top:0; color: #475569;">🏭 底层基础设施 —— 算力云厂商 (能量/电力和工厂)</h3>
                    <p style="font-size: 1rem; margin-bottom: 0;">
                        <strong>特点：</strong>为上述“大脑”和“双手”提供底层的算力电力与云端部署能力支撑。
                    </p>
                </div>
                <div class="toggle-icon">+</div>
            </div>
            <div class="expand-content">
                <div class="expand-content-inner">
                    <p style="font-size: 1rem; margin-bottom: 0.5rem;">🌍 <strong>国际顶尖水平：</strong>AWS (亚马逊), Microsoft Azure, Google Cloud</p>
                    <p style="font-size: 1rem; margin-bottom: 0;">🇨🇳 <strong>国内优质平替：</strong>阿里云, 腾讯云, 华为云</p>
                </div>
            </div>
        </div>

        <!-- 隐藏的基石：芯片 -->
        <div id="hidden-chip-layer" class="card" style="background: #111827; color: #fff; border: 1px solid #76b900; opacity: 0; display: none; transform: translateY(10px); transition: opacity 0.5s, transform 0.5s;">
            <div style="flex: 1;">
                <h3 style="margin-top:0; color: #76b900;">🏎️ 算力基石 —— 硬件芯片 (Nvidia等)</h3>
                <p style="font-size: 1rem; margin-bottom: 0; color: #cbd5e1;">
                    <strong>特点：</strong>所有AI能力真正的物理载体。因为我们非技术人员极大概率不会直接接触到它，所以它一直在幕后默默燃烧。
                </p>
            </div>
        </div>

        <!-- 触发隐藏层按钮 -->
        <div style="text-align: right; margin-top: -0.5rem;">
            <span id="reveal-chip-btn" style="cursor: pointer; opacity: 0.3; font-size: 0.8rem; transition: opacity 0.3s; color: #64748b;">[ 探寻更底层的秘密... ]</span>
        </div>

    </div>
    
    <div class="slide-number">2 / 9</div>
`;
