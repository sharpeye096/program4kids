import { html } from '../app.js';

export default html`
    <h2>🐢 实战项目：彩色螺旋</h2>
    <p>用 Turtle 画一个自动换色的漂亮螺旋！</p>
    
    <pre>
import turtle

t = turtle.Turtle()
t.speed(0)  # 最快速度

colors = ['red', 'yellow', 'blue', 'purple']

for i in range(100):
    t.pencolor(colors[i % 4])  # 模运算循环颜色
    t.forward(i * 2)
    t.left(91)

turtle.done()
    </pre>
    
    <div style="background: linear-gradient(135deg, #dbeafe, #fce7f3); padding: 20px; border-radius: 20px; margin-top: 15px;">
        <p>🎨 <strong>i % 4</strong> 让颜色在 4 种之间不断循环</p>
        <p>画 100 条线，每条线的颜色都会自动变化！</p>
    </div>
`;
