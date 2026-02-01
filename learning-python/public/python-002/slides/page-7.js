import { html } from '../app.js';

export default html`
    <h2>试一试！🎮</h2>
    <p>输入分数，看看会输出什么！</p>
    
    <div style="display: flex; flex-direction: column; gap: 15px; align-items: center; width: 100%;">
        <!-- Input Section - All in one row -->
        <div style="background: #fff; padding: 15px 25px; border-radius: 15px; border: 3px solid #8b5cf6; display: flex; align-items: center; gap: 15px; flex-wrap: wrap; justify-content: center;">
            <label style="font-size: 1.2rem; font-weight: bold;">分数:</label>
            <input type="number" id="score-input" placeholder="0-100" style="width: 120px; font-size: 1.2rem;" min="0" max="100" />
            <button id="run-btn">运行 ▶️</button>
        </div>
        
        <!-- Code Section -->
        <div style="background: #1e293b; padding: 20px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 0.95rem; color: #e2e8f0; width: 95%; max-width: 550px;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span id="line1" class="code-line" style="padding: 2px 4px; border-radius: 4px; transition: all 0.3s;"><span style="color: #c678dd;">if</span> score >= <span style="color: #d19a66;">90</span>:</span>
<span id="line2" class="code-line" style="padding: 2px 4px; border-radius: 4px; transition: all 0.3s;">    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"太棒了！A+ 🌟"</span>)</span>
<span id="line3" class="code-line" style="padding: 2px 4px; border-radius: 4px; transition: all 0.3s;"><span style="color: #c678dd;">elif</span> score >= <span style="color: #d19a66;">80</span>:</span>
<span id="line4" class="code-line" style="padding: 2px 4px; border-radius: 4px; transition: all 0.3s;">    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"很好！A 👍"</span>)</span>
<span id="line5" class="code-line" style="padding: 2px 4px; border-radius: 4px; transition: all 0.3s;"><span style="color: #c678dd;">elif</span> score >= <span style="color: #d19a66;">60</span>:</span>
<span id="line6" class="code-line" style="padding: 2px 4px; border-radius: 4px; transition: all 0.3s;">    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"及格了！B 😊"</span>)</span>
<span id="line7" class="code-line" style="padding: 2px 4px; border-radius: 4px; transition: all 0.3s;"><span style="color: #c678dd;">else</span>:</span>
<span id="line8" class="code-line" style="padding: 2px 4px; border-radius: 4px; transition: all 0.3s;">    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"继续努力！💪"</span>)</span>
            </pre>
        </div>
        
        <!-- Output -->
        <div id="output" style="background: #fff; padding: 15px; border-radius: 15px; border: 3px solid #22c55e; width: 80%; max-width: 350px; font-size: 1.3rem; font-weight: bold;">
            ...等待运行...
        </div>
    </div>
`;

export const onMount = (container) => {
    const scoreInput = container.querySelector('#score-input');
    const runBtn = container.querySelector('#run-btn');
    const output = container.querySelector('#output');

    const lines = {
        1: container.querySelector('#line1'),
        2: container.querySelector('#line2'),
        3: container.querySelector('#line3'),
        4: container.querySelector('#line4'),
        5: container.querySelector('#line5'),
        6: container.querySelector('#line6'),
        7: container.querySelector('#line7'),
        8: container.querySelector('#line8')
    };

    const resetLines = () => {
        Object.values(lines).forEach(line => {
            line.style.background = 'transparent';
        });
    };

    const highlightLine = (lineNum) => {
        lines[lineNum].style.background = '#22c55e';
        lines[lineNum].style.display = 'block';
    };

    runBtn.onclick = () => {
        const score = parseInt(scoreInput.value);

        if (isNaN(score)) {
            output.textContent = "⚠️ 请输入分数！";
            output.style.color = "#f59e0b";
            return;
        }

        resetLines();
        output.style.color = "#8b5cf6";

        if (score >= 90) {
            highlightLine(1);
            highlightLine(2);
            output.textContent = "太棒了！A+ 🌟";
        } else if (score >= 80) {
            highlightLine(3);
            highlightLine(4);
            output.textContent = "很好！A 👍";
        } else if (score >= 60) {
            highlightLine(5);
            highlightLine(6);
            output.textContent = "及格了！B 😊";
        } else {
            highlightLine(7);
            highlightLine(8);
            output.textContent = "继续努力！💪";
        }
    };
};
