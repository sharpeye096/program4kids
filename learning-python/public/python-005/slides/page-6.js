import { html } from '../app.js';

export default html`
    <h2>和机器人聊天 (Input) 🤖</h2>
    
    <p style="font-size: 1.1rem;"><code style="background: #e2e8f0; padding: 2px 6px; border-radius: 4px; font-weight: bold;">input()</code> 让程序可以<strong>听你说话</strong>！但要注意类型！</p>

    <div style="display: flex; gap: 20px; justify-content: center; height: 65vh;">
        <!-- Code Logic -->
        <div style="flex: 1; background: #1e293b; padding: 20px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 0.9rem; color: #e2e8f0; display: flex; flex-direction: column; justify-content: center;">
            <p style="color: #94a3b8; margin-bottom: 10px;">📝 Python 代码：</p>
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #7dd3fc;">name</span> = <span style="color: #e5c07b;">input</span>(<span style="color: #98c379;">"你叫什么名字？"</span>)
<span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"你好，"</span> + <span style="color: #7dd3fc;">name</span>)

<span style="color: #7dd3fc;">age_str</span> = <span style="color: #e5c07b;">input</span>(<span style="color: #98c379;">"你几岁了？"</span>)
<span style="color: #5c6370;"># ⚠️ input 得到的是文字(str)！</span>
<span style="color: #7dd3fc;">age</span> = <span style="color: #e5c07b;">int</span>(<span style="color: #7dd3fc;">age_str</span>)  <span style="color: #5c6370;"># 必须转换成数字！</span>

<span style="color: #7dd3fc;">next_age</span> = <span style="color: #7dd3fc;">age</span> + <span style="color: #d19a66;">1</span>
<span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"明年你就"</span>, <span style="color: #7dd3fc;">next_age</span>, <span style="color: #98c379;">"岁啦！"</span>)
            </pre>
        </div>

        <!-- Interactive Chat -->
        <div style="flex: 1; background: #fff; border: 3px solid var(--primary); border-radius: 15px; display: flex; flex-direction: column; overflow: hidden; box-shadow: var(--shadow-float);">
            <div id="chat-history" style="flex: 1; padding: 15px; overflow-y: auto; background: #f8fafc; display: flex; flex-direction: column; gap: 10px;">
                <div style="align-self: flex-start; background: #e0e7ff; padding: 8px 12px; border-radius: 10px 10px 10px 0; color: #333;">
                    🤖: 嗨！点击下方开始和我聊天！
                </div>
            </div>
            
            <div style="padding: 10px; border-top: 2px solid #e2e8f0; display: flex; gap: 10px; background: #fff;">
                <input type="text" id="user-input" placeholder="输入..." disabled style="flex: 1; outline: none; border-color: #cbd5e1;">
                <button id="start-btn" style="padding: 8px 15px; font-size: 0.9rem;">开始 ▶️</button>
            </div>
        </div>
    </div>
`;

export const onMount = (container) => {
    const chatHistory = container.querySelector('#chat-history');
    const userInput = container.querySelector('#user-input');
    const startBtn = container.querySelector('#start-btn');

    let step = 0; // 0: idle, 1: waiting for name, 2: waiting for age

    const scrollToBottom = () => {
        chatHistory.scrollTop = chatHistory.scrollHeight;
    };

    function addMsg(text, isUser = false) {
        const msg = document.createElement('div');
        msg.style.cssText = isUser
            ? "align-self: flex-end; background: #dcfce7; padding: 8px 12px; border-radius: 10px 10px 0 10px; color: #333;"
            : "align-self: flex-start; background: #e0e7ff; padding: 8px 12px; border-radius: 10px 10px 10px 0; color: #333;";
        msg.textContent = (isUser ? "👤: " : "🤖: ") + text;
        chatHistory.appendChild(msg);
        scrollToBottom();
    }

    startBtn.onclick = () => {
        chatHistory.innerHTML = '';
        step = 1;
        addMsg("你叫什么名字？"); // input("...")
        userInput.disabled = false;
        userInput.focus();
        startBtn.disabled = true;
    };

    userInput.onkeydown = (e) => {
        if (e.key === 'Enter' && step > 0) {
            const val = userInput.value.trim();
            if (!val) return;

            addMsg(val, true);
            userInput.value = '';

            if (step === 1) {
                // Name received
                setTimeout(() => {
                    addMsg(`你好，${val}！👋`);
                    setTimeout(() => {
                        addMsg("你几岁了？(请输入数字)");
                        step = 2;
                    }, 800);
                }, 500);
            } else if (step === 2) {
                // Age received
                const age = parseInt(val);
                if (isNaN(age)) {
                    setTimeout(() => {
                        addMsg(`❌ 哎呀！"${val}" 不是数字！不能做加法哦！请重新输入数字。`);
                    }, 500);
                } else {
                    setTimeout(() => {
                        addMsg(`明年你就 ${age + 1} 岁啦！🎂`);
                        userInput.disabled = true;
                        startBtn.disabled = false;
                        startBtn.innerText = "再玩一次 🔄";
                        step = 0;
                    }, 500);
                }
            }
        }
    };
};
