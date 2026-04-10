import { html } from '../app.js';

export default html`
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <div class="emoji-lg">🎉</div>
        <h1>恭喜完成！</h1>
        
        <div style="background: linear-gradient(135deg, #dbeafe, #fce7f3); padding: 30px; border-radius: 25px; margin: 20px 0;">
            <h2 style="color: #8b5cf6; margin-bottom: 15px;">今天学到了什么？</h2>
            <ul style="text-align: left;">
                <li>计算机用<strong>二进制</strong>（只有0和1）</li>
                <li>二进制是<strong>逢二进一</strong></li>
                <li>Python 用 <code style="background: #1e293b; color: #a5b4fc; padding: 3px 8px; border-radius: 5px;">bin()</code> 转换二进制</li>
                <li>图像可以用<strong>0和1</strong>表示！</li>
            </ul>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 15px;">
            <p style="font-size: 1.3rem;">🚀 <strong>挑战</strong>：用 Turtle 画出你自己设计的像素画！</p>
            <p style="font-size: 1rem; color: #92400e;">提示：用循环遍历列表，遇到 1 就画方块</p>
        </div>
    </div>
`;
