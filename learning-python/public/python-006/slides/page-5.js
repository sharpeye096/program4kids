import { html } from '../app.js';

export default html`
    <h2>添加元素 (.append & .insert) 🎒</h2>
    
    <p style="font-size: 1rem;">捡到新宝贝！放进背包！</p>
    
    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin: 15px 0;">
        <!-- append example -->
        <div style="background: #0f172a; padding: 12px 18px; border-radius: 12px; text-align: left; font-family: 'Consolas', monospace; font-size: 0.9rem; color: #bef264;">
            <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 0.85rem;">📦 append() - 放到末尾</p>
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #38bdf8;">bag</span> = [<span style="color: #fca5a5;">"书"</span>, <span style="color: #fca5a5;">"笔"</span>]
<span style="color: #38bdf8;">bag</span>.<span style="color: #61afef;">append</span>(<span style="color: #fca5a5;">"水杯"</span>)

<span style="color: #64748b;"># 结果: ["书", "笔", "水杯"]</span>
            </pre>
        </div>
        
        <!-- insert example -->
        <div style="background: #0f172a; padding: 12px 18px; border-radius: 12px; text-align: left; font-family: 'Consolas', monospace; font-size: 0.9rem; color: #bef264;">
            <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 0.85rem;">📍 insert(i, x) - 插入到第 i 位</p>
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #38bdf8;">bag</span> = [<span style="color: #fca5a5;">"书"</span>, <span style="color: #fca5a5;">"笔"</span>]
<span style="color: #38bdf8;">bag</span>.<span style="color: #61afef;">insert</span>(<span style="color: #d19a66;">1</span>, <span style="color: #fca5a5;">"橡皮"</span>)

<span style="color: #64748b;"># 结果: ["书", "橡皮", "笔"]</span>
            </pre>
        </div>
    </div>
    
    <div class="backpack-anim" style="display: flex; gap: 10px; align-items: center; justify-content: center; height: 60px;">
        <div class="item-box">📖 书</div>
        <div id="insert-item" style="opacity: 0; width: 0; overflow: hidden; transition: all 0.5s;">
            <div class="item-box" style="border-color: #f59e0b; background: #fef3c7;">🧹 橡皮</div>
        </div>
        <div class="item-box">✏️ 笔</div>
        <div id="append-item" style="opacity: 0; transform: translateX(-20px); transition: all 0.5s;">
            <div class="item-box" style="border-color: #0ea5e9; background: #e0f2fe;">🥤 水杯</div>
        </div>
    </div>
    
    <div style="display: flex; gap: 15px; justify-content: center; margin-top: 10px;">
        <button id="insert-btn" style="padding: 8px 16px; font-size: 0.9rem; background: #f59e0b; box-shadow: 0 4px 0 #d97706;">insert(1, 橡皮)</button>
        <button id="append-btn" style="padding: 8px 16px; font-size: 0.9rem;">append(水杯)</button>
    </div>
`;

export const onMount = (container) => {
    const insertBtn = container.querySelector('#insert-btn');
    const appendBtn = container.querySelector('#append-btn');
    const insertItem = container.querySelector('#insert-item');
    const appendItem = container.querySelector('#append-item');

    insertBtn.onclick = () => {
        insertItem.style.opacity = '1';
        insertItem.style.width = 'auto';
        insertBtn.disabled = true;
        insertBtn.innerText = "已插入！✅";
    };

    appendBtn.onclick = () => {
        appendItem.style.opacity = '1';
        appendItem.style.transform = 'translateX(0)';
        appendBtn.disabled = true;
        appendBtn.innerText = "已添加！✅";
    };
};
