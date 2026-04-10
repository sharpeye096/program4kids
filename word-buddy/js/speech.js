/**
 * Speech - 语音合成和识别模块
 */
class Speech {
    constructor() {
        this.synth = window.speechSynthesis;
        this.recognition = null;
        this.isListening = false;

        // 初始化语音识别（如果支持）
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
        }
    }

    /**
     * 播放英文发音
     */
    speak(text, rate = 0.8) {
        return new Promise((resolve, reject) => {
            if (!this.synth) {
                reject(new Error('语音合成不支持'));
                return;
            }

            // 取消正在播放的
            this.synth.cancel();

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = rate;
            utterance.pitch = 1;
            utterance.volume = 1;

            // 尝试使用英语语音
            const voices = this.synth.getVoices();
            const englishVoice = voices.find(v => v.lang.startsWith('en'));
            if (englishVoice) {
                utterance.voice = englishVoice;
            }

            utterance.onend = () => resolve();
            utterance.onerror = (e) => reject(e);

            this.synth.speak(utterance);
        });
    }

    /**
     * 慢速播放（用于跟读）
     */
    speakSlow(text) {
        return this.speak(text, 0.5);
    }

    /**
     * 开始语音识别
     */
    startListening() {
        return new Promise((resolve, reject) => {
            if (!this.recognition) {
                reject(new Error('语音识别不支持，请使用Chrome浏览器'));
                return;
            }

            this.recognition.onresult = (event) => {
                const result = event.results[0][0].transcript.toLowerCase();
                resolve(result);
            };

            this.recognition.onerror = (event) => {
                reject(new Error(event.error));
            };

            this.recognition.onend = () => {
                this.isListening = false;
            };

            try {
                this.isListening = true;
                this.recognition.start();
            } catch (e) {
                this.isListening = false;
                reject(e);
            }
        });
    }

    /**
     * 停止语音识别
     */
    stopListening() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
            this.isListening = false;
        }
    }

    /**
     * 比较发音结果
     */
    compareWords(spoken, expected) {
        const clean = (str) => str.toLowerCase().trim().replace(/[^a-z]/g, '');
        return clean(spoken) === clean(expected);
    }
}

// 全局实例
const speech = new Speech();

// 预加载语音
if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}
