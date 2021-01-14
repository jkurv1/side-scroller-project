
class Square {
  
  constructor() {
    this.r = 25
    this.x = width;
    this.y = random(height - this.r);
  }
  
  move()
   {
     this.x -= 5;
   }
  
  show() {
   fill(random(255),random(255),random(255));
    rect (this.x, this.y, this.r, this.r);
  }
}