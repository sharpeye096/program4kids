import { html } from '../app.js';

export default html`
    <h2>练习：停止循环 🛑</h2>
    
    <p style="font-size: 1.1rem;">这个小人一直在跑！请帮他停下来！</p>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; margin: 20px 0;">
        
        <div id="track" style="width: 80%; height: 60px; border-bottom: 3px solid #666; position: relative;">
            <div id="runner-sprite" style="font-size: 3rem; position: absolute; left: 0; bottom: 0; transition: left 0.1s linear;">🏃</div>
        </div>
        
        <div style="background: #1e1b4b; padding: 15px; border-radius: 10px; width: 80%; text-align: left; font-family: 'Consolas', monospace; color: #fbcfe8;">
            while True:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;run()<br>
            &nbsp;&nbsp;&nbsp;&nbsp;if <button id="break-btn" style="padding: 2px 10px; font-size: 0.9rem; margin: 0 5px; background: #ef4444; vertical-align: middle;">按下按钮</button>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f472b6; font-weight: bold;">break</span>
        </div>
        
        <div id="message" style="font-size: 1.2rem; min-height: 30px; color: var(--secondary); font-weight: bold;">
            奔跑中...
        </div>
        
        <button id="reset-btn" style="background: #8b5cf6; display: none;">再来一次 🔄</button>
    </div>
`;

export const onMount = (container) => {
    const runner = container.querySelector('#runner-sprite');
    const breakBtn = container.querySelector('#break-btn');
    const resetBtn = container.querySelector('#reset-btn');
    const message = container.querySelector('#message');

    let position = 0;
    let running = true;
    let direction = 1;
    let interval;

    function startRun() {
        running = true;
        breakBtn.disabled = false;
        breakBtn.style.opacity = '1';
        resetBtn.style.display = 'none';
        message.innerText = "奔跑中...";
        message.style.color = "var(--secondary)";

        interval = setInterval(() => {
            if (!running) return;

            position += 2 * direction;
            if (position > 90 || position < 0) direction *= -1; // bounce

            runner.style.left = position + '%';
            runner.style.transform = direction === 1 ? 'scaleX(1)' : 'scaleX(-1)';
        }, 20);
    }

    breakBtn.onclick = () => {
        running = false;
        clearInterval(interval);
        message.innerHTML = "🛑 <strong>BREAK!</strong> 循环停止了！";
        message.style.color = "#ef4444";
        breakBtn.disabled = true;
        breakBtn.style.opacity = '0.5';
        resetBtn.style.display = 'block';
    };

    resetBtn.onclick = () => {
        startRun();
    };

    startRun(); // Auto start
};
