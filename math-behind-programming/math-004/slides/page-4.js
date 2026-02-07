import { html } from '../app.js';

export default html`
    <h2>Python 生成斐波那契数列</h2>
    <p>用变量像接力赛一样传递数值！</p>
    
    <pre>
a = 1
b = 1

print(a)  # 第1个数
print(b)  # 第2个数

for i in range(10):
    c = a + b       # 计算下一个数
    print(c)
    a = b           # 像接力跑一样传递
    b = c

# 输出: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
    </pre>
    
    <div style="background: #e0f2fe; padding: 15px; border-radius: 15px; margin-top: 10px;">
        <p>💡 关键技巧：<strong>a = b, b = c</strong> 让数字"往前走"</p>
    </div>
`;
