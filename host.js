class HostControlPanel {
    constructor() {
        this.questions = [
            {
                question: "Name something people do to relax",
                answers: [
                    { text: "Watch TV", points: 35 },
                    { text: "Read", points: 25 },
                    { text: "Listen to music", points: 20 },
                    { text: "Take a nap", points: 15 },
                    { text: "Meditate", points: 10 },
                    { text: "Exercise", points: 8 },
                    { text: "Take a bath", points: 5 },
                    { text: "Go for a walk", points: 3 }
                ]
            },
            {
                question: "Name a common breakfast food",
                answers: [
                    { text: "Eggs", points: 30 },
                    { text: "Pancakes", points: 25 },
                    { text: "Cereal", points: 20 },
                    { text: "Toast", points: 15 },
                    { text: "Bacon", points: 12 },
                    { text: "Coffee", points: 8 },
                    { text: "Oatmeal", points: 5 },
                    { text: "Fruit", points: 3 }
                ]
            },
            {
                question: "Name something you find in a living room",
                answers: [
                    { text: "Sofa/Couch", points: 35 },
                    { text: "TV", points: 30 },
                    { text: "Coffee table", points: 20 },
                    { text: "Lamp", points: 15 },
                    { text: "Bookshelf", points: 10 },
                    { text: "Rug", points: 8 },
                    { text: "Pictures", points: 5 },
                    { text: "Remote control", points: 3 }
                ]
            },
            {
                question: "Name a popular vacation destination",
                answers: [
                    { text: "Beach", points: 35 },
                    { text: "Disney World", points: 25 },
                    { text: "Las Vegas", points: 20 },
                    { text: "Hawaii", points: 15 },
                    { text: "Europe", points: 12 },
                    { text: "Mountains", points: 8 },
                    { text: "New York City", points: 5 },
                    { text: "Cruise", points: 3 }
                ]
            },
            {
                question: "Name something people are afraid of",
                answers: [
                    { text: "Spiders", points: 30 },
                    { text: "Heights", points: 25 },
                    { text: "Snakes", points: 20 },
                    { text: "Public speaking", points: 15 },
                    { text: "Death", points: 12 },
                    { text: "Dark", points: 8 },
                    { text: "Flying", points: 5 },
                    { text: "Clowns", points: 3 }
                ]
            }
        ];
        
        this.currentQuestionIndex = 0;
        this.currentTeam = 1;
        this.team1Score = 0;
        this.team2Score = 0;
        this.strikes = 0;
        this.answersFound = [];
        this.gameActive = true;
        
        this.initializeElements();
        this.initializeSounds();
        this.setupWebSocket();
        this.loadQuestion();
        this.startStatusUpdates();
    }
    
    initializeElements() {
        this.questionSelect = document.getElementById('questionSelect');
        this.answersList = document.getElementById('answersList');
        this.manualAnswersList = document.getElementById('manualAnswersList');
        this.currentQuestionNum = document.getElementById('currentQuestionNum');
        this.currentTeamDisplay = document.getElementById('currentTeamDisplay');
        this.strikesDisplay = document.getElementById('strikesDisplay');
        this.answersFoundDisplay = document.getElementById('answersFoundDisplay');
        this.team1ScoreDisplay = document.getElementById('team1ScoreDisplay');
        this.team2ScoreDisplay = document.getElementById('team2ScoreDisplay');
        this.connectionStatus = document.getElementById('connectionStatus');
        
        // Validate critical DOM elements
        if (!this.questionSelect || !this.answersList || !this.manualAnswersList) {
            console.error('Critical host panel elements not found in DOM');
            throw new Error('Required host panel elements are missing');
        }
        
        this.questionSelect.addEventListener('change', () => {
            this.currentQuestionIndex = parseInt(this.questionSelect.value);
            this.loadQuestion();
        });
    }
    
    initializeSounds() {
        this.sounds = {
            correct: () => this.playAudioFile('sounds/correct-answer.mp3'),
            wrong: () => this.playAudioFile('sounds/family-feud-buzzer.mp3'),
            strike: () => this.playAudioFile('sounds/family-feud-buzzer.mp3'),
            yes: () => this.playAudioFile('sounds/family-feud-yes-ding.mp3'),
            win: this.createGameShowWinSound(),
            roundWin: this.createGameShowWinSound()
        };
    }
    
    playAudioFile(filename) {
        const audio = new Audio(filename);
        audio.volume = 0.7;
        audio.play().catch(e => console.log('Audio play failed:', e));
    }
    
    createGameShowWinSound() {
        return () => {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            
            notes.forEach((frequency, index) => {
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.value = frequency;
                    oscillator.type = 'square';
                    
                    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.3);
                }, index * 100);
            });
        };
    }
    
    setupWebSocket() {
        // Simulate connection to game
        this.updateConnectionStatus(true);
        
        // Listen for messages from main game (in real implementation, this would be WebSocket)
        window.addEventListener('storage', (e) => {
            if (e.key === 'familyFeudGameState' && e.newValue) {
                try {
                    const gameState = JSON.parse(e.newValue);
                    this.syncWithMainGame(gameState);
                } catch (error) {
                    console.error('Error parsing game state from localStorage:', error);
                }
            }
        });
    }
    
    updateConnectionStatus(connected) {
        if (connected) {
            this.connectionStatus.textContent = 'Connected';
            this.connectionStatus.className = 'connection-status connected';
        } else {
            this.connectionStatus.textContent = 'Disconnected';
            this.connectionStatus.className = 'connection-status disconnected';
        }
    }
    
    syncWithMainGame(gameState) {
        try {
            // Validate game state structure
            if (!gameState || typeof gameState !== 'object') {
                console.warn('Invalid game state received');
                return;
            }
            
            const oldQuestion = this.currentQuestionIndex;
            const oldTeam = this.currentTeam;
            
            // Validate and extract values with type checking
            const newQuestionIndex = typeof gameState.currentQuestionIndex === 'number' && 
                gameState.currentQuestionIndex >= 0 && 
                gameState.currentQuestionIndex < this.questions.length ? 
                gameState.currentQuestionIndex : this.currentQuestionIndex;
            
            const newTeam = typeof gameState.currentTeam === 'number' && 
                (gameState.currentTeam === 1 || gameState.currentTeam === 2) ? 
                gameState.currentTeam : this.currentTeam;
            
            const newTeam1Score = typeof gameState.team1Score === 'number' && 
                gameState.team1Score >= 0 ? gameState.team1Score : this.team1Score;
            
            const newTeam2Score = typeof gameState.team2Score === 'number' && 
                gameState.team2Score >= 0 ? gameState.team2Score : this.team2Score;
            
            const newStrikes = typeof gameState.strikes === 'number' && 
                gameState.strikes >= 0 && gameState.strikes <= 3 ? 
                gameState.strikes : this.strikes;
            
            const newAnswersFound = Array.isArray(gameState.answersFound) ? 
                gameState.answersFound.filter(index => 
                    typeof index === 'number' && index >= 0 && index < this.questions[this.currentQuestionIndex]?.answers?.length
                ) : this.answersFound;
            
            const newGameActive = typeof gameState.gameActive === 'boolean' ? 
                gameState.gameActive : this.gameActive;
            
            // Update state
            this.currentQuestionIndex = newQuestionIndex;
            this.currentTeam = newTeam;
            this.team1Score = newTeam1Score;
            this.team2Score = newTeam2Score;
            this.strikes = newStrikes;
            this.answersFound = newAnswersFound;
            this.gameActive = newGameActive;
            
            // Update display if state changed
            if (oldQuestion !== this.currentQuestionIndex || oldTeam !== this.currentTeam) {
                this.displayAnswers();
                this.updateDisplay();
            }
        } catch (error) {
            console.error('Error syncing with main game:', error);
        }
    }
    
    startStatusUpdates() {
        // Remove excessive interval updates - display will be updated on state changes
        this.updateDisplay();
    }
    
    broadcastGameState() {
        const gameState = {
            currentQuestionIndex: this.currentQuestionIndex,
            currentTeam: this.currentTeam,
            team1Score: this.team1Score,
            team2Score: this.team2Score,
            strikes: this.strikes,
            answersFound: this.answersFound,
            gameActive: this.gameActive,
            timestamp: Date.now()
        };
        
        // Broadcast to localStorage (simulating WebSocket)
        localStorage.setItem('familyFeudHostState', JSON.stringify(gameState));
    }
    
    loadQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.endGame();
            return;
        }
        
        const currentQuestion = this.questions[this.currentQuestionIndex];
        this.answersFound = [];
        this.strikes = 0;
        this.gameActive = true;
        
        this.displayAnswers();
        this.updateDisplay();
        this.broadcastGameState();
    }
    
    displayAnswers() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        
        // Update answers list
        this.answersList.innerHTML = '';
        this.manualAnswersList.innerHTML = '';
        
        currentQuestion.answers.forEach((answer, index) => {
            const isRevealed = this.answersFound.includes(index);
            
            // Answers preview - use secure DOM manipulation
            const answerItem = document.createElement('div');
            answerItem.className = `answer-item ${isRevealed ? 'revealed' : ''}`;
            
            const answerTextDiv = document.createElement('div');
            answerTextDiv.className = 'answer-text';
            answerTextDiv.textContent = `${index + 1}. ${answer.text}`;
            
            const answerPointsDiv = document.createElement('div');
            answerPointsDiv.className = 'answer-points';
            answerPointsDiv.textContent = `${answer.points} points`;
            
            answerItem.appendChild(answerTextDiv);
            answerItem.appendChild(answerPointsDiv);
            this.answersList.appendChild(answerItem);
            
            // Manual reveal buttons
            const revealBtn = document.createElement('button');
            revealBtn.className = 'control-btn';
            revealBtn.textContent = `Reveal: ${answer.text} (${answer.points})`;
            revealBtn.onclick = () => this.revealAnswer(index);
            if (isRevealed) {
                revealBtn.disabled = true;
                revealBtn.className = 'control-btn disabled';
            }
            this.manualAnswersList.appendChild(revealBtn);
        });
    }
    
    revealAnswer(index) {
        if (this.answersFound.includes(index)) return;
        
        this.answersFound.push(index);
        const currentQuestion = this.questions[this.currentQuestionIndex];
        const answer = currentQuestion.answers[index];
        
        // Award points to current team
        if (this.currentTeam === 1) {
            this.team1Score += answer.points;
        } else {
            this.team2Score += answer.points;
        }
        
        this.playSound('yes');
        this.displayAnswers();
        this.updateDisplay();
        this.broadcastGameState();
        
        // Check if all answers found
        if (this.answersFound.length === currentQuestion.answers.length) {
            setTimeout(() => this.endRound(true), 1000);
        }
    }
    
    addStrike() {
        if (this.strikes >= 3) return;
        
        this.strikes++;
        this.playSound('strike');
        this.updateDisplay();
        this.broadcastGameState();
        
        if (this.strikes >= 3) {
            setTimeout(() => this.endRound(false), 1000);
        } else {
            this.switchTeam();
        }
    }
    
    switchTeam() {
        this.currentTeam = this.currentTeam === 1 ? 2 : 1;
        this.updateDisplay();
        this.broadcastGameState();
    }
    
    addPoints(team, points) {
        if (team === 1) {
            this.team1Score += points;
        } else {
            this.team2Score += points;
        }
        this.updateDisplay();
        this.broadcastGameState();
    }
    
    endRound(won) {
        this.gameActive = false;
        if (won) {
            this.playSound('roundWin');
        }
        this.broadcastGameState();
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        this.currentTeam = 1;
        this.loadQuestion();
    }
    
    newGame() {
        this.currentQuestionIndex = 0;
        this.currentTeam = 1;
        this.team1Score = 0;
        this.team2Score = 0;
        this.strikes = 0;
        this.answersFound = [];
        this.gameActive = true;
        this.loadQuestion();
    }
    
    resetRound() {
        this.answersFound = [];
        this.strikes = 0;
        this.gameActive = true;
        this.displayAnswers();
        this.updateDisplay();
        this.broadcastGameState();
    }
    
    endGame() {
        this.gameActive = false;
        this.playSound('win');
        this.broadcastGameState();
    }
    
    playSound(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }
    
    // Question Import and Scraping Functions
    async scrapeFamilyFeudQuestions() {
        try {
            this.updateConnectionStatus(false);
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.familyfeudrules.com/questions');
            const html = await response.text();
            
            // Parse HTML and extract questions (simplified example)
            const questions = this.parseQuestionsFromHTML(html);
            this.addScrapedQuestions(questions);
            
            this.updateConnectionStatus(true);
            this.updateQuestionCount();
            console.log('Successfully scraped Family Feud questions');
        } catch (error) {
            console.error('Failed to scrape Family Feud questions:', error);
            this.updateConnectionStatus(false);
            alert('Failed to scrape questions. CORS restrictions may apply.');
        }
    }
    
    async scrapeGameShowNetwork() {
        try {
            this.updateConnectionStatus(false);
            // Example scraping from Game Show Network
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.gsn.com/games/family-feud/questions');
            const html = await response.text();
            
            const questions = this.parseQuestionsFromHTML(html);
            this.addScrapedQuestions(questions);
            
            this.updateConnectionStatus(true);
            this.updateQuestionCount();
            console.log('Successfully scraped Game Show Network questions');
        } catch (error) {
            console.error('Failed to scrape Game Show Network questions:', error);
            this.updateConnectionStatus(false);
            alert('Failed to scrape questions. CORS restrictions may apply.');
        }
    }
    
    parseQuestionsFromHTML(html) {
        // Simplified HTML parsing - in real implementation, use a proper parser
        const questions = [];
        
        // Example: Extract questions from HTML content
        // This is a placeholder - real implementation would need specific parsing logic
        const sampleQuestions = [
            {
                question: "Name something people do on vacation",
                answers: [
                    { text: "Go to beach", points: 35 },
                    { text: "Sightseeing", points: 25 },
                    { text: "Relax", points: 20 },
                    { text: "Shop", points: 15 },
                    { text: "Try new food", points: 5 }
                ]
            },
            {
                question: "Name a popular pet",
                answers: [
                    { text: "Dog", points: 45 },
                    { text: "Cat", points: 35 },
                    { text: "Fish", points: 10 },
                    { text: "Bird", points: 5 },
                    { text: "Hamster", points: 5 }
                ]
            }
        ];
        
        return sampleQuestions;
    }
    
    addScrapedQuestions(newQuestions) {
        this.questions = [...this.questions, ...newQuestions];
        this.updateQuestionSelect();
        this.displayAnswers();
    }
    
    importQuestions() {
        const importText = document.getElementById('questionImport').value;
        
        try {
            const importedQuestions = JSON.parse(importText);
            
            if (Array.isArray(importedQuestions)) {
                this.addScrapedQuestions(importedQuestions);
                document.getElementById('questionImport').value = '';
                alert(`Successfully imported ${importedQuestions.length} questions!`);
            } else {
                alert('Invalid format. Please provide an array of questions.');
            }
        } catch (error) {
            alert('Invalid JSON format. Please check your input.');
        }
    }
    
    exportQuestions() {
        const questionsJSON = JSON.stringify(this.questions, null, 2);
        document.getElementById('questionImport').value = questionsJSON;
        
        // Also create downloadable file
        const blob = new Blob([questionsJSON], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'family-feud-questions.json';
        a.click();
        URL.revokeObjectURL(url);
    }
    
    updateQuestionCount() {
        const countElement = document.getElementById('questionCount');
        if (countElement) {
            countElement.textContent = `${this.questions.length} questions loaded`;
        }
    }
    
    updateQuestionSelect() {
        // Update the question select dropdown with new questions
        if (this.questionSelect) {
            this.questionSelect.innerHTML = '';
            this.questions.forEach((question, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = `Question ${index + 1}: ${question.question.substring(0, 50)}...`;
                this.questionSelect.appendChild(option);
            });
        }
    }
    
    updateDisplay() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        
        this.currentQuestionNum.textContent = `${this.currentQuestionIndex + 1} / ${this.questions.length}`;
        this.currentTeamDisplay.textContent = `Team ${this.currentTeam}`;
        this.strikesDisplay.textContent = `${this.strikes} / 3`;
        this.answersFoundDisplay.textContent = `${this.answersFound.length} / ${currentQuestion.answers.length}`;
        this.team1ScoreDisplay.textContent = this.team1Score;
        this.team2ScoreDisplay.textContent = this.team2Score;
        
        this.questionSelect.value = this.currentQuestionIndex;
    }
    
    // Fast Money Methods for Host Panel
    startFastMoneyRound() {
        // Signal to main game that Fast Money is starting
        this.broadcastGameState();
        
        // Update connection status to show Fast Money mode
        this.connectionStatus.textContent = 'Fast Money Mode';
        this.connectionStatus.className = 'connection-status connected';
        
        // Play start sound
        this.playSound('theme');
    }
    
    revealFastMoneyAnswer() {
        // This would typically reveal answers one by one in a real implementation
        // For now, just play a sound effect
        this.playSound('yes');
    }
    
    resetFastMoneyRound() {
        // Reset Fast Money state
        this.fastMoneyRound = 0;
        this.fastMoneyPlayer1Score = 0;
        this.fastMoneyPlayer2Score = 0;
        
        // Update connection status
        this.connectionStatus.textContent = 'Connected';
        this.connectionStatus.className = 'connection-status connected';
        
        // Broadcast reset
        this.broadcastGameState();
    }
}

