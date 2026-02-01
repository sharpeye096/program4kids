import { html } from '../app.js';

export default html`
    <h2>If 语法 🔤</h2>
    
    <p>最简单的条件判断：<strong>如果...就...</strong></p>
    
    <div style="background: #1e293b; padding: 25px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1.2rem; color: #e2e8f0; margin: 20px auto; max-width: 500px;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c678dd;">if</span> <span style="color: #61afef;">条件</span>:
    <span style="color: #98c379;">做某件事</span>
        </pre>
    </div>
    
    <p style="font-size: 1.1rem; color: #666;">例子：</p>
    
    <div style="background: #1e293b; padding: 25px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1.1rem; color: #e2e8f0; margin: 20px auto; max-width: 500px;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
age = <span style="color: #d19a66;">8</span>

<span style="color: #c678dd;">if</span> age < <span style="color: #d19a66;">10</span>:
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"你还是小朋友！"</span>)
        </pre>
    </div>
    
    <div style="background: #dcfce7; padding: 15px; border-radius: 10px; border: 2px solid #22c55e; margin-top: 20px;">
        <p style="margin: 0; color: #166534;">💡 <strong>注意：</strong>条件后面要有<strong>冒号 :</strong></p>
    </div>
`;
