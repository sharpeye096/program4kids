import { html } from '../app.js';

export default html`
    <style>
        .git-flow {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 0.7rem;
            margin-top: 1rem;
        }
        .git-step {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 0.9rem;
            position: relative;
            box-shadow: 0 2px 4px rgba(0,0,0,0.04);
        }
        .git-step h4 {
            margin: 0 0 0.5rem 0;
            color: #1e40af;
            font-size: 1.05rem;
        }
        .git-step p {
            font-size: 0.92rem;
            color: #475569;
            margin: 0;
            line-height: 1.5;
        }
        .git-num {
            position: absolute;
            top: -10px;
            left: -10px;
            width: 26px;
            height: 26px;
            background: linear-gradient(135deg, #3b82f6, #1e40af);
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.85rem;
        }
    </style>

    <h2>3. Git：你的"后悔药"与"游戏存档"</h2>
    <p>不用懂 Git 是什么——只要把它当成<strong>每个 Repo 自带的"读档功能"</strong>，让 Claude Code 帮你做。</p>

    <div class="git-flow">
        <div class="git-step">
            <div class="git-num">1</div>
            <h4>🎬 初始化</h4>
            <p>对 AI 说：<br/><em>"请帮我把这个目录用 Git 管理起来，并做第一次初始化提交。"</em></p>
        </div>
        <div class="git-step">
            <div class="git-num">2</div>
            <h4>💾 存档</h4>
            <p>每完成一段满意的工作就告诉 AI：<br/><em>"做得好，请帮我 commit 一下。"</em></p>
        </div>
        <div class="git-step">
            <div class="git-num">3</div>
            <h4>⏪ 出问题</h4>
            <p>AI 把文件改乱了？<strong style="color:#dc2626;">不要让它"修复"</strong>——通常会越描越黑。</p>
        </div>
        <div class="git-step">
            <div class="git-num">4</div>
            <h4>🔁 回档</h4>
            <p>直接说：<br/><em>"退回到上一次好的状态。"</em><br/>然后换种说法重新开始。</p>
        </div>
        <div class="git-step">
            <div class="git-num">5</div>
            <h4>☁️ 云端备份</h4>
            <p>定期对 AI 说：<br/><em>"把当前 Repo 推送到我的 GitHub 私有仓库。"</em><br/>电脑坏了也不怕。</p>
        </div>
    </div>

    <div class="card" style="width: 100%; margin-top: 1.2rem; background: linear-gradient(135deg, #ecfdf5, #f0fdf4); border-color: #86efac;">
        <h3 style="color: #166534; margin-top: 0;">💡 避坑指南</h3>
        <p style="font-size: 1.1rem; margin: 0; color: #14532d;">
            发现 AI 把事情搞砸了——<strong>第一反应是回档，不是让它修</strong>。<br/>
            它的"修复"经常引入新的 bug；回档 + 换说法，才是最快的路。
        </p>
    </div>
`;
