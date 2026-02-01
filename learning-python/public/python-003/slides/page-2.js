import { html } from '../app.js';

export default html`
    <h2>加法 ➕ 和 减法 ➖</h2>
    
    <p style="font-size: 1.3rem;">Python 可以像计算器一样帮你做数学！</p>
    
    <div style="display: flex; justify-content: center; gap: 40px; margin: 25px 0; flex-wrap: wrap;">
        <div class="operator-card">
            <div class="operator-symbol">+</div>
            <div class="operator-name">加法</div>
        </div>
        <div class="operator-card">
            <div class="operator-symbol">-</div>
            <div class="operator-name">减法</div>
        </div>
    </div>
    
    <div style="background: #1e293b; padding: 20px 30px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1.1rem; color: #e2e8f0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #7dd3fc;">a</span> = <span style="color: #d19a66;">5</span>
<span style="color: #7dd3fc;">b</span> = <span style="color: #d19a66;">3</span>

<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">a</span> + <span style="color: #7dd3fc;">b</span>)   <span style="color: #5c6370;"># 输出: 8</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">a</span> - <span style="color: #7dd3fc;">b</span>)   <span style="color: #5c6370;"># 输出: 2</span>
        </pre>
    </div>
    
    <p style="margin-top: 20px; font-size: 1.2rem; background: linear-gradient(135deg, #8b5cf6, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold;">
        🎯 就像你在数学课学的一样！
    </p>
`;
