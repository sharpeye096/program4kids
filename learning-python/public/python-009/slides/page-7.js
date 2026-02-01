import { html } from '../app.js';

export default html`
    <h2>练习：RPG 战斗 ⚔️</h2>
    
    <p style="font-size: 1.1rem;">编写代码，减少怪物的 HP！</p>
    
    <div style="display: flex; gap: 20px; width: 100%; max-width: 900px;">
        
        <!-- Monster Card -->
        <div style="width: 200px; display: flex; flex-direction: column; align-items: center;">
            <div class="card" style="width: 100%; border-color: #7f1d1d;">
                <div class="card-title" style="color: #7f1d1d;">👾 Slime</div>
                <div class="stat-row">
                    HP: <span id="monster-hp">100</span>
                </div>
            </div>
            <div id="damage-text" style="height: 30px; color: #dc2626; font-weight: bold; font-size: 1.5rem;"></div>
        </div>
        
        <!-- Editor -->
        <div style="flex: 1; display: flex; flex-direction: column;">
            <div style="background: #2b2a33; border-radius: 10px; padding: 15px; flex: 1; display: flex; flex-direction: column;">
                <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.9rem;">📝 这里是 Python 代码：</p>
                <div style="font-family: 'Consolas', monospace; color: #e2e8f0; margin-bottom: 10px;">
                    monster = {"name": "Slime", "hp": 100}<br>
                    damage = 25
                </div>
                <textarea id="code-input" style="flex: 1; background: #0f172a; color: #fcd34d; border: 1px solid #4b5563; border-radius: 5px; padding: 10px; font-family: 'Consolas', monospace; font-size: 1rem; resize: none;" 
placeholder="#请写代码让怪物受伤：
# monster['hp'] = ..."></textarea>
            </div>
            <button id="attack-btn" style="margin-top: 10px; width: 100%; background: #b91c1c; box-shadow: 0 4px 0 #7f1d1d;">⚔️ 攻击！</button>
        </div>
    </div>
`;

export const onMount = (container) => {
    const codeInput = container.querySelector('#code-input');
    const attackBtn = container.querySelector('#attack-btn');
    const monsterHpEl = container.querySelector('#monster-hp');
    const damageText = container.querySelector('#damage-text');

    let currentHp = 100;

    attackBtn.onclick = () => {
        const code = codeInput.value;
        damageText.innerText = "";

        // Simple validation simulation
        // Expected: monster['hp'] = monster['hp'] - damage  OR  monster['hp'] -= damage
        const isCorrect = (code.includes("monster['hp']") || code.includes('monster["hp"]')) &&
            (code.includes("-") || code.includes("damage"));

        if (isCorrect) {
            const dmg = 25;
            currentHp -= dmg;
            if (currentHp < 0) currentHp = 0;

            monsterHpEl.innerText = currentHp;
            monsterHpEl.style.color = "#dc2626";
            monsterHpEl.style.fontWeight = "bold";

            damageText.innerText = `-${dmg}!`;
            damageText.style.animation = "none";
            damageText.offsetHeight; /* trigger reflow */
            damageText.style.animation = "fadeIn 0.5s";

            if (currentHp === 0) {
                attackBtn.disabled = true;
                attackBtn.innerText = "🏆 胜利！";
                attackBtn.style.background = "#16a34a";
                attackBtn.style.boxShadow = "none";
            }
        } else {
            damageText.innerText = "Miss!";
            damageText.style.color = "#999";
        }
    };
};
