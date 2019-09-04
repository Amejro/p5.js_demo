//y and x variables of the ellipse
let circleX = 0;
let circleY = 0;
//fill variables
let calourR = 0;
let calourG = 0;
let calourB = 0;
//length and width variable of ellipse
let lent = 15;
let wit = 15;


function setup() {
  // put setup code here
  createCanvas(600, 600);
  
}

function draw() {
  // put drawing code here
  background(57, 76, 90);
  
 // fill(56, 45, 57);
  //noStroke(); 
  //rect(98, 64, 200, 200);

  
  noStroke();
  fill(calourR, calourG, calourB);
  calourR = calourR +2;
  calourG =calourG + 10;
  calourB = random(calourB +20);

  ellipse(circleX, circleY, lent, wit);

  circleX = circleX + 1;
  circleY = circleY + 1;

  lent = lent + 1;
  wit = wit + 1; 
  

}
   //background resets.
//function mousePressed(){
 // background(57, 76, 90);

//}