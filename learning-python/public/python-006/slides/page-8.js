import { html } from '../app.js';

export default html`
    <h2>终极PK：递归 vs 公式 ⚔️</h2>
    
    <div style="display: flex; flex-direction: column; gap: 15px; align-items: center; width: 100%;">
        
        <!-- N Value Input -->
        <div style="background: #fff; padding: 10px 20px; border-radius: 10px; border: 3px solid var(--primary); display: flex; align-items: center; gap: 15px;">
            <label style="font-size: 1.1rem; font-weight: bold;">计算 1+2+...+n, n =</label>
            <input type="number" id="n-value" value="100" min="1" max="500" style="width: 80px; font-size: 1.1rem; text-align: center;" />
        </div>
        
        <!-- Code Editor -->
        <div style="display: flex; gap: 10px; width: 100%; max-width: 800px;">
            <div style="flex: 1; text-align: left;">
                <p style="font-size: 0.9rem; margin-bottom: 5px; color: var(--secondary);">📝 递归函数 sum_recursive(n):</p>
                <textarea id="code-recursive" style="width: 100%; height: 120px; background: #2e1065; color: #e9d5ff; border: 2px solid var(--secondary); font-size: 0.9rem;" placeholder="def sum_recursive(n):
    if n == 1:
        return 1
    else:
        return n + sum_recursive(n-1)"></textarea>
            </div>
            <div style="flex: 1; text-align: left;">
                <p style="font-size: 0.9rem; margin-bottom: 5px; color: var(--accent);">⚡ 公式函数 sum_formula(n):</p>
                <textarea id="code-formula" style="width: 100%; height: 120px; background: #fffbeb; color: #92400e; border: 2px solid var(--accent); font-size: 0.9rem;" placeholder="def sum_formula(n):
    return n * (n + 1) // 2"></textarea>
            </div>
        </div>
        
        <!-- Buttons -->
        <div style="display: flex; gap: 15px;">
            <button id="run-btn" style="padding: 12px 30px; font-size: 1.2rem;">开始对决！🚀</button>
            <button id="answer-btn" style="background: #10b981; box-shadow: 0 4px 0 #059669;">填入答案 ✨</button>
        </div>
        
        <!-- Result -->
        <div id="result" style="width: 100%; max-width: 600px; min-height: 80px;"></div>
    </div>
`;

export const onMount = (container) => {
    const nInput = container.querySelector('#n-value');
    const codeRec = container.querySelector('#code-recursive');
    const codeForm = container.querySelector('#code-formula');
    const runBtn = container.querySelector('#run-btn');
    const answerBtn = container.querySelector('#answer-btn');
    const result = container.querySelector('#result');

    // Internal implementations for verification
    const solveRecursive = (n) => {
        if (n === 1) return 1;
        return n + solveRecursive(n - 1);
    };

    const solveFormula = (n) => {
        return Math.floor(n * (n + 1) / 2);
    };

    const validateRecursive = (code) => {
        const hasDef = /def\s+sum_recursive\s*\(\s*n\s*\)/.test(code);
        const hasBase = /if\s+n\s*==\s*1/.test(code) && /return\s+1/.test(code);
        const hasRec = /return\s+n\s*\+\s*sum_recursive\s*\(\s*n\s*-\s*1\s*\)/.test(code);
        return hasDef && hasBase && hasRec;
    };

    const validateFormula = (code) => {
        const hasDef = /def\s+sum_formula\s*\(\s*n\s*\)/.test(code);
        // Accept both n*(n+1)/2 and n*(n+1)//2, with or without spaces
        const hasMath = /return\s+n\s*\*\s*\(\s*n\s*\+\s*1\s*\)\s*(\/\/|\/)\s*2/.test(code);
        return hasDef && hasMath;
    };

    answerBtn.onclick = () => {
        codeRec.value = `def sum_recursive(n):
    if n == 1:
        return 1
    else:
        return n + sum_recursive(n-1)`;

        codeForm.value = `def sum_formula(n):
    return n * (n + 1) // 2`;
    };

    runBtn.onclick = () => {
        const n = parseInt(nInput.value) || 100;
        const recValid = validateRecursive(codeRec.value);
        const formValid = validateFormula(codeForm.value);

        if (!recValid || !formValid) {
            result.innerHTML = `
                <div style="background: #fee2e2; color: #991b1b; padding: 15px; border-radius: 12px; border: 2px solid #ef4444; text-align: center;">
                    😕 代码好像有点问题，检查一下？
                    ${!recValid ? '<br>- 递归函数写對了吗？(记得 Base Case)' : ''}
                    ${!formValid ? '<br>- 公式函数写對了吗？(格式: n*(n+1)/2 或 n*(n+1)//2)' : ''}
                </div>
            `;
            return;
        }

        const ansRec = solveRecursive(n);
        const ansForm = solveFormula(n);

        result.innerHTML = `
            <div style="background: #f0fdf4; padding: 20px; border-radius: 15px; border: 3px solid #22c55e; display: flex; justify-content: space-around; align-items: center;">
                <div style="text-align: center;">
                    <div style="font-size: 0.9rem; color: var(--secondary);">递归结果</div>
                    <div style="font-size: 2rem; font-weight: bold; color: var(--secondary);">${ansRec}</div>
                    <div style="font-size: 0.8rem; color: #666;">调用 ${n} 次函数</div>
                </div>
                <div style="font-size: 2rem;">=</div>
                <div style="text-align: center;">
                    <div style="font-size: 0.9rem; color: var(--accent);">公式结果</div>
                    <div style="font-size: 2rem; font-weight: bold; color: var(--accent);">${ansForm}</div>
                    <div style="font-size: 0.8rem; color: #666;">只需 1 次计算</div>
                </div>
            </div>
            <div style="margin-top: 12px; padding: 12px 15px; background: #e0f2fe; border-radius: 10px; border: 2px solid #0ea5e9;">
                <p style="margin: 0; font-size: 1rem; color: #0369a1; text-align: center;">
                    🎉 两者结果完全一样！<br>
                    <strong>📊 性能对比：</strong>公式法只需 <strong>1 次计算</strong>，递归法需要 <strong>${n} 次函数调用</strong><br>
                    <span style="color: #166534;">✅ 结论：公式法更快、更高效！这就是数学的魔力！</span>
                </p>
            </div>
        `;
    };
};
