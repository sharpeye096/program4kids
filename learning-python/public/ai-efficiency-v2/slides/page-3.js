import { html } from '../app.js';

export default html`
    <h2>3. 现阶段 AI 落地的三个主要场景</h2>
    <p>我了解到的企业AI落地，主要是三个场景：</p>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; width: 100%; margin-top: 1rem;">
        <div class="card" style="min-height: 360px; display: flex; flex-direction: column;">
            <div style="width: 2rem; height: 2rem; border-radius: 50%; background: #1e40af; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; margin-bottom: 0.7rem;">1</div>
            <h3>知识库类</h3>
            <p style="font-size: 1.05rem;">把文档、制度、项目资料变成可问答的知识入口。</p>
            <span class="highlight" style="width: fit-content; margin-top: auto;">RAG / 企业知识问答</span>
        </div>
        <div class="card" style="min-height: 360px; display: flex; flex-direction: column;">
            <div style="width: 2rem; height: 2rem; border-radius: 50%; background: #1e40af; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; margin-bottom: 0.7rem;">2</div>
            <h3>龙虾类 Agent</h3>
            <p style="font-size: 1.05rem;">7×24 小时运行在电脑上，并接入钉钉、微信、飞书等 IM。</p>
            <span class="highlight" style="width: fit-content; margin-top: auto;">OpenClaw及其各种变体 / Hermes </span>
        </div>
        <div class="card" style="min-height: 360px; display: flex; flex-direction: column;">
            <div style="width: 2rem; height: 2rem; border-radius: 50%; background: #1e40af; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; margin-bottom: 0.7rem;">3</div>
            <h3>嵌入原有工作流</h3>
            <p style="font-size: 1.05rem;">在既有系统的某个节点加入 AI，比如客服、审批、审核、录入。</p>
            <span class="highlight" style="width: fit-content; margin-top: auto;">聊天机器人 / AI 节点</span>
        </div>
    </div>
`;
