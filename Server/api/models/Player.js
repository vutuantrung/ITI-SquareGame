class Player {
  constructor(username = "", score = 0) {
    this.username = username;
    this.score = score;
  }
  static EmptyPlayer() {
    return new Player();
  }
}

module.exports = Player;