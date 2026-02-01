import { html } from '../app.js';

export default html`
    <h2>第一张骨牌 (Base Case) 1️⃣</h2>
    
    <p style="font-size: 1.2rem;">如果没有人推<strong>第一张</strong>，什么都不会发生！</p>
    
    <div style="display: flex; justify-content: center; gap: 40px; margin: 30px 0; align-items: center;">
        <div style="text-align: center;">
            <div style="font-size: 4rem;">👆</div>
            <p style="font-weight: bold; color: var(--primary);">一定要推第一张！</p>
        </div>
        
        <div style="background: #2e1065; padding: 20px 30px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; color: #e9d5ff;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c678dd;">def</span> <span style="color: #61afef;">func</span>(<span style="color: #d19a66;">n</span>):
    <span style="color: #c678dd;">if</span> <span style="color: #d19a66;">n</span> == <span style="color: #d19a66;">1</span>:   <span style="color: #5c6370;"># 第一张骨牌</span>
        <span style="color: #c678dd;">return</span> <span style="color: #d19a66;">1</span>  <span style="color: #5c6370;"># 必须有结果！</span>
            </pre>
        </div>
    </div>
    
    <div style="background: #fee2e2; padding: 15px 25px; border-radius: 12px; border: 2px solid #ef4444; max-width: 600px; margin: 0 auto;">
        <p style="margin: 0; font-size: 1rem; color: #991b1b;">
            ❌ <strong>如果忘了这行代码？</strong><br>
            程序会一直跑下去，直到电脑累死（报错）！
        </p>
    </div>
`;
