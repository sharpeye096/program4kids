import { html } from '../app.js';

export default html`
    <h2>练习：字符串反转 🔄</h2>
    
    <p style="font-size: 1.05rem;">用递归把字符串<strong>倒过来</strong>！例如："hello" → "olleh"</p>
    
    <div style="display: flex; flex-direction: column; gap: 12px; align-items: center; width: 100%;">
        
        <!-- Input -->
        <div style="background: #fff; padding: 10px 18px; border-radius: 10px; border: 3px solid #8b5cf6; display: flex; align-items: center; gap: 12px;">
            <label style="font-size: 1rem; font-weight: bold;">反转字符串:</label>
            <input type="text" id="text-input" value="hello" style="width: 150px; font-size: 1rem;" />
        </div>
        
        <!-- Code Editor -->
        <div style="background: #1e293b; padding: 12px; border-radius: 10px; width: 90%; max-width: 550px;">
            <p style="color: #94a3b8; font-size: 0.85rem; margin: 0 0 8px 0; text-align: left;">✏️ 用递归编写反转函数：</p>
            <textarea id="code-input" style="width: 100%; min-height: 110px; background: #0f172a; color: #e2e8f0; border: 2px solid #334155; font-size: 0.9rem;" placeholder="def reverse(s):
    if len(s) <= 1:   # 停止条件
        return s
    else:
        return ...    # reverse(s[1:]) + s[0]"></textarea>
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
    const textInput = container.querySelector('#text-input');
    const codeInput = container.querySelector('#code-input');
    const runBtn = container.querySelector('#run-btn');
    const hintBtn = container.querySelector('#hint-btn');
    const answerBtn = container.querySelector('#answer-btn');
    const result = container.querySelector('#result');

    // Reverse string
    const reverse = (s) => {
        if (s.length <= 1) return s;
        return reverse(s.substring(1)) + s[0];
    };

    // Validate code
    const validateCode = (code) => {
        const hasDefReverse = /def\s+reverse\s*\(\s*s\s*\)/.test(code);
        const hasBaseCase = /if\s+len\s*\(\s*s\s*\)\s*<=?\s*1/.test(code) || /if\s+s\s*==\s*["']/.test(code);
        const hasReturn = /return\s+s/.test(code);
        const hasRecursion = /reverse\s*\(\s*s\s*\[\s*1\s*:\s*\]\s*\)\s*\+\s*s\s*\[\s*0\s*\]/.test(code);

        return {
            hasDefReverse,
            hasBaseCase,
            hasReturn,
            hasRecursion,
            isCorrect: hasDefReverse && hasBaseCase && hasReturn && hasRecursion
        };
    };

    runBtn.onclick = () => {
        const text = textInput.value || 'hello';
        const code = codeInput.value;

        if (!code.trim()) {
            result.innerHTML = `<span style="color: #f59e0b; font-size: 1.1rem;">⚠️ 请先写代码！</span>`;
            return;
        }

        const validation = validateCode(code);
        const expected = reverse(text);

        if (validation.isCorrect) {
            result.innerHTML = `
                <div style="text-align: center;">
                    <span style="color: #22c55e; font-size: 1.15rem; font-weight: bold;">✅ 太棒了！代码正确！🎉</span>
                    <p style="margin: 8px 0 0 0; font-size: 1rem;">"${text}" → "<strong>${expected}</strong>"</p>
                </div>
            `;
            result.style.borderColor = '#22c55e';
            result.style.background = '#f0fdf4';
        } else {
            let feedback = [];
            if (!validation.hasDefReverse) feedback.push('需要 def reverse(s)');
            if (!validation.hasBaseCase) feedback.push('需要停止条件 (len(s) <= 1)');
            if (!validation.hasRecursion) feedback.push('需要递归 reverse(s[1:]) + s[0]');

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
                    1. s[0] 是第一个字符<br>
                    2. s[1:] 是除了第一个字符的其余部分<br>
                    3. 反转 = reverse(剩余部分) + 第一个字符
                </p>
            </div>
        `;
        result.style.borderColor = '#8b5cf6';
        result.style.background = '#faf5ff';
    };

    answerBtn.onclick = () => {
        const text = textInput.value || 'hello';
        const expected = reverse(text);

        result.innerHTML = `
            <div style="text-align: left; font-size: 0.85rem;">
                <p style="margin: 0; color: #166534; font-weight: bold;">✨ 参考答案：</p>
                <pre style="margin: 5px 0 0 0; background: #1e293b; color: #e2e8f0; padding: 10px; border-radius: 8px; font-size: 0.8rem;">def reverse(s):
    if len(s) <= 1:
        return s
    else:
        return reverse(s[1:]) + s[0]

print(reverse("${text}"))  # 输出: ${expected}</pre>
            </div>
        `;
        result.style.borderColor = '#22c55e';
        result.style.background = '#f0fdf4';
    };
};
