let spot = {
  x: 100,
  y: 50
}

let col = {
  r: 255,
  g: 0,
  b: 0
}
let bakground = {
  red:0,
  gren: 0,
  blue:0
}

function setup() {
  createCanvas(600, 600);
  
  background(bakground.red, bakground.gren, bakground.blue);
  
} 

function draw() {
  //background
  bakground.red = random(100, 255);
  bakground.gren = random(0, 255);
  bakground.blue = random(100, 290);
  

//ellipse
  col.r = random(10, 255);
  col.g = random(0, 255);
  col.b = random(100, 190);
  spot.x = random(0, width);
  spot.y = random(0, height);
  noStroke();
fill(col.r, col.g, col.b, 100);
ellipse(spot.x, spot.y, 24, 24);  

}
function mousePressed() {
  
  background(bakground.red, bakground.gren, bakground.blue);
}