function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(random(115, 160), 0, 230);
  fill(180, 0, 180);
  circle(mouseX + 58, mouseY - 40, mouseX);
  fill(200, 190, 0);
  rect(80, 70, 55, 55);
  rect(mouseX, mouseY, 120, 80);
}
