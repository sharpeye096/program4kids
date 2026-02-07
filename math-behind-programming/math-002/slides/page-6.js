import { html } from '../app.js';

export default html`
    <h2>🎨 实战项目：像素画解码器</h2>
    <p>用 0 和 1 画一颗爱心！</p>
    
    <div style="display: flex; gap: 40px; align-items: flex-start; justify-content: center;">
        <div style="background: #1e293b; padding: 20px; border-radius: 15px;">
            <pre style="margin: 0; border: none; box-shadow: none; font-size: 1rem;">
row1 = [0, 1, 1, 0, 0, 1, 1, 0]
row2 = [1, 1, 1, 1, 1, 1, 1, 1]
row3 = [1, 1, 1, 1, 1, 1, 1, 1]
row4 = [0, 1, 1, 1, 1, 1, 1, 0]
row5 = [0, 0, 1, 1, 1, 1, 0, 0]
row6 = [0, 0, 0, 1, 1, 0, 0, 0]
            </pre>
        </div>
        <div style="font-size: 2rem; align-self: center;">→</div>
        <div style="display: grid; grid-template-columns: repeat(8, 1fr); gap: 3px;">
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: white;"></div>
            
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: white;"></div>
            
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: white;"></div>
            
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: #ef4444;"></div>
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: white;"></div>
            <div class="pixel" style="background: white;"></div>
        </div>
    </div>
    
    <p style="margin-top: 20px;">🖥️ 这就是屏幕显示图像的原理！</p>
`;
