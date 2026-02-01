import { html } from '../app.js';

export default html`
    <h2>for 循环 🔄</h2>
    
    <p style="font-size: 1.2rem;">让电脑<strong>重复做同样的事</strong>！</p>
    
    <div style="display: flex; justify-content: center; gap: 10px; margin: 15px 0;">
        <span style="font-size: 2.5rem;">🤖</span>
        <span style="font-size: 1.5rem; display: flex; align-items: center;">→ 1次 → 2次 → 3次 → ...</span>
    </div>
    
    <div style="display: flex; gap: 20px; justify-content: center; align-items: flex-start; flex-wrap: wrap; margin: 15px 0;">
        <!-- Code -->
        <div style="background: #1e293b; padding: 15px 20px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #e2e8f0;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #5c6370;"># 打印 5 次 "你好"</span>
<span style="color: #c678dd;">for</span> <span style="color: #7dd3fc;">i</span> <span style="color: #c678dd;">in</span> <span style="color: #e5c07b;">range</span>(<span style="color: #d19a66;">5</span>):
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"你好！"</span>)
            </pre>
        </div>
        
        <!-- Output -->
        <div style="background: #fef3c7; padding: 15px 20px; border-radius: 15px; border: 2px solid #f59e0b;">
            <p style="margin: 0 0 8px 0; font-size: 1rem; color: #92400e; font-weight: bold;">📝 输出：</p>
            <p style="margin: 0; font-family: 'Consolas', monospace; color: #92400e; line-height: 1.6;">
                你好！<br>你好！<br>你好！<br>你好！<br>你好！
            </p>
        </div>
    </div>
    
    <p style="font-size: 1.1rem; color: var(--primary); font-weight: bold;">
        ⚠️ 循环里面的代码要<strong>缩进</strong>（按 Tab 键）！
    </p>
`;
