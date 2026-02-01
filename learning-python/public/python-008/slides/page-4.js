import { html } from '../app.js';

export default html`
    <h2>无限循环 (Infinite Loop) ♾️</h2>
    
    <p style="font-size: 1.1rem;">这是游戏引擎的<strong>心脏</strong>！虽然很危险，但很有用！</p>
    
    <div style="background: #1e1b4b; padding: 20px 30px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; color: #fbcfe8; margin: 20px auto;">
        <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #c084fc;">while</span> <span style="color: #f472b6;">True</span>:
    <span style="color: #fcd34d;">print</span>(<span style="color: #a7f3d0;">"游戏进行中..."</span>)
    <span style="color: #604537;"># 永远不会停！直到电脑关机！</span>
        </pre>
    </div>
    
    <div style="display: flex; gap: 20px; align-items: center; justify-content: center; margin-top: 20px;">
        <div class="runner" id="runner">🏃</div>
        <div id="game-status" style="font-size: 1.2rem; font-weight: bold; color: var(--primary);">
            Running...
        </div>
    </div>
    
    <div style="background: #fee2e2; padding: 10px 20px; border-radius: 10px; border: 2px solid #ef4444; margin-top: 20px;">
        <p style="margin: 0; color: #991b1b; font-size: 1rem;">
            ⚠️ 警告：如果不写停止条件，程序会卡死！<br>
            我们需要紧急出口：<strong>break</strong>
        </p>
    </div>
`;
