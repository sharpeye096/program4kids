import { html } from '../app.js';

export default html`
    <h2>比较与逻辑运算 🔍</h2>
    
    <p style="font-size: 1.1rem;">比较会产生布尔值！还可以用逻辑运算组合条件！</p>
    
    <div style="display: flex; gap: 25px; flex-wrap: wrap; justify-content: center; margin: 15px 0;">
        <div style="background: #f0f9ff; padding: 15px; border-radius: 12px; border: 2px solid #3b82f6; text-align: left;">
            <p style="margin: 0 0 8px 0; font-size: 1rem; color: #1e40af; font-weight: bold;">🔢 比较运算符</p>
            <p style="margin: 0; font-family: 'Consolas', monospace; font-size: 0.9rem; line-height: 1.7;">
                5 == 5 → True<br>
                5 != 3 → True<br>
                5 > 3 → True<br>
                5 <= 3 → False
            </p>
        </div>
        
        <div style="background: #fdf4ff; padding: 15px; border-radius: 12px; border: 2px solid #a855f7; text-align: left;">
            <p style="margin: 0 0 8px 0; font-size: 1rem; color: #7e22ce; font-weight: bold;">🔗 逻辑运算符</p>
            <p style="margin: 0; font-family: 'Consolas', monospace; font-size: 0.9rem; line-height: 1.7;">
                <span style="color: #c678dd;">and</span> = 并且（都要真）<br>
                <span style="color: #c678dd;">or</span> = 或者（一个真就行）<br>
                <span style="color: #c678dd;">not</span> = 反转（真变假）
            </p>
        </div>
    </div>
    
    <div style="background: #1e293b; padding: 12px 18px; border-radius: 12px; text-align: left; font-family: 'Consolas', monospace; font-size: 0.95rem; color: #e2e8f0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #5c6370;"># and: 两边都要 True</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #d19a66;">True</span> <span style="color: #c678dd;">and</span> <span style="color: #d19a66;">True</span>)   <span style="color: #5c6370;"># True</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #d19a66;">True</span> <span style="color: #c678dd;">and</span> <span style="color: #d19a66;">False</span>)  <span style="color: #5c6370;"># False</span>

<span style="color: #5c6370;"># or: 一边 True 就行</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #d19a66;">False</span> <span style="color: #c678dd;">or</span> <span style="color: #d19a66;">True</span>)  <span style="color: #5c6370;"># True</span>

<span style="color: #5c6370;"># not: 反转</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #c678dd;">not</span> <span style="color: #d19a66;">True</span>)       <span style="color: #5c6370;"># False</span>
        </pre>
    </div>
`;
