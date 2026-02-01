import { html } from '../app.js';

export default html`
    <h2>字符串基础 🔤</h2>
    
    <p style="font-size: 1.2rem;">字符串就是<strong>文字</strong>，用<strong>引号</strong>包起来！</p>
    
    <div style="display: flex; justify-content: center; gap: 25px; margin: 20px 0; flex-wrap: wrap;">
        <div class="concept-card">
            <p style="font-size: 1.8rem; margin: 0; color: var(--primary);">'单引号'</p>
        </div>
        <div class="concept-card">
            <p style="font-size: 1.8rem; margin: 0; color: var(--secondary);">"双引号"</p>
        </div>
    </div>
    
    <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin: 15px 0;">
        <!-- Code -->
        <div style="background: #1e293b; padding: 15px 20px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 0.95rem; color: #e2e8f0;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #7dd3fc;">name</span> = <span style="color: #98c379;">"小明"</span>
<span style="color: #7dd3fc;">greeting</span> = <span style="color: #98c379;">'你好'</span>

<span style="color: #5c6370;"># 拼接 (+)</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">greeting</span> + <span style="color: #7dd3fc;">name</span>)

<span style="color: #5c6370;"># 重复 (*)</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"哈"</span> * <span style="color: #d19a66;">3</span>)
            </pre>
        </div>
        
        <!-- Output -->
        <div style="background: #fef3c7; padding: 15px 20px; border-radius: 15px; border: 2px solid #f59e0b;">
            <p style="margin: 0 0 8px 0; font-size: 1rem; color: #92400e; font-weight: bold;">📝 输出：</p>
            <p style="margin: 0; font-family: 'Consolas', monospace; color: #92400e; line-height: 2;">
                你好小明<br>哈哈哈
            </p>
        </div>
    </div>
`;
