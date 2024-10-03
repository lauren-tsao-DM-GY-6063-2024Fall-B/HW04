function emitter(x, y) {
  push();
  translate(x, y);

  let rx = random(-1000, 1000);
  let ry = random(-1000, 1000);

  line(0, 0, rx, ry);

  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(235);
  strokeWeight(1);
  angleMode(DEGREES);

  print(width, height);
  let blue = color(38, 91, 170)
  let red = color(205, 40, 40)
  let yellow = color(244, 231, 41)

  //top left emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    stroke(blue)
    emitter(0, 0);
  }

  //top middle emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    stroke(red)
    emitter(width / 2, 0);
  }

  //top right emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    stroke(blue)
    emitter(width, height);
  }

  //middle left emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    stroke(red)
    emitter(0, height / 2);
  }

  //true middle emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    stroke(yellow)
    emitter(width / 2, height / 2);
  }

  //middle right emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    stroke(red)
    emitter(0, height / 2);
  }

  //bottom left emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    stroke(blue)
    emitter(0, height);
    stroke(blue)
  }

  //bottom middle emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    stroke(red)
    emitter(width / 2, height);
  }

  //bottom right emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    stroke(blue)
    emitter(width, 0);
  }

  //middle right emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    stroke(red)
    emitter(width, height / 2);
  }
}

function draw() {}

function mouseClicked() {
  setup();
}
