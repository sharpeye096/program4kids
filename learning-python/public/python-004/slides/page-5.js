import { html } from '../app.js';

export default html`
    <h2>返回值 return 📤</h2>
    
    <p style="font-size: 1.2rem;"><code style="background: #e2e8f0; padding: 3px 8px; border-radius: 5px; font-weight: bold;">return</code> 把结果返回给调用者！</p>
    
    <div style="background: #1e293b; padding: 20px 28px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #e2e8f0; margin: 20px 0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #5c6370;"># 有返回值的函数</span>
<span style="color: #c678dd;">def</span> <span style="color: #61afef;">add</span>(<span style="color: #7dd3fc;">a</span>, <span style="color: #7dd3fc;">b</span>):
    <span style="color: #c678dd;">return</span> <span style="color: #7dd3fc;">a</span> + <span style="color: #7dd3fc;">b</span>   <span style="color: #5c6370;"># 返回结果</span>

<span style="color: #7dd3fc;">result</span> = <span style="color: #61afef;">add</span>(<span style="color: #d19a66;">3</span>, <span style="color: #d19a66;">5</span>)  <span style="color: #5c6370;"># result = 8</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">result</span>)         <span style="color: #5c6370;"># 输出: 8</span>

<span style="color: #5c6370;"># 可以直接使用返回值</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #61afef;">add</span>(<span style="color: #d19a66;">10</span>, <span style="color: #d19a66;">20</span>))    <span style="color: #5c6370;"># 输出: 30</span>
        </pre>
    </div>
    
    <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
        <div style="background: #f0f9ff; padding: 15px 20px; border-radius: 12px; border: 2px solid #3b82f6; text-align: center;">
            <p style="margin: 0; font-size: 1rem; color: #1e40af;">
                <strong>print()</strong><br>直接打印，不能存起来
            </p>
        </div>
        <div style="background: #f0fdf4; padding: 15px 20px; border-radius: 12px; border: 2px solid #22c55e; text-align: center;">
            <p style="margin: 0; font-size: 1rem; color: #166534;">
                <strong>return</strong><br>返回结果，可以存起来用
            </p>
        </div>
    </div>
`;
