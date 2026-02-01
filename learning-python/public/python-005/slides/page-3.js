import { html } from '../app.js';

export default html`
    <h2>字符串操作 ✂️</h2>
    
    <p style="font-size: 1.1rem;">可以获取字符串的长度、单个字符、或者一部分！</p>
    
    <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin: 12px 0;">
        <!-- Code -->
        <div style="background: #1e293b; padding: 12px 18px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 0.85rem; color: #e2e8f0;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #7dd3fc;">text</span> = <span style="color: #98c379;">"Python"</span>

<span style="color: #e5c07b;">print</span>(<span style="color: #e5c07b;">len</span>(<span style="color: #7dd3fc;">text</span>))    <span style="color: #5c6370;"># 长度: 6</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">text</span>[<span style="color: #d19a66;">0</span>])     <span style="color: #5c6370;"># 第1个: P</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">text</span>[<span style="color: #d19a66;">0</span>:<span style="color: #d19a66;">3</span>])   <span style="color: #5c6370;"># 0到3: Pyt</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">text</span>[:<span style="color: #d19a66;">3</span>])    <span style="color: #5c6370;"># 前3个: Pyt</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">text</span>[<span style="color: #d19a66;">3</span>:])   <span style="color: #5c6370;"># 第4个起: hon</span>
            </pre>
        </div>
        
        <!-- Slice explanation -->
        <div style="background: #f0fdf4; padding: 12px 18px; border-radius: 15px; border: 2px solid #22c55e; text-align: left;">
            <p style="margin: 0 0 8px 0; font-size: 1rem; color: #166534; font-weight: bold;">✂️ 切片语法</p>
            <p style="margin: 0; font-size: 0.9rem; color: #166534; line-height: 1.8;">
                <code>a[开始:结束]</code> 从开始到结束<br>
                <code>a[:3]</code> 从头到第3个<br>
                <code>a[3:]</code> 从第4个到结尾
            </p>
        </div>
    </div>
    
    <div style="background: #fef3c7; padding: 10px 15px; border-radius: 12px; border: 2px solid #f59e0b; margin: 8px 0;">
        <p style="margin: 0; font-size: 0.95rem; color: #92400e;">
            ⚠️ 编程中数数从 <strong>0</strong> 开始！
            <span style="font-family: 'Consolas', monospace;">P(0) y(1) t(2) h(3) o(4) n(5)</span>
        </p>
    </div>
`;
