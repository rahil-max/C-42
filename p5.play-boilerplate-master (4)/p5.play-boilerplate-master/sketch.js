var hr,mn,sc,hrangle,mnangle,scangle



function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 

  fill(0);
  stroke(	204, 255, 0);
  strokeWeight(10)
  circle(width/2 , height/2 , 400);

  translate(width / 2, height / 2);
  rotate(-90);

  hr = hour();
  hrangle = map(hr % 12,0,12,0,360);

  push();
    rotate(hrangle);
    stroke(67, 251, 224);
    strokeWeight(7);
    line(0,0,120,0);
    pop();

    mn = minute();
    mnangle = map(mn,0,60,0,360);

    push();
    rotate(mnangle);
    stroke(	255, 95, 31);
    strokeWeight(7);
    line(0,0,175,0);
    pop();

    sc = second();
    scangle = map(sc,0,60,0,360);

    push();
    rotate(scangle);
    stroke(188,19,254);
    strokeWeight(7);
    line(0,0,175,0);
    pop();


  drawSprites();
}