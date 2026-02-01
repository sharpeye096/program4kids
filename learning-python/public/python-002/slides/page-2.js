import { html } from '../app.js';

export default html`
    <h2>什么是条件判断？🤔</h2>
    
    <p style="font-size: 1.4rem;">就像你每天早上做的选择一样！</p>
    
    <div style="display: flex; justify-content: center; gap: 40px; margin: 30px 0; flex-wrap: wrap;">
        <div style="background: #fff; padding: 25px; border-radius: 20px; border: 3px solid #3b82f6; min-width: 200px;">
            <div style="font-size: 3rem;">🌧️</div>
            <p style="font-weight: bold; color: #3b82f6;">如果下雨...</p>
            <p>带雨伞 ☂️</p>
        </div>
        
        <div style="background: #fff; padding: 25px; border-radius: 20px; border: 3px solid #f59e0b; min-width: 200px;">
            <div style="font-size: 3rem;">☀️</div>
            <p style="font-weight: bold; color: #f59e0b;">否则（不下雨）...</p>
            <p>戴墨镜 😎</p>
        </div>
    </div>
    
    <p style="font-size: 1.2rem; background: linear-gradient(135deg, #8b5cf6, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold;">
        电脑也需要根据情况做不同的事情！
    </p>
`;
