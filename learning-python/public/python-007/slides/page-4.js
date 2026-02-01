import { html } from '../app.js';

export default html`
    <h2>布尔类型 ✅❌</h2>
    
    <p style="font-size: 1.2rem;">布尔只有两个值：<strong>真</strong> 或 <strong>假</strong>！</p>
    
    <div style="display: flex; justify-content: center; gap: 50px; margin: 25px 0;">
        <div class="concept-card" style="border-color: #22c55e; min-width: 140px;">
            <div style="font-size: 3rem;">✅</div>
            <p style="font-size: 1.5rem; margin: 10px 0 0 0; color: #22c55e; font-weight: bold;">True</p>
            <p style="font-size: 1rem; margin: 5px 0 0 0;">真 / 对</p>
        </div>
        <div class="concept-card" style="border-color: #ef4444; min-width: 140px;">
            <div style="font-size: 3rem;">❌</div>
            <p style="font-size: 1.5rem; margin: 10px 0 0 0; color: #ef4444; font-weight: bold;">False</p>
            <p style="font-size: 1rem; margin: 5px 0 0 0;">假 / 错</p>
        </div>
    </div>
    
    <div style="background: #1e293b; padding: 15px 22px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #e2e8f0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #7dd3fc;">is_sunny</span> = <span style="color: #d19a66;">True</span>    <span style="color: #5c6370;"># 今天是晴天</span>
<span style="color: #7dd3fc;">is_raining</span> = <span style="color: #d19a66;">False</span>  <span style="color: #5c6370;"># 没有下雨</span>

<span style="color: #e5c07b;">print</span>(<span style="color: #d19a66;">5</span> > <span style="color: #d19a66;">3</span>)      <span style="color: #5c6370;"># 输出: True (5比3大)</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #d19a66;">2</span> == <span style="color: #d19a66;">5</span>)     <span style="color: #5c6370;"># 输出: False (2不等于5)</span>
        </pre>
    </div>
`;
