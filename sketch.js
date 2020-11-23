var hr , min,sec ,hrAngle,minAngle,secAngle
function setup() {
  createCanvas(400,400);
 angleMode(degrees);

}

function draw() {
  background("black");  
  translate(200,200);
  rotate(-90)
  hr=hour();
  min=minute();
  sec=second();

  minAngle=map(min,0,60,0,360);
  secAngle=map(sec,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  //second hand
  push();
  rotate(secAngle);
  strokeWeight(2);
  stroke("red");
  line(0,0,100,0);
  pop();

  //minute hand
  push();
  rotate(minAngle);
  strokeWeight(2);
  stroke("green");
  line(0,0,75,0);
  pop();

  //hour hand
  push();
  rotate(hrAngle);
  strokeWeight(2);
  stroke("blue");
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);
   
  //draw arcs
  strokeWeight(5);
  noFill();

  //sec
  stroke("red");
  arc(0,0,300,300,0,secAngle);
  stroke("green");
  arc(0,0,280,280,0,minAngle);
  stroke("blue");
  arc(0,0,260,260,0,hrAngle);
 

  drawSprites();
}