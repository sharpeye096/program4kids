/**
 * Flashcard - 单词卡片学习模块
 * 包含: 单词卡片、跟读练习、手写练习
 */
const Flashcard = {
    /**
     * 渲染图片/颜色
     */
    renderImage(word) {
        const image = word.image;
        if (image.startsWith('color:')) {
            const color = image.replace('color:', '');
            return `<div class="color-display" style="background: ${color}; ${color === '#FFFFFF' ? 'border: 2px solid #ccc;' : ''}"></div>`;
        } else if (image.startsWith('emoji:')) {
            return `<div class="flashcard-image">${image.replace('emoji:', '')}</div>`;
        } else {
            return `<img src="${image}" alt="${word.word}" class="flashcard-image">`;
        }
    },

    /**
     * 单词卡片模式
     */
    renderFlashcard(word) {
        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div class="flashcard-container">
        <div class="flashcard" id="flashcard" onclick="Flashcard.flipCard()">
          <div class="flashcard-inner">
            <div class="flashcard-front">
              ${this.renderImage(word)}
              <div class="flashcard-word">${word.word}</div>
              <button class="btn btn-primary" onclick="event.stopPropagation(); speech.speak('${word.word}')">
                🔊 听发音
              </button>
            </div>
            <div class="flashcard-back">
              <div class="flashcard-word">${word.chinese}</div>
              <div style="margin-top: 1rem; text-align: left;">
                <p style="margin-bottom: 0.5rem;"><strong>例句:</strong></p>
                ${word.sentences.map(s => `
                  <p style="margin: 0.5rem 0; font-size: 1rem;">
                    📝 ${s.en}<br>
                    <span style="opacity: 0.8; font-size: 0.9rem;">${s.zh}</span>
                  </p>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
        <p style="color: white; text-align: center; margin-top: 1rem;">👆 点击卡片翻转查看中文释义</p>
      </div>
    `;
    },

    flipCard() {
        document.getElementById('flashcard').classList.toggle('flipped');
    },

    /**
     * 跟读练习模式
     */
    renderReading(word) {
        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div class="flashcard-container">
        <div style="background: var(--card-bg); border-radius: var(--radius-lg); padding: 2rem; text-align: center; max-width: 500px; box-shadow: var(--shadow-lg);">
          ${this.renderImage(word)}
          <div class="flashcard-word" style="color: var(--text-primary);">${word.word}</div>
          <div class="flashcard-chinese">${word.chinese}</div>
          
          <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-primary btn-lg" onclick="speech.speak('${word.word}')">
              🔊 正常速度
            </button>
            <button class="btn btn-secondary btn-lg" onclick="speech.speakSlow('${word.word}')">
              🐢 慢速播放
            </button>
          </div>
          
          <div style="margin-top: 2rem;">
            <button class="btn btn-primary btn-lg" id="recordBtn" onclick="Flashcard.startRecording('${word.word}')">
              🎤 开始跟读
            </button>
          </div>
          
          <div id="recordingResult" style="margin-top: 1rem;"></div>
        </div>
      </div>
    `;
    },

    async startRecording(expectedWord) {
        const resultDiv = document.getElementById('recordingResult');
        const btn = document.getElementById('recordBtn');

        btn.textContent = '🎤 正在听...';
        btn.disabled = true;
        resultDiv.innerHTML = '<p style="color: var(--primary);">请说出单词...</p>';

        try {
            const spoken = await speech.startListening();
            const isCorrect = speech.compareWords(spoken, expectedWord);

            if (isCorrect) {
                resultDiv.innerHTML = `
          <div class="feedback-message success">
            ✅ 太棒了！发音正确！<br>
            你说的是: "${spoken}"
          </div>
        `;
            } else {
                resultDiv.innerHTML = `
          <div class="feedback-message error">
            ❌ 再试一次！<br>
            你说的是: "${spoken}"<br>
            正确发音: "${expectedWord}"
          </div>
        `;
            }
        } catch (error) {
            resultDiv.innerHTML = `
        <div class="feedback-message error">
          ⚠️ ${error.message || '语音识别失败，请重试'}
        </div>
      `;
        }

        btn.textContent = '🎤 再试一次';
        btn.disabled = false;
    },

    /**
     * 手写练习模式
     */
    renderWriting(word) {
        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div class="writing-container">
        <div class="writing-guide">
          ${this.renderImage(word)}
          <div style="font-size: 2rem; color: white; margin: 1rem 0;">请写出: <strong>${word.word}</strong></div>
        </div>
        
        <div class="writing-canvas-wrapper">
          <canvas id="writingCanvas" class="writing-canvas" width="380" height="200"></canvas>
        </div>
        
        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
          <button class="btn btn-secondary" onclick="Flashcard.clearCanvas()">🗑️ 清除</button>
          <button class="btn btn-primary" onclick="speech.speak('${word.word}')">🔊 听发音</button>
        </div>
        
        <p style="color: white; text-align: center; margin-top: 1rem; opacity: 0.8;">
          用鼠标或手指在画布上书写字母
        </p>
      </div>
    `;

        this.initCanvas();
    },

    initCanvas() {
        const canvas = document.getElementById('writingCanvas');
        const ctx = canvas.getContext('2d');
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const getPos = (e) => {
            const rect = canvas.getBoundingClientRect();
            if (e.touches) {
                return {
                    x: e.touches[0].clientX - rect.left,
                    y: e.touches[0].clientY - rect.top
                };
            }
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const startDrawing = (e) => {
            isDrawing = true;
            const pos = getPos(e);
            lastX = pos.x;
            lastY = pos.y;
        };

        const draw = (e) => {
            if (!isDrawing) return;
            e.preventDefault();
            const pos = getPos(e);
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            lastX = pos.x;
            lastY = pos.y;
        };

        const stopDrawing = () => {
            isDrawing = false;
        };

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        canvas.addEventListener('touchstart', startDrawing);
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('touchend', stopDrawing);
    },

    clearCanvas() {
        const canvas = document.getElementById('writingCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
};
