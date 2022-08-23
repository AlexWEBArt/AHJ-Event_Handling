import MovingGoblin from './movingGoblin';

export default class EventHandlingGame {
  constructor() {
    this.element = document.querySelector('.hole-field');
    this.element.addEventListener('click', EventHandlingGame.onGoblinClick);

    this.Goblin = new MovingGoblin().moving();
  }

  static onGoblinClick(e) {
    if (e.target.classList.contains('hole_has-goblin')) {
      document.getElementById('got').textContent = Number(document.getElementById('got').textContent) + 1;
      e.target.classList.remove('hole_has-goblin');
    } else {
      document.getElementById('miss').textContent = Number(document.getElementById('miss').textContent) + 1;
      if (document.getElementById('miss').textContent > 4) {
        alert('Вы проиграли. Начните сначала');
        document.getElementById('miss').textContent = 0;
        document.getElementById('got').textContent = 0;
      }
    }
  }
}

const game = new EventHandlingGame();
game.Goblin;
