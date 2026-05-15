import { html } from '../app.js';

export default html`
    <h2>10. 提问黄金原则：思考前置（Chain of Thought）</h2>
    <p>非技术用户最容易吃亏的地方：<strong>一句话让 AI 干到底，结果它全做错了。</strong> 解法极简：让它先汇报再动手。</p>

    <div class="grid-2" style="gap: 1.2rem; margin-top: 0.8rem;">
        <div class="card" style="background: linear-gradient(135deg, #fef2f2, #fff7ed); border-color: #fca5a5; min-height: 320px;">
            <h3 style="color: #991b1b; margin-top: 0;">❌ 翻车的提问</h3>
            <pre style="font-size: 0.95rem; margin: 0.4rem 0; background: #1e293b;"><code>把这个目录里所有
没用的文件清理一下</code></pre>
            <p style="font-size: 0.95rem; color: #7f1d1d; margin-top: 0.6rem; margin-bottom: 0;">
                ⚠️ AI 可能会按自己的"理解"删掉你重要的文件——而且<strong>删完才告诉你</strong>。
            </p>
        </div>

        <div class="card" style="background: linear-gradient(135deg, #ecfdf5, #f0fdf4); border-color: #86efac; min-height: 320px;">
            <h3 style="color: #166534; margin-top: 0;">✅ 安全的提问</h3>
            <pre style="font-size: 0.95rem; margin: 0.4rem 0; background: #1e293b;"><code>请先告诉我你打算清理
哪些文件、为什么。
等我确认同意后再开始执行。</code></pre>
            <p style="font-size: 0.95rem; color: #14532d; margin-top: 0.6rem; margin-bottom: 0;">
                💚 AI 会先列清单，你<strong>有机会叫停</strong>，确认后才真正动手。
            </p>
        </div>
    </div>

    <div class="card" style="width: 100%; margin-top: 1rem; background: linear-gradient(135deg, #eff6ff, #ede9fe); border-color: #c4b5fd;">
        <h3 style="color: #6d28d9; margin-top: 0;">🎯 万能咒语</h3>
        <p style="font-size: 1.2rem; margin: 0; color: #4c1d95; font-weight: 600;">
            "做复杂任务时，先给我计划，等我确认后再执行。"
        </p>
        <p style="font-size: 0.95rem; margin-top: 0.5rem; margin-bottom: 0; color: #6b21a8;">
            可以写进 <code class="highlight">CLAUDE.md</code>——以后每次都自动生效。
        </p>
    </div>
`;
