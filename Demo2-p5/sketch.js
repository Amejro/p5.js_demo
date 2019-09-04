/*let circle = {
  x: 0,
  y: 200,
  diameter: 50,
}*/

let r = 0;
let b = 255;
let g = 0;
let mov =0;
let fillColor =0;

function setup() {
  // put setup code here
  createCanvas(600, 400);
}

function draw() {
  //background
  r = map(mov, 0, 600, 0,255);
  b = map(mov, 0, 600, 255, 0);
  g = map(mov, 0, 600, 255, 0);
  background(r, g, b);
  //circle
  fillColor = map(fillColor, 0, 600, 0, 250);
  fill(fillColor,0, 250);
  fillColor=fillColor+1;
  noStroke();
  ellipse(mov, 200, 64, 64);

  mov = mov + 1

}