// Global functions for button onclick handlers
let hostPanel;

function loadQuestion() {
    hostPanel.loadQuestion();
}

function addStrike() {
    hostPanel.addStrike();
}

function switchTeam() {
    hostPanel.switchTeam();
}

function addPoints(team, points) {
    hostPanel.addPoints(team, points);
}

function newGame() {
    hostPanel.newGame();
}

function nextQuestion() {
    hostPanel.nextQuestion();
}

function resetRound() {
    hostPanel.resetRound();
}

function endGame() {
    hostPanel.endGame();
}

function playSound(soundName) {
    hostPanel.playSound(soundName);
}

// Question Import Functions
function scrapeFamilyFeudQuestions() {
    hostPanel.scrapeFamilyFeudQuestions();
}

function scrapeGameShowNetwork() {
    hostPanel.scrapeGameShowNetwork();
}

function importQuestions() {
    hostPanel.importQuestions();
}

function exportQuestions() {
    hostPanel.exportQuestions();
}

// Fast Money Functions
function startFastMoney() {
    hostPanel.startFastMoneyRound();
}

function revealFastMoneyAnswer() {
    hostPanel.revealFastMoneyAnswer();
}

function resetFastMoney() {
    hostPanel.resetFastMoneyRound();
}

// Initialize host panel when page loads
document.addEventListener('DOMContentLoaded', () => {
    hostPanel = new HostControlPanel();
});
