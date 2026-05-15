import { html } from '../app.js';

export default html`
    <style>
        .formula {
            display: grid;
            grid-template-columns: 1fr 30px 1fr 30px 1fr;
            gap: 0.6rem;
            margin: 1rem 0;
            align-items: stretch;
        }
        .formula-block {
            background: linear-gradient(135deg, #eff6ff, #ede9fe);
            border: 2px solid #c4b5fd;
            border-radius: 12px;
            padding: 1.2rem 1rem;
            text-align: center;
        }
        .formula-block h3 {
            margin: 0 0 0.4rem;
            color: #4c1d95;
            font-size: 1.2rem;
        }
        .formula-block p {
            font-size: 0.9rem;
            color: #6b21a8;
            margin: 0;
            line-height: 1.5;
        }
        .plus {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: #94a3b8;
            font-weight: 700;
        }
        .example-box {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 1rem 1.2rem;
            margin-top: 0.6rem;
        }
        .example-tag {
            display: inline-block;
            font-size: 0.8rem;
            padding: 2px 10px;
            border-radius: 12px;
            font-weight: 700;
            margin-bottom: 0.4rem;
        }
        .tag-bad { background: #fee2e2; color: #991b1b; }
        .tag-good { background: #dcfce7; color: #166534; }
    </style>

    <h2>12. 需求描述公式：背景 + 目标 + 限制条件</h2>
    <p>不用学 Prompt 工程——只要按下面这个"三段式"说话，AI 就能精准 GET 你的需求。</p>

    <div class="formula">
        <div class="formula-block">
            <h3>📌 背景</h3>
            <p>我是谁<br/>我面对什么场景</p>
        </div>
        <div class="plus">+</div>
        <div class="formula-block">
            <h3>🎯 目标</h3>
            <p>我想要什么结果<br/>具体的产出是什么</p>
        </div>
        <div class="plus">+</div>
        <div class="formula-block">
            <h3>🚧 限制</h3>
            <p>不许做什么<br/>必须遵守什么</p>
        </div>
    </div>

    <div class="grid-2" style="gap: 1.2rem; margin-top: 0.4rem;">
        <div class="example-box" style="border-left: 4px solid #ef4444;">
            <span class="example-tag tag-bad">❌ 错误示范</span>
            <p style="margin: 0; font-size: 1rem; color: #475569;">
                "帮我处理一下这个表格。"
            </p>
            <p style="font-size: 0.85rem; color: #94a3b8; margin-top: 0.4rem; margin-bottom: 0; font-style: italic;">
                AI 一脸懵：处理啥？怎么处理？给谁看？
            </p>
        </div>

        <div class="example-box" style="border-left: 4px solid #22c55e;">
            <span class="example-tag tag-good">✅ 正确示范</span>
            <p style="margin: 0; font-size: 1rem; color: #475569; line-height: 1.6;">
                <strong>我是一个班主任（背景）</strong>，请帮我分析这份期末成绩表格，<strong>找出偏科的学生（目标）</strong>。<strong>不要改动原表数据，结果生成一个新的 CSV 文件（限制）</strong>。
            </p>
        </div>
    </div>
`;
