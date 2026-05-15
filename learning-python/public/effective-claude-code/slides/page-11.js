import { html } from '../app.js';

export default html`
    <style>
        .fmt-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 0.8rem;
            font-size: 1rem;
            background: #fff;
            box-shadow: 0 4px 6px rgba(0,0,0,0.02);
            border-radius: 8px;
            overflow: hidden;
        }
        .fmt-table th, .fmt-table td {
            border: 1px solid #e2e8f0;
            padding: 10px 14px;
            text-align: center;
            vertical-align: middle;
            color: #475569;
        }
        .fmt-table th {
            background: #f1f5f9;
            color: #0f172a;
            font-weight: 700;
        }
        .fmt-table .fmt-name {
            font-weight: 700;
            color: #0f172a;
        }
        .badge-good { color: #16a34a; font-size: 1.2rem; }
        .badge-ok { color: #ca8a04; font-size: 1.2rem; }
        .badge-bad { color: #dc2626; font-size: 1.2rem; }
    </style>

    <h2>11. 文件格式偏好：AI 最爱"纯文本"</h2>
    <p>装了 Skill 后 AI 也能看 Excel / Word，但<strong>处理纯文本最快、最便宜、最准确</strong>。条件允许时尽量喂它纯文本。</p>

    <table class="fmt-table">
        <thead>
            <tr>
                <th>格式</th>
                <th>是否纯文本</th>
                <th>速度</th>
                <th>成本</th>
                <th>出错率</th>
                <th>建议</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="fmt-name">.csv</td>
                <td>✅ 是</td>
                <td><span class="badge-good">★★★★★</span></td>
                <td><span class="badge-good">最低</span></td>
                <td><span class="badge-good">最低</span></td>
                <td style="color:#16a34a; font-weight:700;">👍 首选表格格式</td>
            </tr>
            <tr>
                <td class="fmt-name">.md / .txt</td>
                <td>✅ 是</td>
                <td><span class="badge-good">★★★★★</span></td>
                <td><span class="badge-good">最低</span></td>
                <td><span class="badge-good">最低</span></td>
                <td style="color:#16a34a; font-weight:700;">👍 首选文档格式</td>
            </tr>
            <tr>
                <td class="fmt-name">.json</td>
                <td>✅ 是</td>
                <td><span class="badge-good">★★★★</span></td>
                <td><span class="badge-good">很低</span></td>
                <td><span class="badge-good">很低</span></td>
                <td style="color:#16a34a;">👍 结构化数据交换</td>
            </tr>
            <tr>
                <td class="fmt-name">.html</td>
                <td>✅ 是</td>
                <td><span class="badge-good">★★★★</span></td>
                <td><span class="badge-good">低</span></td>
                <td><span class="badge-good">低</span></td>
                <td style="color:#16a34a;">👍 网页 / 富文本展示</td>
            </tr>
            <tr>
                <td class="fmt-name">.xlsx / .docx</td>
                <td>⚠️ 二进制</td>
                <td><span class="badge-ok">★★★</span></td>
                <td><span class="badge-ok">中</span></td>
                <td><span class="badge-ok">中</span></td>
                <td style="color:#ca8a04;">📦 给最终人看的成品再用</td>
            </tr>
            <tr>
                <td class="fmt-name">.png / .jpg</td>
                <td>❌ 图像</td>
                <td><span class="badge-ok">★★</span></td>
                <td><span class="badge-ok">较高</span></td>
                <td><span class="badge-ok">中</span></td>
                <td style="color:#ca8a04;">🖼️ 需要视觉理解时才喂图</td>
            </tr>
            <tr>
                <td class="fmt-name">.pdf（扫描版）</td>
                <td>❌ 图像</td>
                <td><span class="badge-bad">★</span></td>
                <td><span class="badge-bad">高</span></td>
                <td><span class="badge-bad">高</span></td>
                <td style="color:#dc2626;">⚠️ 需要 OCR，能避就避</td>
            </tr>
        </tbody>
    </table>

    <div class="card" style="width: 100%; margin-top: 1rem; background: linear-gradient(135deg, #eff6ff, #f0fdf4); border-color: #bfdbfe;">
        <p style="font-size: 1.1rem; margin: 0; color: #0f172a;">
            💡 <strong>实战流程：</strong>先让 AI 把 Excel/Word 转成 CSV/MD 处理 → 全部跑完再让它转回 Excel/Word 交付。
        </p>
    </div>
`;
