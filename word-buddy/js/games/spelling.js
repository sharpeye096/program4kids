/**
 * Spelling - 拼写游戏模块
 */
const Spelling = {
    currentWord: null,
    selectedLetters: [],
    shuffledLetters: [],

    /**
     * 渲染图片
     */
    renderImage(word) {
        const image = word.image;
        if (image.startsWith('color:')) {
            const color = image.replace('color:', '');
            return `<div class="color-display" style="background: ${color}; width: 80px; height: 80px; margin: 0 auto; ${color === '#FFFFFF' ? 'border: 2px solid #ccc;' : ''}"></div>`;
        } else if (image.startsWith('emoji:')) {
            return `<div style="font-size: 5rem;">${image.replace('emoji:', '')}</div>`;
        }
        return '';
    },

    /**
     * 拼写游戏模式
     */
    render(word) {
        this.currentWord = word;
        this.selectedLetters = [];
        this.shuffledLetters = this.shuffleArray(word.word.toUpperCase().split(''));

        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div class="spelling-container">
        <div class="spelling-image">
          ${this.renderImage(word)}
        </div>
        
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <span style="font-size: 1.25rem; color: var(--text-secondary);">${word.chinese}</span>
          <button class="btn btn-icon btn-secondary" style="margin-left: 0.5rem;" onclick="speech.speak('${word.word}')">
            🔊
          </button>
        </div>
        
        <div class="letter-slots" id="letterSlots">
          ${word.word.split('').map((_, i) => `
            <div class="letter-slot" data-index="${i}"></div>
          `).join('')}
        </div>
        
        <div class="letter-pool" id="letterPool">
          ${this.shuffledLetters.map((letter, i) => `
            <button class="letter-tile" data-index="${i}" onclick="Spelling.selectLetter(${i})">
              ${letter}
            </button>
          `).join('')}
        </div>
        
        <div id="spellingFeedback" style="min-height: 60px;"></div>
        
        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
          <button class="btn btn-secondary" onclick="Spelling.reset()">🔄 重置</button>
          <button class="btn btn-primary" onclick="Spelling.checkAnswer()">✅ 检查</button>
        </div>
      </div>
    `;
    },

    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    selectLetter(poolIndex) {
        const tile = document.querySelector(`.letter-tile[data-index="${poolIndex}"]`);
        if (tile.classList.contains('used')) return;

        const slots = document.querySelectorAll('.letter-slot');
        const emptySlot = Array.from(slots).find(s => !s.classList.contains('filled'));

        if (emptySlot) {
            tile.classList.add('used');
            emptySlot.classList.add('filled');
            emptySlot.textContent = this.shuffledLetters[poolIndex];
            emptySlot.dataset.poolIndex = poolIndex;
            this.selectedLetters.push({
                letter: this.shuffledLetters[poolIndex],
                poolIndex: poolIndex
            });
        }
    },

    reset() {
        this.selectedLetters = [];

        document.querySelectorAll('.letter-slot').forEach(slot => {
            slot.classList.remove('filled');
            slot.textContent = '';
            delete slot.dataset.poolIndex;
        });

        document.querySelectorAll('.letter-tile').forEach(tile => {
            tile.classList.remove('used');
        });

        document.getElementById('spellingFeedback').innerHTML = '';
    },

    checkAnswer() {
        const spelled = this.selectedLetters.map(s => s.letter).join('');
        const correct = this.currentWord.word.toUpperCase();
        const feedback = document.getElementById('spellingFeedback');

        if (spelled.length < correct.length) {
            feedback.innerHTML = `
        <div class="feedback-message error">
          ⚠️ 还没拼完哦！继续加油！
        </div>
      `;
            return;
        }

        if (spelled === correct) {
            feedback.innerHTML = `
        <div class="feedback-message success">
          🎉 太棒了！拼写正确！<br>
          <strong>${this.currentWord.word}</strong> = ${this.currentWord.chinese}
        </div>
      `;
            speech.speak(this.currentWord.word);
        } else {
            feedback.innerHTML = `
        <div class="feedback-message error">
          ❌ 不对哦，再试试！<br>
          正确答案是: <strong>${this.currentWord.word}</strong>
        </div>
      `;
        }
    }
};
