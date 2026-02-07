import { html } from '../app.js';

export default html`
    <h2>🐢 Turtle 画黄金螺旋</h2>
    
    <pre>
import turtle

t = turtle.Turtle()
t.speed(3)

# 斐波那契数列
fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
colors = ['red', 'orange', 'yellow', 'green', 'blue']

for i, size in enumerate(fib):
    t.pencolor(colors[i % 5])
    
    # 画正方形
    for _ in range(4):
        t.forward(size * 10)
        t.right(90)
    
    # 移动到下一个位置
    t.forward(size * 10)
    t.right(90)
    t.forward(size * 10)

turtle.done()
    </pre>
`;
