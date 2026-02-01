import { html } from '../app.js';

export default html`
    <h2>练习：午餐生成器 🍱</h2>
    
    <p style="font-size: 1.1rem;">创建你喜欢的食物列表，然后随机选一个！</p>
    
    <div style="display: flex; gap: 20px; width: 100%; max-width: 900px; height: 50vh;">
        
        <!-- Editor -->
        <div style="flex: 1; display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                <p style="margin: 0; font-size: 0.9rem; color: #666;">✏️ 这里写 Python 代码：</p>
                <button id="fill-btn" style="padding: 2px 8px; font-size: 0.8rem; background: #94a3b8; box-shadow: none;">填入示例 🪄</button>
            </div>
            <textarea id="code-input" style="flex: 1; background: #0f172a; color: #e2e8f0; border-radius: 10px; padding: 15px; font-family: 'Consolas', monospace; font-size: 1rem; border: none; resize: none;" 
placeholder="import random

foods = ['汉堡', '披萨', '面条']
lunch = random.choice(foods)

print('今天午餐吃：' + lunch)"></textarea>
            <button id="run-btn" style="margin-top: 10px; width: 100%;">运行 ▶️</button>
        </div>
        
        <!-- Result -->
        <div style="flex: 1; flex-direction: column; display: flex; gap: 15px;">
             <div style="flex: 1; background: #fff; border: 3px solid var(--secondary); border-radius: 15px; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <p style="margin: 0; color: #666;">🖥️ 运行结果：</p>
                <div id="output-display" style="font-size: 1.5rem; font-weight: bold; color: var(--text-primary); margin-top: 15px; text-align: center;">
                    ...
                </div>
             </div>
             
             <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; text-align: left; font-size: 0.9rem;">
                 <p style="margin: 0 0 5px 0; font-weight: bold; color: #166534;">💡 提示：</p>
                 <ul style="margin: 0; padding-left: 20px; color: #15803d;">
                     <li style="padding: 0; margin: 5px 0;">记得 import random</li>
                     <li style="padding: 0; margin: 5px 0;">用 ['a', 'b'] 创建列表</li>
                     <li style="padding: 0; margin: 5px 0;">用 random.choice(列表)</li>
                 </ul>
             </div>
        </div>
    </div>
`;

export const onMount = (container) => {
    const codeInput = container.querySelector('#code-input');
    const runBtn = container.querySelector('#run-btn');
    const fillBtn = container.querySelector('#fill-btn');
    const outputDisplay = container.querySelector('#output-display');

    fillBtn.onclick = () => {
        codeInput.value = `import random

foods = ['汉堡', '披萨', '面条', '寿司', '火锅']
lunch = random.choice(foods)

print('今天午餐吃：' + lunch)`;
    };

    runBtn.onclick = () => {
        const code = codeInput.value;
        outputDisplay.innerHTML = "🎲 正在抽取...";

        // Simple client-side simulation logic
        setTimeout(() => {
            // Extract the list from code roughly (simulation)
            let foods = [];
            const listMatch = code.match(/\[(.*?)\]/s);
            if (listMatch) {
                const inner = listMatch[1];
                const items = inner.split(/,(?=(?:[^'"]*['"][^'"]*['"])*[^'"]*$)/);
                foods = items.map(item => item.trim().replace(/^['"]|['"]$/g, '')).filter(i => i);
            }

            if (foods.length === 0) {
                foods = ['汉堡', '披萨', '面条', '米饭', '寿司'];
            }

            // "Run" random choice
            const choice = foods[Math.floor(Math.random() * foods.length)];

            outputDisplay.innerHTML = `今天午餐吃：<span style="color: #65a30d; font-size: 2rem;">${choice}</span>`;

            if (!code.includes('import random')) {
                outputDisplay.innerHTML += `<div style="font-size: 0.8rem; color: red; margin-top: 10px;">(记得写 import random 哦)</div>`;
            }
        }, 500);
    };
};
