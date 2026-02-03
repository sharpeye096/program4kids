import { html } from '../app.js';

export default html`
    <h2>缩进 (Indentation) 📏</h2>
    
    <p style="font-size: 1.2rem;"><strong>Python 用空格来区分代码块！</strong></p>
    
    <div style="display: flex; justify-content: center; gap: 25px; margin: 20px 0; flex-wrap: wrap;">
        <!-- Wrong -->
        <div style="background: #fee2e2; padding: 18px; border-radius: 15px; border: 3px solid #ef4444; min-width: 250px;">
            <h3 style="color: #dc2626; margin-top: 0;">❌ 错误</h3>
            <pre style="background: #1e293b; padding: 12px; border-radius: 10px; color: #e2e8f0; font-size: 0.95rem; text-align: left;">
<span style="color: #c678dd;">if</span> age < <span style="color: #d19a66;">10</span>:
<span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"小朋友"</span>)  <span style="color: #ef4444;">← 没缩进!</span>
            </pre>
        </div>
        
        <!-- Correct -->
        <div style="background: #dcfce7; padding: 18px; border-radius: 15px; border: 3px solid #22c55e; min-width: 250px;">
            <h3 style="color: #16a34a; margin-top: 0;">✅ 正确</h3>
            <pre style="background: #1e293b; padding: 12px; border-radius: 10px; color: #e2e8f0; font-size: 0.95rem; text-align: left;">
<span style="color: #c678dd;">if</span> age < <span style="color: #d19a66;">10</span>:
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"小朋友"</span>)  <span style="color: #22c55e;">← 有缩进!</span>
            </pre>
        </div>
    </div>
    
    <div style="background: #f3e8ff; padding: 15px; border-radius: 15px; border: 2px solid #a855f7; margin: 15px auto; max-width: 500px;">
        <p style="margin: 0; font-size: 1.1rem;">
            💡 <strong>缩进 = 4个空格</strong>（或按一下 Tab 键）
        </p>
    </div>
    
    <button id="show-scope-btn" style="margin-top: 10px; font-size: 1.1rem;">🔍 查看嵌套作用域演示</button>
    
    <!-- Modal -->
    <dialog id="scope-modal" style="border: none; border-radius: 20px; padding: 0; box-shadow: 0 25px 60px rgba(0,0,0,0.3); max-width: 750px; width: 95%;">
        <div style="background: linear-gradient(135deg, #8b5cf6, #a855f7); padding: 15px 20px; color: #fff; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">🎨 嵌套缩进 - 点击查看代码块作用域</h3>
            <button id="close-modal" style="background: rgba(255,255,255,0.2); border: none; font-size: 1.3rem; cursor: pointer; color: #fff; padding: 5px 10px; border-radius: 8px;">✕</button>
        </div>
        <div style="padding: 20px; background: #1e293b; position: relative;">
            <p style="color: #94a3b8; margin: 0 0 15px 0; font-size: 0.9rem;">👆 点击 if/else 语句查看它的整个代码块</p>
            
            <div id="code-container" style="font-family: 'Consolas', monospace; font-size: 1.05rem; line-height: 2; text-align: left;">
                <!-- Line 0 -->
                <div class="code-line" data-line="0" data-block="A" data-block-lines="0,1,2,3,4" style="padding: 4px 10px; border-radius: 5px; cursor: pointer; transition: all 0.3s; color: #e2e8f0;">
                    <span style="color: #64748b; font-size: 0.8rem; margin-right: 10px;">1</span><span style="color: #c678dd;">if</span> weather == <span style="color: #98c379;">"晴天"</span>:
                </div>
                <!-- Line 1 -->
                <div class="code-line" data-line="1" data-block="B" data-block-lines="1,2" style="padding: 4px 10px; border-radius: 5px; cursor: pointer; transition: all 0.3s; color: #e2e8f0;">
                    <span style="color: #64748b; font-size: 0.8rem; margin-right: 10px;">2</span><span style="color: #555;">····</span><span style="color: #c678dd;">if</span> temperature > <span style="color: #d19a66;">30</span>:
                </div>
                <!-- Line 2 -->
                <div class="code-line" data-line="2" style="padding: 4px 10px; border-radius: 5px; transition: all 0.3s; color: #e2e8f0;">
                    <span style="color: #64748b; font-size: 0.8rem; margin-right: 10px;">3</span><span style="color: #555;">········</span><span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"好热！开空调 ❄️"</span>)
                </div>
                <!-- Line 3 -->
                <div class="code-line" data-line="3" data-block="C" data-block-lines="3,4" style="padding: 4px 10px; border-radius: 5px; cursor: pointer; transition: all 0.3s; color: #e2e8f0;">
                    <span style="color: #64748b; font-size: 0.8rem; margin-right: 10px;">4</span><span style="color: #555;">····</span><span style="color: #c678dd;">else</span>:
                </div>
                <!-- Line 4 -->
                <div class="code-line" data-line="4" style="padding: 4px 10px; border-radius: 5px; transition: all 0.3s; color: #e2e8f0;">
                    <span style="color: #64748b; font-size: 0.8rem; margin-right: 10px;">5</span><span style="color: #555;">········</span><span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"天气真好！出去玩 ☀️"</span>)
                </div>
                <!-- Line 5 -->
                <div class="code-line" data-line="5" data-block="D" data-block-lines="5,6,7,8,9" style="padding: 4px 10px; border-radius: 5px; cursor: pointer; transition: all 0.3s; color: #e2e8f0;">
                    <span style="color: #64748b; font-size: 0.8rem; margin-right: 10px;">6</span><span style="color: #c678dd;">else</span>:
                </div>
                <!-- Line 6 -->
                <div class="code-line" data-line="6" data-block="E" data-block-lines="6,7" style="padding: 4px 10px; border-radius: 5px; cursor: pointer; transition: all 0.3s; color: #e2e8f0;">
                    <span style="color: #64748b; font-size: 0.8rem; margin-right: 10px;">7</span><span style="color: #555;">····</span><span style="color: #c678dd;">if</span> weather == <span style="color: #98c379;">"下雨"</span>:
                </div>
                <!-- Line 7 -->
                <div class="code-line" data-line="7" style="padding: 4px 10px; border-radius: 5px; transition: all 0.3s; color: #e2e8f0;">
                    <span style="color: #64748b; font-size: 0.8rem; margin-right: 10px;">8</span><span style="color: #555;">········</span><span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"带雨伞！☔"</span>)
                </div>
                <!-- Line 8 -->
                <div class="code-line" data-line="8" data-block="F" data-block-lines="8,9" style="padding: 4px 10px; border-radius: 5px; cursor: pointer; transition: all 0.3s; color: #e2e8f0;">
                    <span style="color: #64748b; font-size: 0.8rem; margin-right: 10px;">9</span><span style="color: #555;">····</span><span style="color: #c678dd;">else</span>:
                </div>
                <!-- Line 9 -->
                <div class="code-line" data-line="9" style="padding: 4px 10px; border-radius: 5px; transition: all 0.3s; color: #e2e8f0;">
                    <span style="color: #64748b; font-size: 0.8rem; margin-right: 10px;">10</span><span style="color: #555;">········</span><span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"阴天，带件外套 🧥"</span>)
                </div>
            </div>
            
            <!-- Legend -->
            <div style="display: flex; gap: 15px; margin-top: 20px; flex-wrap: wrap; justify-content: center;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: 20px; height: 20px; background: #3b82f6; border-radius: 4px;"></div>
                    <span style="color: #e2e8f0; font-size: 0.9rem;">第1层 if/else</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: 20px; height: 20px; background: #22c55e; border-radius: 4px;"></div>
                    <span style="color: #e2e8f0; font-size: 0.9rem;">第2层 if/else</span>
                </div>
            </div>
            
            <button id="clear-btn" style="margin-top: 15px; background: #475569; font-size: 0.9rem;">🔄 清除高亮</button>
        </div>
    </dialog>
`;

