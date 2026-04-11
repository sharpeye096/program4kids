import { html } from '../app.js';

export const onMount = (container) => {
    const toolBtns = container.querySelectorAll('.tool-btn');
    const contentArea = container.querySelector('#inline-content-area');

    const inlineData = {
        chat: {
            content: `
                <p style="margin-bottom: 0.5rem; color:#475569; font-size: 1.15rem;">💬 <strong>对话是理解 AI 最直接的方式。</strong>不用学代码，只要输入自然语言（Prompt），它就能帮你分析问题、写文章、查资料。
                    <button id="prompt-tip-btn" style="margin-left: 0.5rem; background: #fffbeb; border: 1px solid #fcd34d; color: #92400e; padding: 3px 10px; border-radius: 20px; font-size: 0.9rem; cursor: pointer; font-weight: 500; transition: all 0.2s; font-family: inherit;">💡 Prompt 技巧</button>
                </p>
                <div style="position: relative;">
                    <table class="tool-table">
                        <tbody>
                            <tr>
                                <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64" class="tool-logo"></td>
                                <td class="name-col">Gemini</td>
                                <td class="desc-col">谷歌自研的顶级模型大本营，多模态推理能力强悍，如果你是谷歌生态重度用户则体验极佳。</td>
                            </tr>
                            <tr>
                                <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64" class="tool-logo"></td>
                                <td class="name-col">ChatGPT</td>
                                <td class="desc-col">老牌全能型六边形战士，语音对话体验极度拟真，并且能直接调用丰富的插件。</td>
                            </tr>
                            <tr>
                                <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=deepseek.com&sz=64" class="tool-logo"></td>
                                <td class="name-col">DeepSeek</td>
                                <td class="desc-col">性价比极高并且深度开源的国产模型，深度思考（R1）相关的逻辑推理能力堪称一绝。</td>
                            </tr>
                            <tr>
                                <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=kimi.moonshot.cn&sz=64" class="tool-logo"></td>
                                <td class="name-col">Kimi</td>
                                <td class="desc-col">国产长文本处理标杆，非常适合一次性喂给它十几篇财报或超长 PDF 让它提炼总结。</td>
                            </tr>
                            <tr>
                                <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=doubao.com&sz=64" class="tool-logo"></td>
                                <td class="name-col">豆包</td>
                                <td class="desc-col">字节跳动旗下的全民 AI 大模型，速度极快，文本生成本土化体验好，日常轻办公的好帮手。</td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="prompt-overlay" style="display: none; position: absolute; inset: 0; background: #fffbeb; border: 2px solid #fcd34d; border-radius: 8px; padding: 1.2rem; z-index: 10; flex-direction: column; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
                            <h4 style="margin: 0; color: #92400e; font-size: 1.15rem;">💡 Prompt Engineering（提示词工程）—— 跟 AI 说话也有技巧</h4>
                            <button id="prompt-overlay-close" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #92400e; line-height: 1;">&times;</button>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.8rem; margin-bottom: 0.8rem;">
                            <div style="background: #fff; border-radius: 6px; padding: 0.6rem; border: 1px solid #e5e7eb;">
                                <strong style="color: #1e40af; font-size: 0.95rem;">🎭 设定角色</strong>
                                <p style="font-size: 0.85rem; margin: 4px 0 0 0; color: #475569; line-height: 1.4;">"你是一位资深财务分析师，请帮我..."</p>
                            </div>
                            <div style="background: #fff; border-radius: 6px; padding: 0.6rem; border: 1px solid #e5e7eb;">
                                <strong style="color: #1e40af; font-size: 0.95rem;">📋 分步骤拆解</strong>
                                <p style="font-size: 0.85rem; margin: 4px 0 0 0; color: #475569; line-height: 1.4;">"请分三步完成：第一步…第二步…第三步…"</p>
                            </div>
                            <div style="background: #fff; border-radius: 6px; padding: 0.6rem; border: 1px solid #e5e7eb;">
                                <strong style="color: #1e40af; font-size: 0.95rem;">📎 给出示例</strong>
                                <p style="font-size: 0.85rem; margin: 4px 0 0 0; color: #475569; line-height: 1.4;">"参考这个格式：[示例]，帮我生成类似的..."</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 0.8rem; font-size: 0.9rem;">
                            <div style="flex:1; background: #fef2f2; border-radius: 6px; padding: 0.5rem 0.7rem; border-left: 3px solid #ef4444;">
                                <span style="color: #dc2626;">❌</span> <span style="color: #7f1d1d;">"帮我写个报告"</span>
                            </div>
                            <div style="flex:1; background: #f0fdf4; border-radius: 6px; padding: 0.5rem 0.7rem; border-left: 3px solid #22c55e;">
                                <span style="color: #16a34a;">✅</span> <span style="color: #14532d;">"你是一位市场分析师。请根据以下数据，用「总结→趋势→建议」的结构写一份500字的季度简报。"</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        kb: {
            content: `
                <p style="margin-bottom: 0.5rem; color:#475569; font-size: 1.15rem;">📚 <strong>知识库是你的“第二大脑”。</strong>结合AI后，它能够帮你快速总结长文档、自动归类资料，甚至根据你的历史笔记精准回答问题。</p>
                <table class="tool-table">
                    <tbody>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=notion.so&sz=64" class="tool-logo"></td>
                            <td class="name-col">Notion AI</td>
                            <td class="desc-col">全球最流行的多合一笔记应用，跨平台协作与 AI 排版体验极佳。</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=feishu.cn&sz=64" class="tool-logo"></td>
                            <td class="name-col">飞书文档</td>
                            <td class="desc-col">企业协作神器，内嵌 AI 能飞速浓缩重点、辅助创作。</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="./assets/yuque.png" class="tool-logo"></td>
                            <td class="name-col">语雀</td>
                            <td class="desc-col">国内老牌文档工具，深度集成了专属 AI，中文支持极好。</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=obsidian.md&sz=64" class="tool-logo"></td>
                            <td class="name-col">Obsidian (+AI)</td>
                            <td class="desc-col">适合喜欢折腾的极客，构建完全本地与高隐私的私人大模型数据库。</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=anythingllm.com&sz=64" class="tool-logo"></td>
                            <td class="name-col">AnythingLLM</td>
                            <td class="desc-col">能够将任何甚至海量私密文档极速转化为本地知识库的神器，构建私域 RAG 环境的首选。</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        table: {
            content: `
                <p style="margin-bottom: 0.5rem; color:#475569; font-size: 1.15rem;">📊 <strong>多维表让不懂代码的人也能搭建轻量级数据库。</strong>配合 AI，表格里的杂乱数据能自动处理、提取特征，甚至生成可视化分析报告。</p>
                <table class="tool-table">
                    <tbody>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=feishu.cn&sz=64" class="tool-logo"></td>
                            <td class="name-col">飞书多维表格</td>
                            <td class="desc-col">极易上手，支持 AI 自动生成字段、处理高度复杂的统计逻辑。</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=dingtalk.com&sz=64" class="tool-logo"></td>
                            <td class="name-col">钉钉多维表</td>
                            <td class="desc-col">深度融合企业组织架构的一站式多能表格，内置丰富的自动化模板流。</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=airtable.com&sz=64" class="tool-logo"></td>
                            <td class="name-col">Airtable</td>
                            <td class="desc-col">多维表格的国际鼻祖，拥有极其强大的企业级自动化工作流和 AI 能力。</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=notion.so&sz=64" class="tool-logo"></td>
                            <td class="name-col">Notion Database</td>
                            <td class="desc-col">数据库视图配合 Notion AI，能够无比灵活地推进轻量级敏捷项目管理。</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=docs.qq.com&sz=64" class="tool-logo"></td>
                            <td class="name-col">腾讯文档 / 维格表</td>
                            <td class="desc-col">优秀的低代码多维表工具，易用性与本地化协作极佳。</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        voice: {
            content: `
                <p style="margin-bottom: 0.5rem; color:#475569; font-size: 1.15rem;">🎤 <strong>职场人最容易获得“肉眼可见提升”的法宝。</strong>AI 不仅能精确把语音转文字，更能区分发言人，甚至直接提取全篇行动清单（To-Do）。</p>
                <table class="tool-table">
                    <tbody>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=feishu.cn&sz=64" class="tool-logo"></td>
                            <td class="name-col">飞书妙记</td>
                            <td class="desc-col">无论是本地开会录音还是线上讨论，都能极速转文字，自动生成结构化摘要与待办。</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=dingtalk.com&sz=64" class="tool-logo"></td>
                            <td class="name-col">钉钉闪记</td>
                            <td class="desc-col">无缝集成钉钉会议室，录屏与录音精确同步，智能分离不同发言人角色并提取结论。</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=meeting.tencent.com&sz=64" class="tool-logo"></td>
                            <td class="name-col">腾讯会议 AI 助手</td>
                            <td class="desc-col">在线开会时如果走神，你可以直接打字悄悄问 AI：“刚才老板讲的计划重点是什么？”</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=tingjian.xfyun.cn&sz=64" class="tool-logo"></td>
                            <td class="name-col">讯飞听见</td>
                            <td class="desc-col">在多重噪音或方言较强的环境中能保持超高准确率的老牌劲旅，录音笔的最佳搭档。</td>
                        </tr>
                        <tr>
                            <td class="logo-col"><img src="https://www.google.com/s2/favicons?domain=otter.ai&sz=64" class="tool-logo"></td>
                            <td class="name-col">Otter.ai</td>
                            <td class="desc-col">纯英文跨国研讨的神器，实时生成极其精准的英文会议纪要并总结重点。</td>
                        </tr>
                    </tbody>
                </table>
            `
        }
    };

    const bindPromptOverlay = () => {
        const btn = contentArea.querySelector('#prompt-tip-btn');
        const overlay = contentArea.querySelector('#prompt-overlay');
        const closeBtn = contentArea.querySelector('#prompt-overlay-close');
        if (btn && overlay) {
            btn.addEventListener('click', () => { overlay.style.display = 'flex'; });
            closeBtn.addEventListener('click', () => { overlay.style.display = 'none'; });
        }
    };

    toolBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toolBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const type = btn.getAttribute('data-type');
            if (inlineData[type]) {
                contentArea.innerHTML = inlineData[type].content;
                contentArea.classList.add('visible');
                if (type === 'chat') bindPromptOverlay();
            }
        });
    });

    // Auto-click the first tab on init
    if (toolBtns.length > 0) {
        toolBtns[0].click();
    }
};

export default html`
    <style>
        .tool-btn {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            color: #64748b;
            padding: 0.8rem 1.2rem;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: bold;
            transition: all 0.2s;
        }
        .tool-btn:hover {
            background: #e0f2fe;
            border-color: #bae6fd;
            color: #0369a1;
        }
        .tool-btn.active {
            background: #e0f2fe;
            border-color: #0284c7;
            color: #0369a1;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        
        .tool-logo {
            width: 28px;
            height: 28px;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
            background-color: #fff;
            margin: 0;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        
        /* Updated Inline Content Table Styles */
        #inline-content-area {
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        #inline-content-area.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .tool-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1.2rem;
            font-size: 1.05rem;
            background: #fff;
            box-shadow: 0 4px 6px rgba(0,0,0,0.02);
            border-radius: 8px;
            overflow: hidden;
        }
        .tool-table th, .tool-table td {
            border: 1px solid #e2e8f0;
            padding: 14px 18px;
            text-align: left;
            vertical-align: middle;
        }
        .tool-table th {
            background-color: #f1f5f9;
            font-weight: 600;
            color: #334155;
            font-size: 1.1rem;
        }
        .tool-table td {
            color: #475569;
        }
        .tool-table tr:hover td {
            background-color: #f8fafc;
        }
        .logo-col {
            width: 60px;
            text-align: center;
        }
        .name-col {
            width: 170px;
            font-weight: bold;
            color: #0f172a;
            font-size: 1.15rem;
        }
        .desc-col {
            line-height: 1.6;
        }
        
        .huge-title {
            font-size: 2.4rem; 
            margin-bottom: 2rem; 
            background: linear-gradient(90deg, #0f172a, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>

    <h2 class="huge-title">1. 开启AI提效的科学路径 (上)</h2>
    
    <div style="background: #f0f9ff; border: 1px solid #bae6fd; padding: 2rem; border-radius: 12px; margin-bottom: 2rem; text-align: left; height: 100%;">
        <h3 style="margin-top:0; color: #0284c7; display: flex; align-items: center; font-size: 1.8rem; margin-bottom: 1.5rem;">
            <span style="margin-right:0.5rem;">🎯</span> 第一步：建立习惯 —— 普通人的效率基本盘
        </h3>
        
        <!-- Tab Navigation Buttons -->
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 1rem;">
            <button class="tool-btn" data-type="chat" style="font-size: 1.25rem; padding: 0.8rem 1.5rem;">💬 对话与搜索</button>
            <button class="tool-btn" data-type="kb" style="font-size: 1.25rem; padding: 0.8rem 1.5rem;">📚 知识库</button>
            <button class="tool-btn" data-type="table" style="font-size: 1.25rem; padding: 0.8rem 1.5rem;">📊 多维表</button>
            <button class="tool-btn" data-type="voice" style="font-size: 1.25rem; padding: 0.8rem 1.5rem;">🎤 语音与会议</button>
        </div>

        <!-- Inline Content Area -->
        <div id="inline-content-area"></div>
    </div>
    
    
`;