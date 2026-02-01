import { html } from '../app.js';

export default html`
    <h2>修改数据 ✏️</h2>
    
    <p style="font-size: 1.1rem;">英雄受伤了？升级了？直接修改 Value！</p>
    
    <div style="display: flex; gap: 30px; justify-content: center; align-items: center;">
        <div style="background: #2b2a33; padding: 20px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; color: #fcd34d; border: 3px solid #78350f;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #64748b;"># 被怪物打了！扣 20 血</span>
<span style="color: #60a5fa;">hero</span>[<span style="color: #fca5a5;">"hp"</span>] = <span style="color: #d19a66;">80</span>

<span style="color: #64748b;"># 或者写成：</span>
<span style="color: #60a5fa;">hero</span>[<span style="color: #fca5a5;">"hp"</span>] = <span style="color: #60a5fa;">hero</span>[<span style="color: #fca5a5;">"hp"</span>] - <span style="color: #d19a66;">20</span>
            </pre>
        </div>
        
        <div class="card">
            <div class="card-title">🦸‍♂️ Hero Card</div>
            <div class="stat-row">Name: Arthur</div>
            <div class="stat-row">
                HP: <span id="hp-val" style="color: #b91c1c; font-weight: bold;">100</span>
            </div>
        </div>
    </div>
    
    <button id="hit-btn" style="margin-top: 25px; background: #b91c1c;">💥 攻击英雄！</button>
`;

export const onMount = (container) => {
    const btn = container.querySelector('#hit-btn');
    const hpVal = container.querySelector('#hp-val');
    let hp = 100;

    btn.onclick = () => {
        if (hp > 0) {
            hp -= 20;
            if (hp < 0) hp = 0;
            hpVal.innerText = hp;
            hpVal.style.fontSize = "1.5rem";
            setTimeout(() => { hpVal.style.fontSize = "1rem"; }, 200);

            if (hp === 0) {
                btn.innerText = "☠️ 已阵亡";
                btn.disabled = true;
                btn.style.background = "#666";
            }
        }
    };
};
