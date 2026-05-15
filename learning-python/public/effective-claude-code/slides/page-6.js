import { html } from '../app.js';

export default html`
    <style>
        .cmd-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
            font-size: 1.02rem;
            background: #fff;
            box-shadow: 0 4px 6px rgba(0,0,0,0.02);
            border-radius: 8px;
            overflow: hidden;
        }
        .cmd-table td {
            border: 1px solid #e2e8f0;
            padding: 8px 14px;
            vertical-align: middle;
            color: #475569;
            line-height: 1.45;
            font-size: 0.95rem;
        }
        .cmd-table tr:hover td {
            background: #f8fafc;
        }
        .cmd-table .cmd-name {
            width: 160px;
            font-family: Consolas, Monaco, monospace;
            background: #1e293b;
            color: #fde68a;
            font-weight: 600;
            text-align: center;
        }
    </style>

    <h2>6. 命令行常用快捷命令</h2>
    <p>启动 Claude Code 后，在对话框里输入下面这些以 <code class="highlight">/</code> 开头的命令，可以快速控制它。</p>

    <table class="cmd-table">
        <tbody>
            <tr>
                <td class="cmd-name">/help</td>
                <td><strong>呼出帮助菜单。</strong>忘记怎么操作时随时查看——记不住别的命令？记住这个就够了。</td>
            </tr>
            <tr>
                <td class="cmd-name">/init</td>
                <td><strong>初始化 Repo。</strong>生成本目录的 <code class="highlight">CLAUDE.md</code>（员工手册）。</td>
            </tr>
            <tr>
                <td class="cmd-name">/clear</td>
                <td><strong>清屏 + 清记忆。</strong>开始全新任务时用。<span style="color:#64748b;">它会清掉对话历史，请先存档。</span></td>
            </tr>
            <tr>
                <td class="cmd-name">/compact</td>
                <td><strong>压缩上下文。</strong>让 AI 忘掉前面啰嗦的讨论过程，只保留结论与当前状态——<strong>更便宜、更快、更准</strong>。</td>
            </tr>
            <tr>
                <td class="cmd-name">/context</td>
                <td><strong>查看上下文用了多少。</strong>显示当前会话占用的"记忆容量"，超过 70% 就该考虑 <code class="highlight">/compact</code> 或 <code class="highlight">/clear</code>。</td>
            </tr>
            <tr>
                <td class="cmd-name">/resume</td>
                <td><strong>继续历史会话。</strong>列出最近的对话，挑一个继续——昨天没干完的活，今天接着干。</td>
            </tr>
            <tr>
                <td class="cmd-name">/cost</td>
                <td><strong>查看账单。</strong>看看你当前这个任务花了多少 AI 额度，保持对成本的感知。</td>
            </tr>
            <tr>
                <td class="cmd-name">/model</td>
                <td><strong>切换模型。</strong>简单任务用便宜模型，复杂任务用强力模型——省钱小窍门。</td>
            </tr>
            <tr>
                <td class="cmd-name">/permissions</td>
                <td><strong>查看 / 修改权限。</strong>哪些命令自动放行，哪些要问你——安全的关键开关（下一章详讲）。</td>
            </tr>
            <tr>
                <td class="cmd-name">/agents</td>
                <td><strong>管理子代理。</strong>把复杂任务交给"专家分身"完成。</td>
            </tr>
            <tr>
                <td class="cmd-name">/memory</td>
                <td><strong>编辑 CLAUDE.md。</strong>直接打开"员工手册"做调整，不用切窗口。</td>
            </tr>
        </tbody>
    </table>

    <div class="card" style="width: 100%; margin-top: 1rem; background: linear-gradient(135deg, #eff6ff, #f0fdf4); border-color: #bfdbfe;">
        <p style="font-size: 1.1rem; margin: 0; color: #0f172a;">
            💡 <strong>记不住没关系</strong>——只要记得 <code class="highlight">/help</code>，剩下的菜单会自动告诉你。
        </p>
    </div>
`;
