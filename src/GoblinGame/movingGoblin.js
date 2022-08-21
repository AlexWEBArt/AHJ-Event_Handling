export default class MovingGoblin {
  constructor() {
    this.goblin = document.querySelector('.hole_has-goblin')
    
  }
  moving() {
    setInterval(() => {
      const prevGoblinIndex = parseInt(this.goblin.id.match(/\d+/), 10);
      let randomIndex = Math.floor(1 + Math.random() * 16 - 1 + 1);
      if (prevGoblinIndex === randomIndex) {
        if (randomIndex === 16) {
          randomIndex -= 1;
        }
        randomIndex += 1;
      }
      const nextGoblin = document.getElementById(`hole${randomIndex}`);
    
      document.querySelector('.hole_has-goblin').classList.remove('hole_has-goblin');
      nextGoblin.classList.add('hole_has-goblin');
    }, 1000);
  }
}
