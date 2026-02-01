import { html } from '../app.js';

export default html`
    <h2>挑战：偶数/奇数之和 🏆</h2>
    
    <p style="font-size: 1.1rem;">结合 <strong>if</strong> 和 <strong>for</strong>，计算 0 到 n 中所有偶数或奇数的和！</p>
    
    <div style="display: flex; flex-direction: column; gap: 12px; align-items: center; width: 100%;">
        
        <!-- Settings Row -->
        <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
            <div style="background: #fff; padding: 10px 15px; border-radius: 10px; border: 2px solid #8b5cf6; display: flex; align-items: center; gap: 10px;">
                <label style="font-size: 1rem; font-weight: bold;">n =</label>
                <input type="number" id="n-value" value="10" min="1" max="100" style="width: 70px; font-size: 1rem;" />
            </div>
            <div style="background: #fff; padding: 10px 15px; border-radius: 10px; border: 2px solid #f59e0b; display: flex; align-items: center; gap: 10px;">
                <label style="font-size: 1rem; font-weight: bold;">计算:</label>
                <select id="mode-select" style="font-size: 1rem; padding: 5px 10px; border-radius: 8px; border: 2px solid #ddd;">
                    <option value="even">偶数之和</option>
                    <option value="odd">奇数之和</option>
                </select>
            </div>
        </div>
        
        <!-- Code Editor -->
        <div style="background: #1e293b; padding: 12px; border-radius: 10px; width: 90%; max-width: 580px;">
            <p style="color: #94a3b8; font-size: 0.85rem; margin: 0 0 8px 0; text-align: left;">✏️ 用 for 循环 + if 判断来完成：</p>
            <textarea id="code-input" style="width: 100%; min-height: 140px; background: #0f172a; color: #e2e8f0; border: 2px solid #334155; font-size: 0.95rem;" placeholder="n = ...
sum = 0

for i in range(...):
    if i % 2 == ...:  # 偶数? 奇数?
        sum = sum + i

print(sum)"></textarea>
        </div>
        
        <!-- Buttons -->
        <div style="display: flex; gap: 12px;">
            <button id="run-btn" style="padding: 12px 25px;">运行 ▶️</button>
            <button id="hint-btn" style="background: #8b5cf6; box-shadow: 0 5px 0 #6d28d9; padding: 12px 25px;">提示 💡</button>
            <button id="answer-btn" style="background: #22c55e; box-shadow: 0 5px 0 #16a34a; padding: 12px 25px;">看答案 👀</button>
        </div>
        
        <!-- Result -->
        <div id="result" style="background: #f8fafc; padding: 12px 20px; border-radius: 10px; border: 3px solid #e2e8f0; width: 85%; max-width: 500px; min-height: 55px; display: flex; align-items: center; justify-content: center;">
            <span style="color: #94a3b8;">选择模式，写代码，然后点击"运行"！</span>
        </div>
    </div>
`;

