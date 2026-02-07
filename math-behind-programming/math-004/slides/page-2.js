import { html } from '../app.js';

export default html`
    <h2>神奇的数列规则</h2>
    
    <p>前两个数加起来等于第三个数！</p>
    
    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin: 20px 0;">
        <div class="fib-box" style="background: #fef3c7; color: #92400e;">1</div>
        <div style="font-size: 2rem; align-self: center;">+</div>
        <div class="fib-box" style="background: #fef3c7; color: #92400e;">1</div>
        <div style="font-size: 2rem; align-self: center;">=</div>
        <div class="fib-box" style="background: #dcfce7; color: #16a34a;">2</div>
    </div>
    
    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin: 20px 0;">
        <div class="fib-box" style="background: #fef3c7; color: #92400e;">1</div>
        <div style="font-size: 2rem; align-self: center;">+</div>
        <div class="fib-box" style="background: #fef3c7; color: #92400e;">2</div>
        <div style="font-size: 2rem; align-self: center;">=</div>
        <div class="fib-box" style="background: #dcfce7; color: #16a34a;">3</div>
    </div>
    
    <div style="background: #e0f2fe; padding: 20px; border-radius: 20px; margin-top: 20px;">
        <p style="font-size: 1.3rem;"><strong>1, 1, 2, 3, 5, 8, 13, 21, 34, 55...</strong></p>
        <p>这就是<strong>斐波那契数列</strong>！</p>
    </div>
`;
