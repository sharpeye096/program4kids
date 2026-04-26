import { html } from '../app.js';

export const onMount = (container) => {
    // Animate the floating icons
    const icons = container.querySelectorAll('.float-icon');
    icons.forEach((icon, i) => {
        icon.style.animationDelay = `${i * 0.3}s`;
    });
};

export default html`
    <style>
        .cover-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 100%;
            position: relative;
            overflow: hidden;
        }
        .cover-badge {
            display: inline-block;
            background: linear-gradient(135deg, #dbeafe, #ede9fe);
            color: #3b82f6;
            font-size: 1rem;
            font-weight: 600;
            padding: 6px 18px;
            border-radius: 20px;
            margin-bottom: 1.5rem;
            letter-spacing: 1px;
        }
        .cover-title {
            font-size: 3.8rem;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1.2rem;
            background: linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #7c3aed 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .cover-sub {
            font-size: 1.5rem;
            color: #64748b;
            margin-bottom: 2.5rem;
            max-width: 700px;
        }
        .cover-goals {
            display: flex;
            gap: 1.2rem;
            margin-bottom: 2rem;
        }
        .goal-chip {
            display: flex;
            align-items: center;
            gap: 8px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            padding: 0.7rem 1.2rem;
            border-radius: 10px;
            font-size: 1.1rem;
            color: #334155;
            font-weight: 500;
            transition: all 0.3s;
        }
        .goal-chip:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 16px -4px rgba(0,0,0,0.1);
            border-color: #bae6fd;
        }
        .goal-icon {
            font-size: 1.4rem;
        }
        .cover-hint {
            font-size: 0.9rem;
            color: #94a3b8;
        }
        .cover-hint kbd {
            background: #f1f5f9;
            border: 1px solid #cbd5e1;
            border-radius: 4px;
            padding: 2px 8px;
            font-family: inherit;
            font-size: 0.85rem;
        }
        .float-icon {
            position: absolute;
            font-size: 2rem;
            opacity: 0.12;
            animation: floatUp 6s ease-in-out infinite;
        }
        @keyframes floatUp {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
        }
    </style>

    <div class="cover-wrap">
        <!-- Decorative floating icons -->
        <span class="float-icon" style="top: 8%; left: 8%;">🧠</span>
        <span class="float-icon" style="top: 15%; right: 12%;">🤖</span>
        <span class="float-icon" style="bottom: 20%; left: 10%;">⚡</span>
        <span class="float-icon" style="bottom: 12%; right: 8%;">🚀</span>
        <span class="float-icon" style="top: 45%; left: 5%;">💡</span>
        <span class="float-icon" style="top: 40%; right: 5%;">🛠️</span>

        <div class="cover-badge">AI EFFICIENCY · 2026</div>
        
        <h1 class="cover-title">非技术人员如何使用<br>AI 提升工作效能</h1>
        
        <div style="max-width: 850px; margin: 0 auto 3rem auto; position: relative; padding: 0 2rem;">
            <!-- 装饰性大引号 -->
            <div style="position: absolute; top: -2rem; left: -1.5rem; font-family: 'Times New Roman', serif; font-size: 7rem; color: #3b82f6; opacity: 0.12; line-height: 1; pointer-events: none;">&ldquo;</div>
            
            <!-- 名言内容：使用衬线字体提升高级感 -->
            <p style="font-size: 1.6rem; color: #1e293b; font-family: 'Georgia', 'Times New Roman', serif; font-style: italic; font-weight: 500; line-height: 1.6; margin: 0 0 1.2rem 0; position: relative; z-index: 1; text-align: left;">
                You're not going to lose your job to AI. You're going to lose your job to someone who uses AI, so get to it, that's the most important thing.
            </p>
            
            <!-- 右对齐的作者署名 -->
            <p style="font-size: 1.15rem; color: #64748b; margin: 0; text-align: right; font-weight: 600; letter-spacing: 0.5px;">
                —— Jensen Huang (黄仁勋)
            </p>
        </div>

        <div class="cover-goals">
            <div class="goal-chip">
                <span class="goal-icon">🗺️</span> 认识 AI 工具版图
            </div>
            <div class="goal-chip">
                <span class="goal-icon">💻</span> 理解写代码新范式
            </div>
            <div class="goal-chip">
                <span class="goal-icon">🎯</span> 掌握提效核心理念
            </div>
        </div>

        <p class="cover-hint">按 <kbd>→</kbd> 或点击右下角箭头开始</p>
    </div>
`;
