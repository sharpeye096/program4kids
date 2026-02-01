import { html } from '../app.js';

export default html`
    <h2>乘法 ✖️ 和 除法 ➗</h2>
    
    <p style="font-size: 1.3rem;">Python 用 <code style="background: #e2e8f0; padding: 3px 8px; border-radius: 5px;">*</code> 表示乘法，<code style="background: #e2e8f0; padding: 3px 8px; border-radius: 5px;">/</code> 表示除法！</p>
    
    <div style="display: flex; justify-content: center; gap: 30px; margin: 25px 0; flex-wrap: wrap;">
        <div class="operator-card">
            <div class="operator-symbol">*</div>
            <div class="operator-name">乘法</div>
        </div>
        <div class="operator-card">
            <div class="operator-symbol">/</div>
            <div class="operator-name">除法</div>
        </div>
        <div class="operator-card" style="border-color: #f59e0b;">
            <div class="operator-symbol" style="color: #f59e0b;">//</div>
            <div class="operator-name">整除</div>
        </div>
    </div>
    
    <div style="background: #1e293b; padding: 20px 30px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #e2e8f0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #7dd3fc;">a</span> = <span style="color: #d19a66;">10</span>
<span style="color: #7dd3fc;">b</span> = <span style="color: #d19a66;">3</span>

<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">a</span> * <span style="color: #7dd3fc;">b</span>)   <span style="color: #5c6370;"># 输出: 30  (乘法)</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">a</span> / <span style="color: #7dd3fc;">b</span>)   <span style="color: #5c6370;"># 输出: 3.333... (除法)</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">a</span> // <span style="color: #7dd3fc;">b</span>)  <span style="color: #5c6370;"># 输出: 3  (整除，只取整数部分)</span>
        </pre>
    </div>
    
    <p style="margin-top: 15px; font-size: 1.1rem; color: #f59e0b; font-weight: bold;">
        💡 整除 // 会把小数点后面的数字去掉！
    </p>
`;
