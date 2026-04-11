import { html } from '../app.js';

export default html`
    <style>
        .vs-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 0.8rem;
        }
        .vs-bad, .vs-good {
            padding: 0.7rem 1rem;
            border-radius: 8px;
            font-size: 1.05rem;
            line-height: 1.5;
        }
        .vs-bad {
            background: #fef2f2;
            border-left: 3px solid #ef4444;
            color: #7f1d1d;
        }
        .vs-good {
            background: #f0fdf4;
            border-left: 3px solid #22c55e;
            color: #14532d;
        }
        .vs-label {
            font-weight: 700;
            font-size: 0.85rem;
            margin-bottom: 4px;
            display: block;
        }
    </style>

    <h2>7. 心态建设：如何与AI相处？</h2>
    <p style="margin-bottom: 1rem;">面对看似深奥的代码和技术，很多非技术人员的第一反应是"我不懂，我不敢碰"。这是最大的心理障碍。</p>
    
    <div class="card" style="background: #fff1f2; border-left: 4px solid #e11d48; margin-bottom: 1.5rem;">
        <h3 style="color: #be123c; margin-top: 0;">把 AI 当作一个聪明的，优秀的，各个专业都会的，但是缺乏经验和判断力的应届毕业生</h3>
        <p style="margin-bottom: 0;"><strong>不要畏惧！</strong> AI尤其擅长编程。你应该转换角色，将自己定位为"项目经理"或"产品负责人"。</p>
    </div>

    <h3 style="margin-top: 0; margin-bottom: 0.8rem; font-size: 1.3rem;">🎯 怎么当好这个"项目经理"？—— 指挥方式对比</h3>
    
    <div class="vs-row">
        <div class="vs-bad">
            <span class="vs-label">❌ 模糊的指令</span>
            "帮我做个网站"
        </div>
        <div class="vs-good">
            <span class="vs-label">✅ 精准的指挥</span>
            "帮我做一个展示公司产品列表的单页网站，用卡片式布局，配色要商务蓝"
        </div>
    </div>

    <div class="vs-row">
        <div class="vs-bad">
            <span class="vs-label">❌ 一句话甩锅</span>
            "这个报错了，你修一下"
        </div>
        <div class="vs-good">
            <span class="vs-label">✅ 提供上下文</span>
            "运行后控制台报了这个错 [贴报错]，我预期的结果是XXX，请排查并修复"
        </div>
    </div>

    <div class="vs-row">
        <div class="vs-bad">
            <span class="vs-label">❌ 一步到位的幻想</span>
            "帮我做一个完整的ERP系统"
        </div>
        <div class="vs-good">
            <span class="vs-label">✅ 分步骤推进</span>
            "我们先做第一个模块：员工信息管理的增删改查页面，用列表+表单的布局"
        </div>
    </div>
`;
