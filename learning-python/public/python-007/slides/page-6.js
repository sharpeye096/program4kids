import { html } from '../app.js';

export default html`
    <h2>丢掉东西 (.remove) 🗑️</h2>
    
    <p style="font-size: 1.1rem;">把不想要的东西拿出来丢掉！</p>
    
    <div style="background: #0f172a; padding: 15px 25px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #bef264; margin: 20px 0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #38bdf8;">foods</span> = [<span style="color: #fca5a5;">"汉堡"</span>, <span style="color: #fca5a5;">"青椒"</span>, <span style="color: #fca5a5;">"薯条"</span>]

<span style="color: #64748b;"># 既然不爱吃青椒...</span>
<span style="color: #38bdf8;">foods</span>.<span style="color: #61afef;">remove</span>(<span style="color: #fca5a5;">"青椒"</span>)

<span style="color: #eab308;">print</span>(<span style="color: #38bdf8;">foods</span>)
<span style="color: #64748b;"># 输出: ["汉堡", "薯条"]</span>
        </pre>
    </div>
    
    <div style="display: flex; gap: 10px; justify-content: center; align-items: center; min-height: 80px;">
        <div class="item-box">🍔 汉堡</div>
        <div id="trash-item" class="item-box" style="border-color: #ef4444; background: #fee2e2; transition: all 0.5s;">🫑 青椒</div>
        <div class="item-box">🍟 薯条</div>
    </div>
    
    <button id="remove-btn" style="margin-top: 15px; background: #ef4444;">丢掉青椒！</button>
`;

export const onMount = (container) => {
    const btn = container.querySelector('#remove-btn');
    const item = container.querySelector('#trash-item');

    btn.onclick = () => {
        item.style.transform = "scale(0) rotate(180deg)";
        item.style.opacity = "0";
        setTimeout(() => {
            item.style.display = "none";
        }, 500);
        btn.disabled = true;
        btn.innerText = "已丢弃！👋";
    };
};
