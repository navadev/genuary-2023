let startx = 0;
let starty = 0;

let startR = 0
let startG = 0;
let startB= 0;
let w = 100;
let i = 0;
let rot = 0;
let dir = 1;

function setup() {
  createCanvas(400, 400);
  background(255);
  for (let i = 0; i <= 400; i+=w) {
    startR = random(628);
    startG = random(628);
    startB = random(628);
  }
}

function draw() {
  
  colorMode(RGB, 255, 255, 255, 1)


  let a = 255 * sin(0.01 * startR) + 255;
  let b = 255 * sin(0.01 * startG) + 255
  let c = 255 * sin(0.01 * startB) + 255
  fill(a, b, c, 1);
  noStroke();
  translate(width/2, height/2);
  rotate(rot += 1 * dir)
  circle(startx, starty + i, 10);  
  circle(startx, starty + i + 50, 20);
  circle(startx, starty + i, 30);  
  circle(startx, starty + i + 100, 40);
  startR += 1;
  startG += 1;
  startB += 1;
  startx = (startx + 100) % width * 0.97;
  if (startx == 0) {
    i = (i+15) % 400;
    dir *= -1;
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}