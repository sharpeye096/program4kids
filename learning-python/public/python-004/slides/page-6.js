import { html } from '../app.js';

export default html`
    <h2>递归：函数调用自己 🔄</h2>
    
    <p style="font-size: 1.2rem;">递归就是<strong>函数在自己内部调用自己</strong>！</p>
    
    <div style="display: flex; justify-content: center; margin: 20px 0;">
        <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 18px 25px; border-radius: 15px; border: 3px solid #f59e0b;">
            <p style="font-size: 1.1rem; margin: 0; color: #92400e;">
                🪞 想象两面镜子面对面...<br>
                镜子里的镜子里还有镜子...
            </p>
        </div>
    </div>
    
    <div style="background: #1e293b; padding: 18px 25px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 0.95rem; color: #e2e8f0; margin: 15px 0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #5c6370;"># 倒数计时</span>
<span style="color: #c678dd;">def</span> <span style="color: #61afef;">countdown</span>(<span style="color: #7dd3fc;">n</span>):
    <span style="color: #c678dd;">if</span> <span style="color: #7dd3fc;">n</span> == <span style="color: #d19a66;">0</span>:           <span style="color: #5c6370;"># 停止条件！</span>
        <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"发射！🚀"</span>)
    <span style="color: #c678dd;">else</span>:
        <span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">n</span>)
        <span style="color: #61afef;">countdown</span>(<span style="color: #7dd3fc;">n</span> - <span style="color: #d19a66;">1</span>)  <span style="color: #5c6370;"># 调用自己！</span>

<span style="color: #61afef;">countdown</span>(<span style="color: #d19a66;">3</span>)  <span style="color: #5c6370;"># 输出: 3, 2, 1, 发射！🚀</span>
        </pre>
    </div>
    
    <div style="background: #fef2f2; padding: 12px 18px; border-radius: 10px; border: 2px solid #ef4444;">
        <p style="margin: 0; font-size: 1rem; color: #991b1b;">
            ⚠️ <strong>重要</strong>：递归必须有<strong>停止条件</strong>，否则会无限循环！
        </p>
    </div>
`;
