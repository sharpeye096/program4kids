import { html } from '../app.js';

export default html`
    <h2>小测验！🧠</h2>
    <p>输入一个年龄，然后点击你认为会运行的那一行代码！</p>
    
    <div style="display: flex; flex-direction: column; gap: 20px; align-items: center; width: 100%;">
        <!-- Input Section -->
        <div style="background: #fff; padding: 20px 40px; border-radius: 15px; border: 3px solid #8b5cf6; width: 80%; max-width: 500px; text-align: center;">
            <label style="font-size: 1.3rem; font-weight: bold;">年龄 (Age):</label>
            <input type="number" id="quiz-age" placeholder="输入数字" style="width: 150px; margin-left: 15px; font-size: 1.3rem;" />
        </div>
        
        <!-- Code Section -->
        <div style="background: #1e293b; padding: 25px 30px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1.1rem; color: #e2e8f0; width: 90%; max-width: 700px;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit; white-space: pre-wrap;">
<span style="color: #c678dd;">def</span> <span style="color: #61afef;">say_hi</span>(name, age):
    <span style="color: #c678dd;">if</span> age < <span style="color: #d19a66;">6</span>:
        <span id="line1" class="quiz-line" style="cursor: pointer; padding: 4px 8px; border-radius: 5px; transition: all 0.3s; display: inline-block;">msg = "Hi," + name + "你还是个小小朋友吧！"</span> <span style="color: #5c6370;">#1</span>
    <span style="color: #c678dd;">else</span>:
        <span style="color: #c678dd;">if</span> age <= <span style="color: #d19a66;">12</span>:
            <span id="line2" class="quiz-line" style="cursor: pointer; padding: 4px 8px; border-radius: 5px; transition: all 0.3s; display: inline-block;">msg = "Hi," + name + "你还在上小学吧！"</span> <span style="color: #5c6370;">#2</span>
        <span style="color: #c678dd;">else</span>:
            <span id="line3" class="quiz-line" style="cursor: pointer; padding: 4px 8px; border-radius: 5px; transition: all 0.3s; display: inline-block;">msg = "Hi," + name + "你已经是个大孩子啦！"</span> <span style="color: #5c6370;">#3</span>
    <span style="color: #e5c07b;">print</span>(msg)
            </pre>
        </div>
    </div>
    
    <div id="quiz-result" style="margin-top: 20px; font-size: 1.5rem; min-height: 2rem;"></div>
    
    <button id="reset-btn" style="margin-top: 10px;">🔄 重新开始</button>
`;

export const onMount = (container) => {
    const ageInput = container.querySelector('#quiz-age');
    const line1 = container.querySelector('#line1');
    const line2 = container.querySelector('#line2');
    const line3 = container.querySelector('#line3');
    const result = container.querySelector('#quiz-result');
    const resetBtn = container.querySelector('#reset-btn');

    const lines = [line1, line2, line3];

    // Determine correct answer based on age
    const getCorrectLine = (age) => {
        if (age < 6) return 1;
        else if (age <= 12) return 2;
        else return 3;
    };

    const handleLineClick = (clickedLineNum) => {
        const age = parseInt(ageInput.value);

        if (isNaN(age)) {
            result.textContent = "⚠️ 请先输入一个年龄数字！";
            result.style.color = "#f59e0b";
            return;
        }

        const correctLine = getCorrectLine(age);

        // Reset all lines first
        lines.forEach(line => {
            line.style.background = 'transparent';
            line.style.color = '#98c379';
        });

        if (clickedLineNum === correctLine) {
            // Correct!
            lines[clickedLineNum - 1].style.background = '#22c55e';
            lines[clickedLineNum - 1].style.color = '#fff';
            result.innerHTML = "✅ 正确！太棒了！🎉";
            result.style.color = "#22c55e";
        } else {
            // Wrong
            lines[clickedLineNum - 1].style.background = '#ef4444';
            lines[clickedLineNum - 1].style.color = '#fff';
            result.innerHTML = "❌ 不对哦，再想想！";
            result.style.color = "#ef4444";
        }
    };

    line1.onclick = () => handleLineClick(1);
    line2.onclick = () => handleLineClick(2);
    line3.onclick = () => handleLineClick(3);

    // Hover effects
    lines.forEach(line => {
        line.onmouseenter = () => {
            if (line.style.background === 'transparent' || !line.style.background) {
                line.style.background = 'rgba(139, 92, 246, 0.3)';
            }
        };
        line.onmouseleave = () => {
            if (line.style.background === 'rgba(139, 92, 246, 0.3)') {
                line.style.background = 'transparent';
            }
        };
    });

    // Reset button
    resetBtn.onclick = () => {
        ageInput.value = '';
        result.textContent = '';
        lines.forEach(line => {
            line.style.background = 'transparent';
            line.style.color = '#98c379';
        });
    };
};
