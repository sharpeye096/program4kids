import { html } from '../app.js';

export default html`
    <h2>紧急出口 (Break) 🛑</h2>
    
    <p style="font-size: 1.1rem;">用 <code style="background: #5b21b6; color: #fff; padding: 2px 6px; border-radius: 4px;">break</code> 随时跳出循环！</p>
    
    <div style="background: #1e1b4b; padding: 20px 30px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; color: #fbcfe8; margin: 20px 0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c084fc;">while</span> <span style="color: #f472b6;">True</span>:
    <span style="color: #fcd34d;">print</span>(<span style="color: #a7f3d0;">"正在玩游戏..."</span>)
    
    <span style="color: #c084fc;">if</span> <span style="color: #60a5fa;">game_over</span>:  <span style="color: #604537;"># 如果输了</span>
        <span style="color: #fcd34d;">print</span>(<span style="color: #a7f3d0;">"游戏结束！"</span>)
        <span style="color: #c084fc;">break</span>      <span style="color: #604537;"># 跳出循环！🏃💨</span>
        
<span style="color: #fcd34d;">print</span>(<span style="color: #a7f3d0;">"再见！"</span>)
        </pre>
    </div>
    
    <div style="display: flex; gap: 40px; justify-content: center;">
        <div style="text-align: center;">
            <div style="font-size: 3rem;">🔄</div>
            <p style="margin: 0;">while loop</p>
        </div>
        <div style="font-size: 3rem;">➡️</div>
        <div style="text-align: center;">
            <div style="font-size: 3rem;">🚪</div>
            <p style="margin: 0;">break</p>
        </div>
    </div>
`;
