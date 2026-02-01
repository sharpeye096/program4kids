import { html } from '../app.js';

export default html`
    <h2>用 def 定义函数 📝</h2>
    
    <p style="font-size: 1.2rem;"><code style="background: #e2e8f0; padding: 3px 8px; border-radius: 5px; font-weight: bold;">def</code> 是 define（定义）的缩写！</p>
    
    <div style="background: #1e293b; padding: 20px 28px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1.05rem; color: #e2e8f0; margin: 20px 0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #5c6370;"># 定义一个打招呼的函数</span>
<span style="color: #c678dd;">def</span> <span style="color: #61afef;">say_hello</span>():
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"你好！"</span>)
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"欢迎学习Python！"</span>)

<span style="color: #5c6370;"># 调用函数（使用函数）</span>
<span style="color: #61afef;">say_hello</span>()   <span style="color: #5c6370;"># 输出: 你好！欢迎学习Python！</span>
<span style="color: #61afef;">say_hello</span>()   <span style="color: #5c6370;"># 可以调用很多次！</span>
        </pre>
    </div>
    
    <div style="background: #fef3c7; padding: 15px 20px; border-radius: 12px; border: 2px solid #f59e0b;">
        <p style="margin: 0; font-size: 1.1rem; color: #92400e;">
            ⚠️ <strong>注意</strong>：函数里面的代码要<strong>缩进</strong>（按 Tab 键）！
        </p>
    </div>
`;
