import { html } from '../app.js';

export default html`
    <h2>💻 在电脑上运行</h2>
    
    <p style="font-size: 1.1rem;">如果你在自己的电脑上安转了 Python，想在 IDLE 里画画，需要加上这些<strong>"魔法咒语"</strong>哦！</p>
    
    <div style="background: #1e293b; padding: 20px; border-radius: 12px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #e2e8f0; margin: 20px auto; max-width: 600px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c678dd;">import</span> <span style="color: #61afef;">turtle</span>          <span style="color: #5c6370;"># 1. 召唤海龟模块</span>

<span style="color: #e06c75;">t</span> = <span style="color: #61afef;">turtle</span>.<span style="color: #e5c07b;">Turtle</span>()     <span style="color: #5c6370;"># 2. 创建一只海龟，名字叫 t</span>
<span style="color: #e06c75;">t</span>.<span style="color: #61afef;">shape</span>(<span style="color: #98c379;">"turtle"</span>)      <span style="color: #5c6370;"># 3. 把它变成海龟的样子</span>

<span style="color: #5c6370;"># --- 你的代码写在下面 ---</span>
<span style="color: #e06c75;">t</span>.<span style="color: #61afef;">forward</span>(<span style="color: #d19a66;">100</span>)
<span style="color: #e06c75;">t</span>.<span style="color: #61afef;">left</span>(<span style="color: #d19a66;">90</span>)
<span style="color: #5c6370;"># ----------------------</span>

<span style="color: #61afef;">turtle</span>.<span style="color: #61afef;">done</span>()          <span style="color: #5c6370;"># 4. 画完不关闭窗口</span>
        </pre>
    </div>
    
    <div style="background: #f0f9ff; padding: 15px 20px; border-radius: 12px; border-left: 5px solid #3b82f6; max-width: 600px; margin: 0 auto; text-align: left;">
        <p style="margin: 0; font-size: 0.95rem; color: #1e40af;">
            💡 <strong>网页版的小秘密</strong>：为了方便你学习，网页版自动帮你写好了这些准备工作，所以你只需要写中间的控制命令 (比如 <code>t.forward</code>) 就行啦！
        </p>
    </div>
`;
