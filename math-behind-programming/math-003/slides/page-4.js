import { html } from '../app.js';

export default html`
    <h2>Python 的 random 模块</h2>
    <p>用随机数模拟"闭眼扔小球"</p>
    
    <pre>
import random

# 生成 0 到 1 之间的随机数
x = random.random()  # 例如: 0.7523...
y = random.random()  # 例如: 0.2847...

# 判断点是否在圆内（勾股定理！）
# 圆心在原点，半径为 1
distance = x**2 + y**2

if distance <= 1:
    print("在圆内！")
else:
    print("在圆外！")
    </pre>
    
    <div style="background: #e0f2fe; padding: 15px; border-radius: 15px; margin-top: 10px;">
        <p>💡 <strong>勾股定理</strong>：x² + y² ≤ r² 就在圆内</p>
    </div>
`;
