# Family Feud Game 🎉

A fully functional browser-based Family Feud game with authentic TV show sound effects, animations, and a complete host control panel for backend game management.

## Features 🎮

### 🎵 Authentic Sound Effects
- **Correct Answer**: Classic "YES" ding sound from the TV show
- **Wrong Answer**: Authentic Family Feud buzzer sound
- **Strike Sound**: Buzzer plays when teams get strikes
- **Win Sound**: Game show-style victory melody
- **Theme Song**: Custom Family Feud-inspired theme music

### 🎯 Game Mechanics
- **Two-Team Gameplay**: Teams alternate turns answering survey questions
- **Smart Answer Matching**: Accepts partial matches (e.g., "tv" matches "Watch TV")
- **Strike System**: 3 strikes and the round ends
- **Point System**: Each answer has different point values based on survey responses
- **Visual Feedback**: Green reveal for correct answers, red shake for wrong answers

### �️ Host Control Panel (NEW!)
- **Complete Backend Control**: Separate host panel for game management
- **Answer Visibility**: Host can see all answers and their point values
- **Manual Answer Reveal**: Host can reveal answers individually
- **Score Management**: Add points manually to teams
- **Game Control**: Load questions, add strikes, switch teams, reset rounds
- **Sound Effects Control**: Trigger any sound effect manually
- **Real-time Sync**: Host panel syncs with main game in real-time

### 🏠 Welcome Page (NEW!)
- **Professional Landing Page**: Beautiful welcome screen with game instructions
- **Theme Music**: Auto-playing theme song with volume controls
- **Easy Navigation**: Quick access to game and host panel
- **Game Instructions**: Clear how-to-play guide for new players

### �🎨 Visual Design
- **Authentic Theme**: Golden color scheme matching the TV show
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Answer reveals, strikes, and transitions
- **Professional UI**: Clean, modern interface with game show aesthetics
- **Navigation System**: Easy switching between welcome page, game, and host panel

## How to Play 🎲

### For Players:
1. **Go to Welcome Page**: Open `welcome.html` in your web browser
2. **Start Game**: Click "Start Game" to begin playing
3. **Team 1 Begins**: The first team starts answering the survey question
4. **Type Answers**: Enter your answer in the input field and press Enter or click Submit
5. **Score Points**: Correct answers reveal with point values
6. **Avoid Strikes**: Wrong answers add strikes - 3 strikes ends the round
7. **Switch Teams**: Teams alternate after strikes
8. **Win the Game**: Highest score after all questions wins!

### For Hosts:
1. **Open Host Panel**: Click "Host Panel" on welcome page or open `host.html`
2. **View All Answers**: See complete answer list with point values
3. **Control Game Flow**: Load questions, reveal answers, manage strikes
4. **Manage Scores**: Add points manually as needed
5. **Sound Control**: Trigger sound effects for dramatic effect
6. **Real-time Sync**: Changes automatically sync with player game

## Pages & Files �

### Main Pages
```
windsurf-project/
├── welcome.html          # Welcome page with theme music
├── index.html            # Main game interface
├── host.html             # Host control panel
├── styles.css            # Global styling
├── script.js             # Main game logic
├── host.js               # Host panel logic
├── sounds/               # Audio files directory
│   ├── correct-answer.mp3
│   ├── family-feud-buzzer.mp3
│   ├── family-feud-yes-ding.mp3
│   └── family-feud-theme.mp3 (empty - fallback to generated)
└── README.md             # This file
```

### Navigation
- **Welcome Page** (`welcome.html`): Landing page with theme music and navigation
- **Main Game** (`index.html`): Player game interface
- **Host Panel** (`host.html`): Backend control panel for game hosts

## Host Panel Features 🎙️

### Game Controls
- **Question Selection**: Choose from 5 survey questions
- **Quick Actions**: Load questions, add strikes, switch teams
- **Game Management**: New game, next question, end game
- **Round Control**: Reset current round

### Answer Management
- **Answer Visibility**: See all answers with point values
- **Manual Reveal**: Reveal specific answers on demand
- **Score Management**: Add custom points to teams
- **Visual Indicators**: See which answers are already revealed

### Sound Effects
- **Manual Trigger**: Play any sound effect on command
- **Correct Answer**: Success sound for right answers
- **Wrong Answer**: Buzzer for incorrect responses
- **Strike**: Dramatic strike sound
- **Win Sound**: Victory fanfare

### Real-time Status
- **Game State**: Current question, team, strikes, answers found
- **Live Scores**: Real-time score updates for both teams
- **Connection Status**: Shows sync status with main game
- **Auto-sync**: Changes automatically reflect in player game

## Technical Details 🛠️

### Technologies Used
- **HTML5**: Semantic structure and game layout
- **CSS3**: Animations, transitions, and responsive design
- **JavaScript ES6+**: Game logic, sound system, and interactivity
- **Web Audio API**: Dynamic sound generation for theme and win sounds
- **LocalStorage**: Real-time sync between host panel and main game

### Real-time Synchronization
- **Bidirectional Sync**: Host panel and main game stay in sync
- **State Broadcasting**: Game state updates every second
- **Change Detection**: Immediate updates when host makes changes
- **Conflict Resolution**: Host controls take precedence over player actions

### Sound System
- **Authentic TV Sounds**: Downloaded from official sources
- **Fallback Generation**: Custom sounds if audio files fail
- **Volume Control**: Adjustable volume in welcome page
- **Multiple Formats**: Support for various audio scenarios

## Browser Compatibility 🌐

- **Chrome**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile**: Responsive design works on all modern mobile browsers

## Getting Started 🚀

### For Players:
1. **Download/Clone** the project files
2. **Open** `welcome.html` in a web browser
3. **Enjoy** the theme music and click "Start Game"
4. **Play** Family Feud with friends!

### For Hosts:
1. **Open** `welcome.html` in your browser
2. **Click** "Host Panel" to open the control interface
3. **Manage** the game while players play on the main screen
4. **Control** sound effects, scores, and game flow

### Two-Screen Setup (Recommended):
- **Screen 1**: Main game for players (`index.html`)
- **Screen 2**: Host panel for game control (`host.html`)
- **Real-time Sync**: Both screens stay synchronized automatically

No installation required - it's a pure web-based game!

## Future Enhancements 🔮

- [ ] Add more survey questions
- [ ] Implement Fast Money round
- [ ] Add player names and customization
- [ ] Include timer for answers
- [ ] Add sound volume controls in game
- [ ] Implement WebSocket for true real-time multiplayer
- [ ] Add audience voting feature
- [ ] Create mobile app version

---

**Enjoy the complete Family Feud experience with professional host controls!** 🎊
