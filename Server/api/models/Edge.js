class Edge {
  constructor(idx, state, box1, box2) {
    this.idx = idx;
    this.state = state; //0 neutral , 1 red, 2 blue
    this.box1 = box1;
    this.box2 = box2;
  }
  static EmptyEdge() {
    return new Edge();
  }
}


module.exports = Edge;