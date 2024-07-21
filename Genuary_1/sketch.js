let MAX_POINTS = 100;
var points = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Point {
  constructor(x, y) {
    this.t = 0;
    this.x = x;
    this.y = y;
    this.A = getRandomInt(1,5);
    this.deltaX = getRandomInt(0,400);
    this.H = getRandomInt(2, 4);
    this.R = getRandomInt(0,255);
    this.G = getRandomInt(0,255);
    this.B = getRandomInt(0,255);
    this.start = true;
    this.x0 = 0
    this.y0 = 0;
    this.gravity = -1;
  }
  
  draw() {
    stroke(this.R, this.G, this.B);
    ellipse(this.x, this.y, 2, 2);
    var prev_x = this.x, prev_y = this.y;
    if (this.start) {
      this.y = (this.y + 10);
      this.deltaX = this.A * Math.cos(Math.PI * this.t / 100);
      this.x = this.x + this.deltaX;
    } else {
      this.y = this.y0 + this.v0y * this.t - 0.5 * this.gravity * this.t * this.t;
      this.x = this.x0 + this.v0x * this.t;
      //console.log(this.y)
      //console.log(this.x, this.y);
      
      
    }
    this.t += 1;

    if (this.x <= 0 || this.x >= 398) {
      this.start = false;
      this.x0 = this.x;
      this.y0 = this.y;
      this.v0x = -(this.x - prev_x);
      this.v0y = (this.y - prev_y);
      this.t = 1;
    }
    
    if (this.y >= 400) {
      this.start = false;
      this.x0 = this.x;
      this.y0 = this.y;
      this.v0x = (this.x - prev_x);
      this.v0y = -1 * (this.y - prev_y);
      this.t = 1;
      //console.log("reflected", this.x, this.y, this.v0x, this.v0y);
    }
    //console.log(this.x, this.y, this.v0x, this.v0y);
  }
}

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  
  strokeWeight(2);

  for (let i = 0; i < MAX_POINTS; i++) {
    points.push(new Point(getRandomInt(0, 400), getRandomInt(0, 400)));
    //points.push(new Point(200, 340));
  }
  saveGif('mySketch', 5);
}

function draw() {
    background(255);
    for (let i = 0; i < MAX_POINTS; i++) {
      points[i].draw();
    }
}
 