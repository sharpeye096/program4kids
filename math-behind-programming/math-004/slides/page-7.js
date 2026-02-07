import { html } from '../app.js';

export default html`
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <div class="emoji-lg">🎉</div>
        <h1>恭喜完成！</h1>
        
        <div style="background: linear-gradient(135deg, #dbeafe, #fce7f3); padding: 30px; border-radius: 25px; margin: 20px 0;">
            <h2 style="color: #8b5cf6; margin-bottom: 15px;">今天学到了什么？</h2>
            <ul style="text-align: left;">
                <li><strong>斐波那契数列</strong>：1, 1, 2, 3, 5, 8, 13...</li>
                <li>规则：<strong>前两个数相加</strong> = 下一个数</li>
                <li>大自然中到处都有这个规律！</li>
                <li>用 Turtle 画出了<strong>黄金螺旋</strong>！</li>
            </ul>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 15px;">
            <p style="font-size: 1.3rem;">🚀 <strong>挑战</strong>：试试用圆弧代替正方形！</p>
            <p style="font-size: 1rem; color: #92400e;">提示：用 t.circle(size, 90) 画四分之一圆</p>
        </div>
    </div>
`;
