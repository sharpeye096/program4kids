import { html } from '../app.js';

export default html`
    <h2>创建角色卡 📝</h2>
    
    <p style="font-size: 1.1rem;">用花括号 <code style="background: #fde68a; padding: 2px 6px; border-radius: 4px;">{}</code> 来定义字典</p>
    
    <div style="display: flex; gap: 30px; justify-content: center; align-items: center; margin: 25px 0;">
        <!-- Code -->
        <div style="background: #2b2a33; padding: 20px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; color: #fcd34d; border: 3px solid #78350f;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #64748b;"># 定义一个英雄</span>
<span style="color: #60a5fa;">hero</span> = {
    <span style="color: #fca5a5;">"name"</span>: <span style="color: #86efac;">"Arthur"</span>,
    <span style="color: #fca5a5;">"hp"</span>: <span style="color: #d19a66;">100</span>,
    <span style="color: #fca5a5;">"level"</span>: <span style="color: #d19a66;">5</span>
}
            </pre>
        </div>
        
        <!-- Interactive Card -->
        <div class="card">
            <div class="card-title">🦸‍♂️ Hero Card</div>
            <div class="stat-row">
                <span>Name:</span> <span style="color: #4338ca;">Arthur</span>
            </div>
            <div class="stat-row">
                <span>HP:</span> <span style="color: #b91c1c;">100</span>
            </div>
            <div class="stat-row">
                <span>Level:</span> <span style="color: #d97706;">5</span>
            </div>
        </div>
    </div>
    
    <div style="background: #fff; padding: 10px 20px; border-radius: 10px; display: inline-block; border: 2px dashed #d97706;">
        冒号 <span style="font-weight: bold; font-size: 1.2rem;">:</span> 前面是 Key，后面是 Value
    </div>
`;
