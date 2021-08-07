class AudioController {
  constructor() {
    this.bgMusic = new Audio('./assets/images/audio/creepy.mp3');
    this.flipSound = new Audio('./assets/images/audio/flip.wav');
    this.matchSound = new Audio('./assets/images/audio/match.wav');
    this.victorySound = new Audio('./assets/images/audio/victory.wav');
    this.gameOverSound = new Audio('./assets/images/audio/gameOver.wav');
    this.bgMusic.volume = 0.5; //Half way
    this.bgMusic.loop = true;
  }
  startMusic() {
      this.bgMusic.play();
  }
  stopMusic() {
      this.bgMusic.pause();
      this.bgMusic.currentTime = 0;
  }
  flip() {
      this.flipSound.play();
  }
  match() {
      this.matchSound.play();
  }
  victory() {
      this.stopMusic();
      this.victory.play();
  }
  gameOver() {
      this.stopMusic();
      this.gameOverSound.play();
  }
}

class MixOrMatch {
    constructor(totalTime, cards) {
      this.cardsArray = cards;
      this.totalTime = totalTime;
      this.timeRemaining = totalTime;
      this.timer = document.getElementById('time-remaining');
      this.ticker = document.getElementById('flips');
      this.audioController = new AudioController();
    }
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];//Any flipped cards will be put in here, and then checked to see if there's a match or not
        this.busy = true;
    }
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
        }
    }
    canFlipCard(card) {
        return true; 
        // !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(100, cards);
     
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
            
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card)
        })
    })
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

