import { html } from '../app.js';

export default html`
    <h2>综合示例：累加求和 ➕🔄</h2>
    
    <p style="font-size: 1.2rem;">计算 <strong>1 + 2 + 3 + ... + n</strong> 的和！</p>
    
    <div style="display: flex; gap: 30px; align-items: flex-start; flex-wrap: wrap; justify-content: center; margin: 15px 0;">
        
        <div style="background: #1e293b; padding: 20px 25px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #e2e8f0; max-width: 380px;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #7dd3fc;">n</span> = <span style="color: #d19a66;">5</span>
<span style="color: #7dd3fc;">sum</span> = <span style="color: #d19a66;">0</span>

<span style="color: #c678dd;">for</span> <span style="color: #7dd3fc;">i</span> <span style="color: #c678dd;">in</span> <span style="color: #e5c07b;">range</span>(<span style="color: #d19a66;">1</span>, <span style="color: #7dd3fc;">n</span> + <span style="color: #d19a66;">1</span>):
    <span style="color: #7dd3fc;">sum</span> = <span style="color: #7dd3fc;">sum</span> + <span style="color: #7dd3fc;">i</span>

<span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">sum</span>)  <span style="color: #5c6370;"># 输出: 15</span>
            </pre>
        </div>
        
        <div id="exec-box" style="background: #fef3c7; padding: 20px; border-radius: 15px; border: 2px solid #f59e0b; max-width: 280px; text-align: left; cursor: pointer; user-select: none;">
            <p style="margin: 0 0 10px 0; font-size: 1rem; color: #92400e; font-weight: bold;">🔍 执行过程：<span style="font-size: 0.8rem; font-weight: normal;">（点击逐步显示）</span></p>
            <div id="exec-steps" style="font-family: 'Consolas', monospace; font-size: 0.9rem; color: #92400e; line-height: 1.8;">
            </div>
        </div>
    </div>
    
    <div style="background: linear-gradient(135deg, #dbeafe, #e0e7ff); padding: 15px 20px; border-radius: 12px; border: 2px solid #3b82f6; margin-top: 10px;">
        <p style="margin: 0; font-size: 1.1rem; color: #1e40af;">
            💡 <strong>小技巧</strong>：<code style="background: #fff; padding: 2px 6px; border-radius: 4px;">sum += i</code> 是 <code style="background: #fff; padding: 2px 6px; border-radius: 4px;">sum = sum + i</code> 的简写！
        </p>
    </div>
`;

export const onMount = (container) => {
    const execBox = container.querySelector('#exec-box');
    const execSteps = container.querySelector('#exec-steps');

    const steps = [
        'i=1: sum = 0 + 1 = 1',
        'i=2: sum = 1 + 2 = 3',
        'i=3: sum = 3 + 3 = 6',
        'i=4: sum = 6 + 4 = 10',
        'i=5: sum = 10 + 5 = <strong>15</strong> ✅'
    ];

    let currentStep = 0;

    execBox.onclick = () => {
        if (currentStep < steps.length) {
            const stepEl = document.createElement('div');
            stepEl.innerHTML = steps[currentStep];
            stepEl.style.animation = 'fadeIn 0.3s ease';
            execSteps.appendChild(stepEl);
            currentStep++;
        } else {
            // Reset
            execSteps.innerHTML = '';
            currentStep = 0;
        }
    };
};
