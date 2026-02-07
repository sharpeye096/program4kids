import { html } from '../app.js';

export default html`
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <div class="emoji-lg">🐚</div>
        <h1>大自然的密码</h1>
        <p>为什么花瓣的数量总是 <strong>3, 5, 8, 13</strong>？</p>
        <p>让我们揭开<strong>斐波那契数列</strong>的秘密！</p>
        
        <div style="margin-top: 2rem;">
            <p style="font-size: 1rem; color: #666;">按 <kbd>→</kbd> 开始</p>
        </div>
    </div>
`;
