import { html } from '../app.js';

export const onMount = (container) => {
    // Collapsible tree logic
    const toggles = container.querySelectorAll('.tree-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = toggle.getAttribute('data-target');
            const children = container.querySelector(`[data-children="${targetId}"]`);
            if (!children) return;
            const collapsed = children.classList.toggle('collapsed');
            const icon = toggle.querySelector('.folder-icon');
            const caret = toggle.querySelector('.caret');
            if (icon) icon.textContent = collapsed ? '📁' : '📂';
            if (caret) caret.textContent = collapsed ? '▸' : '▾';
        });
    });

    // CLAUDE.md modal logic
    const mdTrigger = container.querySelector('.claude-md-row');
    const mdModal = container.querySelector('#claude-md-modal');
    const mdClose = container.querySelector('#claude-md-close');
    if (mdTrigger && mdModal) {
        mdTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            mdModal.style.display = 'flex';
        });
        mdClose.addEventListener('click', () => {
            mdModal.style.display = 'none';
        });
        mdModal.addEventListener('click', (e) => {
            if (e.target === mdModal) mdModal.style.display = 'none';
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mdModal.style.display === 'flex') {
                mdModal.style.display = 'none';
            }
        });
    }
};

export default html`
    <style>
        .concept-card {
            background: #f8fafc;
            border: 1px solid #cbd5e1;
            padding: 0.85rem 1rem;
            border-radius: 8px;
            margin-bottom: 0.7rem;
        }
        .concept-card h4 {
            margin: 0 0 0.35rem 0;
            font-size: 1.1rem;
            color: #0f172a;
            font-weight: 600;
        }
        .concept-card p {
            font-size: 0.95rem;
            color: #475569;
            margin: 0;
            line-height: 1.55;
        }
        .concept-card .tag {
            display: inline-block;
            font-size: 0.75rem;
            background: #dbeafe;
            color: #1e40af;
            padding: 1px 8px;
            border-radius: 10px;
            font-weight: 600;
            margin-left: 6px;
            vertical-align: 2px;
        }
        .concept-card .tag.repo {
            background: #fef3c7;
            color: #92400e;
        }

        /* Tree styles */
        .tree-panel {
            background: #f8fafc;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            padding: 0.9rem 0.7rem 0.9rem 1rem;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 0.92rem;
            line-height: 1.7;
            color: #334155;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.03);
        }
        .tree-header {
            font-family: var(--font-main);
            font-size: 0.92rem;
            color: #64748b;
            border-bottom: 1px dashed #cbd5e1;
            padding-bottom: 0.5rem;
            margin-bottom: 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .tree-header .legend {
            font-size: 0.78rem;
            color: #94a3b8;
        }
        .tree-row {
            display: flex;
            align-items: center;
            padding: 1px 4px;
            border-radius: 4px;
            white-space: nowrap;
        }
        .tree-toggle {
            cursor: pointer;
            user-select: none;
            transition: background 0.15s;
        }
        .tree-toggle:hover {
            background: #e2e8f0;
        }
        .caret {
            display: inline-block;
            width: 12px;
            color: #94a3b8;
            font-size: 0.8rem;
            margin-right: 2px;
            text-align: center;
        }
        .caret-spacer {
            display: inline-block;
            width: 12px;
            margin-right: 2px;
        }
        .folder-icon, .file-icon {
            display: inline-block;
            margin-right: 6px;
        }
        .tree-name { font-weight: 500; }
        .tree-name.workspace { color: #1d4ed8; font-weight: 700; }
        .tree-name.repo      { color: #b45309; font-weight: 700; }
        .tree-name.claude    { color: #be185d; font-weight: 600; }
        .tree-comment {
            color: #94a3b8;
            font-style: italic;
            margin-left: 0.8rem;
            font-size: 0.82rem;
        }
        .tree-children {
            margin-left: 1.1rem;
            border-left: 1px dashed #cbd5e1;
            padding-left: 0.5rem;
            overflow: hidden;
            transition: max-height 0.25s ease;
            max-height: 1000px;
        }
        .tree-children.collapsed {
            max-height: 0;
        }
        .claude-md-row {
            cursor: pointer;
            transition: background 0.15s, transform 0.15s;
            border: 1px dashed transparent;
        }
        .claude-md-row:hover {
            background: #fce7f3;
            border-color: #ec4899;
            transform: translateX(2px);
        }
        .claude-md-row:hover .tree-comment {
            color: #db2777;
            font-style: normal;
        }

        /* Modal styles */
        .md-modal-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, 0.65);
            z-index: 1000;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(3px);
        }
        .md-modal {
            background: #ffffff;
            border-radius: 14px;
            width: 88%;
            max-width: 780px;
            max-height: 86vh;
            display: flex;
            flex-direction: column;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4);
            position: relative;
            overflow: hidden;
        }
        .md-modal-header {
            padding: 1rem 1.5rem;
            background: linear-gradient(135deg, #fdf2f8, #fce7f3);
            border-bottom: 1px solid #fbcfe8;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .md-modal-header h3 {
            margin: 0;
            font-size: 1.2rem;
            color: #be185d;
            font-weight: 700;
        }
        .md-modal-close {
            background: #be185d;
            color: #fff;
            border: none;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.15s;
        }
        .md-modal-close:hover {
            background: #831843;
        }
        .md-modal-body {
            padding: 1.2rem 1.5rem 1.5rem;
            overflow-y: auto;
        }
        .md-info-strip {
            background: linear-gradient(135deg, #fef3c7, #fde68a);
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 0.7rem 0.9rem;
            margin-bottom: 1rem;
            display: flex;
            gap: 0.6rem;
            align-items: flex-start;
        }
        .md-info-strip .icon {
            font-size: 1.4rem;
            line-height: 1.2;
        }
        .md-info-strip .text {
            font-size: 0.95rem;
            color: #78350f;
            line-height: 1.55;
        }
        .md-info-strip .text strong {
            color: #b45309;
        }
        .md-feature-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.6rem;
            margin-bottom: 1rem;
        }
        .md-feature {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 0.55rem 0.75rem;
            font-size: 0.88rem;
            color: #334155;
            line-height: 1.4;
        }
        .md-feature b { color: #1e40af; }
        .md-sample {
            background: #1e1e1e;
            color: #d4d4d4;
            padding: 1rem 1.2rem;
            border-radius: 8px;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 0.85rem;
            line-height: 1.6;
            white-space: pre-wrap;
            overflow-x: auto;
            margin: 0;
        }
        .md-sample .h1 { color: #4ec9b0; font-weight: bold; }
        .md-sample .h2 { color: #c586c0; font-weight: bold; }
        .md-sample .cmt { color: #6a9955; font-style: italic; }
        .md-sample .kw  { color: #569cd6; }
        .md-sample .str { color: #ce9178; }
        .md-sample .em  { color: #f59e0b; font-weight: bold; }
        .md-sample-label {
            font-size: 0.82rem;
            color: #64748b;
            margin: 0 0 0.4rem 0;
            font-weight: 600;
            letter-spacing: 0.5px;
        }
    </style>

    <h2>2. 建立安全区：Workspace + Repo 两层结构</h2>
    <p style="margin-bottom: 0.6rem; font-size: 1.15rem;">
        把 AI 的活动范围圈在<strong>一个工作区</strong>里，里面再按任务分成<strong>多个仓库</strong>——这就是推荐的双层结构。
    </p>

    <div class="grid-2" style="gap: 1.3rem; margin-top: 0.2rem;">
        <!-- LEFT: 概念介绍 -->
        <div>
            <div class="concept-card" style="background: linear-gradient(135deg, #eff6ff, #dbeafe); border-color: #93c5fd;">
                <h4>🏢 Workspace<span class="tag">工作区</span></h4>
                <p>
                    AI 的"办公大楼"，放在硬盘根目录（如 <code class="highlight" style="font-size:0.85rem;">D:/AIWorkspace</code>）。
                    <br/><strong>里面的所有东西，AI 都可以自由读写</strong>，外面的文件碰都不碰。
                    <br/>全局规则、自定义技能也放在这一层，所有 Repo 共享。
                </p>
            </div>

            <div class="concept-card" style="background: linear-gradient(135deg, #fffbeb, #fef3c7); border-color: #fcd34d;">
                <h4>📦 Repo<span class="tag repo">仓库</span></h4>
                <p>
                    Workspace 下的子目录，<strong>一个 Repo = 一类任务</strong>。
                    教学资料、行政表格、数据分析…… 各管各的，互不干扰。
                    <br/>规则统一由 Workspace 根目录的 <code class="highlight" style="font-size:0.85rem;">CLAUDE.md</code> 管，Repo 里只放任务文件。
                </p>
            </div>

            <div class="concept-card" style="background: #f0fdf4; border-color: #86efac;">
                <h4 style="color: #166534;">📝 命名建议</h4>
                <p>
                    <strong style="color:#dc2626;">路径里别有空格</strong>，名字尽量短。
                    <br/>中文路径多数情况能用，但<span style="color:#64748b;">建议用英文</span>，少踩兼容性的坑。<br/>
                    <code class="highlight" style="font-size:0.85rem;">D:/AIWorkspace/teaching</code> ✅
                    <code style="background:#fee2e2;color:#991b1b;padding:0.15rem 0.4rem;border-radius:4px;font-size:0.85rem;">D:/AI 助手/资料</code> ❌
                </p>
            </div>
        </div>

        <!-- RIGHT: 文件树 -->
        <div class="tree-panel">
            <div class="tree-header">
                <span>📁 推荐文件结构</span>
            </div>

            <!-- D:\ -->
            <div class="tree-row">
                <span class="caret-spacer"></span>
                <span class="folder-icon">💽</span>
                <span class="tree-name">D:\\</span>
            </div>
            <div class="tree-children">

                <!-- AIWorkspace -->
                <div class="tree-row tree-toggle" data-target="ws">
                    <span class="caret">▾</span>
                    <span class="folder-icon">📂</span>
                    <span class="tree-name workspace">AIWorkspace</span>
                    <span class="tree-comment"># 🏢 工作区根目录</span>
                </div>
                <div class="tree-children" data-children="ws">

                    <!-- CLAUDE.md -->
                    <div class="tree-row claude-md-row" title="点击查看 CLAUDE.md 是什么">
                        <span class="caret-spacer"></span>
                        <span class="file-icon">📜</span>
                        <span class="tree-name claude">CLAUDE.md</span>
                    </div>

                    <!-- .claude -->
                    <div class="tree-row tree-toggle" data-target="claude">
                        <span class="caret">▾</span>
                        <span class="folder-icon">📂</span>
                        <span class="tree-name claude">.claude</span>
                        <span class="tree-comment"># Claude 专属配置</span>
                    </div>
                    <div class="tree-children" data-children="claude">
                        <div class="tree-row tree-toggle" data-target="skills">
                            <span class="caret">▾</span>
                            <span class="folder-icon">📂</span>
                            <span class="tree-name claude">skills</span>
                            <span class="tree-comment"># 自定义技能库</span>
                        </div>
                        <div class="tree-children" data-children="skills">
                            <div class="tree-row">
                                <span class="caret-spacer"></span>
                                <span class="folder-icon">📁</span>
                                <span class="tree-name">translate</span>
                            </div>
                            <div class="tree-row">
                                <span class="caret-spacer"></span>
                                <span class="folder-icon">📁</span>
                                <span class="tree-name">summarize</span>
                            </div>
                        </div>
                    </div>

                    <!-- teaching repo -->
                    <div class="tree-row tree-toggle" data-target="teaching">
                        <span class="caret">▾</span>
                        <span class="folder-icon">📂</span>
                        <span class="tree-name repo">teaching</span>
                        <span class="tree-comment"># 📦 教学资料</span>
                    </div>
                    <div class="tree-children" data-children="teaching">
                        <div class="tree-row">
                            <span class="caret-spacer"></span>
                            <span class="folder-icon">📁</span>
                            <span class="tree-name">lessons</span>
                        </div>
                        <div class="tree-row">
                            <span class="caret-spacer"></span>
                            <span class="folder-icon">📁</span>
                            <span class="tree-name">slides</span>
                        </div>
                    </div>

                    <!-- admin repo -->
                    <div class="tree-row tree-toggle" data-target="admin">
                        <span class="caret">▸</span>
                        <span class="folder-icon">📁</span>
                        <span class="tree-name repo">admin</span>
                        <span class="tree-comment"># 📦 行政表格</span>
                    </div>
                    <div class="tree-children collapsed" data-children="admin">
                        <div class="tree-row">
                            <span class="caret-spacer"></span>
                            <span class="folder-icon">📁</span>
                            <span class="tree-name">templates</span>
                        </div>
                        <div class="tree-row">
                            <span class="caret-spacer"></span>
                            <span class="folder-icon">📁</span>
                            <span class="tree-name">reports</span>
                        </div>
                    </div>

                    <!-- analysis repo -->
                    <div class="tree-row tree-toggle" data-target="analysis">
                        <span class="caret">▸</span>
                        <span class="folder-icon">📁</span>
                        <span class="tree-name repo">analysis</span>
                        <span class="tree-comment"># 📦 数据分析</span>
                    </div>
                    <div class="tree-children collapsed" data-children="analysis">
                        <div class="tree-row">
                            <span class="caret-spacer"></span>
                            <span class="folder-icon">📁</span>
                            <span class="tree-name">data</span>
                        </div>
                        <div class="tree-row">
                            <span class="caret-spacer"></span>
                            <span class="folder-icon">📁</span>
                            <span class="tree-name">reports</span>
                        </div>
                    </div>

                    <!-- writing repo -->
                    <div class="tree-row tree-toggle" data-target="writing">
                        <span class="caret">▸</span>
                        <span class="folder-icon">📁</span>
                        <span class="tree-name repo">writing</span>
                        <span class="tree-comment"># 📦 文案写作</span>
                    </div>
                    <div class="tree-children collapsed" data-children="writing">
                        <div class="tree-row">
                            <span class="caret-spacer"></span>
                            <span class="folder-icon">📁</span>
                            <span class="tree-name">drafts</span>
                        </div>
                        <div class="tree-row">
                            <span class="caret-spacer"></span>
                            <span class="folder-icon">📁</span>
                            <span class="tree-name">published</span>
                        </div>
                    </div>

                    <!-- research repo -->
                    <div class="tree-row tree-toggle" data-target="research">
                        <span class="caret">▸</span>
                        <span class="folder-icon">📁</span>
                        <span class="tree-name repo">research</span>
                        <span class="tree-comment"># 📦 资料调研</span>
                    </div>
                    <div class="tree-children collapsed" data-children="research">
                        <div class="tree-row">
                            <span class="caret-spacer"></span>
                            <span class="folder-icon">📁</span>
                            <span class="tree-name">sources</span>
                        </div>
                        <div class="tree-row">
                            <span class="caret-spacer"></span>
                            <span class="folder-icon">📁</span>
                            <span class="tree-name">notes</span>
                        </div>
                    </div>

                </div><!-- /AIWorkspace children -->
            </div><!-- /D: children -->
        </div>
    </div>

    <div class="card" style="width: 100%; margin-top: 0.9rem; background: linear-gradient(135deg, #fef2f2, #fff7ed); border-color: #fca5a5;">
        <h3 style="color: #991b1b; margin-top: 0;">🚨 核心铁律：手动搬运，隔离风险</h3>
        <p style="font-size: 1.05rem; margin: 0; color: #7f1d1d;">
            处理某个文件时——<strong>复制</strong>一份进对应的 Repo；处理完——<strong>复制</strong>结果出来。<br/>
            绝对不要让 AI 直接动 Workspace 外面的重要文件。这样能 100% 避免它误删你的心血。
        </p>
    </div>

    <!-- CLAUDE.md Modal -->
    <div class="md-modal-overlay" id="claude-md-modal">
        <div class="md-modal">
            <div class="md-modal-header">
                <h3>📜 CLAUDE.md — AI 的"工牌 + 员工手册"</h3>
                <button class="md-modal-close" id="claude-md-close" aria-label="关闭">×</button>
            </div>
            <div class="md-modal-body">
                <div class="md-info-strip">
                    <span class="icon">📌</span>
                    <div class="text">
                        <strong>这个文件会常驻在上下文中。</strong>
                        Claude Code 每次启动都会自动把它的全部内容读进"长期记忆"，并在<strong>每一轮对话</strong>里都参考。
                        你不需要每次重复说规则——写一次，AI 永远记得。
                    </div>
                </div>

                <div class="md-feature-list">
                    <div class="md-feature"><b>🎯 立规矩</b><br/>"不要动工作区外的文件"、"重要操作前先问我"</div>
                    <div class="md-feature"><b>🗣️ 定语气</b><br/>"用中文交流"、"避免技术术语"</div>
                    <div class="md-feature"><b>📂 介绍项目</b><br/>"这是一个教学资料仓库，里面有……"</div>
                    <div class="md-feature"><b>🛠️ 工具偏好</b><br/>"中间结果用 HTML 交互，定稿再导出"</div>
                </div>

                <p class="md-sample-label">💡 样例内容（D:/AIWorkspace/CLAUDE.md）：</p>
<pre class="md-sample"><span class="h1"># AIWorkspace 工作区说明</span>

<span class="cmt"># 这是给 Claude Code 看的，每次对话都会自动读。</span>

<span class="h2">## 🎯 我是谁，在做什么</span>

我是一名小学老师，这个工作区里放的是教学和行政相关的文件。
我<span class="kw">不会编程</span>，请<span class="em">用中文</span>跟我交流，避免技术术语。

<span class="h2">## 📂 目录约定</span>

- <span class="str">teaching/</span>  教学资料（PPT、讲义）
- <span class="str">admin/</span>     行政表格（点名、统计）
- <span class="str">writing/</span>   日常文案

<span class="h2">## 🚨 安全铁律</span>

1. <span class="em">绝对不要</span>改动或者删除当前工作区之外的任何文件。
2. 读取工作区之外的文件，需要征求我的同意。

<span class="h2">## 🛠️ 工具偏好</span>

- 在工作过程中，迭代内容的时候，请你使用 HTML 作为中间结果与我交互，
  内容完成之后再一次性输出 PPT 或者 docx 文档。</pre>

                <p style="margin: 1rem 0 0 0; font-size: 0.88rem; color: #64748b; line-height: 1.55;">
                    💬 <strong>怎么写：</strong>不用一开始就写完美。先空着，遇到 AI 做错或啰嗦的时候，告诉它"以后记得 XXX"，再让它<strong>自己把这条规则写进 CLAUDE.md</strong>。久而久之它就越来越懂你。
                </p>
            </div>
        </div>
    </div>
`;
