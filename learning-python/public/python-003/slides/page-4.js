import { html } from '../app.js';

export default html`
    <h2>取余数 % (模运算) 🎲</h2>
    
    <p style="font-size: 1.3rem;">取余数就是：除完之后<strong>剩下多少</strong>？</p>
    
    <div style="display: flex; justify-content: center; margin: 20px 0;">
        <div class="operator-card" style="border-color: #22c55e;">
            <div class="operator-symbol" style="color: #22c55e;">%</div>
            <div class="operator-name">取余数</div>
        </div>
    </div>
    
    <div style="background: #1e293b; padding: 20px 30px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1.1rem; color: #e2e8f0; margin: 15px 0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #e5c07b;">print</span>(<span style="color: #d19a66;">10</span> % <span style="color: #d19a66;">3</span>)   <span style="color: #5c6370;"># 输出: 1  (10÷3=3余1)</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #d19a66;">7</span> % <span style="color: #d19a66;">2</span>)    <span style="color: #5c6370;"># 输出: 1  (7÷2=3余1)</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #d19a66;">8</span> % <span style="color: #d19a66;">2</span>)    <span style="color: #5c6370;"># 输出: 0  (8÷2=4余0)</span>
        </pre>
    </div>
    
    <div style="background: linear-gradient(135deg, #dcfce7, #bbf7d0); padding: 20px; border-radius: 15px; border: 2px solid #22c55e;">
        <p style="font-size: 1.3rem; margin: 0; color: #166534;">
            🔮 <strong>神奇用法</strong>：判断奇数偶数！
        </p>
        <p style="font-size: 1.1rem; margin: 10px 0 0 0; color: #166534;">
            如果 <code style="background: #fff; padding: 2px 6px; border-radius: 4px;">n % 2 == 0</code>，n 是偶数<br>
            如果 <code style="background: #fff; padding: 2px 6px; border-radius: 4px;">n % 2 == 1</code>，n 是奇数
        </p>
    </div>
`;
