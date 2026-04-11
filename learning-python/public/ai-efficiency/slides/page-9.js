import { html } from '../app.js';

export default html`
    <h2>6. 实战演示：另一个真实的案例</h2>
    <p>除了刚才演示的底层核心算法调用，我们再来看一个更通用、更贴近日常业务的长流程演示。</p>
    
    <div class="card" style="margin: 2rem 0; padding: 3rem; text-align: center; border: 2px dashed #94a3b8; background: #f8fafc;">
        <h3 style="margin: 0; color: #64748b; font-weight: 500;">
            [ 这里将进行现场演示或播放第二个演示视频 ]
        </h3>
        <p style="margin-top: 1rem; color: #94a3b8;">
            (展示如何通过一段简单的自然语言指令，让AI跨越多个工具、应用完成自动化数据整理...)
        </p>
    </div>

    <div class="flex-row">
        <ul>
            <li><strong>输入：</strong> “帮我分析昨天的业务数据，并写一份简报。”</li>
            <li><strong>过程：</strong> AI理解意图 ➡️ 调用【提取数据库】Skill ➡️ 调用【归纳总结】Prompt ➡️ 调用【飞书文档发版】接口。</li>
            <li><strong>输出：</strong> 直接可用的线上团队文档。</li>
        </ul>
    </div>
    
    
`;
