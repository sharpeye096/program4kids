import { html } from '../app.js';

export default html`
    <style>
        .at-input {
            background: #0f172a;
            color: #e2e8f0;
            border-radius: 10px;
            padding: 0.9rem 1.1rem;
            font-family: Consolas, Monaco, monospace;
            font-size: 1rem;
            margin-top: 0.6rem;
            line-height: 1.7;
            border: 1px solid #334155;
        }
        .at-input .at {
            color: #38bdf8;
            font-weight: 700;
        }
        .at-input .you {
            color: #fde68a;
        }
        .at-input .meta {
            color: #64748b;
            font-size: 0.85rem;
        }
        .way-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.9rem;
            margin-top: 0.5rem;
        }
        .way-card {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 0.95rem 1rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }
        .way-card h4 {
            margin: 0 0 0.4rem;
            font-size: 1.1rem;
            color: #1e40af;
        }
        .way-card p {
            font-size: 0.93rem;
            color: #475569;
            line-height: 1.55;
            margin: 0;
        }
        .way-shortcut {
            display: inline-block;
            background: #f1f5f9;
            border: 1px solid #cbd5e1;
            border-radius: 4px;
            padding: 1px 8px;
            font-size: 0.82rem;
            font-family: Consolas, monospace;
            color: #1e293b;
            margin-right: 4px;
        }
    </style>

    <h2>15. 让 AI"看见"你想说的：@、拖、贴</h2>
    <p>不会描述？<strong>把文件 / 图片直接塞给它</strong>。这是非技术用户最容易忽略，却最能立竿见影的技巧。</p>

    <div class="way-grid">
        <div class="way-card">
            <h4>① <span class="way-shortcut">@</span> 精确点名文件</h4>
            <p>在输入框打 <code class="highlight">@</code> 会弹出文件列表，选中——AI 就会精确读这个文件，不用你描述路径。</p>
        </div>
        <div class="way-card">
            <h4>② 拖拽文件进窗口</h4>
            <p>把 Word / Excel / PDF / 图片<strong>从资源管理器直接拖到对话框</strong>，自动当成附件。</p>
        </div>
        <div class="way-card">
            <h4>③ <span class="way-shortcut">Ctrl+V</span> 粘截图</h4>
            <p>用 QQ / Snipaste 截图后 → 切到对话框 → Ctrl+V 直接粘进去，AI 就能"看图说话"。</p>
        </div>
    </div>

    <h3 style="margin-top:1.2rem;">💡 真实场景示范</h3>
    <div class="grid-2" style="gap: 1.2rem;">
        <div class="card" style="background: linear-gradient(135deg, #fef2f2, #fff7ed); border-color: #fca5a5;">
            <h3 style="color:#991b1b; margin-top:0; font-size:1.1rem;">❌ 啰嗦低效</h3>
            <div class="at-input">
                <span class="you">我桌面上 2025 年 11 月那个销售数据文件
                （好像叫 sales_nov_v3.xlsx），
                帮我看看 B 列总和……</span>
            </div>
            <p style="font-size:0.9rem; color:#7f1d1d; margin-top:0.5rem; margin-bottom:0;">
                AI 要猜路径、可能找错文件。
            </p>
        </div>

        <div class="card" style="background: linear-gradient(135deg, #ecfdf5, #f0fdf4); border-color: #86efac;">
            <h3 style="color:#166534; margin-top:0; font-size:1.1rem;">✅ 精准高效</h3>
            <div class="at-input">
                <span class="you">帮我看看 <span class="at">@sales_nov_v3.xlsx</span>
                B 列总和。</span>
                <div class="meta">⤵ 或者：直接把文件拖进来</div>
            </div>
            <p style="font-size:0.9rem; color:#14532d; margin-top:0.5rem; margin-bottom:0;">
                文件被<strong>精准定位</strong>，零歧义。
            </p>
        </div>
    </div>

    <div class="card" style="width: 100%; margin-top: 1rem; background: linear-gradient(135deg, #eff6ff, #ede9fe); border-color: #c4b5fd;">
        <p style="font-size: 1.05rem; margin: 0; color: #4c1d95;">
            🎯 <strong>记住三个动作：</strong>打 @ 选文件 · 拖进来 · 粘截图。会了这三招，提问效率翻倍。
        </p>
    </div>
`;
