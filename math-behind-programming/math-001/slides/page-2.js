import { html } from '../app.js';

export default html`
    <h2>想象一个时钟 ⏰</h2>
    <div style="display: flex; gap: 40px; align-items: center; justify-content: center;">
        <div style="text-align: center;">
            <span style="font-size: 8rem;">🕙</span>
            <p>现在是 <strong>10 点</strong></p>
        </div>
        <div style="font-size: 3rem;">➕</div>
        <div style="text-align: center;">
            <span style="font-size: 5rem;">4️⃣</span>
            <p>过了 <strong>4 小时</strong></p>
        </div>
        <div style="font-size: 3rem;">=</div>
        <div style="text-align: center;">
            <span style="font-size: 8rem;">🕑</span>
            <p>现在是 <strong>? 点</strong></p>
        </div>
    </div>
    
    <div style="background: #e0f2fe; padding: 20px; border-radius: 20px; margin-top: 20px;">
        <p>在时钟上，10 + 4 不是 14 点...</p>
        <p>而是 <strong style="color: #8b5cf6; font-size: 2rem;">2 点</strong>！</p>
    </div>
`;
