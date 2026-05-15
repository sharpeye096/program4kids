import { html } from '../app.js';

export default html`
    <style>
        .perm-modes {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.9rem;
            margin-top: 0.6rem;
        }
        .perm-card {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 1rem;
            position: relative;
            box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }
        .perm-tag {
            position: absolute;
            top: -10px;
            left: 12px;
            padding: 2px 10px;
            border-radius: 12px;
            font-size: 0.78rem;
            font-weight: 700;
        }
        .perm-card h4 {
            margin: 0.3rem 0 0.5rem;
            font-size: 1.15rem;
        }
        .perm-card p {
            font-size: 0.93rem;
            color: #475569;
            margin: 0;
            line-height: 1.5;
        }
        .perm-card .who {
            font-size: 0.82rem;
            color: #64748b;
            margin-top: 0.5rem;
            border-top: 1px dashed #e2e8f0;
            padding-top: 0.5rem;
        }
        .perm-cmd {
            background: #1e293b;
            color: #fde68a;
            font-family: Consolas, monospace;
            font-size: 0.92rem;
            padding: 0.6rem 0.9rem;
            border-radius: 6px;
            margin-top: 0.7rem;
        }
    </style>

    <h2>14. 权限管理：决定 AI 能"自己动手"到什么程度</h2>
    <p>每次 AI 想运行命令或改文件，都要"问一句"——很烦。但全部放行 → 很险。三档权限，按场景挑：</p>

    <div class="perm-modes">
        <div class="perm-card" style="border-top: 3px solid #ef4444;">
            <span class="perm-tag" style="background:#fee2e2; color:#991b1b;">最严格</span>
            <h4>🛡️ Ask（默认）</h4>
            <p>每一个有风险的操作都问你 Y/N。第一次最稳，但慢、累。</p>
            <div class="who">👤 新手 / 处理重要文件时</div>
        </div>
        <div class="perm-card" style="border-top: 3px solid #f59e0b;">
            <span class="perm-tag" style="background:#fef3c7; color:#92400e;">推荐</span>
            <h4>⚡ Allowlist（白名单）</h4>
            <p>常用安全命令自动放行（读文件、查 git 状态），危险命令仍然问你。</p>
            <div class="who">👤 已熟悉 + 有 Git 兜底</div>
        </div>
        <div class="perm-card" style="border-top: 3px solid #22c55e;">
            <span class="perm-tag" style="background:#dcfce7; color:#166534;">最自由</span>
            <h4>🚀 Auto（YOLO）</h4>
            <p>啥都不问，全自动跑——配合沙盒 + Git，才敢这么用。</p>
            <div class="who">👤 一次性脚本 / 离线沙盒</div>
        </div>
    </div>

    <div class="grid-2" style="gap: 1.2rem; margin-top: 1rem;">
        <div class="card" style="background: #f8fafc; border-color: #cbd5e1;">
            <h3 style="margin-top:0; color:#0f172a;">🎚️ 怎么调？两条路</h3>
            <ul style="font-size: 1rem;">
                <li>输入 <code class="highlight">/permissions</code> 看当前规则、加白名单</li>
                <li>直接编辑 <code class="highlight">.claude/settings.json</code></li>
                <li>每次弹窗时点 <strong>"始终允许此命令"</strong>——会自动记下来</li>
            </ul>
            <div class="perm-cmd">
{"permissions":{"allow":["Bash(git status)","Read"]}}
            </div>
        </div>

        <div class="card" style="background: linear-gradient(135deg, #fef2f2, #fff7ed); border-color: #fca5a5;">
            <h3 style="margin-top: 0; color: #991b1b;">⚠️ 永远不要自动放行的</h3>
            <ul style="font-size: 1rem; color: #7f1d1d;">
                <li><code>rm</code> / <code>del</code> 删除命令</li>
                <li><code>git push --force</code> 强推</li>
                <li>任何带 <code>sudo</code> 的命令</li>
                <li>触碰你<strong>沙盒之外</strong>的目录</li>
                <li>调用任何花钱接口 / API</li>
            </ul>
        </div>
    </div>

    <div class="card" style="width: 100%; margin-top: 0.8rem; background: linear-gradient(135deg, #eff6ff, #f0fdf4); border-color: #bfdbfe;">
        <p style="font-size: 1.05rem; margin: 0; color: #0f172a;">
            💡 <strong>心法：</strong>沙盒 + Git 存档 + 合理权限 = 三道保险。其中权限是最容易被忽略的——但它决定了你睡觉时 AI 能闯多大的祸。
        </p>
    </div>
`;
