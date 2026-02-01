import { html } from '../app.js';

export default html`
    <h2>幸运抛硬币 🪙</h2>
    
    <p style="font-size: 1.1rem;">程序也可以靠<strong>运气</strong>！来试试 <code style="background: #fdf2f8; color: #db2777; padding: 2px 6px; border-radius: 4px;">random</code> 模块！</p>
    
    <div style="display: flex; gap: 20px; justify-content: center; align-items: flex-start; margin: 15px 0;">
        
        <!-- Code Display -->
        <div style="background: #1e293b; padding: 20px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 0.95rem; color: #e2e8f0; width: 45%;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c678dd;">import</span> <span style="color: #e06c75;">random</span>

<span style="color: #5c6370;"># 随机生成 0 或 1</span>
<span style="color: #7dd3fc;">coin</span> = <span style="color: #e06c75;">random</span>.<span style="color: #61afef;">randint</span>(<span style="color: #d19a66;">0</span>, <span style="color: #d19a66;">1</span>)

<span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"硬币是："</span>, <span style="color: #7dd3fc;">coin</span>)

<span style="color: #c678dd;">if</span> <span style="color: #7dd3fc;">coin</span> == <span style="color: #d19a66;">0</span>:
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"正面！👑"</span>)
<span style="color: #c678dd;">else</span>:
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"反面！🌸"</span>)
            </pre>
        </div>
        
        <!-- Interactive Area -->
        <div style="width: 45%; display: flex; flex-direction: column; align-items: center; gap: 15px;">
            <div id="coin-display" style="width: 120px; height: 120px; background: #fbbf24; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 3.5rem; border: 8px solid #f59e0b; box-shadow: 0 8px 0 rgba(0,0,0,0.1); transition: transform 0.5s;">
                ❓
            </div>
            
            <button id="flip-btn" style="padding: 15px 30px; font-size: 1.3rem; border-radius: 50px; background: #8b5cf6; margin-top: 10px;">
                🎲 抛硬币！
            </button>
            
            <div id="result-text" style="font-size: 1.5rem; font-weight: bold; min-height: 40px; color: #4b5563;">
                准备...
            </div>
        </div>
    </div>
`;

export const onMount = (container) => {
    const flipBtn = container.querySelector('#flip-btn');
    const coinDisplay = container.querySelector('#coin-display');
    const resultText = container.querySelector('#result-text');

    flipBtn.onclick = () => {
        // Animation
        coinDisplay.style.transform = "rotateY(720deg) scale(1.1)";
        resultText.innerHTML = "抛掷中...";
        flipBtn.disabled = true;

        setTimeout(() => {
            const isHeads = Math.random() < 0.5; // Simulate random.randint(0, 1)
            const coinValue = isHeads ? 0 : 1;

            coinDisplay.style.transform = "rotateY(0) scale(1)";
            coinDisplay.innerHTML = isHeads ? "👑" : "🌸"; // Crown for Heads, Flower for Tails
            coinDisplay.style.background = isHeads ? "#fbbf24" : "#e2e8f0";
            coinDisplay.style.borderColor = isHeads ? "#f59e0b" : "#cbd5e1";

            resultText.innerHTML = isHeads
                ? `<span style="color: #d97706">0: 正面！</span>`
                : `<span style="color: #475569">1: 反面！</span>`;

            flipBtn.disabled = false;
        }, 600);
    };
};
