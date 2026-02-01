import { html } from '../app.js';

export default html`
    <h2>增加与删除 ➕➖</h2>
    
    <p style="font-size: 1.1rem;">获得新装备？或者丢失了物品？</p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 800px; margin: 15px 0;">
        <div style="background: #fff; padding: 15px; border-radius: 15px; border: 2px solid #16a34a;">
            <p style="margin: 0 0 10px 0; color: #16a34a; font-weight: bold;">增加新 Key</p>
            <div style="font-family: 'Consolas', monospace; font-size: 0.9rem; background: #f0fdf4; padding: 10px; border-radius: 8px;">
                hero["weapon"] = "Sword"<br>
                <span style="color: #666;"># 直接赋值一个新的 Key</span>
            </div>
            <div id="weapon-slot" style="margin-top: 10px; height: 30px; color: #16a34a; font-weight: bold; opacity: 0;">⚔️ Sword Added!</div>
            <button id="add-btn" style="background: #16a34a; padding: 8px 15px; font-size: 0.9rem;">获得武器</button>
        </div>
        
        <div style="background: #fff; padding: 15px; border-radius: 15px; border: 2px solid #dc2626;">
            <p style="margin: 0 0 10px 0; color: #dc2626; font-weight: bold;">删除 Key</p>
            <div style="font-family: 'Consolas', monospace; font-size: 0.9rem; background: #fef2f2; padding: 10px; border-radius: 8px;">
                del hero["level"]<br>
                <span style="color: #666;"># 用 del 关键字</span>
            </div>
            <div id="level-slot" style="margin-top: 10px; height: 30px; color: #dc2626; font-weight: bold;">⭐ Level: 5</div>
            <button id="del-btn" style="background: #dc2626; padding: 8px 15px; font-size: 0.9rem;">删除等级</button>
        </div>
    </div>
`;

export const onMount = (container) => {
    const addBtn = container.querySelector('#add-btn');
    const delBtn = container.querySelector('#del-btn');
    const weaponSlot = container.querySelector('#weapon-slot');
    const levelSlot = container.querySelector('#level-slot');

    addBtn.onclick = () => {
        weaponSlot.style.opacity = '1';
        addBtn.disabled = true;
    };

    delBtn.onclick = () => {
        levelSlot.style.textDecoration = 'line-through';
        levelSlot.style.opacity = '0.5';
        delBtn.disabled = true;
    };
};
