import { html } from '../app.js';

export default html`
    <h2>Python 的 % 运算符</h2>
    <p>在 Python 中，我们用 <code style="background: #1e293b; color: #a5b4fc; padding: 5px 10px; border-radius: 8px;">%</code> 来做模运算</p>
    
    <pre>
# 时钟算术
print(14 % 12)  # 输出: 2

# 100天后是星期几？
# 假设今天是星期一(1)
print((1 + 100) % 7)  # 输出: 3 (星期三!)

# 更多例子
print(10 % 3)   # 输出: 1
print(15 % 5)   # 输出: 0 (整除!)
    </pre>
    
    <div style="background: #fce7f3; padding: 15px; border-radius: 15px; margin-top: 10px;">
        <p style="font-size: 1.2rem;">💡 <strong>%</strong> 读作 "取模" 或 "取余"</p>
    </div>
`;
