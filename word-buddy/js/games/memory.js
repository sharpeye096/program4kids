/**
 * Memory - 记忆游戏模块
 * 包含: 配对翻牌、听音选词、单词猎人、拼写闯关
 */
const Memory = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    totalPairs: 0,

    // 听音选词
    listeningOptions: [],
    correctAnswer: null,

    // 单词猎人
    hunterWords: [],
    hunterTarget: null,
    hunterScore: 0,
    hunterTimer: null,

    // 拼写闯关
    challengeLevel: 1,
    challengeWord: null,

    /**
     * 渲染图片文字
     */
    getDisplayContent(word, showWord = true) {
        const image = word.image;
        if (image.startsWith('color:')) {
            const color = image.replace('color:', '');
            return `<div style="width: 40px; height: 40px; background: ${color}; border-radius: 8px; ${color === '#FFFFFF' ? 'border: 1px solid #ccc;' : ''}"></div>`;
        } else if (image.startsWith('emoji:')) {
            return `<span style="font-size: 2rem;">${image.replace('emoji:', '')}</span>`;
        }
        return showWord ? word.word : '';
    },

    // ==================== 配对翻牌 ====================
    renderMatching() {
        const words = wordLoader.getRandomWords(6);
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.totalPairs = words.length;

        // 创建配对卡片（图片+单词）
        words.forEach((word, i) => {
            this.cards.push({ id: i * 2, type: 'image', word: word, pairId: i });
            this.cards.push({ id: i * 2 + 1, type: 'text', word: word, pairId: i });
        });

        // 打乱
        this.cards.sort(() => Math.random() - 0.5);

        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div style="text-align: center; color: white; margin-bottom: 1rem;">
        <h2>🎴 配对翻牌</h2>
        <p>找出颜色和单词的配对！</p>
        <div class="progress-bar" style="max-width: 300px; margin: 1rem auto;">
          <div class="progress-fill" id="matchProgress" style="width: 0%"></div>
        </div>
      </div>
      <div class="memory-grid" id="memoryGrid">
        ${this.cards.map((card, i) => `
          <div class="memory-card" data-index="${i}" onclick="Memory.flipMatchCard(${i})">
            <div class="memory-card-inner">
              <div class="memory-card-front">❓</div>
              <div class="memory-card-back">
                ${card.type === 'image' ? this.getDisplayContent(card.word) : card.word.word}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <div id="matchFeedback" style="min-height: 60px;"></div>
    `;
    },

    flipMatchCard(index) {
        const cardEl = document.querySelectorAll('.memory-card')[index];
        const card = this.cards[index];

        if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;
        if (this.flippedCards.length >= 2) return;

        cardEl.classList.add('flipped');
        this.flippedCards.push({ index, card });

        if (this.flippedCards.length === 2) {
            setTimeout(() => this.checkMatch(), 800);
        }
    },

    checkMatch() {
        const [first, second] = this.flippedCards;
        const firstEl = document.querySelectorAll('.memory-card')[first.index];
        const secondEl = document.querySelectorAll('.memory-card')[second.index];

        if (first.card.pairId === second.card.pairId) {
            firstEl.classList.add('matched');
            secondEl.classList.add('matched');
            this.matchedPairs++;

            const progress = (this.matchedPairs / this.totalPairs) * 100;
            document.getElementById('matchProgress').style.width = `${progress}%`;

            speech.speak(first.card.word.word);

            if (this.matchedPairs === this.totalPairs) {
                document.getElementById('matchFeedback').innerHTML = `
          <div class="feedback-message success">
            🎉 太棒了！全部配对成功！
          </div>
        `;
            }
        } else {
            setTimeout(() => {
                firstEl.classList.remove('flipped');
                secondEl.classList.remove('flipped');
            }, 300);
        }

        this.flippedCards = [];
    },

    // ==================== 听音选词 ====================
    renderListening() {
        const words = wordLoader.getRandomWords(4);
        this.correctAnswer = words[0];
        this.listeningOptions = words.sort(() => Math.random() - 0.5);

        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div class="listening-container">
        <h2 style="color: white; margin-bottom: 1rem;">👂 听音选词</h2>
        <p style="color: white; opacity: 0.9; margin-bottom: 2rem;">点击喇叭听发音，然后选择正确的单词</p>
        
        <div class="listening-speaker" onclick="Memory.playListeningWord()">
          🔊
        </div>
        
        <div class="listening-options">
          ${this.listeningOptions.map((word, i) => `
            <button class="listening-option" data-word="${word.word}" onclick="Memory.checkListening('${word.word}')">
              ${this.getDisplayContent(word)}
              <div style="margin-top: 0.5rem;">${word.word}</div>
            </button>
          `).join('')}
        </div>
        
        <div id="listeningFeedback" style="min-height: 60px; margin-top: 1rem;"></div>
        
        <button class="btn btn-secondary" style="margin-top: 1rem;" onclick="Memory.renderListening()">
          🔄 换一组
        </button>
      </div>
    `;

        // 自动播放一次
        setTimeout(() => this.playListeningWord(), 500);
    },

    playListeningWord() {
        speech.speak(this.correctAnswer.word);
    },

    checkListening(selectedWord) {
        const buttons = document.querySelectorAll('.listening-option');
        buttons.forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.word === this.correctAnswer.word) {
                btn.classList.add('correct');
            } else if (btn.dataset.word === selectedWord) {
                btn.classList.add('wrong');
            }
        });

        const feedback = document.getElementById('listeningFeedback');
        if (selectedWord === this.correctAnswer.word) {
            feedback.innerHTML = `
        <div class="feedback-message success">
          ✅ 正确！${this.correctAnswer.word} = ${this.correctAnswer.chinese}
        </div>
      `;
        } else {
            feedback.innerHTML = `
        <div class="feedback-message error">
          ❌ 不对哦！正确答案是 ${this.correctAnswer.word}
        </div>
      `;
        }
    },

    // ==================== 单词猎人 ====================
    renderHunter() {
        this.hunterScore = 0;
        this.startHunterRound();
    },

    startHunterRound() {
        const words = wordLoader.getRandomWords(6);
        this.hunterTarget = words[0];
        this.hunterWords = words.sort(() => Math.random() - 0.5);

        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div style="text-align: center;">
        <h2 style="color: white; margin-bottom: 0.5rem;">🎯 单词猎人</h2>
        <p style="color: white; opacity: 0.9;">快速找出对应的单词！</p>
        <div style="color: white; font-size: 1.5rem; margin: 1rem 0;">
          得分: <span id="hunterScore">${this.hunterScore}</span>
        </div>
        
        <div style="background: var(--card-bg); border-radius: var(--radius-lg); padding: 2rem; margin: 1rem auto; max-width: 300px; box-shadow: var(--shadow-lg);">
          <div style="font-size: 1rem; color: var(--text-secondary); margin-bottom: 0.5rem;">找出这个颜色:</div>
          ${this.getDisplayContent(this.hunterTarget)}
          <div style="font-size: 1.5rem; font-weight: bold; margin-top: 0.5rem; color: var(--primary);">
            ${this.hunterTarget.chinese}
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; max-width: 400px; margin: 1.5rem auto;">
          ${this.hunterWords.map(word => `
            <button class="btn btn-primary" style="padding: 1rem; font-size: 1.1rem;" onclick="Memory.checkHunter('${word.word}')">
              ${word.word}
            </button>
          `).join('')}
        </div>
        
        <div id="hunterFeedback" style="min-height: 60px;"></div>
      </div>
    `;

        speech.speak(this.hunterTarget.word);
    },

    checkHunter(selectedWord) {
        const feedback = document.getElementById('hunterFeedback');

        if (selectedWord === this.hunterTarget.word) {
            this.hunterScore += 10;
            document.getElementById('hunterScore').textContent = this.hunterScore;
            feedback.innerHTML = `<div class="feedback-message success">✅ 正确！+10分</div>`;
            setTimeout(() => this.startHunterRound(), 1000);
        } else {
            feedback.innerHTML = `
        <div class="feedback-message error">
          ❌ 不对！正确答案是 ${this.hunterTarget.word}
        </div>
      `;
            setTimeout(() => this.startHunterRound(), 1500);
        }
    },

    // ==================== 拼写闯关 ====================
    renderChallenge() {
        this.challengeLevel = 1;
        this.startChallengeRound();
    },

    startChallengeRound() {
        this.challengeWord = wordLoader.getRandomWords(1)[0];
        const word = this.challengeWord.word;

        // 根据等级决定隐藏多少字母
        const hideCount = Math.min(this.challengeLevel, word.length - 1);
        const hidePositions = [];
        while (hidePositions.length < hideCount) {
            const pos = Math.floor(Math.random() * word.length);
            if (!hidePositions.includes(pos)) hidePositions.push(pos);
        }

        const displayWord = word.split('').map((char, i) =>
            hidePositions.includes(i) ? '_' : char
        ).join(' ');

        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div style="text-align: center;">
        <h2 style="color: white; margin-bottom: 0.5rem;">⚡ 拼写闯关</h2>
        <p style="color: white; opacity: 0.9;">补全缺失的字母！</p>
        <div style="color: white; font-size: 1.25rem; margin: 1rem 0;">
          第 ${this.challengeLevel} 关
        </div>
        
        <div style="background: var(--card-bg); border-radius: var(--radius-lg); padding: 2rem; margin: 1rem auto; max-width: 400px; box-shadow: var(--shadow-lg);">
          ${this.getDisplayContent(this.challengeWord)}
          <div style="font-size: 1.25rem; color: var(--text-secondary); margin: 1rem 0;">${this.challengeWord.chinese}</div>
          <div style="font-size: 2.5rem; font-weight: bold; letter-spacing: 0.5rem; font-family: monospace; color: var(--primary);">
            ${displayWord}
          </div>
          
          <input type="text" id="challengeInput" 
            style="margin-top: 1.5rem; padding: 1rem; font-size: 1.5rem; text-align: center; border: 2px solid var(--primary); border-radius: var(--radius-md); width: 100%; max-width: 200px;"
            placeholder="输入完整单词"
            onkeypress="if(event.key==='Enter')Memory.checkChallenge()">
          
          <div style="margin-top: 1rem;">
            <button class="btn btn-secondary" onclick="speech.speak('${word}')">🔊 听发音</button>
            <button class="btn btn-primary" onclick="Memory.checkChallenge()">✅ 确认</button>
          </div>
        </div>
        
        <div id="challengeFeedback" style="min-height: 60px;"></div>
      </div>
    `;

        document.getElementById('challengeInput').focus();
    },

    checkChallenge() {
        const input = document.getElementById('challengeInput').value.trim().toLowerCase();
        const correct = this.challengeWord.word.toLowerCase();
        const feedback = document.getElementById('challengeFeedback');

        if (input === correct) {
            this.challengeLevel++;
            feedback.innerHTML = `
        <div class="feedback-message success">
          🎉 正确！进入第 ${this.challengeLevel} 关
        </div>
      `;
            speech.speak(correct);
            setTimeout(() => this.startChallengeRound(), 1500);
        } else {
            feedback.innerHTML = `
        <div class="feedback-message error">
          ❌ 不对哦！正确答案是 <strong>${this.challengeWord.word}</strong>
        </div>
      `;
        }
    }
};
