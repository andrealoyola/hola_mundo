function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
  background(0);
  ellipseMode(CORNER);
}

function draw() {
  background(random(115, 160), 0, 230, 90);

  strokeWeight(4);
  stroke(0);
  fill(50, 180, 100);
  circle(mouseX + 58, mouseY - 40, 10);
  fill(0, 100, 150);
  circle(mouseX - 20, mouseY - 200, 10);
  fill(150, 0, 100);
  circle(mouseX + 200, mouseY - 50, 10);

  noFill(0);
  stroke(35);
  strokeWeight(7);
  ellipse(mouseX + 50, 320, 250, 100); //horizontal
  ellipse(mouseX + 130, 240, 100, 250);

  stroke(0);
  strokeWeight(3);
  fill(175);
  ellipse(mouseX + 148, 340, 60);

  fill(150, 0, 100);
  ellipse(mouseX + 200, 460, 15);

  fill(50, 180, 100);
  ellipse(mouseX + 50, 380, 20);

  fill(0, 100, 150);
  ellipse(mouseX + 128, 270, 27);
}
