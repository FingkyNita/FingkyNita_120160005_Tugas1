let x=299.5;
let y=15;
function setup() {
  // put setup code here
  createCanvas(400,200);
}

function draw() {
  // put drawing code here
  background(23,229,250);
  line(200,0,200,200);
  fill(160,160,160);
  triangle(99.5,15,98,32,101,32);
  fill(255,0,0);
  arc(99.5,51,40,40, radians(180),radians(0));
  fill(160,160,160);
  rect(79.5,51,40,90);
  fill(0,0,0);
  ellipse(99.5,70,25,25);
  ellipse(99.5,110,25,25);
  fill(102,255,255);
  ellipse(99.5,110,20,20);
  ellipse(99.5,70,20,20);
  fill(255,0,0);
  triangle(80,90,50,130,80,130);
  triangle(120,90,120,130,150,130);
  rect(84.5,141,30,5);
  rect(79.5,146,40,7);
  rect(74.5,153,50,7);

  //kanan
  fill(160,160,160);
  triangle(x,y,x-1.5,y+17,x+1.5,y+17);
  fill(255,0,0);
  arc(x,y+36,40,40, radians(180),radians(0));
  fill(160,160,160);
  rect(x-20,y+36,40,90);
  fill(0,0,0);
  ellipse(x,y+55,25,25);
  ellipse(x,y+95,25,25);
  fill(102,255,255);
  ellipse(x,y+55,20,20);
  ellipse(x,y+95,20,20);
  fill(255,0,0);
  triangle(x-19.5,y+75,x-49.5,y+115,x-19.5,y+115);
  triangle(x+20.5,y+75,x+20.5,y+115,x+50.5,y+115);
  rect(x-15,y+126,30,5);
  rect(x-20,y+131,40,7);
  rect(x-25,y+138,50,7);

  y=y-2;
  if(y<0-100)y=300
}