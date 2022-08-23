export default class MovingGoblin {
  moving() {
    setInterval(() => {
      this.goblin = document.querySelector('.hole_has-goblin');
      const randomIndex = Math.floor(1 + Math.random() * 16 - 1 + 1);

      const nextGoblin = document.getElementById(`hole${randomIndex}`);
      if (this.goblin) {
        this.goblin.classList.remove('hole_has-goblin');
      }
      nextGoblin.classList.add('hole_has-goblin');
    }, 1000);
  }
}
