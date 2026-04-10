import { html } from '../app.js';

export default html`
    <h2>Python 的 bin() 函数</h2>
    <p>Python 可以把数字转成二进制！</p>
    
    <pre>
# 转成二进制
print(bin(5))   # 输出: 0b101
print(bin(10))  # 输出: 0b1010
print(bin(255)) # 输出: 0b11111111

# 0b 是二进制的标记
# 就像我们说"第5名"，Python说"0b101"
    </pre>
    
    <div style="background: #e0f2fe; padding: 20px; border-radius: 20px; margin-top: 15px;">
        <p>💡 <code style="background: #1e293b; color: #a5b4fc; padding: 3px 8px; border-radius: 5px;">0b</code> 告诉我们后面是二进制数</p>
        <p>就像 <code style="background: #1e293b; color: #a5b4fc; padding: 3px 8px; border-radius: 5px;">0b101</code> 就是十进制的 <strong>5</strong></p>
    </div>
`;
