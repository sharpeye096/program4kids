import { html } from '../app.js';

export default html`
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <div class="emoji-lg">🎉</div>
        <h1>恭喜完成！</h1>
        
        <div style="background: linear-gradient(135deg, #dbeafe, #fce7f3); padding: 30px; border-radius: 25px; margin: 20px 0;">
            <h2 style="color: #8b5cf6; margin-bottom: 15px;">今天学到了什么？</h2>
            <ul style="text-align: left;">
                <li>时钟算术就是<strong>模运算</strong></li>
                <li>Python 用 <code style="background: #1e293b; color: #a5b4fc; padding: 3px 8px; border-radius: 5px;">%</code> 来取余数</li>
                <li>模运算可以让索引<strong>永远循环</strong></li>
                <li>用 Turtle 画出了<strong>彩色螺旋</strong>！</li>
            </ul>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 15px;">
            <p style="font-size: 1.3rem;">🚀 <strong>挑战</strong>：试试用 6 种颜色画螺旋！</p>
            <p style="font-size: 1rem; color: #92400e;">提示：只需要改 colors 列表和 % 后面的数字</p>
        </div>
    </div>
`;
