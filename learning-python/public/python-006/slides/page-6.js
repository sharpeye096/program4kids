import { html } from '../app.js';

export default html`
    <h2>递归求和 ➕</h2>
    
    <p style="font-size: 1.1rem;">任务：计算 <strong>1 + 2 + ... + n</strong> 的和</p>
    
    <div style="background: #2e1065; padding: 20px 30px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; color: #e9d5ff; margin: 20px auto;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c678dd;">def</span> <span style="color: #61afef;">sum_n</span>(<span style="color: #d19a66;">n</span>):
    <span style="color: #c678dd;">if</span> <span style="color: #d19a66;">n</span> == <span style="color: #d19a66;">1</span>:        <span style="color: #5c6370;"># Base Case</span>
        <span style="color: #c678dd;">return</span> <span style="color: #d19a66;">1</span>
    <span style="color: #c678dd;">else</span>:             <span style="color: #5c6370;"># Inductive Step</span>
        <span style="color: #c678dd;">return</span> <span style="color: #d19a66;">n</span> + <span style="color: #61afef;">sum_n</span>(<span style="color: #d19a66;">n</span>-<span style="color: #d19a66;">1</span>)

<span style="color: #e5c07b;">print</span>(<span style="color: #61afef;">sum_n</span>(<span style="color: #d19a66;">5</span>))   <span style="color: #5c6370;"># 输出: 15</span>
        </pre>
    </div>
    
    <p style="font-size: 1rem; color: var(--primary);">
        sum_n(5) = 5 + <span style="color: var(--secondary);">sum_n(4)</span><br>
        sum_n(4) = 4 + <span style="color: var(--secondary);">sum_n(3)</span><br>
        ...<br>
        sum_n(1) = 1 (停止!)
    </p>
`;
