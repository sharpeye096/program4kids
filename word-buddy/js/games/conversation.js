/**
 * Conversation - 对话练习模块
 * 包含: 情景对话、角色扮演、语音识别、对话挑战
 */
const Conversation = {
    currentWord: null,
    currentConversation: null,
    currentDialogIndex: 0,
    roleplayChoices: [],
    missionCompleted: false,

    // ==================== 情景对话 ====================
    renderScene(word) {
        this.currentWord = word;
        const conv = word.conversations[0];
        this.currentConversation = conv;

        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div class="conversation-container">
        <div class="conversation-scene">
          <span style="font-size: 2rem;">🎬</span>
          <div class="conversation-scene-title">${conv.scene}</div>
          <div style="color: var(--text-secondary); margin-top: 0.5rem;">单词: ${word.word} (${word.chinese})</div>
        </div>
        
        <div id="dialogArea">
          ${conv.dialog.map((line, i) => `
            <div class="dialog-bubble ${line.role === '你' ? 'user' : ''}">
              <div class="dialog-avatar">
                ${line.role === '你' ? '👦' : line.role === '老师' ? '👩‍🏫' : line.role === '妈妈' ? '👩' : line.role === '爸爸' ? '👨' : line.role === '朋友' ? '🧒' : line.role === '店员' ? '🧑‍💼' : '👤'}
              </div>
              <div class="dialog-content">
                <div style="font-size: 0.8rem; opacity: 0.7; margin-bottom: 0.25rem;">${line.role}</div>
                <div class="dialog-en">${line.en}</div>
                <div class="dialog-zh">${line.zh}</div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div style="text-align: center; margin-top: 1.5rem;">
          <button class="btn btn-primary btn-lg" onclick="Conversation.playAllDialog()">
            🔊 播放全部对话
          </button>
        </div>
      </div>
    `;
    },

    async playAllDialog() {
        for (const line of this.currentConversation.dialog) {
            await speech.speak(line.en);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    },

    // ==================== 角色扮演 ====================
    renderRoleplay(word) {
        this.currentWord = word;
        const conv = word.conversations[0];
        this.currentConversation = conv;
        this.currentDialogIndex = 0;

        const container = document.getElementById('practiceContent');
        this.updateRoleplayView();
    },

    updateRoleplayView() {
        const conv = this.currentConversation;
        const currentLine = conv.dialog[this.currentDialogIndex];
        const isUserTurn = currentLine && currentLine.role === '你';
        const isComplete = this.currentDialogIndex >= conv.dialog.length;

        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div class="conversation-container">
        <div class="conversation-scene">
          <span style="font-size: 2rem;">🎭</span>
          <div class="conversation-scene-title">${conv.scene}</div>
          <div style="color: var(--text-secondary); margin-top: 0.5rem;">
            进度: ${this.currentDialogIndex} / ${conv.dialog.length}
          </div>
        </div>
        
        <div id="dialogArea">
          ${conv.dialog.slice(0, this.currentDialogIndex).map((line, i) => `
            <div class="dialog-bubble ${line.role === '你' ? 'user' : ''}">
              <div class="dialog-avatar">
                ${this.getAvatar(line.role)}
              </div>
              <div class="dialog-content">
                <div style="font-size: 0.8rem; opacity: 0.7; margin-bottom: 0.25rem;">${line.role}</div>
                <div class="dialog-en">${line.en}</div>
                <div class="dialog-zh">${line.zh}</div>
              </div>
            </div>
          `).join('')}
        </div>
        
        ${isComplete ? `
          <div class="feedback-message success" style="margin-top: 1rem;">
            🎉 对话完成！太棒了！
          </div>
          <div style="text-align: center; margin-top: 1rem;">
            <button class="btn btn-primary" onclick="Conversation.renderRoleplay(Conversation.currentWord)">
              🔄 再练一次
            </button>
          </div>
        ` : isUserTurn ? `
          <div style="background: var(--card-bg); border-radius: var(--radius-lg); padding: 1.5rem; margin-top: 1rem; text-align: center;">
            <div style="color: var(--text-secondary); margin-bottom: 1rem;">轮到你了！选择正确的回答：</div>
            <div style="font-size: 1.1rem; color: var(--primary); margin-bottom: 1rem;">
              提示: ${currentLine.zh}
            </div>
            ${this.generateRoleplayChoices(currentLine).map((choice, i) => `
              <button class="btn ${choice === currentLine.en ? 'btn-primary' : 'btn-secondary'}" 
                style="margin: 0.25rem; width: 100%;" 
                onclick="Conversation.selectRoleplayChoice('${choice.replace(/'/g, "\\'")}', '${currentLine.en.replace(/'/g, "\\'")}')">
                ${choice}
              </button>
            `).join('')}
          </div>
        ` : `
          <div style="background: var(--card-bg); border-radius: var(--radius-lg); padding: 1.5rem; margin-top: 1rem; text-align: center;">
            <div style="color: var(--text-secondary); margin-bottom: 1rem;">听对方说话：</div>
            <button class="btn btn-primary btn-lg" onclick="Conversation.playAndAdvance()">
              🔊 播放 "${currentLine.role}" 的话
            </button>
          </div>
        `}
      </div>
    `;
    },

    getAvatar(role) {
        const avatars = {
            '你': '👦',
            '老师': '👩‍🏫',
            '妈妈': '👩',
            '爸爸': '👨',
            '朋友': '🧒',
            '店员': '🧑‍💼'
        };
        return avatars[role] || '👤';
    },

    generateRoleplayChoices(correctLine) {
        const allLines = wordLoader.currentWords
            .flatMap(w => w.conversations)
            .flatMap(c => c.dialog)
            .filter(d => d.role === '你')
            .map(d => d.en);

        const choices = [correctLine.en];
        const shuffled = allLines.filter(l => l !== correctLine.en).sort(() => Math.random() - 0.5);

        while (choices.length < 3 && shuffled.length > 0) {
            choices.push(shuffled.pop());
        }

        return choices.sort(() => Math.random() - 0.5);
    },

    async selectRoleplayChoice(selected, correct) {
        if (selected === correct) {
            await speech.speak(selected);
            this.currentDialogIndex++;
            this.updateRoleplayView();
        } else {
            alert('不对哦，再试试！');
        }
    },

    async playAndAdvance() {
        const currentLine = this.currentConversation.dialog[this.currentDialogIndex];
        await speech.speak(currentLine.en);
        this.currentDialogIndex++;
        this.updateRoleplayView();
    },

    // ==================== 语音识别 ====================
    renderVoice(word) {
        this.currentWord = word;
        const conv = word.conversations[0];
        this.currentConversation = conv;

        // 找到用户的对话
        const userLines = conv.dialog.filter(d => d.role === '你');
        const targetLine = userLines[0];

        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div class="conversation-container">
        <div class="conversation-scene">
          <span style="font-size: 2rem;">🗣️</span>
          <div class="conversation-scene-title">语音练习 - ${conv.scene}</div>
        </div>
        
        <div style="background: var(--card-bg); border-radius: var(--radius-lg); padding: 2rem; text-align: center; margin-top: 1rem;">
          <div style="color: var(--text-secondary); margin-bottom: 1rem;">请说出这句话：</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: var(--primary); margin-bottom: 0.5rem;">
            "${targetLine.en}"
          </div>
          <div style="color: var(--text-secondary);">${targetLine.zh}</div>
          
          <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-lg" onclick="speech.speak('${targetLine.en.replace(/'/g, "\\'")}')">
              🔊 听示范
            </button>
            <button class="btn btn-primary btn-lg" id="voiceBtn" onclick="Conversation.startVoiceRecording('${targetLine.en.replace(/'/g, "\\'")}')">
              🎤 开始说
            </button>
          </div>
          
          <div id="voiceFeedback" style="margin-top: 1.5rem; min-height: 60px;"></div>
        </div>
      </div>
    `;
    },

    async startVoiceRecording(expected) {
        const btn = document.getElementById('voiceBtn');
        const feedback = document.getElementById('voiceFeedback');

        btn.textContent = '🎤 正在听...';
        btn.disabled = true;
        feedback.innerHTML = '<p style="color: var(--primary);">请说出句子...</p>';

        try {
            const spoken = await speech.startListening();

            // 简单比较（忽略大小写和标点）
            const clean = (s) => s.toLowerCase().replace(/[^a-z\s]/g, '').trim();
            const isCorrect = clean(spoken).includes(clean(expected).split(' ')[0]); // 检查是否包含关键词

            if (isCorrect) {
                feedback.innerHTML = `
          <div class="feedback-message success">
            ✅ 太棒了！发音很好！<br>
            你说的: "${spoken}"
          </div>
        `;
            } else {
                feedback.innerHTML = `
          <div class="feedback-message error">
            ❌ 再试一次！<br>
            你说的: "${spoken}"<br>
            正确的: "${expected}"
          </div>
        `;
            }
        } catch (error) {
            feedback.innerHTML = `
        <div class="feedback-message error">
          ⚠️ ${error.message || '语音识别失败，请重试'}
        </div>
      `;
        }

        btn.textContent = '🎤 再试一次';
        btn.disabled = false;
    },

    // ==================== 对话挑战 ====================
    renderMission(word) {
        this.currentWord = word;
        const conv = word.conversations[0];
        this.currentConversation = conv;
        this.currentDialogIndex = 0;
        this.missionCompleted = false;

        const container = document.getElementById('practiceContent');
        container.innerHTML = `
      <div class="conversation-container">
        <div class="conversation-scene">
          <span style="font-size: 2rem;">🏆</span>
          <div class="conversation-scene-title">对话挑战 - ${conv.scene}</div>
          <div style="color: var(--text-secondary); margin-top: 0.5rem;">
            完成整个对话！
          </div>
        </div>
        
        <div class="progress-bar" style="margin: 1rem 0;">
          <div class="progress-fill" id="missionProgress" style="width: 0%"></div>
        </div>
        
        <div id="missionDialogArea"></div>
        
        <div id="missionInteraction" style="margin-top: 1rem;"></div>
      </div>
    `;

        this.updateMissionView();
    },

    updateMissionView() {
        const conv = this.currentConversation;
        const dialogArea = document.getElementById('missionDialogArea');
        const interactionArea = document.getElementById('missionInteraction');
        const progressBar = document.getElementById('missionProgress');

        const progress = (this.currentDialogIndex / conv.dialog.length) * 100;
        progressBar.style.width = `${progress}%`;

        // 显示已完成的对话
        dialogArea.innerHTML = conv.dialog.slice(0, this.currentDialogIndex).map((line) => `
      <div class="dialog-bubble ${line.role === '你' ? 'user' : ''}">
        <div class="dialog-avatar">${this.getAvatar(line.role)}</div>
        <div class="dialog-content">
          <div style="font-size: 0.8rem; opacity: 0.7; margin-bottom: 0.25rem;">${line.role}</div>
          <div class="dialog-en">${line.en}</div>
          <div class="dialog-zh">${line.zh}</div>
        </div>
      </div>
    `).join('');

        if (this.currentDialogIndex >= conv.dialog.length) {
            interactionArea.innerHTML = `
        <div class="feedback-message success">
          🎉 挑战成功！你完成了整个对话！
        </div>
        <div style="text-align: center; margin-top: 1rem;">
          <button class="btn btn-primary btn-lg" onclick="Conversation.playAllDialog()">
            🔊 听完整对话
          </button>
        </div>
      `;
            return;
        }

        const currentLine = conv.dialog[this.currentDialogIndex];

        if (currentLine.role === '你') {
            // 用户需要输入
            interactionArea.innerHTML = `
        <div style="background: var(--card-bg); border-radius: var(--radius-lg); padding: 1.5rem; text-align: center;">
          <div style="color: var(--text-secondary); margin-bottom: 0.5rem;">你的回合！</div>
          <div style="color: var(--primary); margin-bottom: 1rem;">${currentLine.zh}</div>
          <input type="text" id="missionInput" 
            style="padding: 0.75rem 1rem; font-size: 1rem; border: 2px solid var(--primary); border-radius: var(--radius-md); width: 100%; max-width: 300px;"
            placeholder="输入英文..."
            onkeypress="if(event.key==='Enter')Conversation.checkMissionInput()">
          <div style="margin-top: 1rem;">
            <button class="btn btn-secondary" onclick="speech.speak('${currentLine.en.replace(/'/g, "\\'")}')">💡 提示</button>
            <button class="btn btn-primary" onclick="Conversation.checkMissionInput()">✅ 确认</button>
          </div>
          <div id="missionFeedback" style="margin-top: 1rem;"></div>
        </div>
      `;
            document.getElementById('missionInput').focus();
        } else {
            // AI回合
            interactionArea.innerHTML = `
        <div style="background: var(--card-bg); border-radius: var(--radius-lg); padding: 1.5rem; text-align: center;">
          <div style="color: var(--text-secondary); margin-bottom: 1rem;">${currentLine.role} 说话中...</div>
          <button class="btn btn-primary btn-lg" onclick="Conversation.playMissionLine()">
            🔊 听 ${currentLine.role} 说
          </button>
        </div>
      `;
        }
    },

    async playMissionLine() {
        const currentLine = this.currentConversation.dialog[this.currentDialogIndex];
        await speech.speak(currentLine.en);
        this.currentDialogIndex++;
        this.updateMissionView();
    },

    checkMissionInput() {
        const input = document.getElementById('missionInput').value.trim().toLowerCase();
        const currentLine = this.currentConversation.dialog[this.currentDialogIndex];
        const expected = currentLine.en.toLowerCase();
        const feedback = document.getElementById('missionFeedback');

        // 简单匹配：包含主要单词即可
        const mainWords = expected.replace(/[^a-z\s]/g, '').split(' ').filter(w => w.length > 2);
        const matchCount = mainWords.filter(w => input.includes(w)).length;
        const isClose = matchCount >= mainWords.length * 0.5;

        if (input === expected.replace(/[^a-z\s]/g, '') || isClose) {
            speech.speak(currentLine.en);
            this.currentDialogIndex++;
            this.updateMissionView();
        } else {
            feedback.innerHTML = `
        <div class="feedback-message error">
          ❌ 不太对，再试试！提示: ${currentLine.en.split(' ')[0]}...
        </div>
      `;
        }
    }
};
