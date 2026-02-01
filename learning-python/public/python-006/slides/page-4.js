import { html } from '../app.js';

export default html`
    <h2>传递下去 (Inductive Step) 🔗</h2>
    
    <p style="font-size: 1.1rem;">如果第 <strong>n-1</strong> 张倒了，第 <strong>n</strong> 张就一定会倒！</p>
    
    <div style="display: flex; justify-content: center; gap: 20px; margin: 25px 0; align-items: center;">
        <div style="display: flex; gap: 5px; align-items: flex-end;">
            <div class="domino fallen" style="transform: rotate(70deg);"></div>
            <div style="font-size: 2rem;">💥</div>
            <div class="domino"></div>
        </div>
    </div>

    <div style="background: #2e1065; padding: 20px 30px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; color: #e9d5ff; margin: 0 auto;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c678dd;">def</span> <span style="color: #61afef;">func</span>(<span style="color: #d19a66;">n</span>):
    ...
    <span style="color: #c678dd;">return</span> <span style="color: #d19a66;">n</span> + <span style="color: #61afef;">func</span>(<span style="color: #d19a66;">n</span>-<span style="color: #d19a66;">1</span>)
    <span style="color: #5c6370;"># 我做完我的事，剩下的交给前一个！</span>
        </pre>
    </div>
    
    <p style="margin-top: 20px; font-weight: bold; color: var(--primary);">
        "我相信前一个骨牌会完成它的任务！"
    </p>
`;
