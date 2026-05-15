import { html } from '../app.js';

export default html`
    <h2>7. 会话管理：什么时候该开"新局"？</h2>
    <p>AI 的记忆力（上下文）越长——<strong>越贵、越慢、越容易被旧错误带偏</strong>。学会果断重启，是省钱省心的关键。</p>

    <div class="grid-2" style="gap: 1.2rem; margin-top: 0.8rem;">
        <div class="card" style="background: linear-gradient(135deg, #ecfdf5, #f0fdf4); border-color: #86efac; min-height: 320px;">
            <h3 style="color: #166534; margin-top: 0;">🆕 立刻开新 Session</h3>
            <ul style="font-size: 1.05rem;">
                <li>切换到一个<strong>全新任务</strong>（昨天做数据清洗，今天做图表）</li>
                <li>发现 AI 开始<strong>胡言乱语、逻辑混乱</strong>，怎么纠正都纠不过来</li>
                <li>已经完成阶段性目标，想<strong>轻装上阵</strong>下一步</li>
            </ul>
            <p style="font-size: 0.95rem; margin: 0; color: #14532d;">
                💚 重启前记得让 AI 先 <strong>commit 存档</strong>。
            </p>
        </div>

        <div class="card" style="background: linear-gradient(135deg, #fff7ed, #fef3c7); border-color: #fcd34d; min-height: 320px;">
            <h3 style="color: #9a3412; margin-top: 0;">🔄 继续旧 Session</h3>
            <ul style="font-size: 1.05rem;">
                <li>任务<strong>高度连贯</strong>，下一步依赖刚刚的讨论</li>
                <li>AI 已经在内存里建好了"脑图"，重启会丢失</li>
                <li>正在调试一个具体问题，需要它记得现场细节</li>
            </ul>
            <p style="font-size: 0.95rem; margin: 0; color: #7c2d12;">
                ⚠️ 一旦阶段目标达成，<strong>立即存档 + 开新会话</strong>。
            </p>
        </div>
    </div>

    <div class="card" style="width: 100%; margin-top: 1rem; background: linear-gradient(135deg, #eff6ff, #ede9fe); border-color: #c4b5fd;">
        <h3 style="color: #6d28d9; margin-top: 0;">🎯 记忆三定律</h3>
        <p style="font-size: 1.08rem; margin: 0; color: #4c1d95; line-height: 1.7;">
            ① 上下文越长 → 越贵越慢　　② AI 错了一次 → 容易接着错　　③ 阶段完成 → 先存档再重启
        </p>
        <p style="font-size: 0.95rem; margin: 0.6rem 0 0; color: #6b21a8;">
            💡 想接着<strong>昨天的会话</strong>？输入 <code class="highlight">/resume</code> 挑历史；想看当前<strong>占用多少上下文</strong>？输入 <code class="highlight">/context</code>。
        </p>
    </div>
`;
