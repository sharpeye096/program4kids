import { html } from '../app.js';

export default html`
    <style>
        .recap-list {
            list-style: none !important;
            padding: 0 !important;
            margin: 0 !important;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .recap-list li {
            padding: 0.7rem 1rem 0.7rem 2.8rem !important;
            position: relative;
            font-size: 1.15rem !important;
            margin-bottom: 0 !important;
            background: #f8fafc;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
            line-height: 1.5;
        }
        .recap-list li::before {
            content: "✓" !important;
            position: absolute;
            left: 0.9rem;
            top: 0.7rem;
            color: #22c55e !important;
            font-weight: 700;
            font-size: 1.2rem !important;
        }
        .action-card {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            padding: 0.85rem 1rem;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
            background: #fff;
        }
        .action-num {
            flex-shrink: 0;
            width: 34px;
            height: 34px;
            background: linear-gradient(135deg, #3b82f6, #1e40af);
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.05rem;
        }
        .action-text strong {
            color: #1e293b;
            font-size: 1.02rem;
        }
        .action-text p {
            margin: 4px 0 0 0;
            font-size: 0.92rem;
            color: #64748b;
        }
    </style>

    <h2 style="background: linear-gradient(90deg, #1e40af, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2.2rem; margin-bottom: 1rem;">13. 总结：从今天开始，安全地驾驭 Claude Code</h2>

    <div class="grid-2" style="gap: 2rem; align-items: start;">
        <div>
            <h3 style="margin-top: 0; margin-bottom: 0.6rem; font-size: 1.5rem;">📖 你今天学到了什么</h3>
            <ul class="recap-list">
                <li>专属沙盒 + 手动搬运 = 0 风险</li>
                <li>Git 是后悔药；出问题 → 回档 ≫ 修复</li>
                <li>CLAUDE.md 是员工手册，精炼为王</li>
                <li>Skills 让 AI 长出手脚，纯文本最划算</li>
                <li>"先计划再执行" + "背景/目标/限制" 公式</li>
            </ul>
        </div>

        <div>
            <h3 style="margin-top: 0; margin-bottom: 0.6rem; font-size: 1.5rem;">🚀 回去就能做的 4 件事</h3>
            <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                <div class="action-card" style="border-left: 3px solid #3b82f6;">
                    <div class="action-num">1</div>
                    <div class="action-text">
                        <strong>建沙盒</strong>
                        <p>在 C:/ 或 D:/ 根目录建 Work_AI，分子目录</p>
                    </div>
                </div>
                <div class="action-card" style="border-left: 3px solid #8b5cf6;">
                    <div class="action-num">2</div>
                    <div class="action-text">
                        <strong>写一份 instructions.txt</strong>
                        <p>让 AI 据此初始化第一份 CLAUDE.md</p>
                    </div>
                </div>
                <div class="action-card" style="border-left: 3px solid #059669;">
                    <div class="action-num">3</div>
                    <div class="action-text">
                        <strong>装上 docx / xlsx / pdf Skills</strong>
                        <p>+ 让 AI 用清华、淘宝镜像加速安装</p>
                    </div>
                </div>
                <div class="action-card" style="border-left: 3px solid #f97316;">
                    <div class="action-num">4</div>
                    <div class="action-text">
                        <strong>跑一次真实任务</strong>
                        <p>选一个你每月都要做一遍的事——让 AI 试试</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div style="margin-top: 1.2rem; text-align: center; background: linear-gradient(135deg, #fffbeb, #fef3c7); border: 1px solid #fcd34d; border-radius: 10px; padding: 0.9rem 1.5rem;">
        <p style="margin: 0; font-size: 1.25rem; color: #78350f; font-weight: 600;">
            🤖 让 AI 替你打工，而不是把你的文件搞得一团糟。从今天开始，安全、可控地用起来。
        </p>
    </div>
`;
