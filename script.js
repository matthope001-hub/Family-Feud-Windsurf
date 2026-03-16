class FamilyFeudGame {
    constructor() {
        this.team1Score = 0;
        this.team2Score = 0;
        this.currentTeam = 1;
        this.currentQuestionIndex = 0;
        this.strikes = 0;
        this.answersFound = [];
        this.gameActive = false;
        this.fastMoneyMode = false;
        this.fastMoneyRound = 0;
        this.fastMoneyPlayer1Score = 0;
        this.fastMoneyPlayer2Score = 0;

        this.setupQuestions();
        this.initializeElements();
        this.initializeSounds();
        this.setupHostSync();
        this.bindEvents();
    }

    setupQuestions() {
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
            },
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
        
        // Fast Money questions - 5 questions per round
        this.fastMoneyQuestions = [
            {
                question: "Name something you might find in a woman's purse",
                answers: [
                    { text: "Wallet", points: 35 },
                    { text: "Keys", points: 25 },
                    { text: "Phone", points: 20 },
                    { text: "Lipstick", points: 10 },
                    { text: "Makeup", points: 8 },
                    { text: "Gum", points: 5 },
                    { text: "Pen", points: 3 },
                    { text: "Tissues", points: 2 }
                ]
            },
            {
                question: "Name something people do when they can't sleep",
                answers: [
                    { text: "Read", points: 30 },
                    { text: "Watch TV", points: 25 },
                    { text: "Count sheep", points: 20 },
                    { text: "Get up", points: 15 },
                    { text: "Drink warm milk", points: 8 },
                    { text: "Listen to music", points: 5 },
                    { text: "Meditate", points: 4 },
                    { text: "Take medicine", points: 3 }
                ]
            },
            {
                question: "Name something you might see at a baseball game",
                answers: [
                    { text: "Popcorn", points: 35 },
                    { text: "Peanuts", points: 30 },
                    { text: "Hot dogs", points: 25 },
                    { text: "Beer", points: 15 },
                    { text: "Scoreboard", points: 10 },
                    { text: "Mascot", points: 8 },
                    { text: "Fans", points: 5 },
                    { text: "Players", points: 3 }
                ]
            },
            {
                question: "Name something you might find in a kitchen drawer",
                answers: [
                    { text: "Spoons", points: 30 },
                    { text: "Forks", points: 25 },
                    { text: "Knives", points: 20 },
                    { text: "Utensils", points: 15 },
                    { text: "Junk drawer", points: 10 },
                    { text: "Batteries", points: 8 },
                    { text: "Rubber bands", points: 5 },
                    { text: "Tape", points: 3 }
                ]
            },
            {
                question: "Name something people do on Sunday morning",
                answers: [
                    { text: "Church", points: 35 },
                    { text: "Sleep in", points: 30 },
                    { text: "Read paper", points: 20 },
                    { text: "Breakfast", points: 15 },
                    { text: "Watch TV", points: 10 },
                    { text: "Exercise", points: 8 },
                    { text: "Yard work", points: 5 },
                    { text: "Family time", points: 3 }
                ]
            },
            {
                question: "Name something you might find in a garage",
                answers: [
                    { text: "Car", points: 40 },
                    { text: "Tools", points: 25 },
                    { text: "Lawn mower", points: 20 },
                    { text: "Bikes", points: 15 },
                    { text: "Boxes", points: 10 },
                    { text: "Workbench", points: 8 },
                    { text: "Sports equipment", points: 5 },
                    { text: "Old stuff", points: 3 }
                ]
            },
            {
                question: "Name something people wear to keep warm",
                answers: [
                    { text: "Coat", points: 35 },
                    { text: "Sweater", points: 30 },
                    { text: "Hat", points: 20 },
                    { text: "Gloves", points: 15 },
                    { text: "Scarf", points: 10 },
                    { text: "Boots", points: 8 },
                    { text: "Blanket", points: 5 },
                    { text: "Socks", points: 3 }
                ]
            },
            {
                question: "Name something you might find on a restaurant table",
                answers: [
                    { text: "Salt/pepper", points: 35 },
                    { text: "Napkins", points: 25 },
                    { text: "Menu", points: 20 },
                    { text: "Silverware", points: 15 },
                    { text: "Ketchup", points: 10 },
                    { text: "Sugar", points: 8 },
                    { text: "Flowers", points: 5 },
                    { text: "Water glasses", points: 3 }
                ]
            },
            {
                question: "Name something people do when they're happy",
                answers: [
                    { text: "Smile", points: 40 },
                    { text: "Laugh", points: 30 },
                    { text: "Sing", points: 20 },
                    { text: "Dance", points: 15 },
                    { text: "Celebrate", points: 10 },
                    { text: "Tell others", points: 8 },
                    { text: "Jump", points: 5 },
                    { text: "Hug someone", points: 3 }
                ]
            },
            {
                question: "Name something you might find in a classroom",
                answers: [
                    { text: "Desks", points: 35 },
                    { text: "Books", points: 25 },
                    { text: "Chairs", points: 20 },
                    { text: "Blackboard", points: 15 },
                    { text: "Teacher", points: 10 },
                    { text: "Students", points: 8 },
                    { text: "Pencils", points: 5 },
                    { text: "Posters", points: 3 }
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
        
        // Fast Money state
        this.fastMoneyMode = false;
        this.fastMoneyRound = 0;
        this.fastMoneyQuestionsSet = [];
        this.fastMoneyPlayer1Answers = [];
        this.fastMoneyPlayer2Answers = [];
        this.fastMoneyPlayer1Score = 0;
        this.fastMoneyPlayer2Score = 0;
        this.fastMoneyTimer = null;
        this.fastMoneyTimeLeft = 60;
        this.fastMoneyActive = false;
        
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
    
    createFamilyFeudTheme() {
        return () => {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const notes = [
                { freq: 523.25, duration: 0.2 }, // C5
                { freq: 659.25, duration: 0.2 }, // E5
                { freq: 783.99, duration: 0.2 }, // G5
                { freq: 1046.50, duration: 0.4 }, // C6
                { freq: 783.99, duration: 0.2 }, // G5
                { freq: 659.25, duration: 0.4 }  // E5
            ];
            
            let currentTime = audioContext.currentTime;
            
            notes.forEach((note, index) => {
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.value = note.freq;
                    oscillator.type = 'square';
                    
                    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + note.duration);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + note.duration);
                }, index * 200);
            });
        };
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
        
        // Fast Money elements
        this.fastMoneySection = document.getElementById('fastMoney');
        this.timerDisplay = document.getElementById('timer');
        this.timerFill = document.getElementById('timerFill');
        this.startFastMoneyBtn = document.getElementById('start-fast-money');
        this.submitFastMoneyBtn = document.getElementById('submit-fast-money');
        this.revealAnswersBtn = document.getElementById('reveal-answers');
        this.fastMoneyResults = document.getElementById('fastMoneyResults');
        this.answerReveals = document.getElementById('answerReveals');
        this.fastMoneyContinueBtn = document.getElementById('fast-money-continue');
        
        // Fast Money question and answer elements
        this.fastMoneyQuestionElements = [];
        this.fastMoneyAnswerElements = [];
        for (let i = 1; i <= 5; i++) {
            this.fastMoneyQuestionElements.push(document.getElementById(`question-${i}`));
            this.fastMoneyAnswerElements.push(document.getElementById(`answer-${i}`));
        }
        
        // Fast Money score elements
        this.playerNameEl = document.getElementById('player-name');
        this.playerScoreEl = document.getElementById('player-score');
        this.player2ScoreSection = document.getElementById('player2-score-section');
        this.player2ScoreEl = document.getElementById('player2-score');
        this.fastMoneyResultMessage = document.getElementById('fast-money-result-message');
        this.finalPlayerName = document.getElementById('final-player-name');
        this.finalPlayerScore = document.getElementById('final-player-score');
        this.finalPlayer2Score = document.getElementById('final-player2-score');
        this.finalPlayer2ScoreRow = document.getElementById('final-player2-score-row');
        
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
        console.log('Setting up host synchronization...');
        
        // Listen for host updates via localStorage
        window.addEventListener('storage', (e) => {
            console.log('Storage event detected:', e.key, e.newValue ? 'new value' : 'cleared');
            if (e.key === 'familyFeudHostState' && e.newValue) {
                try {
                    const hostState = JSON.parse(e.newValue);
                    console.log('Storage event - parsing host state:', hostState);
                    this.syncFromHost(hostState);
                } catch (error) {
                    console.error('Error parsing host state from localStorage:', error);
                }
            }
        });
        
        // Add polling mechanism as fallback for cross-window synchronization
        this.lastHostStateTimestamp = 0;
        this.pollCount = 0;
        setInterval(() => {
            this.pollHostState();
        }, 1000); // Poll every second
        
        // Add manual test function
        window.testHostSync = () => {
            console.log('Manual sync test triggered');
            this.pollHostState();
        };
        
        console.log('Host synchronization setup complete. Test with: testHostSync()');
    }
    
    pollHostState() {
        this.pollCount++;
        try {
            const hostStateStr = localStorage.getItem('familyFeudHostState');
            if (hostStateStr) {
                const hostState = JSON.parse(hostStateStr);
                console.log(`Poll #${this.pollCount}: Found host state with timestamp ${hostState.timestamp}, last was ${this.lastHostStateTimestamp}`);
                
                if (hostState.timestamp && hostState.timestamp > this.lastHostStateTimestamp) {
                    console.log('Newer host state found, syncing...');
                    this.lastHostStateTimestamp = hostState.timestamp;
                    this.syncFromHost(hostState);
                } else {
                    console.log('Host state is not newer, skipping');
                }
            } else {
                if (this.pollCount % 10 === 0) { // Log every 10 seconds
                    console.log(`Poll #${this.pollCount}: No host state found in localStorage`);
                }
            }
        } catch (error) {
            console.error('Error polling host state:', error);
        }
    }
    
    syncFromHost(hostState) {
        try {
            console.log('Received host state:', hostState);
            
            // Validate host state structure
            if (!hostState || typeof hostState !== 'object') {
                console.warn('Invalid host state received');
                return;
            }
            
            const oldQuestion = this.currentQuestionIndex;
            const oldTeam = this.currentTeam;
            
            console.log('Current question index:', this.currentQuestionIndex, 'New question index:', hostState.currentQuestionIndex);
            
            // Update questions if host has new ones
            if (hostState.questions && Array.isArray(hostState.questions)) {
                console.log('Updating questions from host state');
                this.updateQuestions(hostState.questions);
            }
            
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
                this.loadQuestionFromHost(this.currentQuestionIndex);
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
        
        // Fast Money events
        this.startFastMoneyBtn.addEventListener('click', () => this.startFastMoney());
        this.submitFastMoneyBtn.addEventListener('click', () => this.submitFastMoneyAnswers());
        this.revealAnswersBtn.addEventListener('click', () => this.revealFastMoneyAnswers());
        this.fastMoneyContinueBtn.addEventListener('click', () => this.hideFastMoneyResults());
        
        // Fast Money input events
        this.fastMoneyAnswerElements.forEach((input, index) => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && this.fastMoneyActive) {
                    // Focus next input or submit if last
                    if (index < this.fastMoneyAnswerElements.length - 1) {
                        this.fastMoneyAnswerElements[index + 1].focus();
                    } else {
                        this.submitFastMoneyAnswers();
                    }
                }
            });
        });
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
    
    loadQuestionFromHost(questionIndex) {
        try {
            // Validate question index
            if (questionIndex < 0 || questionIndex >= this.questions.length) {
                throw new Error(`Invalid question index: ${questionIndex}`);
            }
            
            this.currentQuestionIndex = questionIndex;
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
            console.error('Error loading question from host:', error);
            // Show error to user
            this.questionText.textContent = 'Error loading question from host. Please try again.';
            this.gameActive = false;
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
                    
                    // Check for Fast Money opportunity after scoring
                    this.checkForFastMoney();
                    
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
    
    // Fast Money Methods
    checkForFastMoney() {
        // Check if any team has 200+ points to trigger Fast Money
        if (this.team1Score >= 200 || this.team2Score >= 200) {
            this.showFastMoneyOption();
        }
    }
    
    showFastMoneyOption() {
        const message = this.team1Score >= 200 ? 
            'Team 1 has reached 200+ points! Ready for Fast Money?' :
            'Team 2 has reached 200+ points! Ready for Fast Money?';
        
        this.resultMessage.textContent = 'Fast Money Time!';
        this.resultDetails.textContent = message;
        this.roundResult.style.display = 'flex';
        
        // Modify continue button to start Fast Money
        this.continueBtn.textContent = 'Start Fast Money';
        this.continueBtn.onclick = () => {
            this.hideRoundResult();
            this.initializeFastMoney();
        };
    }
    
    initializeFastMoney() {
        this.fastMoneyMode = true;
        this.fastMoneyRound = 1;
        this.fastMoneyPlayer1Answers = [];
        this.fastMoneyPlayer2Answers = [];
        this.fastMoneyPlayer1Score = 0;
        this.fastMoneyPlayer2Score = 0;
        
        // Select 5 random Fast Money questions
        this.fastMoneyQuestionsSet = this.getRandomFastMoneyQuestions();
        
        // Hide main game, show Fast Money
        document.querySelector('.game-main').style.display = 'none';
        document.querySelector('.controls-section').style.display = 'none';
        this.fastMoneySection.style.display = 'block';
        
        // Setup first player
        this.setupFastMoneyPlayer();
    }
    
    getRandomFastMoneyQuestions() {
        const shuffled = [...this.fastMoneyQuestions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 5);
    }
    
    setupFastMoneyPlayer() {
        const playerName = this.fastMoneyRound === 1 ? 'Player 1' : 'Player 2';
        this.playerNameEl.textContent = playerName;
        this.finalPlayerName.textContent = playerName + ': ';
        
        // Debug: Check if questions are loaded
        console.log('Fast Money questions set:', this.fastMoneyQuestionsSet);
        console.log('Fast Money questions array:', this.fastMoneyQuestions);
        
        // Show questions
        this.fastMoneyQuestionElements.forEach((element, index) => {
            if (this.fastMoneyQuestionsSet[index]) {
                element.textContent = this.fastMoneyQuestionsSet[index].question;
            } else {
                element.textContent = 'Error loading question';
                console.error('No question at index:', index);
            }
        });
        
        // Clear answers
        this.fastMoneyAnswerElements.forEach(input => {
            input.value = '';
            input.disabled = true;
        });
        
        // Reset timer
        this.fastMoneyTimeLeft = 60;
        this.timerDisplay.textContent = '60';
        this.timerFill.style.width = '100%';
        
        // Show/hide appropriate elements
        this.startFastMoneyBtn.style.display = 'inline-block';
        this.submitFastMoneyBtn.style.display = 'none';
        this.revealAnswersBtn.style.display = 'none';
        this.fastMoneyResults.style.display = 'none';
        
        if (this.fastMoneyRound === 2) {
            this.player2ScoreSection.style.display = 'block';
            this.finalPlayer2ScoreRow.style.display = 'block';
        }
    }
    
    startFastMoney() {
        this.fastMoneyActive = true;
        this.startFastMoneyBtn.style.display = 'none';
        this.submitFastMoneyBtn.style.display = 'inline-block';
        
        // Enable answer inputs
        this.fastMoneyAnswerElements.forEach(input => {
            input.disabled = false;
            input.value = '';
        });
        
        // Focus first input
        this.fastMoneyAnswerElements[0].focus();
        
        // Start timer
        this.startFastMoneyTimer();
        
        // Play start sound
        this.playSound('theme');
    }
    
    startFastMoneyTimer() {
        this.fastMoneyTimer = setInterval(() => {
            this.fastMoneyTimeLeft--;
            this.timerDisplay.textContent = this.fastMoneyTimeLeft;
            
            // Update timer bar
            const percentage = (this.fastMoneyTimeLeft / 60) * 100;
            this.timerFill.style.width = percentage + '%';
            
            // Change color based on time left
            if (this.fastMoneyTimeLeft <= 10) {
                this.timerFill.style.backgroundColor = '#e74c3c';
            } else if (this.fastMoneyTimeLeft <= 30) {
                this.timerFill.style.backgroundColor = '#f39c12';
            }
            
            if (this.fastMoneyTimeLeft <= 0) {
                this.stopFastMoneyTimer();
                this.submitFastMoneyAnswers();
            }
        }, 1000);
    }
    
    stopFastMoneyTimer() {
        if (this.fastMoneyTimer) {
            clearInterval(this.fastMoneyTimer);
            this.fastMoneyTimer = null;
        }
        this.fastMoneyActive = false;
    }
    
    submitFastMoneyAnswers() {
        this.stopFastMoneyTimer();
        
        // Collect answers
        const answers = [];
        this.fastMoneyAnswerElements.forEach(input => {
            answers.push(input.value.trim());
        });
        
        if (this.fastMoneyRound === 1) {
            this.fastMoneyPlayer1Answers = answers;
            this.calculateFastMoneyScore(answers, 1);
        } else {
            this.fastMoneyPlayer2Answers = answers;
            this.calculateFastMoneyScore(answers, 2);
        }
        
        // Disable inputs
        this.fastMoneyAnswerElements.forEach(input => {
            input.disabled = true;
        });
        
        this.submitFastMoneyBtn.style.display = 'none';
        this.revealAnswersBtn.style.display = 'inline-block';
        
        // Update score display
        if (this.fastMoneyRound === 1) {
            this.playerScoreEl.textContent = this.fastMoneyPlayer1Score;
        } else {
            this.player2ScoreEl.textContent = this.fastMoneyPlayer2Score;
        }
    }
    
    calculateFastMoneyScore(answers, playerNum) {
        let totalScore = 0;
        
        answers.forEach((answer, index) => {
            if (!answer) return;
            
            const question = this.fastMoneyQuestionsSet[index];
            const matchedAnswer = question.answers.find(qa => 
                this.isAnswerMatch(answer, qa.text)
            );
            
            if (matchedAnswer) {
                totalScore += matchedAnswer.points;
                this.playSound('yes');
            }
        });
        
        if (playerNum === 1) {
            this.fastMoneyPlayer1Score = totalScore;
        } else {
            this.fastMoneyPlayer2Score = totalScore;
        }
    }
    
    revealFastMoneyAnswers() {
        this.revealAnswersBtn.style.display = 'none';
        
        // Create answer reveal content
        this.answerReveals.innerHTML = '';
        
        this.fastMoneyQuestionsSet.forEach((question, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-reveal-item';
            
            const questionText = document.createElement('div');
            questionText.className = 'reveal-question';
            questionText.textContent = `${index + 1}. ${question.question}`;
            
            const player1Answer = document.createElement('div');
            player1Answer.className = 'reveal-answer player1';
            player1Answer.textContent = `P1: ${this.fastMoneyPlayer1Answers[index] || 'No answer'}`;
            
            const correctAnswer = document.createElement('div');
            correctAnswer.className = 'reveal-correct';
            
            // Find the correct answer
            const player1Match = question.answers.find(qa => 
                this.fastMoneyPlayer1Answers[index] && 
                this.isAnswerMatch(this.fastMoneyPlayer1Answers[index], qa.text)
            );
            
            if (player1Match) {
                correctAnswer.innerHTML = `<span class="correct">✓ ${player1Match.text} (${player1Match.points})</span>`;
            } else {
                correctAnswer.innerHTML = `<span class="incorrect">✗ ${question.answers[0].text} (${question.answers[0].points})</span>`;
            }
            
            answerDiv.appendChild(questionText);
            answerDiv.appendChild(player1Answer);
            answerDiv.appendChild(correctAnswer);
            
            // Add player 2 answer if it exists
            if (this.fastMoneyRound === 2) {
                const player2Answer = document.createElement('div');
                player2Answer.className = 'reveal-answer player2';
                player2Answer.textContent = `P2: ${this.fastMoneyPlayer2Answers[index] || 'No answer'}`;
                answerDiv.appendChild(player2Answer);
                
                const player2Match = question.answers.find(qa => 
                    this.fastMoneyPlayer2Answers[index] && 
                    this.isAnswerMatch(this.fastMoneyPlayer2Answers[index], qa.text)
                );
                
                if (player2Match) {
                    correctAnswer.innerHTML += ` | <span class="correct">✓ ${player2Match.text} (${player2Match.points})</span>`;
                } else {
                    correctAnswer.innerHTML += ` | <span class="incorrect">✗ No match</span>`;
                }
            }
            
            this.answerReveals.appendChild(answerDiv);
        });
        
        // Show results
        this.showFastMoneyResults();
    }
    
    showFastMoneyResults() {
        this.fastMoneyResults.style.display = 'block';
        
        const totalScore = this.fastMoneyRound === 1 ? 
            this.fastMoneyPlayer1Score : 
            this.fastMoneyPlayer1Score + this.fastMoneyPlayer2Score;
        
        if (this.fastMoneyRound === 1) {
            this.fastMoneyResultMessage.textContent = `Player 1 Score: ${this.fastMoneyPlayer1Score}`;
            this.finalPlayerScore.textContent = this.fastMoneyPlayer1Score;
            this.fastMoneyContinueBtn.textContent = 'Player 2 Turn';
        } else {
            const combinedScore = this.fastMoneyPlayer1Score + this.fastMoneyPlayer2Score;
            this.fastMoneyResultMessage.textContent = `Combined Score: ${combinedScore}`;
            this.finalPlayerScore.textContent = this.fastMoneyPlayer1Score;
            this.finalPlayer2Score.textContent = this.fastMoneyPlayer2Score;
            
            if (combinedScore >= 200) {
                this.fastMoneyResultMessage.textContent += ' - WINNER!';
                this.playSound('win');
            } else {
                this.fastMoneyResultMessage.textContent += ' - Try Again!';
            }
            
            this.fastMoneyContinueBtn.textContent = 'End Game';
        }
    }
    
    hideFastMoneyResults() {
        if (this.fastMoneyRound === 1) {
            // Start player 2 round
            this.fastMoneyRound = 2;
            this.setupFastMoneyPlayer();
        } else {
            // End game
            this.endFastMoneyGame();
        }
    }
    
    endFastMoneyGame() {
        this.fastMoneyMode = false;
        
        // Show main game, hide Fast Money
        this.fastMoneySection.style.display = 'none';
        document.querySelector('.game-main').style.display = 'block';
        document.querySelector('.controls-section').style.display = 'block';
        
        // Add Fast Money scores to team scores
        const winningTeam = this.team1Score >= 200 ? 1 : 2;
        const fastMoneyScore = this.fastMoneyPlayer1Score + this.fastMoneyPlayer2Score;
        
        if (winningTeam === 1) {
            this.team1Score += fastMoneyScore;
        } else {
            this.team2Score += fastMoneyScore;
        }
        
        this.updateDisplay();
        this.endGame();
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
