import { html } from '../app.js';

export default html`
    <h2>模运算的神奇效果 ✨</h2>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
        <div style="background: #fef3c7; padding: 20px; border-radius: 20px;">
            <h3 style="color: #92400e;">🔄 循环索引</h3>
            <pre style="font-size: 1rem;">
# 永不越界
for i in range(1000):
    item = list[i % len(list)]
            </pre>
        </div>
        
        <div style="background: #dbeafe; padding: 20px; border-radius: 20px;">
            <h3 style="color: #1d4ed8;">📅 日期计算</h3>
            <pre style="font-size: 1rem;">
# 第n天是星期几
day = (today + n) % 7
            </pre>
        </div>
        
        <div style="background: #dcfce7; padding: 20px; border-radius: 20px;">
            <h3 style="color: #16a34a;">🔢 奇偶判断</h3>
            <pre style="font-size: 1rem;">
# 判断奇偶
if num % 2 == 0:
    print("偶数")
            </pre>
        </div>
        
        <div style="background: #fce7f3; padding: 20px; border-radius: 20px;">
            <h3 style="color: #be185d;">🔐 密码学基础</h3>
            <pre style="font-size: 1rem;">
# 凯撒密码
new_char = (char + 3) % 26
            </pre>
        </div>
    </div>
`;
