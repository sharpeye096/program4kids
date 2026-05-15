import { html } from '../app.js';

export const onMount = (container) => {
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
            background: linear-gradient(135deg, #fef3c7, #fde68a);
            color: #92400e;
            font-size: 1rem;
            font-weight: 600;
            padding: 6px 18px;
            border-radius: 20px;
            margin-bottom: 1.5rem;
            letter-spacing: 1px;
        }
        .cover-title {
            font-size: 3.6rem;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #7c3aed 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .cover-subtitle {
            font-size: 1.3rem;
            color: #475569;
            margin-bottom: 3rem;
            font-weight: 500;
        }
        .cover-goals {
            display: flex;
            gap: 1.2rem;
            margin-bottom: 2.5rem;
            flex-wrap: wrap;
            justify-content: center;
        }
        .goal-chip {
            display: flex;
            align-items: center;
            gap: 8px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            padding: 0.65rem 1rem;
            border-radius: 10px;
            font-size: 1.05rem;
            color: #334155;
            font-weight: 500;
            transition: all 0.3s;
        }
        .goal-chip:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 16px -4px rgba(0,0,0,0.1);
            border-color: #fcd34d;
        }
        .goal-icon { font-size: 1.35rem; }
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
        <span class="float-icon" style="top: 8%; left: 8%;">💻</span>
        <span class="float-icon" style="top: 15%; right: 12%;">📁</span>
        <span class="float-icon" style="bottom: 20%; left: 10%;">🤖</span>
        <span class="float-icon" style="bottom: 12%; right: 8%;">🛠️</span>
        <span class="float-icon" style="top: 45%; left: 5%;">⚡</span>
        <span class="float-icon" style="top: 40%; right: 5%;">📝</span>

        <div class="cover-badge">CLAUDE CODE · 实战入门 · 2026</div>

        <h1 class="cover-title">写给非技术人员的<br/>Claude Code 实战入门指南</h1>

        <p class="cover-subtitle">自然语言，就是 AI 时代的编程语言<br/><span style="font-size:1rem;color:#94a3b8;">不写一行代码，也能让 AI 替你做事</span></p>

        <div class="cover-goals">
            <div class="goal-chip">
                <span class="goal-icon">🏠</span> 建立安全沙盒
            </div>
            <div class="goal-chip">
                <span class="goal-icon">📋</span> 给 AI 立规矩
            </div>
            <div class="goal-chip">
                <span class="goal-icon">🎯</span> 高效驾驭 AI
            </div>
            <div class="goal-chip">
                <span class="goal-icon">🧰</span> 固化常用绝招
            </div>
        </div>

        <p class="cover-hint">按 <kbd>→</kbd> 或点击右下角箭头开始</p>
    </div>
`;
