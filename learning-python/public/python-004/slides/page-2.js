import { html } from '../app.js';
import { Turtle } from '../turtle.js';

export default html`
    <h2>让海龟动起来 🏃</h2>
    
    <p style="font-size: 1.1rem;">试着指挥小海龟！输入命令并运行。</p>
    
    <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
        <!-- Code -->
        <div style="flex: 1; min-width: 300px; max-width: 400px; display: flex; flex-direction: column;">
            <div style="background: #1e293b; padding: 15px; border-radius: 12px; flex: 1;">
                <p style="color: #94a3b8; font-size: 0.9rem; margin: 0 0 10px 0;">Python 代码：</p>
                <textarea id="code-input" style="width: 100%; height: 200px; background: #0f172a; color: #e2e8f0; border: 2px solid #334155; font-size: 1rem; font-family: 'Consolas', monospace;" spellcheck="false">t.forward(100)
t.left(90)
t.forward(50)</textarea>
            </div>
            <button id="run-btn" style="margin-top: 10px; padding: 12px;">运行 ▶️</button>
        </div>

        <!-- Canvas Container -->
        <div style="position: relative; width: 400px; height: 300px; background: #fff; border-radius: 12px; border: 4px solid #334155; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
            <canvas id="turtle-canvas-bg" width="400" height="300" style="position: absolute; top: 0; left: 0;"></canvas>
            <canvas id="turtle-canvas-fg" width="400" height="300" style="position: absolute; top: 0; left: 0; pointer-events: none;"></canvas>
        </div>
    </div>

    <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: center;">
        <div class="card" style="padding: 10px 20px; font-size: 0.9rem;">
            <code>t.forward(100)</code><br>向前走 100 步
        </div>
        <div class="card" style="padding: 10px 20px; font-size: 0.9rem;">
            <code>t.right(90)</code><br>向右转 90 度
        </div>
        <div class="card" style="padding: 10px 20px; font-size: 0.9rem;">
            <code>t.left(90)</code><br>向左转 90 度
        </div>
    </div>
`;

export const onMount = (container) => {
    const canvasBg = container.querySelector('#turtle-canvas-bg');
    const canvasFg = container.querySelector('#turtle-canvas-fg');
    const runBtn = container.querySelector('#run-btn');
    const codeInput = container.querySelector('#code-input');

    const maxSteps = 1000; // Prevention against infinite loops if we had them

    // Init Turtle with 2 canvases
    const turtle = new Turtle(canvasBg, canvasFg);

    // Tab handler
    codeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = codeInput.selectionStart;
            const end = codeInput.selectionEnd;
            codeInput.value = codeInput.value.substring(0, start) + '    ' + codeInput.value.substring(end);
            codeInput.selectionStart = codeInput.selectionEnd = start + 4;
        }
    });

    runBtn.onclick = () => {
        const code = codeInput.value;
        // Pre-process: remove "t." to match our simple parser if needed, 
        // OR update parser to ignore "t.".
        // Let's update parser in turtle.js? 
        // OR just strip "t." here. 
        // Our turtle.js parser expects "forward(100)".
        // But python uses "t.forward(100)".

        // Simple regex replace for this demo
        const cleanCode = code.replace(/t\./g, '');
        turtle.run(cleanCode);
    };
};
