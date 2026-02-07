import { html } from '../app.js';

export default html`
    <h2>🎨 实战项目：寻找 π</h2>
    <p>扔 1000 个点，看能不能找到 π！</p>
    
    <pre>
import random

inside = 0  # 圆内的点数
total = 1000  # 总共扔多少个点

for i in range(total):
    x = random.random()
    y = random.random()
    
    if x**2 + y**2 <= 1:
        inside += 1

# 计算 π
pi = 4 * inside / total
print(f"π ≈ {pi}")
# 扔得越多，结果越接近 3.14159...
    </pre>
    
    <div style="background: linear-gradient(135deg, #dbeafe, #fce7f3); padding: 15px; border-radius: 15px;">
        <p>🎲 每次运行结果不同，但都接近 <strong>3.14</strong>！</p>
    </div>
`;
