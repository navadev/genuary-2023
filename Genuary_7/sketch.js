let startR = 0;
let startG = 0;
let startB = 0;
let rot = 0;
function setup() {
  createCanvas(400, 400);
  
  startR = random(628);
  startG = random(628);
  startB = random(628);
  colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
  
  let a = 255 * sin(0.001 * startR) + 255;
  let b = 255 * sin(0.01 * startG) + 255
  let c = 255 * sin(0.01 * startB) + 255
  background(255 - a, 255 - b, 255 -c);
  strokeWeight(30);
  stroke(a, b, c, 0.8);
  translate(width/2, height/2);
  rotate(rot += 0.001);
  for (let i = 0;i < 100; i+= 10) {
    
    line(-100 - i/2, -100, 100 + i/2, 100);
    rotate(rot += 0.0005);
  }
  startR += 1;
  startG += 1;
  startB += 1;
}