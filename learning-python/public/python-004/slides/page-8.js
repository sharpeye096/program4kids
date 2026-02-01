import { html } from '../app.js';

export default html`
    <h2>练习：编写阶乘函数 🎮</h2>
    
    <p style="font-size: 1.05rem;"><strong>阶乘</strong> n! = n × (n-1) × (n-2) × ... × 1，例如：5! = 5×4×3×2×1 = 120</p>
    
    <div style="display: flex; flex-direction: column; gap: 12px; align-items: center; width: 100%;">
        
        <!-- N Value Input -->
        <div style="background: #fff; padding: 10px 18px; border-radius: 10px; border: 3px solid #8b5cf6; display: flex; align-items: center; gap: 12px;">
            <label style="font-size: 1rem; font-weight: bold;">计算</label>
            <input type="number" id="n-value" value="5" min="0" max="12" style="width: 60px; font-size: 1rem;" />
            <label style="font-size: 1rem; font-weight: bold;">!</label>
        </div>
        
        <!-- Code Editor -->
        <div style="background: #1e293b; padding: 12px; border-radius: 10px; width: 90%; max-width: 550px;">
            <p style="color: #94a3b8; font-size: 0.85rem; margin: 0 0 8px 0; text-align: left;">✏️ 用递归编写阶乘函数：</p>
            <textarea id="code-input" style="width: 100%; min-height: 120px; background: #0f172a; color: #e2e8f0; border: 2px solid #334155; font-size: 0.9rem;" placeholder="def factorial(n):
    if n <= 1:       # 停止条件
        return ...
    else:
        return ...   # n * factorial(n-1)"></textarea>
        </div>
        
        <!-- Buttons -->
        <div style="display: flex; gap: 12px;">
            <button id="run-btn" style="padding: 10px 22px;">运行 ▶️</button>
            <button id="hint-btn" style="background: #8b5cf6; box-shadow: 0 4px 0 #6d28d9; padding: 10px 22px;">提示 💡</button>
            <button id="answer-btn" style="background: #22c55e; box-shadow: 0 4px 0 #16a34a; padding: 10px 22px;">看答案 👀</button>
        </div>
        
        <!-- Result -->
        <div id="result" style="background: #f8fafc; padding: 12px 20px; border-radius: 10px; border: 3px solid #e2e8f0; width: 85%; max-width: 480px; min-height: 50px; display: flex; align-items: center; justify-content: center;">
            <span style="color: #94a3b8;">点击"运行"检查你的代码！</span>
        </div>
    </div>
`;

export const onMount = (container) => {
    const nInput = container.querySelector('#n-value');
    const codeInput = container.querySelector('#code-input');
    const runBtn = container.querySelector('#run-btn');
    const hintBtn = container.querySelector('#hint-btn');
    const answerBtn = container.querySelector('#answer-btn');
    const result = container.querySelector('#result');

    // Calculate factorial
    const factorial = (n) => {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    };

    // Validate user code
    const validateCode = (code) => {
        const hasDefFactorial = /def\s+factorial\s*\(\s*n\s*\)/.test(code);
        const hasBaseCase = /if\s+n\s*<=?\s*1/.test(code) || /if\s+n\s*==\s*[01]/.test(code);
        const hasReturnOne = /return\s+1/.test(code);
        const hasRecursion = /n\s*\*\s*factorial\s*\(\s*n\s*-\s*1\s*\)/.test(code) ||
            /factorial\s*\(\s*n\s*-\s*1\s*\)\s*\*\s*n/.test(code);

        return {
            hasDefFactorial,
            hasBaseCase,
            hasReturnOne,
            hasRecursion,
            isCorrect: hasDefFactorial && hasBaseCase && hasReturnOne && hasRecursion
        };
    };

    runBtn.onclick = () => {
        const n = parseInt(nInput.value) || 5;
        const code = codeInput.value;

        if (!code.trim()) {
            result.innerHTML = `<span style="color: #f59e0b; font-size: 1.1rem;">⚠️ 请先写代码！</span>`;
            return;
        }

        const validation = validateCode(code);
        const expected = factorial(n);

        if (validation.isCorrect) {
            result.innerHTML = `
                <div style="text-align: center;">
                    <span style="color: #22c55e; font-size: 1.15rem; font-weight: bold;">✅ 太棒了！代码正确！🎉</span>
                    <p style="margin: 8px 0 0 0; font-size: 1rem;">${n}! = <strong>${expected}</strong></p>
                </div>
            `;
            result.style.borderColor = '#22c55e';
            result.style.background = '#f0fdf4';
        } else {
            let feedback = [];
            if (!validation.hasDefFactorial) feedback.push('需要 def factorial(n)');
            if (!validation.hasBaseCase) feedback.push('需要停止条件 (if n <= 1)');
            if (!validation.hasReturnOne) feedback.push('基础情况要 return 1');
            if (!validation.hasRecursion) feedback.push('需要递归 n * factorial(n-1)');

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
        result.innerHTML = `
            <div style="text-align: left; font-size: 0.9rem;">
                <p style="margin: 0; color: #7c3aed; font-weight: bold;">💡 提示：</p>
                <p style="margin: 5px 0 0 0; color: #555;">
                    1. n! = n × (n-1)!<br>
                    2. 停止条件：0! = 1! = 1<br>
                    3. 递归：return n * factorial(n-1)
                </p>
            </div>
        `;
        result.style.borderColor = '#8b5cf6';
        result.style.background = '#faf5ff';
    };

    answerBtn.onclick = () => {
        const n = parseInt(nInput.value) || 5;
        const expected = factorial(n);

        result.innerHTML = `
            <div style="text-align: left; font-size: 0.85rem;">
                <p style="margin: 0; color: #166534; font-weight: bold;">✨ 参考答案：</p>
                <pre style="margin: 5px 0 0 0; background: #1e293b; color: #e2e8f0; padding: 10px; border-radius: 8px; font-size: 0.8rem;">def factorial(n):
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(${n}))  # 输出: ${expected}</pre>
            </div>
        `;
        result.style.borderColor = '#22c55e';
        result.style.background = '#f0fdf4';
    };
};
