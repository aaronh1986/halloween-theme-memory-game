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
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // game.startGame();
            let audioController = new AudioController();
            audioController.startMusic();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            //game.flipCard(card)
        })
    })
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

