/**
 * App - 主应用逻辑
 */

// 当前状态
let currentTheme = null;
let currentMode = null;

// 页面初始化
document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const theme = params.get('theme');
    const mode = params.get('mode');

    if (theme) {
        try {
            await loadTheme(theme);

            if (mode) {
                startPractice(mode);
            }
        } catch (error) {
            console.error('加载主题失败:', error);
            alert('加载主题失败，请返回首页重试');
        }
    }
});

// 加载主题
async function loadTheme(themeId) {
    currentTheme = await wordLoader.loadTheme(themeId);

    // 更新标题
    const titleEl = document.getElementById('themeTitle');
    if (titleEl) {
        titleEl.textContent = `${currentTheme.themeIcon} ${currentTheme.theme}`;
    }
}

// 开始练习
function startPractice(mode) {
    currentMode = mode;

    // 切换视图
    document.getElementById('modeSelectView').style.display = 'none';
    document.getElementById('practiceView').style.display = 'block';

    // 根据模式渲染
    renderCurrentMode();
}

// 渲染当前模式
function renderCurrentMode() {
    const word = wordLoader.getCurrentWord();
    if (!word) return;

    // 隐藏/显示导航按钮
    const navControls = document.getElementById('navControls');
    const needsNav = ['flashcard', 'reading', 'writing', 'spelling', 'scene', 'roleplay', 'voice', 'mission'].includes(currentMode);
    navControls.style.display = needsNav ? 'flex' : 'none';

    switch (currentMode) {
        // 单词学习
        case 'flashcard':
            Flashcard.renderFlashcard(word);
            break;
        case 'reading':
            Flashcard.renderReading(word);
            break;
        case 'writing':
            Flashcard.renderWriting(word);
            break;
        case 'spelling':
            Spelling.render(word);
            break;

        // 记忆游戏
        case 'matching':
            Memory.renderMatching();
            break;
        case 'listening':
            Memory.renderListening();
            break;
        case 'hunter':
            Memory.renderHunter();
            break;
        case 'challenge':
            Memory.renderChallenge();
            break;

        // 对话练习
        case 'scene':
            Conversation.renderScene(word);
            break;
        case 'roleplay':
            Conversation.renderRoleplay(word);
            break;
        case 'voice':
            Conversation.renderVoice(word);
            break;
        case 'mission':
            Conversation.renderMission(word);
            break;
    }
}

// 导航函数
function prevWord() {
    wordLoader.prevWord();
    renderCurrentMode();
}

function nextWord() {
    wordLoader.nextWord();
    renderCurrentMode();
}

function randomWord() {
    wordLoader.randomWord();
    renderCurrentMode();
}

function backToModeSelect() {
    currentMode = null;
    document.getElementById('modeSelectView').style.display = 'block';
    document.getElementById('practiceView').style.display = 'none';
}
