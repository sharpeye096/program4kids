import { html } from '../app.js';

export default html`
    <h2>多米诺效应 🁠</h2>
    
    <p style="font-size: 1.1rem;">想让一排骨牌<strong>全部倒下</strong>，只需要满足两个条件：</p>
    
    <div class="domino-container" id="dominoes" style="min-height: 100px; justify-content: center; align-items: flex-end;">
        <div class="domino"></div>
        <div class="domino"></div>
        <div class="domino"></div>
        <div class="domino"></div>
        <div class="domino"></div>
        <div class="domino"></div>
        <div class="domino"></div>
        <div class="domino"></div>
    </div>
    
    <div style="display: flex; gap: 20px; justify-content: center; margin-top: 20px;">
        <button id="push-btn" style="background: var(--primary);">👆 推第一张！</button>
        <button id="reset-btn" style="background: var(--secondary);">🔄 扶起来</button>
    </div>

    <div style="background: #fff; padding: 15px 25px; border-radius: 15px; border: 3px solid var(--primary); margin-top: 25px; text-align: left;">
        <p style="margin: 0; font-size: 1rem;">
            1. <strong>第一张倒下</strong> (Base Case)<br>
            2. <strong>如果前一张倒下，后一张也会倒下</strong> (Inductive Step)
        </p>
    </div>
`;

export const onMount = (container) => {
    const pushBtn = container.querySelector('#push-btn');
    const resetBtn = container.querySelector('#reset-btn');
    const dominoes = container.querySelectorAll('.domino');

    pushBtn.onclick = () => {
        dominoes.forEach((d, i) => {
            setTimeout(() => {
                d.classList.add('fallen');
            }, i * 200); // Chain reaction
        });
    };

    resetBtn.onclick = () => {
        dominoes.forEach(d => d.classList.remove('fallen'));
    };
};
