import MovingGoblin from "./movingGoblin"

export default class EventHandlingGame {
    constructor(element) {
        if (typeof element == 'string') {
            element = document.querySelector(element);
        }

        this.onGoblinClick = this.onGoblinClick.bind(this);
        this._element = element
        this._element.addEventListener('click', this.onGoblinClick)

        this.Goblin = new MovingGoblin().moving()
    }

    onGoblinClick(e) {
        console.log(e)
        if (e.target.classList.contains('hole_has-goblin')) {
            document.getElementById('got').textContent++
        } else {
            document.getElementById('miss').textContent++
            if (document.getElementById('miss').textContent > 4) {
                alert('Вы проиграли. Начните сначала')
                document.getElementById('miss').textContent = 0
                document.getElementById('got').textContent = 0
            }
        }
    }
}

const game = new EventHandlingGame('.hole-field')
game.Goblin