export class Turtle {
    constructor(canvasBg, canvasFg) {
        this.ctx = canvasBg.getContext('2d');
        this.ctxFg = canvasFg.getContext('2d');
        this.width = canvasBg.width;
        this.height = canvasBg.height;

        // Ensure sizes match
        canvasFg.width = this.width;
        canvasFg.height = this.height;

        this.reset();
    }

    reset() {
        this.x = this.width / 2;
        this.y = this.height / 2;
        this.angle = -90; // Up
        this.penDownState = true;
        this.penColor = '#000000';
        this.lineWidth = 2;
        this.commands = [];

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctxFg.clearRect(0, 0, this.width, this.height);

        this.drawTurtle();
    }

    // Command Queueing with Interpolation for Smooth Animation
    forward(steps) {
        const stepSize = 3; // Pixels per frame (Lower = Slower)
        const sign = steps > 0 ? 1 : -1;
        let remaining = Math.abs(steps);
        while (remaining > 0) {
            const chunk = Math.min(remaining, stepSize);
            this.commands.push({ type: 'forward', val: chunk * sign });
            remaining -= chunk;
        }
    }

    backward(steps) {
        this.forward(-steps);
    }

    right(deg) {
        const stepSize = 6; // Degrees per frame
        const sign = deg > 0 ? 1 : -1;
        let remaining = Math.abs(deg);
        while (remaining > 0) {
            const chunk = Math.min(remaining, stepSize);
            this.commands.push({ type: 'rotate', val: chunk * sign });
            remaining -= chunk;
        }
    }

    left(deg) {
        this.right(-deg);
    }

    penup() { this.commands.push({ type: 'penup' }); }
    pendown() { this.commands.push({ type: 'pendown' }); }
    color(c) { this.commands.push({ type: 'color', val: c }); }

    // Instant execution for final state
    run(code) {
        this.reset();

        // --- Parser (Preserved from original) ---
        const lines = code.split('\n');
        let expandedLines = [];

        // Simple manual unrolling for loops (naive)
        const rawLines = code.split('\n');
        for (let i = 0; i < rawLines.length; i++) {
            let line = rawLines[i];
            const trimmed = line.trim();
            if (!trimmed) continue;

            const loopMatch = trimmed.match(/for\s+\w+\s+in\s+range\((\d+)\):/);

            if (loopMatch) {
                const count = parseInt(loopMatch[1]);
                let block = [];
                // Capture block
                let j = i + 1;
                while (j < rawLines.length) {
                    const nextLine = rawLines[j];
                    if (nextLine.trim() && !nextLine.startsWith(' ') && !nextLine.startsWith('\t')) {
                        break;
                    }
                    if (nextLine.trim()) {
                        block.push(nextLine.trim());
                    }
                    j++;
                }
                // Unroll
                for (let k = 0; k < count; k++) {
                    expandedLines.push(...block);
                }
                i = j - 1;
            } else {
                expandedLines.push(trimmed);
            }
        }
        // ----------------------------------------

        expandedLines.forEach(cmd => this.execLine(cmd));
        this.startAnimation();
    }

    execLine(line) {
        if (line.match(/forward\((\d+)\)/)) {
            const val = parseInt(line.match(/forward\((\d+)\)/)[1]);
            this.forward(val);
        } else if (line.match(/backward\((\d+)\)/)) {
            const val = parseInt(line.match(/backward\((\d+)\)/)[1]);
            this.backward(val);
        } else if (line.match(/right\((\d+)\)/)) {
            const val = parseInt(line.match(/right\((\d+)\)/)[1]);
            this.right(val);
        } else if (line.match(/left\((\d+)\)/)) {
            const val = parseInt(line.match(/left\((\d+)\)/)[1]);
            this.left(val);
        } else if (line.match(/color\(['"](.+)['"]\)/)) {
            const val = line.match(/color\(['"](.+)['"]\)/)[1];
            this.color(val);
        }
    }

    startAnimation() {
        if (this.animId) cancelAnimationFrame(this.animId);

        // Reset state for visually drawing
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctxFg.clearRect(0, 0, this.width, this.height);

        this.x = this.width / 2;
        this.y = this.height / 2;
        this.angle = -90;
        this.penDownState = true;
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.penColor = '#000000'; // Reset color

        this.drawTurtle();

        this.cmdIndex = 0;
        this.isAnimating = true;
        this.animLoop();
    }

    animate() { this.startAnimation(); }

    animLoop() {
        if (this.cmdIndex >= this.commands.length) {
            this.isAnimating = false;
            return;
        }

        const cmd = this.commands[this.cmdIndex];
        this.step(cmd);
        this.cmdIndex++;

        this.animId = requestAnimationFrame(() => this.animLoop());
    }

    step(cmd) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);

        // Set stroke style before drawing line
        this.ctx.strokeStyle = this.penColor;

        if (cmd.type === 'forward') {
            const rad = this.angle * Math.PI / 180;
            const newX = this.x + cmd.val * Math.cos(rad);
            const newY = this.y + cmd.val * Math.sin(rad);

            if (this.penDownState) {
                this.ctx.lineTo(newX, newY);
                this.ctx.stroke();
            }

            this.x = newX;
            this.y = newY;
        } else if (cmd.type === 'rotate') {
            this.angle += cmd.val;
        } else if (cmd.type === 'color') {
            this.penColor = cmd.val;
        }

        this.drawTurtle();
    }

    drawTurtle() {
        // Clear FG canvas
        this.ctxFg.clearRect(0, 0, this.width, this.height);

        this.ctxFg.save();
        this.ctxFg.translate(this.x, this.y);
        this.ctxFg.rotate((this.angle + 90) * Math.PI / 180);

        // Draw Turtle Sprite (Complex Shape)
        // Coords: (0, -Y) is Forward.

        // 1. Legs (Feet)
        this.ctxFg.fillStyle = '#15803d'; // Darker green for legs
        // Front Left
        drawOval(this.ctxFg, -10, -8, 4, 7, -0.5);
        // Front Right
        drawOval(this.ctxFg, 10, -8, 4, 7, 0.5);
        // Back Left
        drawOval(this.ctxFg, -10, 8, 4, 7, 0.5);
        // Back Right
        drawOval(this.ctxFg, 10, 8, 4, 7, -0.5);

        // 2. Head
        this.ctxFg.beginPath();
        this.ctxFg.arc(0, -14, 5, 0, Math.PI * 2);
        this.ctxFg.fillStyle = '#15803d'; // Head color
        this.ctxFg.fill();

        // 3. Shell (Body)
        this.ctxFg.beginPath();
        this.ctxFg.arc(0, 0, 11, 0, Math.PI * 2);
        this.ctxFg.fillStyle = '#22c55e'; // Bright green shell
        this.ctxFg.fill();
        this.ctxFg.strokeStyle = '#14532d';
        this.ctxFg.lineWidth = 1;
        this.ctxFg.stroke();

        this.ctxFg.restore();
    }
}

// Helper for oval drawing
function drawOval(ctx, x, y, rw, rh, rot) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.ellipse(0, 0, rw, rh, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}
