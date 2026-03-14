class FamilyFeudGame {
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
            },
            {
                question: "Name a common color for flowers",
                answers: [
                    { text: "Red", points: 30 },
                    { text: "Yellow", points: 20 },
                    { text: "Pink", points: 15 },
                    { text: "White", points: 10 },
                    { text: "Purple", points: 5 }
                ]
            },
            {
                question: "Name a popular color for a car",
                answers: [
                    { text: "Black", points: 34 },
                    { text: "Red", points: 27 },
                    { text: "White", points: 20 },
                    { text: "Blue", points: 12 },
                    { text: "Silver", points: 7 }
                ]
            },
            {
                question: "Name a fruit you might find in a smoothie",
                answers: [
                    { text: "Strawberry", points: 35 },
                    { text: "Banana", points: 30 },
                    { text: "Blueberry", points: 15 },
                    { text: "Mango", points: 10 },
                    { text: "Pineapple", points: 10 }
                ]
            },
            {
                question: "Name something you do when you wake up in morning",
                answers: [
                    { text: "Brush teeth", points: 30 },
                    { text: "Stretch", points: 25 },
                    { text: "Yawn", points: 20 },
                    { text: "Check phone", points: 15 },
                    { text: "Use bathroom", points: 10 }
                ]
            },
            {
                question: "Name a popular pizza topping",
                answers: [
                    { text: "Pepperoni", points: 45 },
                    { text: "Cheese", points: 20 },
                    { text: "Sausage", points: 15 },
                    { text: "Mushrooms", points: 10 },
                    { text: "Onions", points: 10 }
                ]
            },
            {
                question: "Name a sport played without a ball",
                answers: [
                    { text: "Hockey", points: 35 },
                    { text: "Swimming", points: 25 },
                    { text: "Track & Field", points: 15 },
                    { text: "Gymnastics", points: 12 },
                    { text: "Wrestling", points: 8 }
                ]
            },
            {
                question: "Name a type of weather",
                answers: [
                    { text: "Sunny", points: 30 },
                    { text: "Rainy", points: 25 },
                    { text: "Cloudy", points: 20 },
                    { text: "Snowy", points: 15 },
                    { text: "Windy", points: 10 }
                ]
            },
            {
                question: "Name a reason people might dance",
                answers: [
                    { text: "Wedding", points: 40 },
                    { text: "Party", points: 25 },
                    { text: "Concert", points: 15 },
                    { text: "Celebration", points: 10 },
                    { text: "Exercise", points: 5 }
                ]
            },
            {
                question: "Name a famous Disney character",
                answers: [
                    { text: "Mickey Mouse", points: 35 },
                    { text: "Cinderella", points: 25 },
                    { text: "Donald Duck", points: 15 },
                    { text: "Snow White", points: 15 },
                    { text: "Winnie the Pooh", points: 10 }
                ]
            },
            {
                question: "Name something people do on vacation",
                answers: [
                    { text: "Sightseeing", points: 30 },
                    { text: "Relax", points: 25 },
                    { text: "Swim", points: 20 },
                    { text: "Shop", points: 15 },
                    { text: "Eat", points: 10 }
                ]
            },
            {
                question: "Name a fast food restaurant",
                answers: [
                    { text: "McDonald's", points: 50 },
                    { text: "Burger King", points: 20 },
                    { text: "KFC", points: 15 },
                    { text: "Subway", points: 10 },
                    { text: "Taco Bell", points: 5 }
                ]
            },
            {
                question: "Name a type of flower",
                answers: [
                    { text: "Rose", points: 40 },
                    { text: "Tulip", points: 25 },
                    { text: "Daisy", points: 15 },
                    { text: "Sunflower", points: 12 },
                    { text: "Lily", points: 8 }
                ]
            },
            {
                question: "Name a musical instrument",
                answers: [
                    { text: "Guitar", points: 35 },
                    { text: "Piano", points: 25 },
                    { text: "Drums", points: 20 },
                    { text: "Violin", points: 10 },
                    { text: "Flute", points: 10 }
                ]
            },
            {
                question: "Name an animal you might see at zoo",
                answers: [
                    { text: "Elephant", points: 30 },
                    { text: "Lion", points: 25 },
                    { text: "Monkey", points: 20 },
                    { text: "Giraffe", points: 15 },
                    { text: "Zebra", points: 10 }
                ]
            },
            {
                question: "Name a type of candy",
                answers: [
                    { text: "Chocolate", points: 40 },
                    { text: "Gummy bears", points: 20 },
                    { text: "Lollipop", points: 15 },
                    { text: "Taffy", points: 10 },
                    { text: "Hard candy", points: 5 }
                ]
            },
            {
                question: "Name something you might find in a school",
                answers: [
                    { text: "Desks", points: 35 },
                    { text: "Books", points: 25 },
                    { text: "Teachers", points: 20 },
                    { text: "Students", points: 10 },
                    { text: "Chalkboard", points: 5 }
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
        this.faceOffMode = true;
        this.stealMode = false;
        
        // Initialize question randomization
        this.usedQuestions = [];
        this.availableQuestions = [...Array(this.questions.length).keys()];
        this.shuffleQuestions();
        
        this.initializeSounds();
        this.initializeElements();
        this.bindEvents();
        this.setupHostSync();
        this.loadQuestion();
    }
    
    shuffleQuestions() {
        // Fisher-Yates shuffle for better randomization
        for (let i = this.availableQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.availableQuestions[i], this.availableQuestions[j]] = [this.availableQuestions[j], this.availableQuestions[i]];
        }
    }
    
    getNextQuestion() {
        try {
            if (this.availableQuestions.length === 0) {
                // All questions used, reset the pool
                this.usedQuestions = [];
                this.availableQuestions = [...Array(this.questions.length).keys()];
                this.shuffleQuestions();
                console.log('All questions used! Resetting question pool...');
            }
            
            if (this.availableQuestions.length === 0 || this.questions.length === 0) {
                throw new Error('No questions available');
            }
            
            // Get next random question from available pool
            const randomIndex = Math.floor(Math.random() * this.availableQuestions.length);
            const questionIndex = this.availableQuestions[randomIndex];
            
            // Validate question index
            if (questionIndex < 0 || questionIndex >= this.questions.length) {
                throw new Error(`Invalid question index: ${questionIndex}`);
            }
            
            // Validate question data
            const question = this.questions[questionIndex];
            if (!question || !question.question || !Array.isArray(question.answers)) {
                throw new Error(`Invalid question data at index ${questionIndex}`);
            }
            
            // Remove from available and add to used
            this.availableQuestions.splice(randomIndex, 1);
            this.usedQuestions.push(questionIndex);
            
            return questionIndex;
        } catch (error) {
            console.error('Error getting next question:', error);
            // Fallback to first question if available
            if (this.questions.length > 0) {
                console.log('Falling back to first question');
                return 0;
            }
            throw new Error('No valid questions available');
        }
    }
    
    initializeSounds() {
        this.sounds = {
            correct: () => this.playAudioFile('sounds/correct-answer.mp3'),
            wrong: () => this.playAudioFile('sounds/family-feud-buzzer.mp3'),
            strike: () => this.playAudioFile('sounds/family-feud-buzzer.mp3'),
            yes: () => this.playAudioFile('sounds/family-feud-yes-ding.mp3'),
            win: this.createGameShowWinSound(),
            roundWin: this.createGameShowWinSound(),
            theme: this.createFamilyFeudTheme()
        };
        
        // Play theme song when game starts
        setTimeout(() => this.playSound('theme'), 500);
    }
    
    playAudioFile(filename) {
        const audio = new Audio(filename);
        audio.volume = 0.7;
        audio.play().catch(e => console.log('Audio play failed:', e));
    }
    
    createTone(frequency, duration) {
        return () => {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration);
        };
    }
    
    playSound(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }
    
    initializeElements() {
        this.questionText = document.getElementById('question-text');
        this.answerInput = document.getElementById('answer-input');
        this.submitBtn = document.getElementById('submit-answer');
        this.team1ScoreEl = document.getElementById('team1-score');
        this.team2ScoreEl = document.getElementById('team2-score');
        this.currentTeamEl = document.getElementById('current-team');
        this.answersFoundEl = document.getElementById('answers-found');
        this.totalAnswersEl = document.getElementById('total-answers');
        this.newGameBtn = document.getElementById('new-game');
        this.nextQuestionBtn = document.getElementById('next-question');
        this.strikeBtn = document.getElementById('strike-btn');
        this.roundResult = document.getElementById('round-result');
        this.resultMessage = document.getElementById('result-message');
        this.resultDetails = document.getElementById('result-details');
        this.continueBtn = document.getElementById('continue-btn');
        
        // Validate critical DOM elements
        if (!this.questionText || !this.answerInput || !this.submitBtn) {
            console.error('Critical game elements not found in DOM');
            throw new Error('Required game elements are missing');
        }
        
        this.answerSlots = document.querySelectorAll('.answer-slot');
        this.strikeElements = [
            document.getElementById('strike1'),
            document.getElementById('strike2'),
            document.getElementById('strike3')
        ];
        
        // Validate strike elements
        this.strikeElements = this.strikeElements.filter(el => el !== null);
        if (this.strikeElements.length !== 3) {
            console.warn('Some strike elements not found');
        }
    }
    
    setupHostSync() {
        // Listen for host updates via localStorage
        window.addEventListener('storage', (e) => {
            if (e.key === 'familyFeudHostState' && e.newValue) {
                try {
                    const hostState = JSON.parse(e.newValue);
                    this.syncFromHost(hostState);
                } catch (error) {
                    console.error('Error parsing host state from localStorage:', error);
                }
            }
        });
        
        // Remove excessive broadcasting - will only broadcast on state changes
    }
    
    syncFromHost(hostState) {
        try {
            // Validate host state structure
            if (!hostState || typeof hostState !== 'object') {
                console.warn('Invalid host state received');
                return;
            }
            
            const oldQuestion = this.currentQuestionIndex;
            const oldTeam = this.currentTeam;
            
            // Validate and extract values with type checking
            const newQuestionIndex = typeof hostState.currentQuestionIndex === 'number' && 
                hostState.currentQuestionIndex >= 0 && 
                hostState.currentQuestionIndex < this.questions.length ? 
                hostState.currentQuestionIndex : this.currentQuestionIndex;
            
            const newTeam = typeof hostState.currentTeam === 'number' && 
                (hostState.currentTeam === 1 || hostState.currentTeam === 2) ? 
                hostState.currentTeam : this.currentTeam;
            
            const newTeam1Score = typeof hostState.team1Score === 'number' && 
                hostState.team1Score >= 0 ? hostState.team1Score : this.team1Score;
            
            const newTeam2Score = typeof hostState.team2Score === 'number' && 
                hostState.team2Score >= 0 ? hostState.team2Score : this.team2Score;
            
            const newStrikes = typeof hostState.strikes === 'number' && 
                hostState.strikes >= 0 && hostState.strikes <= 3 ? 
                hostState.strikes : this.strikes;
            
            const newAnswersFound = Array.isArray(hostState.answersFound) ? 
                hostState.answersFound.filter(index => 
                    typeof index === 'number' && index >= 0 && index < this.questions[this.currentQuestionIndex]?.answers?.length
                ) : this.answersFound;
            
            const newGameActive = typeof hostState.gameActive === 'boolean' ? 
                hostState.gameActive : this.gameActive;
            
            // Update state
            this.currentQuestionIndex = newQuestionIndex;
            this.currentTeam = newTeam;
            this.team1Score = newTeam1Score;
            this.team2Score = newTeam2Score;
            this.strikes = newStrikes;
            this.answersFound = newAnswersFound;
            this.gameActive = newGameActive;
            
            // Reload question if changed
            if (oldQuestion !== this.currentQuestionIndex) {
                this.loadQuestion();
            } else {
                this.updateDisplay();
            }
            
            // Update team display if changed
            if (oldTeam !== this.currentTeam) {
                this.currentTeamEl.textContent = `Team ${this.currentTeam}`;
            }
        } catch (error) {
            console.error('Error syncing from host state:', error);
        }
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
        
        localStorage.setItem('familyFeudGameState', JSON.stringify(gameState));
    }
    
    bindEvents() {
        this.submitBtn.addEventListener('click', () => this.submitAnswer());
        this.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.submitAnswer();
        });
        this.newGameBtn.addEventListener('click', () => this.newGame());
        this.nextQuestionBtn.addEventListener('click', () => this.nextQuestion());
        this.strikeBtn.addEventListener('click', () => this.addStrike());
        this.continueBtn.addEventListener('click', () => this.hideRoundResult());
    }
    
    loadQuestion() {
        try {
            // Get next random question
            this.currentQuestionIndex = this.getNextQuestion();
            
            const currentQuestion = this.questions[this.currentQuestionIndex];
            
            // Validate question data
            if (!currentQuestion || !currentQuestion.question || !Array.isArray(currentQuestion.answers)) {
                throw new Error('Invalid question data loaded');
            }
            
            this.questionText.textContent = currentQuestion.question;
            this.totalAnswersEl.textContent = currentQuestion.answers.length;
            this.answersFoundEl.textContent = '0';
            
            this.answersFound = [];
            this.strikes = 0;
            this.gameActive = true;
            
            this.resetAnswerSlots();
            this.resetStrikes();
            this.answerInput.value = '';
            this.answerInput.focus();
            
            this.updateDisplay();
            this.broadcastGameState();
        } catch (error) {
            console.error('Error loading question:', error);
            // Show error to user
            this.questionText.textContent = 'Error loading question. Please try again.';
            this.gameActive = false;
            
            // Try to recover after a delay
            setTimeout(() => {
                try {
                    this.newGame();
                } catch (e) {
                    console.error('Failed to recover from question loading error:', e);
                }
            }, 2000);
        }
    }
    
    updateDisplay() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        
        // Update score displays with null checks
        if (this.team1ScoreEl) {
            this.team1ScoreEl.textContent = this.team1Score;
        }
        if (this.team2ScoreEl) {
            this.team2ScoreEl.textContent = this.team2Score;
        }
        
        // Update answers found
        if (this.answersFoundEl) {
            this.answersFoundEl.textContent = this.answersFound.length;
        }
        
        // Update strikes with null checks
        if (this.strikeElements && this.strikeElements.length > 0) {
            this.strikeElements.forEach((strike, index) => {
                if (strike) {
                    if (index < this.strikes) {
                        strike.classList.add('active');
                    } else {
                        strike.classList.remove('active');
                    }
                }
            });
        }
        
        // Update answer panels with null checks
        if (this.answerSlots && this.answerSlots.length > 0) {
            this.answerSlots.forEach((slot, index) => {
                const panel = document.getElementById(`panel-${index + 1}`);
                if (!panel) return;
                
                const isRevealed = this.answersFound.includes(index);
                
                if (isRevealed) {
                    const answer = currentQuestion.answers[index];
                    const answerBack = panel.querySelector('.answer-back');
                    const answerText = answerBack?.querySelector('.answer-text');
                    const answerPoints = answerBack?.querySelector('.answer-points');
                    
                    if (answerText) answerText.textContent = answer.text;
                    if (answerPoints) answerPoints.textContent = answer.points;
                    panel.classList.add('flipped');
                } else {
                    panel.classList.remove('flipped');
                }
            });
        }
    }
    
    resetAnswerSlots() {
        this.answerSlots.forEach((slot, index) => {
            const panel = document.getElementById(`panel-${index + 1}`);
            const answerBack = panel.querySelector('.answer-back');
            const answerText = answerBack.querySelector('.answer-text');
            const answerPoints = answerBack.querySelector('.answer-points');
            
            // Reset panel
            panel.classList.remove('flipped');
            answerBack.classList.remove('revealed-by-team1', 'revealed-by-team2');
            answerText.textContent = '';
            answerPoints.textContent = '';
            
            // Remove wrong animation
            slot.classList.remove('wrong');
        });
    }
    
    resetStrikes() {
        this.strikeElements.forEach(strike => {
            strike.classList.remove('active');
        });
    }
    
    // Input validation and sanitization
    sanitizeInput(input) {
        if (typeof input !== 'string') {
            return '';
        }
        
        // Remove HTML tags and entities
        return input
            .replace(/<[^>]*>/g, '')
            .replace(/&[a-zA-Z0-9#]+;/g, '')
            .trim();
    }
    
    validateAnswer(userAnswer) {
        if (!userAnswer || typeof userAnswer !== 'string') {
            return false;
        }
        
        const sanitized = this.sanitizeInput(userAnswer);
        
        // Check minimum length
        if (sanitized.length < 1) {
            return false;
        }
        
        // Check maximum length
        if (sanitized.length > 50) {
            return false;
        }
        
        // Check for reasonable content (at least one alphanumeric character)
        if (!/[a-zA-Z0-9]/.test(sanitized)) {
            return false;
        }
        
        return sanitized;
    }
    
    // Improved answer matching with better validation
    isAnswerMatch(userAnswer, correctAnswer) {
        const sanitizedUser = this.validateAnswer(userAnswer);
        const sanitizedCorrect = this.validateAnswer(correctAnswer);
        
        if (!sanitizedUser || !sanitizedCorrect) {
            return false;
        }
        
        const userLower = sanitizedUser.toLowerCase();
        const correctLower = sanitizedCorrect.toLowerCase();
        
        // Exact match
        if (userLower === correctLower) {
            return true;
        }
        
        // Check if user answer contains the correct answer or vice versa
        // but with minimum length requirements to prevent false matches
        if (userLower.includes(correctLower) && correctLower.length >= 3) {
            return true;
        }
        
        if (correctLower.includes(userLower) && userLower.length >= 3) {
            return true;
        }
        
        // Check for word-level matches
        const userWords = userLower.split(/\s+/).filter(word => word.length >= 2);
        const correctWords = correctLower.split(/\s+/).filter(word => word.length >= 2);
        
        // If at least 50% of words match and user provided substantial input
        if (userWords.length >= 2 && correctWords.length >= 2) {
            const matches = userWords.filter(word => correctWords.includes(word));
            if (matches.length >= Math.max(1, Math.floor(correctWords.length * 0.5))) {
                return true;
            }
        }
        
        return false;
    }
    
    submitAnswer() {
        if (!this.gameActive) return;
        
        const userAnswer = this.answerInput.value.trim().toLowerCase();
        if (!userAnswer) return;
        
        const currentQuestion = this.questions[this.currentQuestionIndex];
        let foundAnswer = false;
        
        for (let i = 0; i < currentQuestion.answers.length; i++) {
            const answer = currentQuestion.answers[i];
            
            if (this.isAnswerMatch(userAnswer, answer.text)) {
                if (!this.answersFound.includes(i)) {
                    this.revealAnswer(i, answer);
                    this.answersFound.push(i);
                    this.answersFoundEl.textContent = this.answersFound.length;
                    foundAnswer = true;
                    this.playSound('yes');
                    
                    const totalPoints = this.answersFound.reduce((sum, index) => 
                        sum + currentQuestion.answers[index].points, 0);
                    
                    if (this.currentTeam === 1) {
                        this.team1Score += answer.points;
                        this.team1ScoreEl.textContent = this.team1Score;
                    } else {
                        this.team2Score += answer.points;
                        this.team2ScoreEl.textContent = this.team2Score;
                    }
                    
                    if (this.answersFound.length === currentQuestion.answers.length) {
                        this.endRound(true);
                    }
                    
                    break;
                }
            }
        }
        
        if (!foundAnswer) {
            this.showWrongAnswer();
            this.playSound('wrong');
        }
        
        this.answerInput.value = '';
        this.answerInput.focus();
        
        this.updateDisplay();
        this.broadcastGameState();
    }
    
    revealAnswer(index, answer) {
        const panel = document.getElementById(`panel-${index + 1}`);
        const answerBack = panel.querySelector('.answer-back');
        const answerText = answerBack.querySelector('.answer-text');
        const answerPoints = answerBack.querySelector('.answer-points');
        
        answerText.textContent = answer.text;
        answerPoints.textContent = answer.points;
        
        // Add team color class
        answerBack.classList.add(`revealed-by-team${this.currentTeam}`);
        
        // Flip the panel
        panel.classList.add('flipped');
    }
    
    showWrongAnswer() {
        const availableSlots = Array.from(this.answerSlots).filter((slot, index) => 
            !this.answersFound.includes(index)
        );
        
        if (availableSlots.length > 0) {
            const randomSlot = availableSlots[Math.floor(Math.random() * availableSlots.length)];
            randomSlot.classList.add('wrong');
            setTimeout(() => {
                randomSlot.classList.remove('wrong');
            }, 500);
        }
    }
    
    addStrike() {
        if (!this.gameActive || this.strikes >= 3) return;
        
        this.strikes++;
        this.strikeElements[this.strikes - 1].classList.add('active');
        this.playSound('strike');
        
        if (this.strikes >= 3) {
            this.endRound(false);
        } else {
            this.switchTeam();
        }
        
        this.updateDisplay();
        this.broadcastGameState();
    }
    
    switchTeam() {
        this.currentTeam = this.currentTeam === 1 ? 2 : 1;
        this.currentTeamEl.textContent = `Team ${this.currentTeam}`;
        this.broadcastGameState();
    }
    
    endRound(won) {
        this.gameActive = false;
        
        const currentQuestion = this.questions[this.currentQuestionIndex];
        const remainingAnswers = currentQuestion.answers.filter((_, index) => 
            !this.answersFound.includes(index)
        );
        
        remainingAnswers.forEach((answer, index) => {
            const originalIndex = currentQuestion.answers.indexOf(answer);
            setTimeout(() => {
                this.revealAnswer(originalIndex, answer);
            }, (index + 1) * 500);
        });
        
        setTimeout(() => {
            this.showRoundResult(won);
        }, remainingAnswers.length * 500 + 1000);
    }
    
    showRoundResult(won) {
        if (won) {
            this.playSound('roundWin');
            this.resultMessage.textContent = `Team ${this.currentTeam} Wins the Round!`;
            this.resultDetails.textContent = `Great job! All answers found.`;
        } else {
            this.resultMessage.textContent = 'Round Over - 3 Strikes!';
            this.resultDetails.textContent = `Team ${this.currentTeam === 1 ? 2 : 1} takes over.`;
        }
        
        this.roundResult.style.display = 'flex';
    }
    
    hideRoundResult() {
        this.roundResult.style.display = 'none';
        this.nextQuestion();
    }
    
    nextQuestion() {
        this.currentQuestionIndex = this.getNextQuestion();
        this.currentTeam = 1;
        this.currentTeamEl.textContent = 'Team 1';
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
        
        this.team1ScoreEl.textContent = '0';
        this.team2ScoreEl.textContent = '0';
        this.currentTeamEl.textContent = 'Team 1';
        
        this.loadQuestion();
    }
    
    endGame() {
        this.gameActive = false;
        
        let winner = '';
        if (this.team1Score > this.team2Score) {
            winner = 'Team 1 Wins the Game!';
        } else if (this.team2Score > this.team1Score) {
            winner = 'Team 2 Wins the Game!';
        } else {
            winner = "It's a Tie!";
        }
        
        this.playSound('win');
        this.resultMessage.textContent = winner;
        this.resultDetails.textContent = `Final Score - Team 1: ${this.team1Score} | Team 2: ${this.team2Score}`;
        this.roundResult.style.display = 'flex';
        
        this.continueBtn.textContent = 'Start New Game';
        this.continueBtn.onclick = () => {
            this.hideRoundResult();
            this.newGame();
            this.continueBtn.textContent = 'Continue';
            this.continueBtn.onclick = () => this.hideRoundResult();
        };
        
        this.broadcastGameState();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FamilyFeudGame();
});

// Navigation functions
function goToWelcome() {
    window.location.href = 'welcome.html';
}

function openHostPanel() {
    window.open('host.html', '_blank');
}
