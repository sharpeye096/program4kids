import { html } from '../app.js';

export default html`
    <h1>🔄 游戏引擎 (While Loop)</h1>
    <p style="font-size: 1.6rem;">只要没 Game Over，就一直玩下去！</p>
    
    <div style="font-size: 3.5rem; margin: 30px 0; display: flex; gap: 20px; justify-content: center; align-items: center;">
        <span class="runner">🏃</span> 
        <span style="font-size: 2rem;">➡️</span> 
        <span style="font-size: 4rem;">🔁</span>
    </div>
    
    <p style="font-size: 1.1rem; color: #666;">
        for 循环是跑几圈就停，<br>
        <strong>while 循环</strong> 是只要不想停，就能跑到天荒地老！
    </p>
    
    <p style="margin-top: 30px; font-size: 1rem; color: #888;">按 → 进入无限循环的世界</p>
`;
