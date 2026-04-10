import { html } from '../app.js';

export default html`
    <h2>🐢 用 Turtle 可视化</h2>
    <p>让我们看到雨点落下的过程！</p>
    
    <pre>
import turtle
import random

t = turtle.Turtle()
t.speed(0)
t.hideturtle()

inside = 0
for i in range(500):
    x = random.random() * 200 - 100  # -100 到 100
    y = random.random() * 200 - 100
    
    t.penup()
    t.goto(x, y)
    
    if x**2 + y**2 <= 10000:  # 半径100
        t.pencolor('red')
        inside += 1
    else:
        t.pencolor('blue')
    
    t.dot(5)

pi = 4 * inside / 500
print(f"π ≈ {pi}")
    </pre>
`;
