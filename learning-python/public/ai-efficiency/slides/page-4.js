import { html } from '../app.js';

export const onMount = (container) => {
    const boxes = container.querySelectorAll('.typewriter-box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            // 防止重复触发
            if (box.dataset.typing === "true" || box.dataset.typed === "true") return;
            
            box.dataset.typing = "true";
            box.style.background = "#f1f5f9"; // 点击后稍微改变背景色
            box.style.borderColor = "var(--primary)";

            const textElement = box.querySelector('.typewriter-text');
            const fullText = textElement.getAttribute('data-text');
            textElement.style.display = 'block';
            textElement.textContent = ''; // 清空准备打字

            const cursor = document.createElement('span');
            cursor.textContent = ' ▌';
            cursor.className = 'blinking-cursor';
            cursor.style.color = 'var(--primary)';
            cursor.style.animation = 'blink 1s step-end infinite';
            textElement.appendChild(cursor);

            let i = 0;
            const speed = 25; // 打字速度，毫秒

            function type() {
                if (i < fullText.length) {
                    textElement.insertBefore(document.createTextNode(fullText.charAt(i)), cursor);
                    i++;
                    setTimeout(type, speed);
                } else {
                    box.dataset.typing = "false";
                    box.dataset.typed = "true";
                    cursor.style.display = 'none'; // 输入完成后隐藏光标
                }
            }
            type();
        });
    });
};

export default html`
    <style>
        .typewriter-box {
            cursor: pointer;
            transition: all 0.3s ease;
            min-height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        .typewriter-box:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-float);
        }
        .blinking-cursor {
            font-weight: bold;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        .icon {
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }
    </style>

    <h2>2. 新的范式：技术门槛正在消失</h2>
    
    <div class="card" style="margin-bottom: 2rem; background: #eff6ff; border-left: 4px solid var(--accent); border-radius: 4px;">
        <h3 style="margin-top: 0; margin-bottom: 0.8rem; color: #1e40af; font-size: 1.6rem;">核心观点：AI时代，一切皆代码</h3>
        <p style="margin-bottom: 0; font-size: 1.25rem; color: #334155;">当自然语言真正成为编程语言，你描述的每一个业务意图都能被瞬间转换为可执行的代码逻辑。不论是构建系统、处理数据还是自动化办公，构想与落地之间的距离正无限趋近于零。</p>
    </div>

    <div class="grid-2">
        <!-- 卡片 1 -->
        <div class="card typewriter-box">
            <h3 style="margin-top: 0; font-size: 1.6rem; display: flex; align-items: center;">
                <span class="icon">🚀</span> 突破未知领域的壁垒
            </h3>
            <p class="typewriter-text" style="display: none; font-size: 1.2rem; line-height: 1.7; color: #475569; flex: 1;" 
               data-text="对于原本不熟悉的技术环境（如前端开发、数据库等），在AI辅写系统的加成下，我们可以极为快速地跨界构建出可用原型并投入验证。"></p>
        </div>
        
        <!-- 卡片 2 -->
        <div class="card typewriter-box">
            <h3 style="margin-top: 0; font-size: 1.6rem; display: flex; align-items: center;">
                <span class="icon">🎭</span> 角色界限正在模糊
            </h3>
            <p class="typewriter-text" style="display: none; font-size: 1.2rem; line-height: 1.7; color: #475569; flex: 1;" 
               data-text="一个明显的趋势：大量的PM（产品经理）和运营人员已经开始自给自足地编写代码。当我们可以直接通过描述业务痛点获得产出时，编码就不再是最大的瓶颈。"></p>
        </div>

        <!-- 卡片 3 -->
        <div class="card typewriter-box">
            <h3 style="margin-top: 0; font-size: 1.6rem; display: flex; align-items: center;">
                <span class="icon">⚙️</span> 固化重复的任务
            </h3>
            <p class="typewriter-text" style="display: none; font-size: 1.2rem; line-height: 1.7; color: #475569; flex: 1;" 
               data-text="将日常工作流中极度耗时的模板填充、文本提取、表格汇总等任务，借由AI固化为自动化脚本指令。一旦跑通，未来即可实现近乎零边际成本的一键批处理。"></p>
        </div>

        <!-- 卡片 4 -->
        <div class="card typewriter-box">
            <h3 style="margin-top: 0; font-size: 1.6rem; display: flex; align-items: center;">
                <span class="icon">💻</span> 充分发挥本地计算机的能力
            </h3>
            <p class="typewriter-text" style="display: none; font-size: 1.2rem; line-height: 1.7; color: #475569; flex: 1;" 
               data-text="不再满足于“将AI框在网页聊天窗”里。通过深层次的AI智能体应用，让AI真正接管终端控制台并读取磁盘数据，将你的本地电脑转化为一台全自动运转的思想“工厂”。"></p>
        </div>
    </div>
    
    <div class="slide-number">4 / 10</div>
`;
