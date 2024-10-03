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
  strokeWeight(2);
  angleMode(DEGREES);

  print(width, height);
  let blue = color(38, 91, 170)
  let red = color(205, 40, 40)
  let yellow = color(244, 231, 41)

  //top left emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    print(cnt);
    emitter(0, 0);
    
  }

  //top middle emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    print(cnt);
    emitter(width / 2, 0);
    stroke(205, 40, 40)
  }

  //top right emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    push()
    print(cnt);
    emitter(width, height);
    stroke(38, 91, 170)
    pop()
  }

  //middle left emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    push()
    print(cnt);
    emitter(0, height / 2);
    stroke(205, 40, 40)
    pop()
  }

  //true middle emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    print(cnt);
    emitter(width / 2, height / 2);
    stroke(244, 231, 41)
  }

  //middle right emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    print(cnt);
    emitter(0, height / 2);
    stroke(205, 40, 40)
  }

  //bottom left emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    print(cnt);
    emitter(0, height);
    stroke(38, 91, 170)
  }

  //bottom middle emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    print(cnt);
    emitter(width / 2, height);
    stroke(205, 40, 40)
  }

  //bottom right emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    print(cnt);
    emitter(width, 0);
    stroke(38, 91, 170)
  }

  //middle right emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    print(cnt);
    emitter(width, height / 2);
    stroke(205, 40, 40)
  }
}

function draw() {}
