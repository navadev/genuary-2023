let x1 = 0;
let y1 = 0;
let w = 50;
let s = 0;


function setup() {
  
  createCanvas(400, 400);
  x1 = width / 2;
  y1 = height / 2;
  background(0);
}


function draw() {
  
  stroke(random(255), random(255), random(255));
  strokeWeight(2);
  g = random(-5, 5);
  line(x1, y1, x1 + w, y1);
  line(x1 + w, y1, x1 + w, y1 + w + g);
  line(x1 + w, y1 + w, x1, y1 + w + g);
  line(x1, y1 + w, x1, y1 + g);
  
  x1 = (x1 + random(width)) % width;
  y1 = (y1 + random(width)) % height;
  
  
}

function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas('myCanvas', 'png');
        // fill(200, 200, 0);

    }
}