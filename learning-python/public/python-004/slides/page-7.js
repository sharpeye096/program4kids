import { html } from '../app.js';

export default html`
    <h2>斐波那契数列 🐇</h2>
    
    <p style="font-size: 1.1rem;">每个数 = <strong>前两个数的和</strong>！用递归完美实现！</p>
    
    <div style="display: flex; justify-content: center; gap: 8px; margin: 15px 0; flex-wrap: wrap;">
        <span style="background: #8b5cf6; color: #fff; padding: 8px 15px; border-radius: 10px; font-size: 1.2rem; font-weight: bold;">0</span>
        <span style="background: #8b5cf6; color: #fff; padding: 8px 15px; border-radius: 10px; font-size: 1.2rem; font-weight: bold;">1</span>
        <span style="background: #a78bfa; color: #fff; padding: 8px 15px; border-radius: 10px; font-size: 1.2rem; font-weight: bold;">1</span>
        <span style="background: #a78bfa; color: #fff; padding: 8px 15px; border-radius: 10px; font-size: 1.2rem; font-weight: bold;">2</span>
        <span style="background: #c4b5fd; color: #333; padding: 8px 15px; border-radius: 10px; font-size: 1.2rem; font-weight: bold;">3</span>
        <span style="background: #c4b5fd; color: #333; padding: 8px 15px; border-radius: 10px; font-size: 1.2rem; font-weight: bold;">5</span>
        <span style="background: #ddd6fe; color: #333; padding: 8px 15px; border-radius: 10px; font-size: 1.2rem; font-weight: bold;">8</span>
        <span style="background: #ede9fe; color: #333; padding: 8px 15px; border-radius: 10px; font-size: 1.2rem; font-weight: bold;">13</span>
        <span style="font-size: 1.2rem; padding: 8px;">...</span>
    </div>
    
    <div style="background: #1e293b; padding: 15px 20px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; font-size: 0.9rem; color: #e2e8f0; margin: 12px 0;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c678dd;">def</span> <span style="color: #61afef;">fib</span>(<span style="color: #7dd3fc;">n</span>):
    <span style="color: #c678dd;">if</span> <span style="color: #7dd3fc;">n</span> <= <span style="color: #d19a66;">1</span>:          <span style="color: #5c6370;"># 停止条件：第0和第1个数</span>
        <span style="color: #c678dd;">return</span> <span style="color: #7dd3fc;">n</span>
    <span style="color: #c678dd;">else</span>:
        <span style="color: #c678dd;">return</span> <span style="color: #61afef;">fib</span>(<span style="color: #7dd3fc;">n</span>-<span style="color: #d19a66;">1</span>) + <span style="color: #61afef;">fib</span>(<span style="color: #7dd3fc;">n</span>-<span style="color: #d19a66;">2</span>)  <span style="color: #5c6370;"># 递归：前两个数的和</span>

<span style="color: #e5c07b;">print</span>(<span style="color: #61afef;">fib</span>(<span style="color: #d19a66;">6</span>))  <span style="color: #5c6370;"># 输出: 8</span>
        </pre>
    </div>
    
    <p style="font-size: 1rem; color: var(--primary); font-weight: bold;">
        🌳 fib(4) → fib(3) + fib(2) → fib(2) + fib(1) + fib(1) + fib(0) → ...
    </p>
`;
