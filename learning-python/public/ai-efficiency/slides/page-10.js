import { html } from '../app.js';

export default html`
    <style>
        .agent-card {
            border-radius: 12px;
            padding: 1.2rem;
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
        }
        .agent-card h4 {
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-size: 1.15rem;
        }
        .agent-card p, .agent-card li {
            font-size: 1rem;
            line-height: 1.6;
        }
        .agent-card ul {
            padding-left: 1.2rem;
            margin: 0.3rem 0;
            flex: 1;
        }
        .sec-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.6rem;
        }
        .sec-item {
            background: white;
            border-radius: 8px;
            padding: 0.5rem 0.8rem;
            border: 1px solid #e5e7eb;
        }
        .sec-item-title {
            font-weight: 700;
            color: #1e40af;
            font-size: 0.92rem;
            margin-bottom: 0.1rem;
        }
        .sec-item-desc {
            font-size: 0.88rem;
            color: #475569;
            line-height: 1.4;
        }
    </style>

    <h2 style="font-size: 2rem; margin-bottom: 0.8rem;">7. 心态建设：如何与AI相处？</h2>

    <!-- Core Metaphor -->
    <div class="card" style="background: #fff1f2; border-left: 4px solid #e11d48; margin-bottom: 1.2rem; padding: 1rem 1.2rem;">
        <h3 style="color: #be123c; margin-top: 0; margin-bottom: 0.3rem; font-size: 1.15rem;">🎓 核心心态：AI = 聪明、优秀、全能而且听话，但缺乏经验的应届毕业生</h3>
        <p style="margin-bottom: 0; font-size: 1rem; color: #4c0519;"><strong>不要畏惧！</strong> AI尤其擅长编程。你应该把自己定位为<strong>"项目经理"</strong>，负责<strong>提需求、做判断、把关质量</strong>。</p>
    </div>

    <!-- Three-tier AI Tool Comparison -->
    <h3 style="margin-top: 0; margin-bottom: 0.8rem; font-size: 1.2rem;">🤖 三种 AI 协作模式：你和"毕业生"的关系</h3>

    <div style="display: flex; gap: 1rem; margin-bottom: 1.2rem; align-items: stretch;">
        <!-- Chat Tools -->
        <div class="agent-card" style="background: #eff6ff; border: 2px solid #bfdbfe;">
            <h4 style="color: #1e40af;">💬 对话工具</h4>
            <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 0.4rem;">ChatGPT / DeepSeek / Gemini / Kimi</div>
            <div style="background: #dbeafe; border-radius: 6px; padding: 0.5rem 0.7rem; margin-bottom: 0.5rem; border-left: 3px solid #3b82f6;">
                <div style="font-size: 0.95rem; color: #1e3a5f; font-style: italic;">👔 比喻：请了一位<strong>外部顾问</strong>——非常能干，但<strong>不了解你公司内部</strong>的运行方式。</div>
            </div>
            <ul style="color: #1e3a5f; font-size: 0.95rem; margin: 0; padding-left: 1.1rem;">
                <li>你描述问题，他给出建议</li>
                <li>不碰你的文件和系统</li>
                <li>适合<strong>问答、创作、临时咨询</strong></li>
            </ul>
        </div>

        <!-- OpenClaw -->
        <div class="agent-card" style="background: #fefce8; border: 2px solid #fde68a;">
            <h4 style="color: #a16207;">🦞 龙虾 (OpenClaw)</h4>
            <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 0.4rem;">自动化 Agent · 远程执行</div>
            <div style="background: #fffbeb; border-radius: 6px; padding: 0.5rem 0.7rem; margin-bottom: 0.5rem; border-left: 3px solid #f59e0b;">
                <div style="font-size: 0.95rem; color: #92400e; font-style: italic;">📱 比喻：把毕业生<strong>一个人扔在公司</strong>，你跑了，通过<strong>电话/微信遥控</strong>。</div>
            </div>
            <ul style="color: #713f12; font-size: 0.95rem; margin: 0; padding-left: 1.1rem;">
                <li>他独立干活，你看不到中间过程</li>
                <li>搞错了只能口述纠正，再等一轮</li>
                <li>适合<strong>标准化、低风险的批量任务</strong></li>
            </ul>
        </div>

        <!-- Coding Agent -->
        <div class="agent-card" style="background: #f0fdf4; border: 2px solid #86efac;">
            <h4 style="color: #166534;">⚡ Coding Agent</h4>
            <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 0.4rem;">Claude Code / Cursor / Windsurf</div>
            <div style="background: #dcfce7; border-radius: 6px; padding: 0.5rem 0.7rem; margin-bottom: 0.5rem; border-left: 3px solid #22c55e;">
                <div style="font-size: 0.95rem; color: #14532d; font-style: italic;">🪑 比喻：你<strong>坐在他旁边</strong>，看着他操作，发现错了<strong>立刻纠正</strong>。</div>
            </div>
            <ul style="color: #14532d; font-size: 0.95rem; margin: 0; padding-left: 1.1rem;">
                <li>AI 直接在你电脑上<strong>读写运行</strong></li>
                <li>每步可<strong>审批、暂停、回滚</strong></li>
                <li>适合<strong>复杂工程、持续迭代</strong></li>
            </ul>
        </div>
    </div>

    <!-- Security Section -->
    <div style="background: linear-gradient(135deg, #fef2f2, #fff7ed); border: 1px solid #fecaca; border-radius: 12px; padding: 1rem 1.2rem; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -10px; right: -5px; font-size: 3.5rem; opacity: 0.08; transform: rotate(15deg);">🛡️</div>
        <h3 style="margin-top: 0; margin-bottom: 0.5rem; color: #991b1b; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            ⚠️ 安全意识 —— 信任但要设边界
        </h3>
        <p style="font-size: 0.9rem; color: #7f1d1d; line-height: 1.5; margin-bottom: 0.6rem;">
            AI 时代的<strong>供应链攻击</strong>风险显著增加（恶意依赖包、工具链后门）。这就像 <strong>90年代的个人电脑</strong> ——早期发展，病毒疯狂肆虐。未来会逐步解决，但<strong>现在必须绷紧这根弦</strong>。
        </p>
        <div class="sec-grid">
            <div class="sec-item">
                <div class="sec-item-title">🏖️ 沙盒隔离 (Sandbox)</div>
                <div class="sec-item-desc">把 AI 放到<strong>"安全沙盒"</strong>中运行，数据即使泄露，风险也可接受。</div>
            </div>
            <div class="sec-item">
                <div class="sec-item-title">🖥️ 物理 / 逻辑隔离</div>
                <div class="sec-item-desc">用<strong>独立电脑或 VM</strong> 运行 AI 工具，不直接接触核心业务系统。</div>
            </div>
            <div class="sec-item">
                <div class="sec-item-title">🔍 审查与顾问</div>
                <div class="sec-item-desc">AI 生成的代码和依赖包需要<strong>专业审查</strong>，重要决策引入安全顾问。</div>
            </div>
            <div class="sec-item">
                <div class="sec-item-title">🧠 核心原则</div>
                <div class="sec-item-desc"><strong>永远不要把不可承受损失的东西</strong>暴露在未经验证的工具链中。</div>
            </div>
        </div>
    </div>
`;
