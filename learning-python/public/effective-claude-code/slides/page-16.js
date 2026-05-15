import { html } from '../app.js';

export default html`
    <style>
        .plan-toggle {
            display: inline-flex;
            align-items: center;
            background: #0f172a;
            color: #fde68a;
            padding: 0.4rem 0.9rem;
            border-radius: 6px;
            font-family: Consolas, monospace;
            font-size: 1rem;
            gap: 0.5rem;
        }
        .plan-toggle kbd {
            background: #1e293b;
            color: #38bdf8;
            border: 1px solid #334155;
            border-radius: 4px;
            padding: 1px 8px;
            font-size: 0.85rem;
        }
        .plan-flow {
            display: grid;
            grid-template-columns: 1fr 32px 1fr 32px 1fr;
            gap: 0.6rem;
            margin-top: 0.8rem;
            align-items: stretch;
        }
        .plan-step {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 0.85rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.04);
        }
        .plan-step h4 {
            margin: 0 0 0.4rem;
            font-size: 1.05rem;
            color: #1e40af;
        }
        .plan-step p {
            font-size: 0.9rem;
            color: #475569;
            margin: 0;
            line-height: 1.5;
        }
        .plan-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            color: #94a3b8;
        }
        .vs-block {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 0.9rem 1rem;
        }
    </style>

    <h2>16. Plan Mode：让 AI 先"打草稿"再动手</h2>
    <p>前面教你<strong>用嘴说</strong>："先告诉我计划，确认后再做。" Claude Code 内置了一个<strong>更可靠的开关</strong>—— Plan Mode。</p>

    <div class="card" style="background: linear-gradient(135deg, #eff6ff, #f0fdf4); border-color: #bfdbfe; margin-top: 0.5rem;">
        <h3 style="margin-top:0; color: #1e40af;">⌨️ 怎么进入</h3>
        <p style="margin: 0 0 0.5rem; color: #334155; font-size: 1rem;">
            在对话框里按 <kbd style="background:#f1f5f9; border:1px solid #cbd5e1; border-radius:4px; padding:1px 8px; font-family:Consolas;">Shift</kbd> + <kbd style="background:#f1f5f9; border:1px solid #cbd5e1; border-radius:4px; padding:1px 8px; font-family:Consolas;">Tab</kbd> 切换模式，看到状态栏出现：
        </p>
        <div class="plan-toggle">
            <span>⏸️ plan mode on</span>
            <span style="color:#64748b;">·</span>
            <span style="color:#94a3b8; font-size:0.85rem;">AI 只规划，不动手</span>
        </div>
    </div>

    <h3 style="margin-top: 1.1rem;">🔄 Plan Mode 的工作流</h3>
    <div class="plan-flow">
        <div class="plan-step">
            <h4>① 你描述目标</h4>
            <p>"把这批 PDF 拆成单页 PNG"</p>
        </div>
        <div class="plan-arrow">→</div>
        <div class="plan-step">
            <h4>② AI 输出计划</h4>
            <p>列步骤、列要改的文件、列风险——<strong>但不执行</strong></p>
        </div>
        <div class="plan-arrow">→</div>
        <div class="plan-step">
            <h4>③ 你审 → 同意</h4>
            <p>不满意可以追问、修改；同意后退出 Plan Mode 一键开干</p>
        </div>
    </div>

    <div class="grid-2" style="gap: 1.2rem; margin-top: 1rem;">
        <div class="vs-block" style="border-left: 4px solid #ef4444;">
            <strong style="color:#991b1b;">❌ 不用 Plan Mode</strong>
            <p style="font-size:0.95rem; color:#475569; margin:0.4rem 0 0;">"你能不能不要急着改？" "等一下我还没确认！"——你不停地<strong>打断它</strong>，AI 也很委屈。</p>
        </div>
        <div class="vs-block" style="border-left: 4px solid #22c55e;">
            <strong style="color:#166534;">✅ 用 Plan Mode</strong>
            <p style="font-size:0.95rem; color:#475569; margin:0.4rem 0 0;">从一开始 AI 就知道<strong>"现在只规划，等你点头"</strong>。规则强制，比口头约定靠谱。</p>
        </div>
    </div>

    <div class="card" style="width: 100%; margin-top: 1rem; background: linear-gradient(135deg, #fffbeb, #fef3c7); border-color: #fcd34d;">
        <p style="font-size: 1.05rem; margin: 0; color: #78350f;">
            💡 <strong>建议：</strong>第一次做某类任务一律开 Plan Mode 走一遍；做熟了再关掉。这跟开车一样——驾校阶段每一步都要看后视镜，老司机才是肌肉记忆。
        </p>
    </div>
`;
