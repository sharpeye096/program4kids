import { html } from '../app.js';

export default html`
    <h2>🕵️ 侦探的放大镜</h2>
    <p>电脑分得清 <strong style="color: #ef4444">=</strong> 和 <strong style="color: #22c55e">==</strong> 的区别吗？</p>

    <div style="display: flex; gap: 40px; justify-content: center; margin-top: 30px; flex-wrap: wrap;">
        
        <!-- Assignment -->
        <div style="background: #fff; padding: 20px; border-radius: 20px; border: 4px solid #ef4444; width: 300px; position: relative;">
            <div style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); background: #ef4444; color: white; padding: 5px 15px; border-radius: 10px; font-weight: bold;">命令 (Command)</div>
            <h3 style="font-size: 4rem; margin: 20px 0;">=</h3>
            <p style="font-size: 1.5rem;">"放入"</p>
            <div style="background: #fecaca; padding: 10px; border-radius: 10px; margin-top: 10px;">
                <code>x = 5</code>
                <p style="font-size: 1rem; color: #7f1d1d; margin-top: 5px;">把 5 放进 x 盒子里！📦</p>
            </div>
        </div>

        <!-- Comparison -->
        <div style="background: #fff; padding: 20px; border-radius: 20px; border: 4px solid #22c55e; width: 300px; position: relative;">
            <div style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); background: #22c55e; color: white; padding: 5px 15px; border-radius: 10px; font-weight: bold;">提问 (Question)</div>
            <h3 style="font-size: 4rem; margin: 20px 0;">==</h3>
            <p style="font-size: 1.5rem;">"相等吗？"</p>
            <div style="background: #bbf7d0; padding: 10px; border-radius: 10px; margin-top: 10px;">
                <code>x == 5</code>
                <p style="font-size: 1rem; color: #14532d; margin-top: 5px;">x 里面是不是 5？🤔</p>
            </div>
        </div>

    </div>

    <div style="margin-top: 40px; font-size: 1.2rem; background: #f3f4f6; padding: 15px; border-radius: 15px; display: inline-block;">
        <p>记住：<strong>一个</strong>是做事，<strong>两个</strong>是问问题！</p>
    </div>
`;
