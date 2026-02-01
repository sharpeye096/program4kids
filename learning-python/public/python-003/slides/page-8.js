import { html } from '../app.js';

export default html`
    <h2>练习1：计算 0 到 n 的和 📝</h2>
    
    <p style="font-size: 1.1rem;">写代码计算 <strong>0 + 1 + 2 + ... + n</strong> 的和！</p>
    
    <div style="display: flex; flex-direction: column; gap: 15px; align-items: center; width: 100%;">
        
        <!-- N Value Input -->
        <div style="background: #fff; padding: 12px 20px; border-radius: 12px; border: 3px solid #8b5cf6; display: flex; align-items: center; gap: 15px;">
            <label style="font-size: 1.1rem; font-weight: bold;">n 的值:</label>
            <input type="number" id="n-value" value="5" min="1" max="100" style="width: 80px; font-size: 1.1rem;" />
            <span style="font-size: 1rem; color: #666;">（计算 0+1+2+...+n）</span>
        </div>
        
        <!-- Code Editor -->
        <div style="background: #1e293b; padding: 15px; border-radius: 12px; width: 90%; max-width: 550px;">
            <p style="color: #94a3b8; font-size: 0.9rem; margin: 0 0 10px 0; text-align: left;">✏️ 在下面写你的代码：</p>
            <textarea id="code-input" style="width: 100%; min-height: 120px; background: #0f172a; color: #e2e8f0; border: 2px solid #334155; font-size: 1rem;" placeholder="n = ...
sum = 0

# 写你的 for 循环
for i in range(...):
    ...

print(sum)"></textarea>
        </div>
        
        <!-- Buttons -->
        <div style="display: flex; gap: 15px;">
            <button id="run-btn">运行 ▶️</button>
            <button id="hint-btn" style="background: #8b5cf6; box-shadow: 0 5px 0 #6d28d9;">提示 💡</button>
        </div>
        
        <!-- Result -->
        <div id="result" style="background: #f8fafc; padding: 15px 25px; border-radius: 12px; border: 3px solid #e2e8f0; width: 80%; max-width: 450px; min-height: 60px; display: flex; align-items: center; justify-content: center;">
            <span style="color: #94a3b8;">点击"运行"检查你的代码！</span>
        </div>
    </div>
`;

export const onMount = (container) => {
    const nInput = container.querySelector('#n-value');
    const codeInput = container.querySelector('#code-input');
    const runBtn = container.querySelector('#run-btn');
    const hintBtn = container.querySelector('#hint-btn');
    const result = container.querySelector('#result');

    // Validate user code
    const validateCode = (code, n) => {
        // Check for key elements
        const hasForLoop = /for\s+\w+\s+in\s+range/.test(code);
        const hasSum = /sum\s*[+=]/.test(code) || /sum\s*=\s*sum\s*\+/.test(code);
        const hasPrint = /print\s*\(\s*sum\s*\)/.test(code);

        // Calculate expected result
        const expected = (n * (n + 1)) / 2;

        // Try to extract what range they used
        const rangeMatch = code.match(/range\s*\(\s*(\d+|n\s*\+\s*\d+|\d+\s*,\s*\d+|[\w\s+]+)\s*\)/);

        // Check if they have correct range
        let hasCorrectRange = false;
        if (rangeMatch) {
            const rangeArg = rangeMatch[1].replace(/\s/g, '');
            // range(n+1) or range(0, n+1) patterns
            if (rangeArg === 'n+1' || rangeArg.includes('0,n+1')) {
                hasCorrectRange = true;
            }
        }

        return {
            hasForLoop,
            hasSum,
            hasPrint,
            hasCorrectRange,
            expected,
            isCorrect: hasForLoop && hasSum && hasCorrectRange
        };
    };

    runBtn.onclick = () => {
        const n = parseInt(nInput.value) || 5;
        const code = codeInput.value;

        if (!code.trim()) {
            result.innerHTML = `<span style="color: #f59e0b; font-size: 1.2rem;">⚠️ 请先写代码！</span>`;
            return;
        }

        const validation = validateCode(code, n);

        if (validation.isCorrect) {
            result.innerHTML = `
                <div style="text-align: center;">
                    <span style="color: #22c55e; font-size: 1.3rem; font-weight: bold;">✅ 太棒了！代码正确！</span>
                    <p style="margin: 10px 0 0 0; font-size: 1.1rem;">0 到 ${n} 的和 = <strong>${validation.expected}</strong></p>
                </div>
            `;
            result.style.borderColor = '#22c55e';
            result.style.background = '#f0fdf4';
        } else {
            let feedback = [];
            if (!validation.hasForLoop) feedback.push('需要使用 for 循环');
            if (!validation.hasSum) feedback.push('需要累加到 sum 变量');
            if (!validation.hasCorrectRange) feedback.push('range() 的参数可能不对');

            result.innerHTML = `
                <div style="text-align: center;">
                    <span style="color: #ef4444; font-size: 1.2rem; font-weight: bold;">❌ 再试试看！</span>
                    <p style="margin: 10px 0 0 0; font-size: 1rem; color: #666;">${feedback.join('，')}</p>
                </div>
            `;
            result.style.borderColor = '#ef4444';
            result.style.background = '#fef2f2';
        }
    };

    hintBtn.onclick = () => {
        result.innerHTML = `
            <div style="text-align: left; font-size: 0.95rem;">
                <p style="margin: 0; color: #7c3aed; font-weight: bold;">💡 提示：</p>
                <p style="margin: 5px 0 0 0; color: #555;">
                    1. 用 <code style="background: #e2e8f0; padding: 1px 4px; border-radius: 3px;">range(n + 1)</code> 来生成 0 到 n<br>
                    2. 在循环里用 <code style="background: #e2e8f0; padding: 1px 4px; border-radius: 3px;">sum = sum + i</code> 累加
                </p>
            </div>
        `;
        result.style.borderColor = '#8b5cf6';
        result.style.background = '#faf5ff';
    };
};
