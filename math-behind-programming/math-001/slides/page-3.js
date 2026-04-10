import { html } from '../app.js';

export default html`
    <h2>这就是模运算！</h2>
    
    <div style="display: flex; gap: 30px; justify-content: center; margin: 20px 0;">
        <div style="background: #fef3c7; padding: 25px; border-radius: 20px; text-align: center;">
            <p style="font-size: 1.2rem; margin-bottom: 10px;">普通算术</p>
            <p style="font-size: 2.5rem; font-weight: bold; color: #92400e;">14</p>
            <p style="font-size: 1rem;">10 + 4 = 14</p>
        </div>
        <div style="font-size: 3rem; align-self: center;">➡️</div>
        <div style="background: #dbeafe; padding: 25px; border-radius: 20px; text-align: center;">
            <p style="font-size: 1.2rem; margin-bottom: 10px;">时钟算术 (模 12)</p>
            <p style="font-size: 2.5rem; font-weight: bold; color: #1d4ed8;">2</p>
            <p style="font-size: 1rem;">14 ÷ 12 = 1 余 <strong>2</strong></p>
        </div>
    </div>
    
    <div style="background: #f0fdf4; padding: 20px; border-radius: 20px; border-left: 4px solid #22c55e;">
        <p><strong>模运算</strong>就是只看<strong>余数</strong>！</p>
        <p style="font-size: 1.2rem;">记号：14 mod 12 = 2</p>
    </div>
`;
