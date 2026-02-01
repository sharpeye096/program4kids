import { html } from '../app.js';

export default html`
    <h2>大作业：猜数字游戏 🎲</h2>
    
    <div style="display: flex; gap: 20px; width: 100%; height: 60vh;">
        
        <!-- Game Console -->
        <div style="flex: 1; background: #1e1b4b; border-radius: 15px; padding: 20px; display: flex; flex-direction: column; text-align: left; font-family: 'Consolas', monospace; overflow: hidden; box-shadow: var(--shadow-float);">
            <div id="console-output" style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; color: #e2e8f0; font-size: 0.9rem;">
                <div style="color: #a7f3d0;">>>> 游戏开始！我已经想好了一个 1-100 的数字。</div>
                <div style="color: #a7f3d0;">>>> 请猜猜看是多少？</div>
            </div>
            
            <div style="margin-top: 15px; display: flex; gap: 10px; border-top: 1px solid #4ade80; padding-top: 15px;">
                <span style="color: #4ade80; font-weight: bold;">>>></span>
                <input type="number" id="user-guess" placeholder="输入数字..." style="background: transparent; border: none; color: #fff; flex: 1; outline: none; font-family: inherit;">
                <button id="send-btn" style="padding: 5px 15px; font-size: 0.9rem;">回车</button>
            </div>
        </div>
        
        <!-- Logic Explanation -->
        <div style="width: 300px; display: flex; flex-direction: column; gap: 15px;">
            <div style="background: #fff; padding: 15px; border-radius: 15px; border: 3px solid var(--secondary);">
                <p style="margin: 0 0 5px 0; font-weight: bold; color: var(--secondary);">🔍 游戏逻辑</p>
                <ul style="font-size: 0.9rem; padding-left: 15px; margin: 0; color: #4b5563;">
                    <li>1. 生成随机数 (random)</li>
                    <li>2. 循环 (while True)</li>
                    <li>3. 获取输入 (input)</li>
                    <li>4. 判断大小 (if/else)</li>
                    <li>5. 猜对了 -> <strong>break</strong></li>
                </ul>
            </div>
            
            <div style="background: #ecfdf5; padding: 15px; border-radius: 15px; border: 3px solid #059669; flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <p style="margin: 0; font-weight: bold; color: #059669;">目标数字</p>
                <div id="target-reveal" style="font-size: 3rem; font-weight: bold; color: #059669; filter: blur(10px); transition: filter 0.5s;">
                    ??
                </div>
                <p style="font-size: 0.8rem; color: #065f46; margin-top: 5px;">(猜对后揭晓)</p>
            </div>
            
            <button id="restart-btn" style="background: var(--secondary);">🔄 重玩</button>
        </div>
    </div>
`;

export const onMount = (container) => {
    const output = container.querySelector('#console-output');
    const input = container.querySelector('#user-guess');
    const sendBtn = container.querySelector('#send-btn');
    const restartBtn = container.querySelector('#restart-btn');
    const targetReveal = container.querySelector('#target-reveal');

    let targetNumber = 0;
    let gameOver = false;

    function log(text, color = '#e2e8f0') {
        const line = document.createElement('div');
        line.textContent = text;
        line.style.color = color;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }

    function initGame() {
        targetNumber = Math.floor(Math.random() * 100) + 1;
        targetReveal.innerText = targetNumber;
        targetReveal.style.filter = "blur(10px)"; // Hide it
        gameOver = false;
        output.innerHTML = '';
        log(">>> 游戏开始！我已经想好了一个 1-100 的数字。");
        log(">>> 请猜猜看是多少？", "#a7f3d0");
        input.value = '';
        input.disabled = false;
        input.focus();
        sendBtn.disabled = false;
    }

    function handleGuess() {
        if (gameOver) return;

        const guess = parseInt(input.value);
        if (isNaN(guess)) return;

        log(`>>> 我猜是: ${guess}`, "#fbcfe8");
        input.value = '';

        if (guess === targetNumber) {
            log("🎉 恭喜你！猜对了！", "#fcd34d");
            log(`>>> 游戏结束。数字就是 ${targetNumber}。`);
            targetReveal.style.filter = "blur(0)"; // Reveal
            gameOver = true;
            input.disabled = true;
            sendBtn.disabled = true;
        } else if (guess > targetNumber) {
            log("📉 太大了！再小一点。", "#f87171");
        } else {
            log("📈 太小了！再大一点。", "#60a5fa");
        }
    }

    sendBtn.onclick = handleGuess;
    input.onkeydown = (e) => {
        if (e.key === 'Enter') handleGuess();
    };

    restartBtn.onclick = initGame;

    // Start game
    initGame();
};
