import { html } from '../app.js';

export default html`
    <h2>基础语法 📝</h2>
    
    <p style="font-size: 1.1rem;">和 if 很像，但是会<strong>重复</strong>！</p>
    
    <div style="display: flex; gap: 20px; justify-content: center; align-items: flex-start; margin: 20px 0;">
        <div style="background: #1e1b4b; padding: 20px 30px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; color: #fbcfe8;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #60a5fa;">energy</span> = <span style="color: #f472b6;">0</span>

<span style="color: #c084fc;">while</span> <span style="color: #60a5fa;">energy</span> < <span style="color: #f472b6;">5</span>:
    <span style="color: #fcd34d;">print</span>(<span style="color: #a7f3d0;">"充电中..."</span>)
    <span style="color: #60a5fa;">energy</span> = <span style="color: #60a5fa;">energy</span> + <span style="color: #f472b6;">1</span>

<span style="color: #fcd34d;">print</span>(<span style="color: #a7f3d0;">"充满了！"</span>)
            </pre>
        </div>
        
        <div style="background: #ecfdf5; padding: 15px; border-radius: 15px; border: 2px solid #34d399; height: 180px; width: 200px; display: flex; flex-direction: column; justify-content: center;">
            <div id="battery" style="font-size: 3rem;">🔋</div>
            <div id="status" style="font-weight: bold; color: #059669;">电量: 0</div>
            <button id="charge-btn" style="margin-top: 10px;">演示一下 ▶️</button>
        </div>
    </div>
`;

export const onMount = (container) => {
    const btn = container.querySelector('#charge-btn');
    const status = container.querySelector('#status');
    const battery = container.querySelector('#battery');

    btn.onclick = () => {
        let energy = 0;
        btn.disabled = true;

        const interval = setInterval(() => {
            if (energy < 5) {
                status.innerText = `电量: ${energy} (充电中...)`;
                // battery animation effect
                battery.style.opacity = energy % 2 === 0 ? '0.5' : '1';
                energy++;
            } else {
                status.innerText = `电量: 5 (充满了!)`;
                battery.style.opacity = '1';
                battery.innerHTML = '⚡';
                clearInterval(interval);
                btn.disabled = false;
            }
        }, 800);
    };
};
