import { html } from '../app.js';

export default html`
    <h2>8. 终极建议：建立基础的技术认知</h2>
    <p>虽然我们强调“不要畏惧，让AI来干活”，但这并不意味着我们可以对技术一无所知。</p>
    
    <div class="flex-col" style="gap: 1.5rem; margin-top: 2rem;">
        <div class="card" style="background: #f0fdf4; border: 1px solid #bbf7d0;">
            <h3 style="color: #166534; margin-top: 0;">适当学习基础的计算机知识</h3>
            <p><strong>不需要深究实现细节，但需要拥有“品味”和“方向感”。</strong></p>
            <p style="font-size: 1rem; margin-bottom:0;">例如：了解什么是前端/后端、什么是API接口、什么是JSON格式、什么是数据库结构、基本的终端(Terminal)和文件路径概念。</p>
        </div>

        <div>
            <h3>为什么基础知识很重要？</h3>
            <ul>
                <li><strong>更精准的指挥：</strong> 如果你不懂API，你就不知道怎么要求AI去获取第三方数据。你的Prompt（提示词）质量取决于你的架构认知。</li>
                <li><strong>更好的验收与排错：</strong> 当“那位毕业生”走错方向或者遇到死胡同时，你需要知道该如何引导他切换思路或者寻找其他方案，而不是一味地让他“重新跑一次”。</li>
            </ul>
        </div>
    </div>

    <div style="margin-top: 2rem; text-align: center; border-top: 2px solid #e2e8f0; padding-top: 1.5rem;">
        <h3 style="color: var(--primary);">打破边界，让技术真正为你的业务创意服务！</h3>
    </div>
    
    <div class="slide-number">10 / 10</div>
`;
