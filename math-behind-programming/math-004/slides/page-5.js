import { html } from '../app.js';

export default html`
    <h2>🎨 实战项目：黄金螺旋</h2>
    <p>用斐波那契数列画出鹦鹉螺的形状！</p>
    
    <div style="display: flex; gap: 30px; align-items: center; justify-content: center;">
        <div style="background: #fef3c7; padding: 20px; border-radius: 15px;">
            <p style="font-size: 1.2rem; margin-bottom: 10px;"><strong>思路：</strong></p>
            <ul style="text-align: left; font-size: 1.1rem;">
                <li>画正方形</li>
                <li>边长 = 斐波那契数</li>
                <li>依次 1, 1, 2, 3, 5...</li>
                <li>每次旋转 90°</li>
            </ul>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(5, 20px); gap: 2px;">
            <div style="grid-column: 1/2; grid-row: 1/2; width: 20px; height: 20px; background: #3b82f6; opacity: 0.7;"></div>
            <div style="grid-column: 2/3; grid-row: 1/2; width: 20px; height: 20px; background: #8b5cf6; opacity: 0.7;"></div>
            <div style="grid-column: 1/3; grid-row: 2/4; width: 40px; height: 40px; background: #f472b6; opacity: 0.7;"></div>
            <div style="grid-column: 3/6; grid-row: 1/4; width: 60px; height: 60px; background: #f59e0b; opacity: 0.7;"></div>
        </div>
    </div>
    
    <p style="margin-top: 20px; font-size: 1.2rem;">🌀 连起来就是<strong>黄金螺旋</strong>！</p>
`;
