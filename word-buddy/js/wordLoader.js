/**
 * WordLoader - 词库加载和管理模块
 */
class WordLoader {
    constructor() {
        this.cache = {};
        this.currentTheme = null;
        this.currentWords = [];
        this.currentIndex = 0;
    }

    /**
     * 加载指定主题的词库
     */
    async loadTheme(themeId) {
        if (this.cache[themeId]) {
            this.currentTheme = this.cache[themeId];
            this.currentWords = [...this.currentTheme.words];
            this.shuffleWords();
            return this.currentTheme;
        }

        try {
            const response = await fetch(`data/${themeId}.json`);
            if (!response.ok) {
                throw new Error(`无法加载主题: ${themeId}`);
            }
            const data = await response.json();
            this.cache[themeId] = data;
            this.currentTheme = data;
            this.currentWords = [...data.words];
            this.shuffleWords();
            return data;
        } catch (error) {
            console.error('加载词库失败:', error);
            throw error;
        }
    }

    /**
     * Fisher-Yates 洗牌算法
     */
    shuffleWords() {
        for (let i = this.currentWords.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.currentWords[i], this.currentWords[j]] = [this.currentWords[j], this.currentWords[i]];
        }
        this.currentIndex = 0;
    }

    /**
     * 获取当前单词
     */
    getCurrentWord() {
        return this.currentWords[this.currentIndex] || null;
    }

    /**
     * 下一个单词
     */
    nextWord() {
        this.currentIndex = (this.currentIndex + 1) % this.currentWords.length;
        return this.getCurrentWord();
    }

    /**
     * 上一个单词
     */
    prevWord() {
        this.currentIndex = (this.currentIndex - 1 + this.currentWords.length) % this.currentWords.length;
        return this.getCurrentWord();
    }

    /**
     * 随机跳转
     */
    randomWord() {
        this.currentIndex = Math.floor(Math.random() * this.currentWords.length);
        return this.getCurrentWord();
    }

    /**
     * 获取随机N个单词（用于游戏）
     */
    getRandomWords(count) {
        const shuffled = [...this.currentWords].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    /**
     * 获取当前进度
     */
    getProgress() {
        return {
            current: this.currentIndex + 1,
            total: this.currentWords.length
        };
    }
}

// 全局实例
const wordLoader = new WordLoader();
