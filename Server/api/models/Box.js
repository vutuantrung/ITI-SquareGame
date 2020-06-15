'use strict';


class Box {
    constructor(idx,x,y) {
      this.idx = idx;
      this.x=x;
      this.y=y;
      this.top = {};//edge
      this.right = {};
      this.bottom = {};
      this.left = {};
      this.state = 0; //0 neutral , 1 red, 2 blue
    }
    checkBorder(playerId)
    {
      if(this.top.state>0 
        && this.left.state>0 
        && this.bottom.state>0 
        && this.right.state>0 )
        {
          this.state = playerId;
          return true;
        }
        return false;
    }
    static EmptyBox() {
      return new Box();
    }
  }
module.exports = Box;
