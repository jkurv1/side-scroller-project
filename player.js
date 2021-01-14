class Spaceship {
  constructor() {
    this.r = 100;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.5;
    this.score = 0;
  }
  

  
  jump() {
   // if (this.y == height - this.r) {
    this.vy = -10;
    //}
  }
  
  hits(cow) {
   return collideRectRect(this.x, this.y, this.r, this.r, cow.x, cow.y, cow.r, cow.r);
    
  }
  
  move() {
    this.y += this.vy
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
  
  show() {
    image(pImg, this.x, this.y, this.r, this.r);
    
    
    
  }
}