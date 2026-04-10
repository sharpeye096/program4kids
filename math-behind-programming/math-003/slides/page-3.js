import { html } from '../app.js';

export default html`
    <h2>概率与 π 的神奇联系</h2>
    
    <div style="display: flex; gap: 30px; justify-content: center; margin: 20px 0;">
        <div style="background: #dbeafe; padding: 25px; border-radius: 20px; text-align: center;">
            <p style="font-size: 1.2rem;">正方形面积</p>
            <p style="font-size: 2.5rem; font-weight: bold; color: #1d4ed8;">(2r)² = 4r²</p>
        </div>
        <div style="background: #fee2e2; padding: 25px; border-radius: 20px; text-align: center;">
            <p style="font-size: 1.2rem;">圆的面积</p>
            <p style="font-size: 2.5rem; font-weight: bold; color: #ef4444;">πr²</p>
        </div>
    </div>
    
    <div style="background: #f0fdf4; padding: 25px; border-radius: 20px; border-left: 4px solid #22c55e;">
        <p style="font-size: 1.3rem;">落在圆内的概率 = <strong>圆面积 ÷ 正方形面积</strong></p>
        <p style="font-size: 2rem; color: #16a34a;">= πr² ÷ 4r² = <strong>π / 4</strong></p>
    </div>
    
    <p style="margin-top: 15px; font-size: 1.3rem;">所以：<strong style="color: #8b5cf6;">π ≈ 4 × (圆内点数 ÷ 总点数)</strong></p>
`;
