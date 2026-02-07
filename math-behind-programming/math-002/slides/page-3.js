import { html } from '../app.js';

export default html`
    <h2>二进制：只有 0 和 1</h2>
    
    <div style="display: flex; gap: 40px; align-items: center; justify-content: center; margin: 20px 0;">
        <div style="text-align: center;">
            <span style="font-size: 5rem;">👽</span>
            <p>外星人只有 <strong>2 根手指</strong></p>
        </div>
        <div style="font-size: 3rem;">→</div>
        <div style="display: flex; gap: 15px;">
            <div class="bit-box on">0</div>
            <div class="bit-box on">1</div>
        </div>
    </div>
    
    <div style="background: #dcfce7; padding: 25px; border-radius: 20px;">
        <p style="font-size: 1.3rem;"><strong>二进制</strong>只用 0 和 1 两个数字</p>
        <p>数到 2 就要<strong>进位</strong>（逢二进一）</p>
    </div>
    
    <div style="display: flex; gap: 30px; justify-content: center; margin-top: 20px;">
        <div style="background: #fef3c7; padding: 15px 25px; border-radius: 15px;">
            <p style="margin: 0; font-size: 1.2rem;">十进制: <strong>0, 1, 2, 3...</strong></p>
        </div>
        <div style="background: #dbeafe; padding: 15px 25px; border-radius: 15px;">
            <p style="margin: 0; font-size: 1.2rem;">二进制: <strong>0, 1, 10, 11...</strong></p>
        </div>
    </div>
`;
