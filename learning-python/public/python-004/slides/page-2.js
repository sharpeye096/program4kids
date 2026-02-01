import { html } from '../app.js';

export default html`
    <h2>函数是什么？🤔</h2>
    
    <p style="font-size: 1.3rem;">函数就像一个<strong>魔法盒子</strong>！</p>
    
    <div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin: 25px 0; font-size: 2rem;">
        <div style="text-align: center;">
            <div style="font-size: 3rem;">📥</div>
            <p style="font-size: 1rem; margin: 5px 0;">输入</p>
        </div>
        <span style="font-size: 2.5rem;">→</span>
        <div style="background: linear-gradient(135deg, #8b5cf6, #a78bfa); padding: 25px 35px; border-radius: 20px; color: #fff;">
            <div style="font-size: 2.5rem;">🔧</div>
            <p style="font-size: 1.1rem; margin: 5px 0;">函数</p>
        </div>
        <span style="font-size: 2.5rem;">→</span>
        <div style="text-align: center;">
            <div style="font-size: 3rem;">📤</div>
            <p style="font-size: 1rem; margin: 5px 0;">输出</p>
        </div>
    </div>
    
    <div style="display: flex; gap: 25px; justify-content: center; flex-wrap: wrap; margin-top: 20px;">
        <div style="background: #f0fdf4; padding: 15px 20px; border-radius: 12px; border: 2px solid #22c55e;">
            <p style="margin: 0; font-size: 1rem; color: #166534;">✅ 代码可以重复使用</p>
        </div>
        <div style="background: #f0fdf4; padding: 15px 20px; border-radius: 12px; border: 2px solid #22c55e;">
            <p style="margin: 0; font-size: 1rem; color: #166534;">✅ 让程序更整齐</p>
        </div>
        <div style="background: #f0fdf4; padding: 15px 20px; border-radius: 12px; border: 2px solid #22c55e;">
            <p style="margin: 0; font-size: 1rem; color: #166534;">✅ 容易理解和修改</p>
        </div>
    </div>
`;
