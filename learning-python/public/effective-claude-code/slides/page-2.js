import { html } from '../app.js';

export default html`
    <h2>1. Claude Code 是什么？一个能"动手"的 AI</h2>
    <p>同网页上聊天的 AI 不一样——它<strong>住在你的电脑里</strong>，可以直接读文件、改文件、运行命令、安装工具。</p>

    <div class="grid-2" style="gap: 1.5rem; margin-top: 1rem;">
        <div class="card" style="background: linear-gradient(135deg, #eff6ff, #dbeafe); border-color: #93c5fd; min-height: 280px;">
            <h3 style="color: #1e40af; margin-top: 0;">💬 普通聊天 AI</h3>
            <ul>
                <li>只能"动嘴"，给你文字回答</li>
                <li>你需要手动复制、粘贴、保存</li>
                <li>不知道你电脑里有什么</li>
                <li>顶多说错话，<strong>不会动你的文件</strong></li>
            </ul>
        </div>

        <div class="card" style="background: linear-gradient(135deg, #fff7ed, #fef3c7); border-color: #fcd34d; min-height: 280px;">
            <h3 style="color: #9a3412; margin-top: 0;">🤖 Claude Code（终端助手）</h3>
            <ul>
                <li>可以"动手"，直接操作文件与命令</li>
                <li>能读懂你的目录结构，主动检索</li>
                <li>能写程序、跑脚本、装环境</li>
                <li>权限很大，<strong>用错地方会闯祸</strong></li>
            </ul>
        </div>
    </div>

    <div class="card" style="width: 100%; margin-top: 1.2rem; background: linear-gradient(135deg, #fef2f2, #fff7ed); border-color: #fca5a5;">
        <p style="font-size: 1.3rem; font-weight: 700; margin: 0; color: #991b1b; max-width: none;">⚠️ 一句话总结：能力越大，责任越大。风险越大，收益越大。在让它干活前，先给它"划地盘"，定规矩。</p>
    </div>
`;
