import { html } from '../app.js';

export default html`
    <h2>模运算的超能力：循环！</h2>
    
    <p>想象你有一个颜色列表，只有 4 种颜色：</p>
    
    <div style="display: flex; gap: 15px; justify-content: center; margin: 20px 0;">
        <div style="background: red; width: 60px; height: 60px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">0</div>
        <div style="background: gold; width: 60px; height: 60px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: bold;">1</div>
        <div style="background: blue; width: 60px; height: 60px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">2</div>
        <div style="background: purple; width: 60px; height: 60px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">3</div>
    </div>
    
    <pre>
colors = ['red', 'yellow', 'blue', 'purple']
# 如果 i = 5，怎么取颜色？
# colors[5] 会报错！IndexError!

# 但是用模运算...
print(5 % 4)  # 输出: 1 → yellow
print(6 % 4)  # 输出: 2 → blue
print(100 % 4) # 输出: 0 → red
    </pre>
    
    <p>无论 i 多大，<code>i % 4</code> 永远在 <strong>0, 1, 2, 3</strong> 之间循环！</p>
`;
