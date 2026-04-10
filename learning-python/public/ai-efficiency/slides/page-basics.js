import { html } from '../app.js';

export default html`
    <h2 style="font-size: 2rem; margin-bottom: 1rem;">5. 开始前必知：五块计算机基础敲门砖</h2>
    <p style="margin-bottom: 1.5rem; font-size: 1.2rem;">作为不写代码的“长官”，为了能顺畅指使你的AI助手沟通或排错，具备这些基础非常关键：</p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem;">
        
        <div class="card" style="padding: 1.2rem;">
            <h3 style="margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center; color: #166534;"><span style="margin-right: 0.5rem;">📦</span> Git (版本控制)</h3>
            <p style="font-size: 1rem; line-height: 1.5; margin-bottom: 0;"><strong>“代码的时光机与保险柜”</strong><br>记录文稿的每次修改。Claude Code强制要求它，以确保如果不满意AI的改动，随时能一键安全撤销。</p>
        </div>

        <div class="card" style="padding: 1.2rem;">
            <h3 style="margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center; color: #1e40af;"><span style="margin-right: 0.5rem;">⌨️</span> CLI (终端命令行)</h3>
            <p style="font-size: 1rem; line-height: 1.5; margin-bottom: 0;"><strong>“剥去图形外衣的直接操控台”</strong><br>就像黑客电脑上的黑框框。这里没有花哨按钮，你用纯文本命令直接向操作系统或各类Agent发号施令。</p>
        </div>

        <div class="card" style="padding: 1.2rem;">
            <h3 style="margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center; color: #8b5cf6;"><span style="margin-right: 0.5rem;">🌐</span> API (如 HTTP)</h3>
            <p style="font-size: 1rem; line-height: 1.5; margin-bottom: 0;"><strong>“软件之间的沟通点单员”</strong><br>就像点外卖时的菜单服务。让代码去连接大模型或获取外界数据时，就是通过API发出标准请求然后等上菜。</p>
        </div>

        <div class="card" style="padding: 1.2rem;">
            <h3 style="margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center; color: #0f766e;"><span style="margin-right: 0.5rem;">📄</span> JSON</h3>
            <p style="font-size: 1rem; line-height: 1.5; margin-bottom: 0;"><strong>“全宇宙通用的数据快递盒”</strong><br>一种结构极其清晰的文本格式（有很多键值对的大括号）。当API上菜时，外卖盒里的数据通常都保存在JSON里。</p>
        </div>

        <div class="card" style="padding: 1.2rem;">
            <h3 style="margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center; color: #b91c1c;"><span style="margin-right: 0.5rem;">📝</span> Markdown</h3>
            <p style="font-size: 1rem; line-height: 1.5; margin-bottom: 0;"><strong>“最高效的极简排版语言”</strong><br>比Word更轻量。你会发现不管是给大模型写复杂的Prompt，还是它回答你的结构化内容，默认都是采用这种带星号和井号的纯文本排版。</p>
        </div>

        <div class="card" style="padding: 1.2rem; background: #fdf4ff; border-color: #f5d0fe;">
            <h3 style="margin-top: 0; margin-bottom: 0.5rem; display: flex; align-items: center; color: #c026d3;"><span style="margin-right: 0.5rem;">🐍</span> Python 与 JS/TS (Node)</h3>
            <p style="font-size: 1rem; line-height: 1.5; margin-bottom: 0;"><strong>“AI时代的双核通用语言”</strong><br>Python 是当前底层AI算法调用、处理数据的主力；JS/TS 则是前端展示界面的霸主。两兄弟打配合，足已吃透80%的业务场景。</p>
        </div>
    </div>
    
    <div class="slide-number">5 / 9</div>
`;
