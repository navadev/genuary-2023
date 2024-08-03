let r_start = [];
let g_start = [];
let b_start = [];
function setup() {
  createCanvas(400, 400, WEBGL);
  frameRate(30);
  for (let i = 0; i <= 27; i++) {
    r_start[i] = random(0, 255);
    g_start[i] = random(0, 255);
    b_start[i] = random(0, 255);
  }
}

let x = 100, y = 1, z = 10;
//let x = 100, y = 100, z = 100;
function draw() {
  
  background(200);
  ambientLight(218, 112, 214);
  
  // Enable orbiting with the mouse.
  orbitControl();
  ambientLight(80);
  let n = 50 * noise(0.005 * frameCount);
  let i = 0;
  
  // left side
  let c = color(r_start[i], g_start[i], b_start[i]);
  directionalLight(c, createVector(1, 0, 0));
  
  i+=1;
  // right side
  c = color(r_start[i], g_start[i], b_start[i]);
  directionalLight(c, createVector(-1, 0, 0));
  
  i+=1;
  // up
  c = color(r_start[i], g_start[i], b_start[i]);
  directionalLight(c, createVector(0, 1, 0));
  
  i+=1;
  // down
  c = color(r_start[i], g_start[i], b_start[i]);
  directionalLight(c, createVector(0, -1, 0));
  
  i+=1;
  // behind
  c = color(r_start[i], g_start[i], b_start[i]);
  directionalLight(c, createVector(0, 0, 1));
  
  i+=1;
  // above
  c = color(r_start[i], g_start[i], b_start[i]);
  directionalLight(c, createVector(0, 0, -1));
  
    i+=1;
  // above
  c = color(r_start[i], g_start[i], b_start[i]);
  directionalLight(c, createVector(0, 0, 0));
  
      i+=1;
  // above
  c = color(r_start[i], g_start[i], b_start[i]);
  directionalLight(c, createVector(0, 0, 0));
  
  x = 1 * cos(frameCount * 0.01);
  y = 1 * cos(frameCount * 0.02);

  z = 1 * cos(frameCount * 0.08);
  camera(x, y, z);
  //console.log(x,y,z);

  // Style the sphere.
  noStroke();
  specularMaterial(150);
  shininess(0);
  metalness(100);

  // Draw the sphere.
  sphere(100);
}

function keyPressed() {
  saveGif('mySketch', 5);
}