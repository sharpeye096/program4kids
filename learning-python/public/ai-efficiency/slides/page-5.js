import { html } from '../app.js';

export default html`
    <style>
        .lob-card {
            background: #fff;
            border-left: 5px solid #ef4444;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
            text-align: left;
        }
        .vs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        .vs-col {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 1.5rem;
        }
    </style>

    <h2 class="huge-title" style="font-size: 2.2rem; margin-bottom: 1.5rem; background: linear-gradient(90deg, #ef4444, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        2. 延伸讨论："龙虾 (OpenClaw)"是怎么出圈的？
    </h2>
    
    <div class="lob-card">
        <h3 style="margin-top:0; color: #b91c1c; font-size: 1.5rem; display: flex; align-items: center;"><span style="margin-right: 8px;">🦞</span> 龙虾的故事起因</h3>
        <p style="font-size: 1.2rem; color: #334155; line-height: 1.6; margin-bottom: 0;">
            龙虾的作者突发奇想，把 <strong>Claude Code</strong> 接入了 WhatsApp。有一天，他不经意发了一段语音过去，结果发现：
            这只"龙虾"自己上网搜索了一下怎么把语音转成文字，然后写了段程序转成了文字，再根据指令回复了用户。
        </p>
    </div>

    <div class="vs-grid">
        <div class="vs-col">
            <h4 style="margin-top: 0; color: #475569; font-size: 1.25rem;">🎭 表面看起来很魔幻</h4>
            <p style="color: #64748b; font-size: 1.2rem; margin-bottom: 0;">
                一个全能的虚拟赛博助理出现在了你的微信里，你发一句话，它就像拥有肉身一样全自动帮你去互联网上查资料，做文档，整理文件，回复邮件，甚至点外卖。
            </p>
        </div>
        <div class="vs-col">
            <h4 style="margin-top: 0; color: #059669; font-size: 1.25rem;">⚙️ 扒开底层的真实逻辑</h4>
            <p style="color: #64748b; font-size: 1.2rem; margin-bottom: 0;">
                实际上，它就是在一个 <strong>7×24 小时不断电的物理服务器节点</strong>上运行一个<strong>Coding Agent</strong>。它连接了 IM（微信、飞书、钉钉、What'sApp、Slack等） 接收你的消息通道，一旦接受需求，就直接通过"生成系统交互代码、调用本地电脑或网络终端"来替你狂奔执行罢了。
            </p>
        </div>
    </div>
    
    <div style="margin-top: 2rem; background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 1.2rem; border-radius: 8px; text-align: center; font-weight: bold; font-size: 1.25rem;">
        💡 本质结论：折腾"龙虾"与折腾"Coding Agent"的技术代差、原理是一模一样的。<br>不管外面包了什么"神级助手"的外壳，AI 的最高效核打击武器永远在于——它直接越过了你这双肉手，用敲击代码的方式降维操纵了我们创造的信息系统！
    </div>
`;
