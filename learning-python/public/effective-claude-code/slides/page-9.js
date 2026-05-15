import { html } from '../app.js';

export default html`
    <style>
        .flow-block {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 0.9rem 1rem;
            min-height: 110px;
            position: relative;
            box-shadow: 0 2px 4px rgba(0,0,0,0.04);
        }
        .flow-block h4 {
            margin: 0 0 0.4rem;
            color: #1e40af;
            font-size: 1rem;
        }
        .flow-block p {
            font-size: 0.9rem;
            color: #475569;
            margin: 0;
            line-height: 1.5;
        }
        .arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            color: #94a3b8;
        }
    </style>

    <h2>9. 固化绝招：用 Skill Creator 把流程"背"下来</h2>
    <p>当你发现自己<strong>反复让 AI 做同一套复杂动作</strong>——是时候把它变成一个专属 Skill 了。</p>

    <h3 style="margin-top: 0.8rem; color: #1e293b;">📌 真实场景示例</h3>
    <div style="display: grid; grid-template-columns: 1fr 30px 1fr 30px 1fr 30px 1fr; gap: 0.5rem; align-items: stretch; margin-bottom: 1rem;">
        <div class="flow-block">
            <h4>① 收 PDF</h4>
            <p>每月初收到 N 份 PDF 报销单</p>
        </div>
        <div class="arrow">→</div>
        <div class="flow-block">
            <h4>② 转文本</h4>
            <p>每份 PDF 先转纯文本</p>
        </div>
        <div class="arrow">→</div>
        <div class="flow-block">
            <h4>③ 提金额</h4>
            <p>提取日期、抬头、金额</p>
        </div>
        <div class="arrow">→</div>
        <div class="flow-block">
            <h4>④ 写 Excel</h4>
            <p>合并写入月度汇总表</p>
        </div>
    </div>

    <div class="grid-2" style="gap: 1.2rem; margin-top: 0.4rem;">
        <div class="card" style="background: linear-gradient(135deg, #fff7ed, #fef3c7); border-color: #fcd34d;">
            <h3 style="color: #92400e; margin-top: 0;">😩 不用 Skill 时</h3>
            <ul style="font-size: 1rem;">
                <li>每次都要把 4 步流程<strong>重新讲一遍</strong></li>
                <li>讲不清楚就翻车</li>
                <li>消耗大量 Token</li>
                <li>每次结果还不一定一致</li>
            </ul>
        </div>

        <div class="card" style="background: linear-gradient(135deg, #ecfdf5, #f0fdf4); border-color: #86efac;">
            <h3 style="color: #166534; margin-top: 0;">😎 做成 Skill 后</h3>
            <ul style="font-size: 1rem;">
                <li>用自然语言描述一次 → <strong>Skill Creator</strong> 帮你生成</li>
                <li>以后只需一句：<em>"处理本月报销"</em></li>
                <li>AI 全自动跑完 4 步</li>
                <li>相当于<strong>给自己写了一个专属软件</strong></li>
            </ul>
        </div>
    </div>
`;
