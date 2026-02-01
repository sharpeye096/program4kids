import { html } from '../app.js';

export default html`
    <h2>高斯的魔法公式 ⚡</h2>
    
    <p style="font-size: 1.1rem;">数学家高斯小时候发现了一个<strong>快速公式</strong>：</p>
    
    <div style="background: #fff; padding: 25px 40px; border-radius: 20px; border: 4px solid var(--accent); margin: 25px 0; display: inline-block; box-shadow: var(--shadow-float);">
        <h3 style="margin: 0; font-size: 2.5rem; color: var(--accent); font-family: 'Times New Roman', serif; font-style: italic;">
            sum = n × (n + 1) / 2
        </h3>
    </div>
    
    <div style="background: #f0fdf4; padding: 15px 25px; border-radius: 12px; border: 2px solid #22c55e; max-width: 600px; margin: 0 auto; text-align: left;">
        <p style="margin: 0; font-size: 1rem; color: #166534;">
            例如 n=100:<br>
            递归要算 100 次... 😫<br>
            公式只要算 1 次！ ⚡ 100 × 101 / 2 = 5050
        </p>
    </div>
`;
