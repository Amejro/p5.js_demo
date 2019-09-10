//y and x variables of the ellipse
let circle = {
  x: 0,
  y: 0
}
let speed = 1;
//fill variables
let calour = {
  r:0,
  g:0,
  b:0
}

//length and width variable of ellipse
let size = {
  lent:15,
  wit:15
}
/*let backGround = {
  red:0,
  green:0,
  blue:0
}*/


function setup() {
  // put setup code here
  createCanvas(600, 600);
  
}

function draw() {
  
  background(0);


  calour.r = random(100, 255);
  calour.g = random(0, 200);
  calour.b = random(0, 255);
 noStroke();
  fill(calour.r, calour.g, calour.b);
  
size.lent = random(0, 100);
size.wit = random(0, 100),
  
  ellipse(circle.x, circle.y, size.lent, size.wit);

  if (circle.x > width){
    speed = -1;

  }
 
  

  circle.x = circle.x + speed;
  circle.y = circle.y + speed;

  //size.lent = size.lent + 1;
  //size.wit = size.wit + 1; 
  

}
