import { html } from '../app.js';

export default html`
    <h2>While 的概念 💡</h2>
    
    <p style="font-size: 1.2rem;">While 的意思是 <strong>"当...的时候"</strong></p>
    
    <div style="background: #fff; border: 3px solid var(--primary); border-radius: 20px; padding: 20px; margin: 20px 0; max-width: 600px;">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
            <div style="background: #fbcfe8; padding: 10px; border-radius: 50%;">🥣</div>
            <p style="margin: 0; text-align: left;"><strong>当</strong> (肚子饿) <strong>的时候</strong>：<br>&nbsp;&nbsp;&nbsp;&nbsp;吃饭 🍚</p>
        </div>
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
             <div style="background: #fbcfe8; padding: 10px; border-radius: 50%;">🔋</div>
             <p style="margin: 0; text-align: left;"><strong>当</strong> (电量 < 100) <strong>的时候</strong>：<br>&nbsp;&nbsp;&nbsp;&nbsp;充电 ⚡</p>
        </div>
        <div style="display: flex; align-items: center; gap: 15px;">
             <div style="background: #fbcfe8; padding: 10px; border-radius: 50%;">🎮</div>
             <p style="margin: 0; text-align: left;"><strong>当</strong> (没有 Game Over) <strong>的时候</strong>：<br>&nbsp;&nbsp;&nbsp;&nbsp;继续玩 🕹️</p>
        </div>
    </div>
    
    <p style="color: var(--secondary); font-weight: bold;">
        只要条件是真的 (True)，它就一直做！
    </p>
`;
