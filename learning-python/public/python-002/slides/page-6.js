import { html } from '../app.js';

export default html`
    <h2 style="margin-bottom: 8px;">If-Elif-Else 语法 🔄</h2>
    
    <p style="margin-bottom: 20px;"><strong>如果...否则如果...否则...</strong>（多个选择！）</p>
    
    <div style="display: flex; gap: 30px; justify-content: center; align-items: center; flex-wrap: nowrap; width: 100%;">
        <!-- Code Section -->
        <div style="background: #1e293b; padding: 20px; border-radius: 12px; text-align: left; font-family: 'Consolas', monospace; font-size: 1rem; color: #e2e8f0; flex-shrink: 0;">
            <pre style="margin: 0; background: transparent; border: none; box-shadow: none; padding: 0; color: inherit;">
score = <span style="color: #d19a66;">85</span>

<span style="color: #c678dd;">if</span> score >= <span style="color: #d19a66;">90</span>:
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"A+"</span>)
<span style="color: #c678dd;">elif</span> score >= <span style="color: #d19a66;">80</span>:
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"A"</span>)
<span style="color: #c678dd;">elif</span> score >= <span style="color: #d19a66;">60</span>:
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"B"</span>)
<span style="color: #c678dd;">else</span>:
    <span style="color: #e5c07b;">print</span>(<span style="color: #98c379;">"💪"</span>)
            </pre>
        </div>
        
        <!-- SVG Flowchart - Taller with even spacing -->
        <svg width="380" height="500" viewBox="0 0 380 500" style="flex-shrink: 0;">
            <!-- Definitions for arrow markers -->
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
                </marker>
            </defs>
            
            <!-- Start node -->
            <ellipse cx="160" cy="30" rx="50" ry="24" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
            <text x="160" y="36" text-anchor="middle" fill="white" font-size="16" font-weight="bold">开始</text>
            
            <!-- Arrow from Start to Decision 1 -->
            <line x1="160" y1="54" x2="160" y2="85" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)"/>
            
            <!-- Decision 1: score >= 90? -->
            <polygon points="160,90 235,135 160,180 85,135" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
            <text x="160" y="140" text-anchor="middle" fill="#92400e" font-size="14" font-weight="bold">score≥90?</text>
            
            <!-- Yes branch from D1 -->
            <line x1="235" y1="135" x2="305" y2="135" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowhead)"/>
            <text x="260" y="127" fill="#22c55e" font-size="13" font-weight="bold">是</text>
            <rect x="310" y="115" width="50" height="40" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
            <text x="335" y="142" text-anchor="middle" fill="#1e40af" font-size="16" font-weight="bold">A+</text>
            
            <!-- No branch from D1 to D2 -->
            <line x1="160" y1="180" x2="160" y2="215" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowhead)"/>
            <text x="175" y="202" fill="#ef4444" font-size="13" font-weight="bold">否</text>
            
            <!-- Decision 2: score >= 80? -->
            <polygon points="160,220 235,265 160,310 85,265" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
            <text x="160" y="270" text-anchor="middle" fill="#92400e" font-size="14" font-weight="bold">score≥80?</text>
            
            <!-- Yes branch from D2 -->
            <line x1="235" y1="265" x2="305" y2="265" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowhead)"/>
            <text x="260" y="257" fill="#22c55e" font-size="13" font-weight="bold">是</text>
            <rect x="310" y="245" width="50" height="40" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
            <text x="335" y="272" text-anchor="middle" fill="#1e40af" font-size="16" font-weight="bold">A</text>
            
            <!-- No branch from D2 to D3 -->
            <line x1="160" y1="310" x2="160" y2="345" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowhead)"/>
            <text x="175" y="332" fill="#ef4444" font-size="13" font-weight="bold">否</text>
            
            <!-- Decision 3: score >= 60? -->
            <polygon points="160,350 235,395 160,440 85,395" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
            <text x="160" y="400" text-anchor="middle" fill="#92400e" font-size="14" font-weight="bold">score≥60?</text>
            
            <!-- Yes branch from D3 -->
            <line x1="235" y1="395" x2="305" y2="395" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowhead)"/>
            <text x="260" y="387" fill="#22c55e" font-size="13" font-weight="bold">是</text>
            <rect x="310" y="375" width="50" height="40" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
            <text x="335" y="402" text-anchor="middle" fill="#1e40af" font-size="16" font-weight="bold">B</text>
            
            <!-- No branch from D3 (else) -->
            <line x1="160" y1="440" x2="160" y2="465" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowhead)"/>
            <text x="175" y="458" fill="#ef4444" font-size="13" font-weight="bold">否</text>
            <rect x="120" y="470" width="80" height="30" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
            <text x="160" y="491" text-anchor="middle" fill="#dc2626" font-size="14" font-weight="bold">继续努力💪</text>
        </svg>
    </div>
    
    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px; flex-wrap: wrap; font-size: 0.95rem;">
        <div style="background: #dbeafe; padding: 8px 14px; border-radius: 8px;">
            <strong>elif</strong> = else if
        </div>
        <div style="background: #fce7f3; padding: 8px 14px; border-radius: 8px;">
            可以有<strong>很多个</strong> elif！
        </div>
    </div>
`;
