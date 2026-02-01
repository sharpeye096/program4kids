import { html } from '../app.js';

export default html`
    <h2>函数 (Functions)</h2>
    <p>函数就是你的<strong>魔法咒语 ✨</strong>！</p>
    
    <pre>
def say_hello(name):
    print("你好, " + name + "!")
    </pre>
    
    <p>定义一次，就能到处使用！</p>
    
    <div style="margin-top: 30px;">
        <code style="background: #fff; padding: 15px; border-radius: 10px; border: 2px solid #333; font-size: 1.2rem;">say_hello("小朋友")</code> 
        ➡️ 
        <span style="color: #8b5cf6; font-weight: bold; font-size: 1.2rem;">"你好, 小朋友!"</span>
    </div>
    
    <!-- Increased spacing here -->
    <div style="margin-top: 40px;">
        <code style="background: #fff; padding: 15px; border-radius: 10px; border: 2px solid #333; font-size: 1.2rem;">say_hello("爸爸")</code> 
        ➡️ 
        <span style="color: #f472b6; font-weight: bold; font-size: 1.2rem;">"你好, 爸爸!"</span>
    </div>
`;
