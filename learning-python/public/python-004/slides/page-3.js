import { html } from '../app.js';
import { Turtle } from '../turtle.js';

export default html`
    <h2>画一个正方形 🟥</h2>
    
    <p style="font-size: 1.1rem;">正方形有 4 条边，4 个直角 (90度)。</p>
    
    <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
        <!-- Code -->
        <div style="flex: 1; min-width: 300px; max-width: 400px; display: flex; flex-direction: column;">
            <div style="background: #1e293b; padding: 15px; border-radius: 12px; flex: 1;">
                <p style="color: #94a3b8; font-size: 0.9rem; margin: 0 0 10px 0;">补全代码画正方形：</p>
                <textarea id="code-input" style="width: 100%; height: 250px; background: #0f172a; color: #e2e8f0; border: 2px solid #334155; font-size: 1rem; font-family: 'Consolas', monospace;" spellcheck="false">t.forward(100)
t.right(90)
t.forward(100)
t.right(90)
# 还有两边...
</textarea>
            </div>
            <button id="run-btn" style="margin-top: 10px; padding: 12px; background: #ea580c; box-shadow: 0 4px 0 #9a3412;">尝试运行 ▶️</button>
        </div>

        <!-- Canvas Container -->
        <div style="position: relative; width: 400px; height: 300px; background: #fff; border-radius: 12px; border: 4px solid #ea580c; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
            <canvas id="turtle-canvas-bg" width="400" height="300" style="position: absolute; top: 0; left: 0;"></canvas>
            <canvas id="turtle-canvas-fg" width="400" height="300" style="position: absolute; top: 0; left: 0; pointer-events: none;"></canvas>
        </div>
    </div>
`;

export const onMount = (container) => {
    const canvasBg = container.querySelector('#turtle-canvas-bg');
    const canvasFg = container.querySelector('#turtle-canvas-fg');
    const runBtn = container.querySelector('#run-btn');
    const codeInput = container.querySelector('#code-input');

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
        const cleanCode = code.replace(/t\./g, '');
        turtle.run(cleanCode);
    };
};
