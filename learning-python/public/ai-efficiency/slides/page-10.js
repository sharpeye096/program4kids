import { html } from '../app.js';

export default html`
    <style>
        .audit-chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #eff6ff;
            border: 1px solid #bfdbfe;
            color: #1d4ed8;
            padding: 4px 12px;
            border-radius: 999px;
            font-size: 0.85rem;
            font-weight: 700;
        }
        .audit-panel {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 1rem 1.1rem;
            box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
        }
        .audit-title {
            font-size: 0.95rem;
            font-weight: 800;
            color: #0f172a;
            margin-bottom: 0.7rem;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .audit-flow {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0.6rem;
        }
        .flow-step {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 0.75rem;
            min-height: 88px;
        }
        .flow-step strong {
            display: block;
            color: #1e293b;
            margin-bottom: 0.25rem;
            font-size: 0.9rem;
        }
        .flow-step span {
            color: #64748b;
            font-size: 0.82rem;
            line-height: 1.45;
        }
        .sample-command {
            margin: 0;
            background: #0f172a;
            color: #e2e8f0;
            border-radius: 10px;
            padding: 0.9rem 1rem;
            font-size: 0.82rem;
            line-height: 1.6;
            white-space: pre-wrap;
            font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
        }
        .summary-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0.55rem;
            margin-bottom: 0.65rem;
        }
        .summary-box {
            border-radius: 10px;
            padding: 0.75rem 0.6rem;
            text-align: center;
        }
        .summary-box .num {
            display: block;
            font-size: 1.25rem;
            font-weight: 800;
            margin-bottom: 0.1rem;
        }
        .summary-box .label {
            font-size: 0.78rem;
            font-weight: 700;
        }
        .result-note {
            background: #f8fafc;
            border-left: 4px solid #3b82f6;
            border-radius: 8px;
            padding: 0.7rem 0.8rem;
            color: #475569;
            font-size: 0.83rem;
            line-height: 1.5;
        }
        .use-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.7rem;
        }
        .use-card {
            border-radius: 12px;
            padding: 0.95rem 1rem;
            border: 1px solid #e2e8f0;
            background: white;
        }
        .use-card h3 {
            margin: 0 0 0.35rem 0;
            font-size: 1.05rem;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .use-card p {
            margin: 0 0 0.45rem 0;
            color: #475569;
            font-size: 0.86rem;
            line-height: 1.45;
        }
        .tag-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.35rem;
        }
        .mini-tag {
            background: #f8fafc;
            border: 1px solid #cbd5e1;
            color: #334155;
            border-radius: 999px;
            padding: 0.18rem 0.55rem;
            font-size: 0.72rem;
            font-weight: 700;
        }
        .risk-banner {
            margin-top: 0.9rem;
            padding: 0.8rem 1rem;
            border-radius: 12px;
            background: linear-gradient(135deg, #fff7ed, #fef2f2);
            border: 1px solid #fed7aa;
            color: #9a3412;
            font-size: 0.88rem;
            line-height: 1.5;
        }
    </style>

    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.55rem;">
        <h2 style="font-size: 2.2rem; margin: 0; background: linear-gradient(90deg, #0f766e, #2563eb); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            7. 实战案例：Checklist 审核技能
        </h2>
        <div style="display: flex; gap: 0.45rem; align-items: center;">
            <span class="audit-chip">📋 checklist Skill</span>
            <span class="audit-chip">🧠 AI 初审员</span>
        </div>
    </div>

    <div style="background: linear-gradient(135deg, #ecfeff, #eff6ff); border: 1px solid #bae6fd; border-radius: 12px; padding: 0.9rem 1.1rem; margin-bottom: 1rem;">
        <div style="font-size: 1rem; font-weight: 800; color: #0f172a; margin-bottom: 0.2rem;">当任务从“分析数据”变成“对照标准审材料”时，Checklist Skill 就能接棒。</div>
        <div style="font-size: 0.92rem; color: #475569; line-height: 1.5;">核心能力不是瞎点评，而是把材料逐条对照检查清单，输出 <strong>PASS / FAIL / PARTIAL</strong>，并附上<strong>证据引用、解释、位置</strong>，非常适合做批量初审。</div>
    </div>

    <div class="grid-2" style="gap: 1.4rem; align-items: start;">
        <div style="display: flex; flex-direction: column; gap: 0.8rem;">
            <div class="audit-panel">
                <div class="audit-title">🔁 技能工作流</div>
                <div class="audit-flow">
                    <div class="flow-step">
                        <strong>1. 读取材料</strong>
                        <span>合同、报告、简历、PDF、Word、Markdown 都可以。</span>
                    </div>
                    <div class="flow-step">
                        <strong>2. 解析清单</strong>
                        <span>支持 Markdown、JSON、YAML、纯文本要求列表。</span>
                    </div>
                    <div class="flow-step">
                        <strong>3. 逐项审核</strong>
                        <span>按条检查，判断是否满足，避免只给模糊建议。</span>
                    </div>
                    <div class="flow-step">
                        <strong>4. 输出报告</strong>
                        <span>汇总红旗问题、证据摘录、整改建议与通过率。</span>
                    </div>
                </div>
            </div>

            <div class="audit-panel">
                <div class="audit-title">💬 一句话指令示例</div>
                <pre class="sample-command">> /checklist 审核 "合作协议.docx"
  --checklist assets/checklist.md
  输出 markdown 报告，优先标出高风险条款，
  每条结论都引用原文证据。</pre>
            </div>

            <div class="audit-panel" style="background: linear-gradient(135deg, #f8fafc, #fefce8);">
                <div class="audit-title">📤 典型输出长这样</div>
                <div class="summary-grid">
                    <div class="summary-box" style="background:#dcfce7; color:#166534;">
                        <span class="num">18</span>
                        <span class="label">✅ 通过</span>
                    </div>
                    <div class="summary-box" style="background:#fef3c7; color:#92400e;">
                        <span class="num">3</span>
                        <span class="label">⚠️ 部分满足</span>
                    </div>
                    <div class="summary-box" style="background:#fee2e2; color:#991b1b;">
                        <span class="num">2</span>
                        <span class="label">❌ 高风险</span>
                    </div>
                    <div class="summary-box" style="background:#dbeafe; color:#1d4ed8;">
                        <span class="num">96%</span>
                        <span class="label">📍 可定位</span>
                    </div>
                </div>
                <div class="result-note">每一项都不是一句“感觉不太对”，而是要给出：<strong>状态 + 证据原文 + 为什么 + 在哪里</strong>。这比普通聊天式点评更适合业务审核场景。</div>
            </div>
        </div>

        <div class="use-grid">
            <div class="use-card" style="border-left: 4px solid #ef4444;">
                <h3 style="color:#b91c1c;">📄 合同审核</h3>
                <p>快速扫出自动续约、付款节点、违约责任、免责条款、是否缺少盖章页等问题，先把法务最该看的地方圈出来。</p>
                <div class="tag-row">
                    <span class="mini-tag">自动续约</span>
                    <span class="mini-tag">付款条款</span>
                    <span class="mini-tag">违约责任</span>
                    <span class="mini-tag">风险红旗</span>
                </div>
            </div>

            <div class="use-card" style="border-left: 4px solid #8b5cf6;">
                <h3 style="color:#6d28d9;">📊 报告审核</h3>
                <p>检查是否有数据来源、图表和结论是否一致、有没有遗漏关键章节、措辞是否夸张、行动建议是否落地。</p>
                <div class="tag-row">
                    <span class="mini-tag">数据来源</span>
                    <span class="mini-tag">图文一致</span>
                    <span class="mini-tag">逻辑完整</span>
                    <span class="mini-tag">结论可证</span>
                </div>
            </div>

            <div class="use-card" style="border-left: 4px solid #10b981;">
                <h3 style="color:#047857;">🧑‍💼 简历筛选</h3>
                <p>先按硬条件做首轮筛选：学历、年限、项目经验、关键词命中、是否有相关行业背景，并把证据句摘出来给 HR 复核。</p>
                <div class="tag-row">
                    <span class="mini-tag">硬性条件</span>
                    <span class="mini-tag">关键词匹配</span>
                    <span class="mini-tag">项目证据</span>
                    <span class="mini-tag">初筛提效</span>
                </div>
            </div>
        </div>
    </div>

    <div class="risk-banner">
        <strong>定位要准确：</strong> 这个技能最适合做<strong>初审、预筛、批量排雷</strong>，不应该替代法务终审、业务负责人拍板或最终面试判断。AI 负责先把问题找出来，人负责最后决策。
    </div>
`;
