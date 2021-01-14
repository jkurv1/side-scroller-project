let player;
let pImg;
let oImg;
let bImg;
let cows = [];
let squares = [];
this.score = 0;
this.x = 50;
let sceneNum = 0;

function preload() {
  pImg = loadImage('spaceship.png')
  oImg = loadImage('cow.png')
  bImg = loadImage('background.png')
}

function setup() {
  createCanvas(800, 450);
  player = new Spaceship();
}

function keyPressed() {
  if (key === ' ') {
    player.jump();
  }
  else if (sceneNum === 0 && key === 's') {
    sceneNum = 1;}

}

function draw() {
   if (sceneNum === 0) {
    scene0();

  } else if (sceneNum === 1) {
    scene1();
  } else if (sceneNum === 2) {
    scene2();
  }
}

function scene1() {
  
  if (random(1) < 0.03) {
    cows.push(new Cow());
  }
  if (random(1) < 0.015) {
    squares.push(new Square());
  }
  
  background(bImg);
  for (let s of squares) {
    s.move();
    s.show();
    if (player.hits(s)) {
      sceneNum++
    }
  }
  fill(255);
  textSize(75);
  text(this.score, this.x, 50, 50);
  
   for (let c of cows) {
    c.move();
    c.show();
    if (player.hits(c)) {
     this.score++
      c.y = 500;
    }
    
  }
  
  player.show();
  player.move();
}
function scene2() {
  background(51);
  textSize(50);
  fill(255, 255, 255);
  text("Nice Try! You Got " +this.score + " points!", 100, 225);
}

function scene0() {
  background(51);
  textSize(50);
  fill(255, 255, 255);
  text("funny side scroller!", 100, 100);
  textSize(25);
  fill(255, 255, 255);
  text("press s", 275, 300);}

function scene0() {
  background(51);
  textSize(50);
  fill(255, 255, 255);
  text("The invasion of the Space Cows!", 50, 100);
  textSize(25);
  fill(255, 255, 255);
  text("collect the cows and avoid the evil squares", 200, 225);
  text("press s", 275, 300);}