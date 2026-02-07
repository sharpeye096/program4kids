import { html } from '../app.js';

export default html`
    <h2>一个有趣的实验 🌧️</h2>
    
    <div style="display: flex; gap: 40px; align-items: center; justify-content: center;">
        <div style="position: relative; width: 250px; height: 250px; background: #dbeafe; border: 4px solid #3b82f6; border-radius: 10px;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; height: 200px; border: 4px solid #ef4444; border-radius: 50%;"></div>
            <p style="position: absolute; bottom: -50px; width: 100%; text-align: center; font-size: 1.2rem;">正方形里有个圆</p>
        </div>
    </div>
    
    <div style="background: #fef3c7; padding: 20px; border-radius: 20px; margin-top: 60px;">
        <p>想象你闭着眼睛往正方形里扔小球...</p>
        <p>🤔 <strong>问题</strong>：有多大概率会落在圆内？</p>
    </div>
`;
