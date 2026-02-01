import { html } from '../app.js';

export default html`
    <h2>查阅数据 🔍</h2>
    
    <p style="font-size: 1.1rem;">想知道英雄多少血？问它的 Key！</p>
    
    <div style="margin: 20px 0;">
        <div style="background: #2b2a33; padding: 15px 25px; border-radius: 15px; text-align: left; font-family: 'Consolas', monospace; color: #fcd34d; display: inline-block; border: 3px solid #78350f;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
<span style="color: #fcd34d;">print</span>(<span style="color: #60a5fa;">hero</span>[<span style="color: #fca5a5;">"name"</span>])  <span style="color: #64748b;"># 输出: Arthur</span>
<span style="color: #fcd34d;">print</span>(<span style="color: #60a5fa;">hero</span>[<span style="color: #fca5a5;">"hp"</span>])    <span style="color: #64748b;"># 输出: 100</span>
            </pre>
        </div>
    </div>
    
    <div style="display: flex; gap: 20px; justify-content: center;">
        <div class="card" id="hero-card" style="transform: scale(0.9);">
            <div class="stat-row">Name: Arthur</div>
            <div class="stat-row" style="background: #fee2e2;">HP: 100 👈</div>
            <div class="stat-row">Level: 5</div>
        </div>
    </div>
    
    <div style="margin-top: 20px; color: #b91c1c; font-weight: bold;">
        ⚠️ 注意：如果查不存在的 Key (比如 "MP")，程序会报错！
    </div>
`;
