import { html } from '../app.js';

export default html`
    <h2>4. 进阶概念与生态：SKILLs 与 MCP</h2>
    <p>当我们不再满足于仅仅“生成代码”，而是需要AI帮我们完成“整套工作流”时，就需要以下技术来拓展边界：</p>
    
    <div class="grid-2" style="margin-top: 2rem;">
        <div class="card">
            <h3 style="color: #047857;">SKILLs (技能模块)</h3>
            <p>赋予AI特定能力的指令合集或脚本包。就像是给AI安装了各种“插件”。</p>
            <ul>
                <li><strong>自动化：</strong> 让AI学会抓取数据、处理文件等。</li>
                <li><strong>复用性：</strong> 一次编写，以后AI遇到同类任务就能直接调用特定的Skill完成。</li>
            </ul>
        </div>

        <div class="card">
            <h3 style="color: #b91c1c;">MCP (Model Context Protocol)</h3>
            <p>大型模型与本地环境交互的“桥梁标准”。</p>
            <ul>
                <li><strong>打破数据孤岛：</strong> 允许AI安全地读取你的本地文件、数据库或者内部工具系统。</li>
                <li><strong>意义：</strong> AI不再只是一个网页窗口，它能真正在你的工作台上“帮手操作”。</li>
            </ul>
        </div>
    </div>
    
    <div class="slide-number">6 / 9</div>
`;
