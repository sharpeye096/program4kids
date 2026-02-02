import { html } from '../app.js';

export default html`
    <h2>练习：计算面积 📐</h2>
    
    <p style="font-size: 1.1rem;">编写一个函数 \`calculate_area\`，接收长和宽，返回面积！</p>
    
    <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
        
        <!-- Code Editor -->
        <div style="background: #1e293b; padding: 15px; border-radius: 12px; width: 90%; max-width: 500px;">
            <p style="color: #94a3b8; font-size: 0.9rem; margin: 0 0 10px 0; text-align: left;">✏️ 定义你的函数：</p>
            <textarea id="code-input" style="width: 100%; min-height: 150px; background: #0f172a; color: #e2e8f0; border: 2px solid #334155; font-size: 1rem;" placeholder="def calculate_area(length, width):\n    # 在这里写代码\n    return ...\n\n# 测试你的函数\narea = calculate_area(5, 10)\nprint(area)"></textarea>
        </div>
        
        <!-- Buttons -->
        <div style="display: flex; gap: 12px; align-items: flex-start;">
            <button id="run-btn" style="padding: 12px 25px;">运行 ▶️</button>
            <button id="answer-btn" style="background: #22c55e; box-shadow: 0 5px 0 #16a34a; padding: 12px 25px;">看答案 👀</button>
        </div>
        
        <!-- Result -->
        <div id="result" style="width: 100%; margin-top: 10px; background: #f8fafc; padding: 15px; border-radius: 12px; border: 3px solid #e2e8f0; max-width: 550px; min-height: 60px; display: flex; align-items: center; justify-content: center;">
            <span style="color: #94a3b8;">点击"运行"查看结果！</span>
        </div>
    </div>
`;

export const onMount = (container) => {
    const codeInput = container.querySelector('#code-input');
    const runBtn = container.querySelector('#run-btn');
    const answerBtn = container.querySelector('#answer-btn');
    const result = container.querySelector('#result');

    // Handle Tab key
    codeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = codeInput.selectionStart;
            const end = codeInput.selectionEnd;
            codeInput.value = codeInput.value.substring(0, start) + '    ' + codeInput.value.substring(end);
            codeInput.selectionStart = codeInput.selectionEnd = start + 4;
        }
    });

    const validateCode = (code) => {
        const hasDef = /def\s+calculate_area\s*\(/.test(code);
        const hasReturn = /return\s/.test(code);
        const hasPrint = /print\(/.test(code);
        const hasCall = /calculate_area\s*\(/.test(code);

        return { hasDef, hasReturn, hasPrint, hasCall };
    };

    runBtn.onclick = () => {
        const code = codeInput.value;
        const validation = validateCode(code);

        if (validation.hasDef && validation.hasReturn) {
            result.innerHTML = `
                <div style="text-align: center;">
                    <span style="color: #22c55e; font-size: 1.2rem; font-weight: bold;">✅ 很棒！(模拟运行)</span>
                    <p style="margin: 8px 0 0 0;">Area = 50</p>
                </div>
            `;
            result.style.borderColor = '#22c55e';
            result.style.background = '#f0fdf4';
        } else {
            result.innerHTML = `
                <div style="text-align: center;">
                    <span style="color: #f59e0b; font-size: 1.1rem; font-weight: bold;">⚠️ 检查一下</span>
                    <p style="margin: 5px 0 0 0; color: #666;">记得用 def 定义，用 return 返回哦！</p>
                </div>
            `;
            result.style.borderColor = '#f59e0b';
            result.style.background = '#fffbeb';
        }
    };

    answerBtn.onclick = () => {
        result.innerHTML = `
            <div style="text-align: left; font-size: 0.9rem;">
                <p style="margin: 0; color: #166534; font-weight: bold;">✨ 参考答案：</p>
                <pre style="margin: 5px 0 0 0; background: #1e293b; color: #e2e8f0; padding: 10px; border-radius: 8px;">def calculate_area(length, width):
    return length * width

# 调用
print(calculate_area(5, 10))</pre>
            </div>
        `;
        result.style.borderColor = '#22c55e';
        result.style.background = '#f0fdf4';
    };
};
