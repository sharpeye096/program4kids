import { html } from '../app.js';

export default html`
    <h2>列表是什么？🧐</h2>
    
    <p style="font-size: 1.2rem;">就像一个<strong>有顺序的背包</strong>，可以装很多东西！</p>
    
    <div style="display: flex; gap: 30px; justify-content: center; align-items: center; margin: 30px 0;">
        <div style="text-align: center;">
            <p style="margin: 0;">普通的变量</p>
            <div style="font-size: 3rem; margin: 10px;">📦</div>
            <p style="font-size: 0.9rem; color: #666;">只能装 1 个</p>
        </div>
        
        <div style="font-size: 2rem;">vs</div>
        
        <div style="text-align: center;">
            <p style="margin: 0; color: var(--primary); font-weight: bold;">列表 List</p>
            <div style="font-size: 3rem; margin: 10px; background: #fff; border: 3px solid var(--primary); border-radius: 15px; padding: 10px; display: inline-flex; gap: 10px;">
                <span>🍎</span><span>🍌</span><span>🍇</span>
            </div>
            <p style="font-size: 0.9rem; color: #666;">可以装很多个！</p>
        </div>
    </div>
    
    <p style="font-size: 1.1rem; color: var(--secondary); font-weight: bold;">
        用 [方括号] 把东西包起来，中间用逗号 , 分开
    </p>
`;
