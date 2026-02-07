import { html } from '../app.js';

export default html`
    <h2>大自然中的斐波那契 🌻</h2>
    
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin: 20px 0;">
        <div style="background: #fef3c7; padding: 20px; border-radius: 20px; text-align: center;">
            <span style="font-size: 4rem;">🌼</span>
            <p><strong>花瓣</strong></p>
            <p style="font-size: 1.2rem;">3, 5, 8, 13 片</p>
        </div>
        
        <div style="background: #dbeafe; padding: 20px; border-radius: 20px; text-align: center;">
            <span style="font-size: 4rem;">🌻</span>
            <p><strong>向日葵籽</strong></p>
            <p style="font-size: 1.2rem;">螺旋线 21, 34 条</p>
        </div>
        
        <div style="background: #dcfce7; padding: 20px; border-radius: 20px; text-align: center;">
            <span style="font-size: 4rem;">🐚</span>
            <p><strong>鹦鹉螺</strong></p>
            <p style="font-size: 1.2rem;">黄金螺旋</p>
        </div>
    </div>
    
    <div style="background: #fce7f3; padding: 15px; border-radius: 15px;">
        <p>🤯 大自然似乎也在用<strong>斐波那契数列</strong>编程！</p>
    </div>
`;
