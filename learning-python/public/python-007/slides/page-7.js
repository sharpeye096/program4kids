import { html } from '../app.js';

export default html`
    <h2>随机选择 (random.choice) 🎲</h2>
    
    <p style="font-size: 1.1rem;">不知道选哪个？让电脑帮你选！</p>
    
    <div style="background: #0f172a; padding: 15px 25px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #bef264; margin: 20px 0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c678dd;">import</span> <span style="color: #e06c75;">random</span>

<span style="color: #38bdf8;">options</span> = [<span style="color: #fca5a5;">"看书"</span>, <span style="color: #fca5a5;">"游戏"</span>, <span style="color: #fca5a5;">"运动"</span>]

<span style="color: #38bdf8;">choice</span> = <span style="color: #e06c75;">random</span>.<span style="color: #61afef;">choice</span>(<span style="color: #38bdf8;">options</span>)
<span style="color: #eab308;">print</span>(<span style="color: #38bdf8;">choice</span>)
        </pre>
    </div>
    
    <div style="position: relative; height: 100px; display: flex; justify-content: center; align-items: center;">
        <div id="wheel" style="font-size: 2rem;">❓</div>
    </div>
    
    <button id="pick-btn" style="background: #8b5cf6;">帮我选！</button>
`;

export const onMount = (container) => {
    const btn = container.querySelector('#pick-btn');
    const wheel = container.querySelector('#wheel');
    const options = ["📚 看书", "🎮 游戏", "🏀 运动"];

    btn.onclick = () => {
        let count = 0;
        btn.disabled = true;

        const interval = setInterval(() => {
            const temp = options[Math.floor(Math.random() * options.length)];
            wheel.innerHTML = temp;
            count++;
            if (count > 10) {
                clearInterval(interval);
                wheel.style.transform = "scale(1.2)";
                wheel.style.color = "#7c3aed";
                wheel.style.fontWeight = "bold";
                btn.disabled = false;
                setTimeout(() => {
                    wheel.style.transform = "scale(1)";
                }, 200);
            }
        }, 100);
    };
};