export const onMount = (container) => {
    const nInput = container.querySelector('#n-value');
    const modeSelect = container.querySelector('#mode-select');
    const codeInput = container.querySelector('#code-input');
    const runBtn = container.querySelector('#run-btn');
    const hintBtn = container.querySelector('#hint-btn');
    const answerBtn = container.querySelector('#answer-btn');
    const result = container.querySelector('#result');

    // Calculate expected result
    const calculateExpected = (n, mode) => {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
            if (mode === 'even' && i % 2 === 0) sum += i;
            if (mode === 'odd' && i % 2 === 1) sum += i;
        }
        return sum;
    };

    // Handle Tab key in textarea to insert spaces instead of switching focus
    codeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = codeInput.selectionStart;
            const end = codeInput.selectionEnd;
            codeInput.value = codeInput.value.substring(0, start) + '    ' + codeInput.value.substring(end);
            codeInput.selectionStart = codeInput.selectionEnd = start + 4;
        }
    });

    // Validate user code
    const validateCode = (code, n, mode) => {
        const hasForLoop = /for\s+\w+\s+in\s+range/.test(code);
        const hasIf = /if\s+\w+\s*%\s*2/.test(code);
        const hasSum = /sum\s*[+=]/.test(code) || /sum\s*=\s*sum\s*\+/.test(code);

        // Check modulo condition
        const modCondition = mode === 'even' ?
            /if\s+\w+\s*%\s*2\s*==\s*0/.test(code) :
            /if\s+\w+\s*%\s*2\s*==\s*1/.test(code);

        // Check range
        const hasCorrectRange = /range\s*\(\s*(n\s*\+\s*1|\d+\s*,\s*n\s*\+\s*1)/.test(code) ||
            /range\s*\(\s*\d+\s*,\s*\d+\s*\)/.test(code);

        const expected = calculateExpected(n, mode);

        return {
            hasForLoop,
            hasIf,
            hasSum,
            modCondition,
            hasCorrectRange,
            expected,
            isCorrect: hasForLoop && hasIf && hasSum && modCondition
        };
    };

    runBtn.onclick = () => {
        const n = parseInt(nInput.value) || 10;
        const mode = modeSelect.value;
        const code = codeInput.value;

        if (!code.trim()) {
            result.innerHTML = `<span style="color: #f59e0b; font-size: 1.1rem;">⚠️ 请先写代码！</span>`;
            return;
        }

        const validation = validateCode(code, n, mode);
        const modeText = mode === 'even' ? '偶数' : '奇数';

        if (validation.isCorrect) {
            result.innerHTML = `
                <div style="text-align: center;">
                    <span style="color: #22c55e; font-size: 1.2rem; font-weight: bold;">✅ 太棒了！完全正确！🎉</span>
                    <p style="margin: 8px 0 0 0; font-size: 1rem;">0 到 ${n} 的${modeText}之和 = <strong>${validation.expected}</strong></p>
                </div>
            `;
            result.style.borderColor = '#22c55e';
            result.style.background = '#f0fdf4';
        } else {
            let feedback = [];
            if (!validation.hasForLoop) feedback.push('需要 for 循环');
            if (!validation.hasIf) feedback.push('需要 if 判断');
            if (!validation.modCondition) feedback.push(`检查 % 2 的条件（${modeText}）`);
            if (!validation.hasSum) feedback.push('需要累加到 sum');

            result.innerHTML = `
                <div style="text-align: center;">
                    <span style="color: #ef4444; font-size: 1.1rem; font-weight: bold;">❌ 再试试！</span>
                    <p style="margin: 8px 0 0 0; font-size: 0.95rem; color: #666;">${feedback.join('，')}</p>
                </div>
            `;
            result.style.borderColor = '#ef4444';
            result.style.background = '#fef2f2';
        }
    };

    hintBtn.onclick = () => {
        const mode = modeSelect.value;
        const modHint = mode === 'even' ?
            'i % 2 == 0（能被2整除 = 偶数）' :
            'i % 2 == 1（除以2余1 = 奇数）';

        result.innerHTML = `
            <div style="text-align: left; font-size: 0.9rem;">
                <p style="margin: 0; color: #7c3aed; font-weight: bold;">💡 提示：</p>
                <p style="margin: 5px 0 0 0; color: #555;">
                    判断${mode === 'even' ? '偶数' : '奇数'}：<code style="background: #e2e8f0; padding: 1px 4px; border-radius: 3px;">${modHint}</code>
                </p>
            </div>
        `;
        result.style.borderColor = '#8b5cf6';
        result.style.background = '#faf5ff';
    };

    answerBtn.onclick = () => {
        const n = parseInt(nInput.value) || 10;
        const mode = modeSelect.value;
        const expected = calculateExpected(n, mode);
        const modValue = mode === 'even' ? '0' : '1';
        const modeText = mode === 'even' ? '偶数' : '奇数';

        result.innerHTML = `
            <div style="text-align: left; font-size: 0.85rem;">
                <p style="margin: 0; color: #166534; font-weight: bold;">✨ 参考答案（${modeText}之和）：</p>
                <pre style="margin: 5px 0 0 0; background: #1e293b; color: #e2e8f0; padding: 10px; border-radius: 8px; font-size: 0.85rem;">n = ${n}
sum = 0
for i in range(n + 1):
    if i % 2 == ${modValue}:
        sum = sum + i
print(sum)  # 输出: ${expected}</pre>
            </div>
        `;
        result.style.borderColor = '#22c55e';
        result.style.background = '#f0fdf4';
    };
};
