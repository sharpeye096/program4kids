const UI = {
    affEndpoint: document.getElementById('aff-endpoint'),
    affModel: document.getElementById('aff-model'),
    negEndpoint: document.getElementById('neg-endpoint'),
    negModel: document.getElementById('neg-model'),
    judgeEndpoint: document.getElementById('judge-endpoint'),
    judgeModel: document.getElementById('judge-model'),
    topicInput: document.getElementById('topic-input'),
    roundsSlider: document.getElementById('rounds-slider'),
    roundsDisplay: document.getElementById('rounds-display'),
    startBtn: document.getElementById('start-btn'),
    arena: document.getElementById('arena'),
    judgePanel: document.getElementById('judge-panel'),
    judgeContent: document.getElementById('judge-content'),
    judgeLoader: document.querySelector('.judge-loader')
};

UI.roundsSlider.addEventListener('input', (e) => {
    UI.roundsDisplay.textContent = e.target.value;
});

let isDebating = false;

async function callOpenAI(endpoint, model, messages) {
    // Determine target URL for the proxy
    let target = endpoint.trim();
    if (!target.endsWith('/v1/chat/completions')) {
        if (target.endsWith('/')) {
            target += 'v1/chat/completions';
        } else {
            target += '/v1/chat/completions';
        }
    }

    const payload = {
        target_url: target,
        model: model.trim() || 'local-model',
        messages: messages,
        temperature: 0.7
    };

    try {
        const response = await fetch('/api/proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Endpoint returned status ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('LLM Call Error:', error);
        return `[Error connecting to endpoint: ${error.message}]`;
    }
}

function appendMessage(role) {
    const isAffirmative = role === 'affirmative';
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isAffirmative ? 'affirmative' : 'negative'}`;
    
    const sender = document.createElement('div');
    sender.className = 'sender';
    sender.textContent = isAffirmative ? 'Affirmative (正方)' : 'Negative (反方)';
    
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    msgDiv.appendChild(sender);
    msgDiv.appendChild(bubble);
    
    UI.arena.appendChild(msgDiv);
    UI.arena.scrollTop = UI.arena.scrollHeight;
    
    return bubble;
}

async function typeWriterEffect(element, text, speed = 15) {
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
        element.textContent += text.charAt(i);
        UI.arena.scrollTop = UI.arena.scrollHeight;
        await new Promise(r => setTimeout(r, speed));
    }
}

async function typeWriterMarkdown(element, markdownText, speed = 15) {
    let currentText = '';
    for (let i = 0; i < markdownText.length; i++) {
        currentText += markdownText.charAt(i);
        // marked.parse handles all markdown tokens securely and cleanly
        element.innerHTML = marked.parse(currentText);
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(r => setTimeout(r, speed > 5 ? speed - 5 : speed));
    }
}

function showTyping() {
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typing';
    indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    UI.arena.appendChild(indicator);
    UI.arena.scrollTop = UI.arena.scrollHeight;
}

function removeTyping() {
    const indicator = document.getElementById('typing');
    if (indicator) {
        indicator.remove();
    }
}

// Ensure the debate loop does not freeze the UI, yielding to the event loop.
const delay = ms => new Promise(res => setTimeout(res, ms));

UI.startBtn.addEventListener('click', async () => {
    const topic = UI.topicInput.value.trim();
    if (!topic) {
        alert("Please enter a debate topic.");
        return;
    }

    if (isDebating) return;
    isDebating = true;
    
    UI.startBtn.disabled = true;
    UI.startBtn.textContent = "Debate in Progress...";
    
    // Reset UI
    UI.arena.innerHTML = '';
    UI.arena.classList.remove('hidden');
    UI.judgePanel.classList.add('hidden');
    UI.judgeContent.textContent = '';
    
    const rounds = parseInt(UI.roundsSlider.value, 10);
    
    let affHistory = [
        { role: 'system', content: `You are the Affirmative side (正方) in a debate. The topic is: "${topic}". You must strongly defend the topic. Build on your previous points, introduce new evidence, and fiercely attack the opponent's points. Keep your EVERY response concise, strictly under 800 characters (每次回复请控制在800字以内). Be passionate, persuasive, and directly address the opponent. Reply in the same language as the topic.` }
    ];
    
    let negHistory = [
        { role: 'system', content: `You are the Negative side (反方) in a debate. The topic is: "${topic}". You must strongly oppose the topic. Attack the opponent's points, point out logical fallacies, and build your own robust counter-arguments. Keep your EVERY response concise, strictly under 800 characters (每次回复请控制在800字以内). Be passionate, persuasive, and directly address the opponent. Reply in the same language as the topic.` }
    ];

    let fullTranscript = `Topic: ${topic}\n\n`;
    
    try {
        // Start Debate Loop
        for (let r = 1; r <= rounds; r++) {
            // Affirmative Turn
            showTyping();
            await delay(100);
            const affResponse = await callOpenAI(UI.affEndpoint.value, UI.affModel.value, affHistory);
            removeTyping();
            const bubbleAff = appendMessage('affirmative');
            await typeWriterEffect(bubbleAff, affResponse);
            
            affHistory.push({ role: 'assistant', content: affResponse });
            negHistory.push({ role: 'user', content: `Opponent (Affirmative): ${affResponse}` });
            fullTranscript += `Affirmative: ${affResponse}\n\n`;
            
            // Negative Turn
            showTyping();
            await delay(100);
            const negResponse = await callOpenAI(UI.negEndpoint.value, UI.negModel.value, negHistory);
            removeTyping();
            const bubbleNeg = appendMessage('negative');
            await typeWriterEffect(bubbleNeg, negResponse);
            
            negHistory.push({ role: 'assistant', content: negResponse });
            affHistory.push({ role: 'user', content: `Opponent (Negative): ${negResponse}` });
            fullTranscript += `Negative: ${negResponse}\n\n`;
        }

        // Judge's Turn
        UI.startBtn.textContent = "Judging in Progress...";
        UI.judgePanel.classList.remove('hidden');
        UI.judgeLoader.classList.remove('hidden');
        UI.judgeContent.textContent = '';
        UI.arena.scrollTop = UI.arena.scrollHeight;
        
        const judgePrompt = [
            { role: 'system', content: 'You are an expert, impartial debate judge.' },
            { role: 'user', content: `Please review the following transcript of a debate on the topic: "${topic}".\n\n${fullTranscript}\n\nProvide a professional evaluation. Analyze the strengths and weaknesses of both the Affirmative and Negative sides. Point out any logical fallacies or exceptionally strong arguments. Finally, you MUST score each side out of 10 and explicitly declare a CLEAR WINNER at the very end (谁胜谁负). Do NOT end your response without declaring a winner with your final conclusion. Format your output nicely using markdown syntax (e.g. bolding). Keep it concise but perceptive. Respond in the same language as the topic.` }
        ];

        const judgeResponse = await callOpenAI(UI.judgeEndpoint.value, UI.judgeModel.value, judgePrompt);
        UI.judgeLoader.classList.add('hidden');
        
        // Use marked.js to render full markdown properly
        await typeWriterMarkdown(UI.judgeContent, judgeResponse, 15);
    } catch (e) {
        console.error("Debate error:", e);
        alert("An error occurred during the debate. See console for details.");
    } finally {
        UI.startBtn.disabled = false;
        UI.startBtn.textContent = "Start New Debate";
        isDebating = false;
    }
});
