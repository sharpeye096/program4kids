import { html } from '../app.js';

export default html`
    <h2>二进制怎么数数？</h2>
    
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin: 20px 0;">
        <div style="background: #fef3c7; padding: 20px; border-radius: 15px; text-align: center;">
            <p style="font-size: 3rem; margin: 0; font-weight: bold;">0</p>
            <p style="font-size: 1.5rem; color: #8b5cf6;">= 0</p>
        </div>
        <div style="background: #dbeafe; padding: 20px; border-radius: 15px; text-align: center;">
            <p style="font-size: 3rem; margin: 0; font-weight: bold;">1</p>
            <p style="font-size: 1.5rem; color: #8b5cf6;">= 1</p>
        </div>
        <div style="background: #dcfce7; padding: 20px; border-radius: 15px; text-align: center;">
            <p style="font-size: 3rem; margin: 0; font-weight: bold;">10</p>
            <p style="font-size: 1.5rem; color: #8b5cf6;">= 2</p>
        </div>
        <div style="background: #fce7f3; padding: 20px; border-radius: 15px; text-align: center;">
            <p style="font-size: 3rem; margin: 0; font-weight: bold;">11</p>
            <p style="font-size: 1.5rem; color: #8b5cf6;">= 3</p>
        </div>
        <div style="background: #fee2e2; padding: 20px; border-radius: 15px; text-align: center;">
            <p style="font-size: 3rem; margin: 0; font-weight: bold;">100</p>
            <p style="font-size: 1.5rem; color: #8b5cf6;">= 4</p>
        </div>
        <div style="background: #e0e7ff; padding: 20px; border-radius: 15px; text-align: center;">
            <p style="font-size: 3rem; margin: 0; font-weight: bold;">101</p>
            <p style="font-size: 1.5rem; color: #8b5cf6;">= 5</p>
        </div>
        <div style="background: #ccfbf1; padding: 20px; border-radius: 15px; text-align: center;">
            <p style="font-size: 3rem; margin: 0; font-weight: bold;">110</p>
            <p style="font-size: 1.5rem; color: #8b5cf6;">= 6</p>
        </div>
        <div style="background: #fef9c3; padding: 20px; border-radius: 15px; text-align: center;">
            <p style="font-size: 3rem; margin: 0; font-weight: bold;">111</p>
            <p style="font-size: 1.5rem; color: #8b5cf6;">= 7</p>
        </div>
    </div>
    
    <p style="font-size: 1.2rem;">💡 每一位代表 2 的幂次：<strong>1, 2, 4, 8, 16...</strong></p>
`;
