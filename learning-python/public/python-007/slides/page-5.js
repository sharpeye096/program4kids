import { html } from '../app.js';

export default html`
    <h2>添加东西 (.append) 🎒</h2>
    
    <p style="font-size: 1.1rem;">捡到一个新宝贝！放进背包最后面！</p>
    
    <div style="background: #0f172a; padding: 15px 25px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #bef264; margin: 20px 0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #38bdf8;">backpack</span> = [<span style="color: #fca5a5;">"书"</span>, <span style="color: #fca5a5;">"笔"</span>]

<span style="color: #64748b;"># 在末尾添加 "水杯"</span>
<span style="color: #38bdf8;">backpack</span>.<span style="color: #61afef;">append</span>(<span style="color: #fca5a5;">"水杯"</span>)

<span style="color: #eab308;">print</span>(<span style="color: #38bdf8;">backpack</span>)
<span style="color: #64748b;"># 输出: ["书", "笔", "水杯"]</span>
        </pre>
    </div>
    
    <div class="backpack-anim" style="display: flex; gap: 10px; align-items: center; justify-content: center; height: 80px;">
        <div class="item-box">📖 书</div>
        <div class="item-box">✏️ 笔</div>
        
        <div id="new-item" style="opacity: 0; transform: translateX(-20px); transition: all 0.5s;">
            <div class="item-box" style="border-color: #0ea5e9; background: #e0f2fe;">🥤 水杯</div>
        </div>
    </div>
    
    <button id="add-btn" style="margin-top: 15px;">捡起水杯！</button>
`;

export const onMount = (container) => {
    const btn = container.querySelector('#add-btn');
    const item = container.querySelector('#new-item');

    btn.onclick = () => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
        btn.disabled = true;
        btn.innerText = "已放入！✅";
    };
};