export const onMount = (container) => {
    const modal = container.querySelector('#scope-modal');
    const showBtn = container.querySelector('#show-scope-btn');
    const closeBtn = container.querySelector('#close-modal');
    const clearBtn = container.querySelector('#clear-btn');
    const codeLines = container.querySelectorAll('.code-line');

    const blockColors = {
        'A': '#3b82f6', // Blue - Level 1 if
        'B': '#22c55e', // Green - Level 2 if
        'C': '#22c55e', // Green - Level 2 else
        'D': '#3b82f6', // Blue - Level 1 else  
        'E': '#22c55e', // Green - Level 2 if
        'F': '#22c55e'  // Green - Level 2 else
    };

    let activeBlock = null;

    // Clear all highlights
    const clearHighlights = () => {
        codeLines.forEach(line => {
            line.style.background = 'transparent';
            line.style.borderLeft = 'none';
        });
        activeBlock = null;
    };

    // Highlight a block
    const highlightBlock = (blockId, blockLines, color) => {
        const lineIndices = blockLines.split(',').map(n => parseInt(n));
        lineIndices.forEach(idx => {
            const line = container.querySelector(`[data-line="${idx}"]`);
            if (line) {
                line.style.background = color + '25';
                line.style.borderLeft = `5px solid ${color}`;
            }
        });
    };

    // Show modal
    showBtn.onclick = () => {
        modal.showModal();
    };

    // Close modal
    closeBtn.onclick = () => {
        modal.close();
    };

    // Clear button
    clearBtn.onclick = clearHighlights;

    // Click outside to close
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.close();
        }
    };

    // Click on lines with blocks
    codeLines.forEach(line => {
        const blockId = line.dataset.block;
        const blockLines = line.dataset.blockLines;

        if (blockId && blockLines) {
            line.style.cursor = 'pointer';

            line.onclick = () => {
                if (activeBlock === blockId) {
                    // Toggle off
                    clearHighlights();
                } else {
                    // Clear and highlight new block
                    clearHighlights();
                    highlightBlock(blockId, blockLines, blockColors[blockId]);
                    activeBlock = blockId;
                }
            };

            // Hover effect for clickable lines
            line.onmouseenter = () => {
                if (activeBlock !== blockId) {
                    line.style.background = 'rgba(255,255,255,0.08)';
                }
            };
            line.onmouseleave = () => {
                if (activeBlock !== blockId) {
                    // Only reset if not part of active block
                    const lineIdx = parseInt(line.dataset.line);
                    if (!activeBlock) {
                        line.style.background = 'transparent';
                    }
                }
            };
        }
    });
};
