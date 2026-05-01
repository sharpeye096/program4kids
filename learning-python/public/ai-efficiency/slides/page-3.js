import { html } from '../app.js';

export const onMount = (container) => {
    // Expand Logic for original cards
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
            void chipLayer.offsetWidth; // trigger reflow
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
            padding-top: 1.5rem;
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
        
        .badges-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 6px;
        }
        .badge {
            display: inline-flex;
            align-items: center;
            background: #f8fafc;
            padding: 4px 10px;
            border-radius: 6px;
            border: 1px solid #cbd5e1;
            font-size: 0.95rem;
            color: #1e293b;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .badge img {
            width: 16px;
            height: 16px;
            margin-right: 6px;
            border-radius: 3px;
        }
        .huge-title {
            font-size: 2.4rem; 
            margin-bottom: 2rem; 
            background: linear-gradient(90deg, #0f172a, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>

    <h2 class="huge-title">1. 开启AI提效的科学路径 (下)</h2>
    
    <div style="text-align: left; margin-bottom: 1.5rem;">
        <h3 style="color: #0f172a; margin-bottom: 0.5rem; font-size: 1.6rem;">⚡ 第二步：利用 AI 辅助编程与自动化架构</h3>
        <p style="font-size: 1.15rem; color: #475569;">当我们有了复杂的业务需求，需要跨软件打通或者写代码时，就可以使用下边不同层级的 <strong>AI 体系工具</strong>了：</p>
    </div>
    
    <div class="flex-col" style="gap: 1.2rem;">
        
        <!-- 大脑 -->
        <div class="card expand-card">
            <div class="expand-header">
                <div style="flex: 1; text-align: left;">
                    <h3 style="margin-top:0; color: #0369a1;">🧠 基础大模型 (Web端) —— "全能博学但手残的顾问" (大脑)</h3>
                    <p style="font-size: 1.05rem; margin-bottom: 0; color: #334155;">
                        <strong>特点：</strong>什么都知道，能出主意、写文档，但它<strong>不直接触碰</strong>你的本地文件和工作流。
                    </p>
                </div>
                <div class="toggle-icon">+</div>
            </div>
            <div class="expand-content">
                <div class="expand-content-inner" style="text-align: left;">
                    <p style="font-size: 1.05rem; margin-bottom: 0;">🌍 <strong>国际顶尖水平（御三家）：</strong></p>
                    <div class="badges-container" style="margin-bottom: 1rem;">
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=openai.com&sz=64"> ChatGPT (OpenAI)</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=anthropic.com&sz=64"> Claude (Anthropic)</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64"> Gemini (Google)</span>
                    </div>
                    
                    <p style="font-size: 1.05rem; margin-bottom: 0;">🇨🇳 <strong>国内优质平替：</strong></p>
                    <div class="badges-container">
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=deepseek.com&sz=64"> DeepSeek (深度求索)</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=chatglm.cn&sz=64"> GLM (智谱清言)</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=doubao.com&sz=64"> 豆包 (字节跳动)</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=kimi.moonshot.cn&sz=64"> Kimi (月之暗面)</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 双手 -->
        <div class="card expand-card" style="border-left: 4px solid var(--accent);">
            <div class="expand-header">
                <div style="flex: 1; text-align: left;">
                    <h3 style="margin-top:0; color: #b45309;">🛠️ AI Agent (智能体) —— "带工具进场的熟练技工" (双手)</h3>
                    <p style="font-size: 1.05rem; margin-bottom: 0; color: #334155;">
                        <strong>特点：</strong>不仅有脑子还有手。能主动读文件、运行代码、调用其他软件改错，是效率提升的<strong>核心飞跃</strong>。<br/>
                        <span style="display:inline-block; margin-top: 0.5rem; color: #64748b; font-size: 0.95rem;">💡 <em>注：大家常听说的 <strong>Coding Agent</strong>（编程智能体，如Cursor）属于 Agent 体系中专门用来写代码的一个细分品类。</em></span>
                    </p>
                </div>
                <div class="toggle-icon">+</div>
            </div>
            <div class="expand-content">
                <div class="expand-content-inner" style="text-align: left;">
                    <p style="font-size: 1.05rem; margin-bottom: 0;">💻 <strong>知名 Coding Agents (编程系)：</strong></p>
                    <div class="badges-container" style="margin-bottom: 1rem;">
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=cursor.com&sz=64"> Cursor</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=deepmind.google&sz=64"> Antigravity</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=anthropic.com&sz=64"> Claude Code</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=github.com&sz=64"> GitHub Copilot</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=trae.ai&sz=64"> Trae</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=tongyi.aliyun.com&sz=64"> 通义灵码</span>
                    </div>

                    <p style="font-size: 1.05rem; margin-bottom: 0;">🌍 <strong>通用 / 其他级别 Agents：</strong></p>
                    <div class="badges-container">
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=anthropic.com&sz=64"> Claude Cowork</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=openai.com&sz=64"> Operator (OpenAI即将推出的通用代办)</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 能量 -->
        <div class="card expand-card" style="background: #f8fafc; border: 1px dashed #cbd5e1;">
            <div class="expand-header">
                <div style="flex: 1; text-align: left;">
                    <h3 style="margin-top:0; color: #475569;">🏭 底层基础设施 —— 算力云厂商 (能量/电力和工厂)</h3>
                    <p style="font-size: 1.05rem; margin-bottom: 0; color: #334155;">
                        <strong>特点：</strong>为上述"大脑"和"双手"提供底层的算力电力与云端部署能力支撑。
                    </p>
                </div>
                <div class="toggle-icon">+</div>
            </div>
            <div class="expand-content">
                <div class="expand-content-inner" style="text-align: left;">
                    <p style="font-size: 1.05rem; margin-bottom: 0;">🌍 <strong>全球顶尖云厂商：</strong></p>
                    <div class="badges-container" style="margin-bottom: 1rem;">
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=64"> AWS (亚马逊)</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=64"> Azure (微软)</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=cloud.google.com&sz=64"> Google Cloud</span>
                    </div>
                    
                    <p style="font-size: 1.05rem; margin-bottom: 0;">🇨🇳 <strong>国内核心云厂商：</strong></p>
                    <div class="badges-container">
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=aliyun.com&sz=64"> 阿里云</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=cloud.tencent.com&sz=64"> 腾讯云</span>
                        <span class="badge"><img src="https://www.google.com/s2/favicons?domain=huaweicloud.com&sz=64"> 华为云</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 隐藏的基石：芯片 -->
        <div id="hidden-chip-layer" class="card" style="background: #111827; color: #fff; border: 1px solid #76b900; opacity: 0; display: none; transform: translateY(10px); transition: opacity 0.5s, transform 0.5s; text-align: left;">
            <div style="flex: 1;">
                <h3 style="margin-top:0; color: #76b900; display:flex; align-items:center;">
                    <img src="https://www.google.com/s2/favicons?domain=nvidia.com&sz=64" style="width:24px;height:24px;margin-right:8px;border-radius:4px;background:#fff;padding:2px;">
                    🏎️ 算力基石 —— 硬件芯片 (Nvidia)
                </h3>
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
    
    
`;
