import { html } from '../app.js';

export default html`
    <h2>数学归纳法 vs 递归 🤝</h2>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 20px 0;">
        <div style="background: #fff; padding: 20px; border-radius: 20px; border: 3px solid var(--primary);">
            <h3 style="color: var(--primary); margin-bottom: 15px;">📐 数学归纳法</h3>
            <p style="font-size: 0.9rem; text-align: left;">
                1. 证明 n=1 成立<br>
                2. 证明如果 n=k 成立，则 n=k+1 也成立
            </p>
            <div style="margin-top: 15px; font-size: 2rem;">🔼</div>
            <p style="font-size: 0.9rem; color: #666;">自底向上<br>(从1推到无穷)</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border-radius: 20px; border: 3px solid var(--secondary);">
            <h3 style="color: var(--secondary); margin-bottom: 15px;">💻 编程递归</h3>
            <p style="font-size: 0.9rem; text-align: left;">
                1. 设定 n=1 时停止 (Base Case)<br>
                2. 计算 n 时调用 n-1 (Recursive Step)
            </p>
            <div style="margin-top: 15px; font-size: 2rem;">🔽</div>
            <p style="font-size: 0.9rem; color: #666;">自顶向下<br>(从n推回到1)</p>
        </div>
    </div>
`;
