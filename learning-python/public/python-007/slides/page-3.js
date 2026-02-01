import { html } from '../app.js';

export default html`
    <h2>创建列表 📝</h2>
    
    <div style="background: #0f172a; padding: 20px 30px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1.1rem; color: #bef264; margin: 20px 0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #64748b;"># 水果列表</span>
<span style="color: #38bdf8;">fruits</span> = [<span style="color: #fca5a5;">"苹果"</span>, <span style="color: #fca5a5;">"香蕉"</span>, <span style="color: #fca5a5;">"橘子"</span>]

<span style="color: #64748b;"># 数字列表</span>
<span style="color: #38bdf8;">scores</span> = [<span style="color: #fca5a5;">100</span>, <span style="color: #fca5a5;">95</span>, <span style="color: #fca5a5;">88</span>]

<span style="color: #64748b;"># 混合列表</span>
<span style="color: #38bdf8;">backpack</span> = [<span style="color: #fca5a5;">"宝剑"</span>, <span style="color: #fca5a5;">"药水"</span>, <span style="color: #fca5a5;">50</span>]
        </pre>
    </div>
    
    <div style="display: flex; gap: 15px; justify-content: center; margin-top: 20px;">
        <div class="item-box">🍎 苹果</div>
        <div class="item-box">🍌 香蕉</div>
        <div class="item-box">🍊 橘子</div>
    </div>
`;
