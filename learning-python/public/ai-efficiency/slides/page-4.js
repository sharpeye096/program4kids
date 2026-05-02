import { html } from '../app.js';

export default html`
    <style>
        .paradigm-hero {
            background: linear-gradient(135deg, #eff6ff, #f5f3ff);
            border: 1px solid #bfdbfe;
            border-left: 5px solid #2563eb;
            border-radius: 14px;
            padding: 1.4rem 1.6rem;
            margin-bottom: 1.2rem;
        }
        .shift-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        .shift-card {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 1.1rem 1.2rem;
        }
        .shift-card h3 {
            margin: 0 0 0.6rem 0;
            font-size: 1.25rem;
        }
        .shift-card p {
            margin: 0;
            color: #475569;
            font-size: 1.08rem;
            line-height: 1.55;
        }
        .takeaway-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.8rem;
        }
        .takeaway {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 0.9rem 1rem;
            color: #334155;
            font-size: 1rem;
            line-height: 1.45;
        }
        .takeaway strong { color: #0f172a; }
    </style>

    <h2>2. 新的范式：从“学写代码”到“指挥 AI 做工具”</h2>

    <div class="paradigm-hero">
        <h3 style="margin: 0 0 0.6rem 0; color: #1e40af; font-size: 1.55rem;">核心观点：AI时代的编程语言就是自然语言</h3>
        <p style="margin: 0; font-size: 1.2rem; color: #334155; line-height: 1.55;">
            你不再需要先掌握一门编程语言，才能开始做小工具。你只要把业务目标、输入材料、期望结果讲清楚，然后让 AI 把它翻译成可运行的代码。
        </p>
    </div>

    <div class="shift-grid">
        <div class="shift-card" style="border-left: 4px solid #94a3b8;">
            <h3 style="color: #475569;">过去：人迁就机器</h3>
            <p>先学语法、框架、调试方法，再慢慢把想法写成程序。门槛高，反馈慢。</p>
        </div>
        <div class="shift-card" style="border-left: 4px solid #2563eb;">
            <h3 style="color: #1d4ed8;">现在：AI 翻译意图</h3>
            <p>你描述问题和验收标准，AI 负责写代码、运行、报错修复，人负责判断结果是否符合业务。</p>
        </div>
    </div>

    <div class="takeaway-row">
        <div class="takeaway"><strong>能做原型：</strong>把一个想法快速做成网页、小工具或自动化脚本。</div>
        <div class="takeaway"><strong>能处理资料：</strong>批量整理表格、文档、图片、网页内容。</div>
        <div class="takeaway"><strong>能沉淀流程：</strong>把重复工作变成可复用的按钮、命令或模板。</div>
    </div>
`;
