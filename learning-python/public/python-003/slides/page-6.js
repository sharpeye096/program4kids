import { html } from '../app.js';

export default html`
    <h2>range() 函数 📊</h2>
    
    <p style="font-size: 1.2rem;">range() 可以生成一串数字！</p>
    
    <div style="display: flex; flex-direction: column; gap: 15px; width: 100%; max-width: 750px; margin: 15px 0;">
        
        <div style="background: #f0f9ff; padding: 15px 20px; border-radius: 12px; border-left: 4px solid #3b82f6; text-align: left;">
            <p style="margin: 0; font-size: 1.1rem; color: #1e40af;">
                <code style="background: #dbeafe; padding: 2px 8px; border-radius: 4px; font-weight: bold;">range(5)</code> 
                → 生成: 0, 1, 2, 3, 4
            </p>
            <p style="margin: 5px 0 0 0; font-size: 0.95rem; color: #3b82f6;">从 0 开始，到 5 之前结束</p>
        </div>
        
        <div style="background: #fdf4ff; padding: 15px 20px; border-radius: 12px; border-left: 4px solid #a855f7; text-align: left;">
            <p style="margin: 0; font-size: 1.1rem; color: #7e22ce;">
                <code style="background: #f3e8ff; padding: 2px 8px; border-radius: 4px; font-weight: bold;">range(1, 6)</code> 
                → 生成: 1, 2, 3, 4, 5
            </p>
            <p style="margin: 5px 0 0 0; font-size: 0.95rem; color: #a855f7;">从 1 开始，到 6 之前结束</p>
        </div>
        
        <div style="background: #f0fdf4; padding: 15px 20px; border-radius: 12px; border-left: 4px solid #22c55e; text-align: left;">
            <p style="margin: 0; font-size: 1.1rem; color: #166534;">
                <code style="background: #dcfce7; padding: 2px 8px; border-radius: 4px; font-weight: bold;">range(0, 10, 2)</code> 
                → 生成: 0, 2, 4, 6, 8
            </p>
            <p style="margin: 5px 0 0 0; font-size: 0.95rem; color: #22c55e;">从 0 开始，每次加 2，到 10 之前结束</p>
        </div>
    </div>
    
    <div style="background: #1e293b; padding: 15px 25px; border-radius: 12px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #e2e8f0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c678dd;">for</span> <span style="color: #7dd3fc;">i</span> <span style="color: #c678dd;">in</span> <span style="color: #e5c07b;">range</span>(<span style="color: #d19a66;">1</span>, <span style="color: #d19a66;">4</span>):
    <span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">i</span>)    <span style="color: #5c6370;"># 输出: 1, 2, 3</span>
        </pre>
    </div>
`;
