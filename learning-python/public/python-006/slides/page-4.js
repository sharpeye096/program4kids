import { html } from '../app.js';

export default html`
    <h2>访问元素 (Indexing) 🔍</h2>
    
    <p style="font-size: 1.1rem;">每个格子都有编号，从 <strong>0</strong> 开始！</p>
    
    <div style="display: flex; gap: 5px; justify-content: center; margin: 20px 0;">
        <div style="text-align: center;">
            <div class="item-box" style="border-color: #f97316;">🍎</div>
            <p style="margin: 5px 0 0 0; color: #f97316; font-weight: bold;">0</p>
        </div>
        <div style="text-align: center;">
            <div class="item-box" style="border-color: #f97316;">🍌</div>
            <p style="margin: 5px 0 0 0; color: #f97316; font-weight: bold;">1</p>
        </div>
        <div style="text-align: center;">
            <div class="item-box" style="border-color: #f97316;">🍇</div>
            <p style="margin: 5px 0 0 0; color: #f97316; font-weight: bold;">2</p>
        </div>
    </div>
    
    <div style="background: #0f172a; padding: 15px 25px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #bef264;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #38bdf8;">fruits</span> = [<span style="color: #fca5a5;">"苹果"</span>, <span style="color: #fca5a5;">"香蕉"</span>, <span style="color: #fca5a5;">"葡萄"</span>]

<span style="color: #eab308;">print</span>(<span style="color: #38bdf8;">fruits</span>[<span style="color: #fca5a5;">0</span>])   <span style="color: #64748b;"># 输出: 苹果</span>
<span style="color: #eab308;">print</span>(<span style="color: #38bdf8;">fruits</span>[<span style="color: #fca5a5;">2</span>])   <span style="color: #64748b;"># 输出: 葡萄</span>
        </pre>
    </div>
    
    <div style="background: #fee2e2; padding: 10px 15px; border-radius: 10px; border: 2px solid #ef4444; margin-top: 15px;">
        <p style="margin: 0; font-size: 1rem; color: #991b1b;">
            ⚠️ 注意：fruits[3] 会报错，因为只有 0, 1, 2！
        </p>
    </div>
`;
