import { html } from '../app.js';

export default html`
    <h2>为什么我们用十进制？</h2>
    
    <div style="display: flex; gap: 40px; align-items: center; justify-content: center;">
        <div style="text-align: center;">
            <span style="font-size: 5rem;">🖐️🖐️</span>
            <p>因为我们有 <strong>10 根手指</strong>！</p>
        </div>
    </div>
    
    <div style="display: flex; gap: 20px; justify-content: center; margin: 20px 0;">
        <div class="bit-box">0</div>
        <div class="bit-box">1</div>
        <div class="bit-box">2</div>
        <div class="bit-box">3</div>
        <div class="bit-box">4</div>
        <div class="bit-box">5</div>
        <div class="bit-box">6</div>
        <div class="bit-box">7</div>
        <div class="bit-box">8</div>
        <div class="bit-box">9</div>
    </div>
    
    <div style="background: #e0f2fe; padding: 20px; border-radius: 20px;">
        <p>十进制用 0-9 这 <strong>10 个数字</strong></p>
        <p>数到 10 就要<strong>进位</strong>（逢十进一）</p>
    </div>
`;
