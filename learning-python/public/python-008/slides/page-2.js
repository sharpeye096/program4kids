import { html } from '../app.js';

export default html`
    <h2>字典是什么？📚</h2>
    
    <p style="font-size: 1.2rem;">就像真的字典一样！<br>通过<strong>关键词 (Key)</strong> 找到 <strong>内容 (Value)</strong></p>
    
    <div style="display: flex; gap: 40px; justify-content: center; align-items: center; margin: 30px 0;">
        <div style="text-align: center; opacity: 0.6;">
            <p style="margin: 0; font-size: 1.1rem;">列表 List</p>
            <div style="background: #e5e7eb; padding: 15px; border-radius: 10px; margin-top: 5px;">
                [0] ➔ "Arthur"<br>
                [1] ➔ 100
            </div>
            <p style="font-size: 1rem; color: #666; margin-top: 10px;">只能用数字编号</p>
        </div>
        
        <div style="font-size: 2rem; color: var(--primary);">vs</div>
        
        <div style="text-align: center;">
            <p style="margin: 0; font-size: 1.1rem; font-weight: bold; color: var(--primary);">字典 Dictionary</p>
            <div style="background: #fff; border: 3px solid var(--primary); padding: 15px; border-radius: 10px; margin-top: 5px; box-shadow: 5px 5px 0 #d97706;">
                "name" ➔ "Arthur"<br>
                "hp" &nbsp;&nbsp;➔ 100
            </div>
            <p style="font-size: 1rem; color: #d97706; margin-top: 10px;">可以用名字查找！</p>
        </div>
    </div>
    
    <p style="font-size: 1.1rem; color: var(--text-secondary);">
        数据是成对出现的：<strong>键 (Key) : 值 (Value)</strong>
    </p>
`;
