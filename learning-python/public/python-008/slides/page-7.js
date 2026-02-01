import { html } from '../app.js';

export default html`
    <h2>循环中的输入 (Input) 🎮</h2>
    
    <p style="font-size: 1.1rem;">如果把 Input 放在循环里，就可以<strong>一直问问题</strong>！</p>
    
    <div style="background: #1e293b; padding: 20px 25px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #e2e8f0; margin: 20px auto; max-width: 500px;">
        <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.9rem;">🎮 猜数字核心逻辑</p>
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c678dd;">while</span> <span style="color: #d19a66;">True</span>:
    <span style="color: #7dd3fc;">guess</span> = <span style="color: #e5c07b;">int</span>(<span style="color: #e5c07b;">input</span>(<span style="color: #98c379;">"猜个数: "</span>))

    <span style="color: #c678dd;">if</span> <span style="color: #7dd3fc;">guess</span> == <span style="color: #d19a66;">88</span>:
        <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"猜对了！"</span>)
        <span style="color: #c678dd;">break</span>  <span style="color: #5c6370;"># 退出游戏</span>
    <span style="color: #c678dd;">else</span>:
        <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"猜错了，再试一次！"</span>)
        </pre>
    </div>
    
    <p style="font-size: 1rem; color: #666;">
        如果不写 break，玩家永远赢不了... 或者永远输不了？🤔
    </p>
`;
