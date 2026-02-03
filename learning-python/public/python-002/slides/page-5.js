import { html } from '../app.js';

export default html`
    <h2>If-Else 语法 🔀</h2>
    
    <p><strong>如果...就...否则...</strong></p>
    
    <div style="display: flex; gap: 20px; justify-content: center; align-items: flex-start; margin: 15px 0;">
        <!-- Left: Syntax -->
        <div style="background: #1e293b; padding: 20px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1.1rem; color: #e2e8f0; flex: 1; max-width: 45%;">
            <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.9rem;">📝 语法结构：</p>
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c678dd;">if</span> <span style="color: #61afef;">条件</span>:
    <span style="color: #98c379;">条件成立时，做这件事</span>
<span style="color: #c678dd;">else</span>:
    <span style="color: #98c379;">条件不成立时，做那件事</span>
            </pre>
        </div>
        
        <!-- Right: Real Example -->
        <div style="background: #1e293b; padding: 20px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1.1rem; color: #e2e8f0; flex: 1; max-width: 45%;">
            <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.9rem;">🌧️ 真实例子：</p>
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
is_raining = <span style="color: #d19a66;">True</span>

<span style="color: #c678dd;">if</span> is_raining:
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"带雨伞！☂️"</span>)
<span style="color: #c678dd;">else</span>:
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"戴墨镜！😎"</span>)
            </pre>
        </div>
    </div>
    
    <div style="background: #fef3c7; padding: 12px; border-radius: 10px; border: 2px solid #f59e0b; margin-top: 10px;">
        <p style="margin: 0; color: #92400e;">⚠️ <strong>else</strong> 后面也要有<strong>冒号 :</strong></p>
    </div>
`;

