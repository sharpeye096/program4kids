import { html } from '../app.js';

export default html`
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <div class="emoji-lg">🎉</div>
        <h1>恭喜完成！</h1>
        
        <div style="background: linear-gradient(135deg, #dbeafe, #fce7f3); padding: 30px; border-radius: 25px; margin: 20px 0;">
            <h2 style="color: #8b5cf6; margin-bottom: 15px;">今天学到了什么？</h2>
            <ul style="text-align: left;">
                <li><strong>蒙特卡洛方法</strong>用随机数解决问题</li>
                <li>圆内概率是 <strong>π / 4</strong></li>
                <li>扔的点越多，结果越<strong>准确</strong></li>
                <li>用 Turtle 画出了<strong>彩色雨点图</strong>！</li>
            </ul>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 15px;">
            <p style="font-size: 1.3rem;">🚀 <strong>挑战</strong>：试试扔 10000 个点！</p>
            <p style="font-size: 1rem; color: #92400e;">结果会更接近真正的 π = 3.14159265...</p>
        </div>
    </div>
`;
