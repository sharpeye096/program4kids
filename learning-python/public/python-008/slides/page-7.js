import { html } from '../app.js';

export default html`
    <h2>循环中的输入 (Input) 🎮</h2>
    
    <p style="font-size: 1.1rem;">如果把 Input 放在循环里，就可以<strong>一直问问题</strong>！</p>
    
    <div style="background: #fff; padding: 20px; border-radius: 20px; border: 3px solid var(--primary); box-shadow: var(--shadow-float); margin: 20px 0;">
        <h3 style="color: var(--primary); margin-top: 0;">猜数字核心逻辑</h3>
        <div style="text-align: left; font-family: 'Consolas', monospace; color: #333; font-size: 0.95rem; line-height: 1.8;">
            <span style="color: #c084fc;">while</span> <span style="color: #059669;">True</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #60a5fa;">guess</span> = <span style="color: #db2777;">int</span>(<span style="color: #db2777;">input</span>(<span style="color: #059669;">"猜个数: "</span>))<br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c084fc;">if</span> <span style="color: #60a5fa;">guess</span> == <span style="color: #db2777;">88</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #db2777;">print</span>(<span style="color: #059669;">"猜对了！"</span>)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c084fc;">break</span> <span style="color: #9ca3af;"># 退出游戏</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c084fc;">else</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #db2777;">print</span>(<span style="color: #059669;">"猜错了，再试一次！"</span>)
        </div>
    </div>
    
    <p style="font-size: 1rem; color: #666;">
        如果不写 break，玩家永远赢不了... 或者永远输不了？🤔
    </p>
`;
