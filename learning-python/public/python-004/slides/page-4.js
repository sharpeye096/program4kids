import { html } from '../app.js';

export default html`
    <h2>函数的参数 📥</h2>
    
    <p style="font-size: 1.2rem;">参数就是传给函数的<strong>输入值</strong>！</p>
    
    <div style="background: #1e293b; padding: 20px 28px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #e2e8f0; margin: 20px 0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #5c6370;"># 带一个参数的函数</span>
<span style="color: #c678dd;">def</span> <span style="color: #61afef;">greet</span>(<span style="color: #7dd3fc;">name</span>):
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"你好，"</span> + <span style="color: #7dd3fc;">name</span> + <span style="color: #98c379;">"！"</span>)

<span style="color: #61afef;">greet</span>(<span style="color: #98c379;">"小明"</span>)   <span style="color: #5c6370;"># 输出: 你好，小明！</span>
<span style="color: #61afef;">greet</span>(<span style="color: #98c379;">"小红"</span>)   <span style="color: #5c6370;"># 输出: 你好，小红！</span>

<span style="color: #5c6370;"># 带两个参数的函数</span>
<span style="color: #c678dd;">def</span> <span style="color: #61afef;">add</span>(<span style="color: #7dd3fc;">a</span>, <span style="color: #7dd3fc;">b</span>):
    <span style="color: #e5c07b;">print</span>(<span style="color: #7dd3fc;">a</span> + <span style="color: #7dd3fc;">b</span>)

<span style="color: #61afef;">add</span>(<span style="color: #d19a66;">3</span>, <span style="color: #d19a66;">5</span>)       <span style="color: #5c6370;"># 输出: 8</span>
        </pre>
    </div>
    
    <p style="font-size: 1.1rem; background: linear-gradient(135deg, #8b5cf6, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold;">
        💡 参数让函数变得更灵活，可以处理不同的数据！
    </p>
`;
