function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(random(115, 160), 0, 230, 90);

  strokeWeight(4);
  stroke(0);
  fill(180, 0, 180);
  circle(mouseX + 58, mouseY - 40, mouseX);

  fill(255);
  ellipseMode(CORNER);
  ellipse(mouseX + 25, mouseY + 50, mouseX);
  fill(185);
  ellipse(mouseX + 0, mouseY + 20, mouseX);
  noFill(0);
  let centerX = width;
  arc(mouseX, mouseY, 80, 80, 0, PI);
  circle(mouseX, mouseY, 48);

  noStroke(0, 200, 25);
  fill(0, 200, 25);
  ellipse(225, 350, 50);
  ellipse(230, 270, 30);
  ellipse(310, 290, 15);

  noFill(0);
  stroke(0);
  ellipse(200, 240, 100, 250);
  ellipse(130, 320, 250, 100);
}
