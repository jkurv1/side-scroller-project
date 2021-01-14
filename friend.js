class Cow {
  
  constructor() {
    this.r = 50
    this.x = width;
    this.y = random(height - this.r);
  }
  
  move()
   {
     this.x -= 5;
   }
  
  show() {
   fill(random(255),random(255),random(255));
    image(oImg, this.x, this.y, this.r, this.r);
  }
}