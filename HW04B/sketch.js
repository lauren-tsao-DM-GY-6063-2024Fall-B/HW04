function emitter(x, y, rx, ry) {
  push();
  translate(x, y);

  line(0, 0, rx, ry);

  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(235);
  strokeWeight(0.5);
  angleMode(DEGREES);

  print(width, height);
  let blue = color(38, 91, 170);
  let red = color(205, 40, 40);
  let yellow = color(230, 204, 14);

  let minWidth = width / 8;
  let minHeight = height / 8;
  let maxWidth = width / 1.5;
  let maxHeight = height / 1.5;

  //top left emitter
  for (let cnt = 0; cnt < 10; cnt++) {
    stroke(blue);
    let rx = random(minWidth, maxWidth);
    let ry = random(0, maxHeight);
    emitter(0, 0, rx, ry);
  }

  //top middle emitter
  for (let cnt = 0; cnt < 10; cnt++) {
    stroke(red);
    let rx = random(-maxWidth, maxWidth);
    let ry = random(minHeight, maxHeight);
    emitter(width / 2, 0, rx, ry);
  }

  //top right emitter
  for (let cnt = 0; cnt < 10; cnt++) {
    stroke(blue);
    let rx = random(-minWidth, -maxWidth);
    let ry = random(0, maxHeight);
    emitter(width, 0, rx, ry);
  }

  //middle left emitter
  for (let cnt = 0; cnt < 10; cnt++) {
    stroke(red);
    let rx = random(0, maxWidth);
    let ry = random(-maxHeight, maxHeight);
    emitter(0, height / 2, rx, ry);
  }

  //true middle emitter
  for (let cnt = 0; cnt < 19; cnt++) {
    stroke(yellow);
    let rx = random(-maxWidth, maxWidth);
    let ry = random(-maxHeight, maxHeight);
    emitter(width / 2, height / 2, rx, ry);
  }

  //middle right emitter
  for (let cnt = 0; cnt < 10; cnt++) {
    stroke(red);
    let rx = random(-minWidth, -maxWidth);
    let ry = random(maxHeight, -maxHeight);
    emitter(width, height / 2, rx, ry);
  }

  //bottom left emitter
  for (let cnt = 0; cnt < 10; cnt++) {
    stroke(blue);
    let rx = random(minWidth, maxWidth);
    let ry = random(0, -maxHeight);
    emitter(0, height, rx, ry);
  }

  //bottom middle emitter
  for (let cnt = 0; cnt < 10; cnt++) {
    stroke(red);
    let rx = random(-maxWidth, maxWidth);
    let ry = random(0, -maxHeight);
    emitter(width / 2, height, rx, ry);
  }

  //bottom right emitter
  for (let cnt = 0; cnt < 10; cnt++) {
    stroke(blue);
    let rx = random(-minWidth, -maxWidth);
    let ry = random(-minHeight, -maxHeight);
    emitter(width, height, rx, ry);
  }

  // // draw a column of rows
  // for (let y = 0; y < height; y += 1) {
  //   // draw a row of circle
  //   for (let x = 0; x < width; x += 1) {
  //     let dd = random(1, 3); //drawing dimension, randomize size between 16 to sqDim
  //     let vx = random(-5, 5); //vx = variation in x btw the numbers -30 to 30
  //     let vy = random(-5, 5); //vy = variation in y btw the numbers -30 to 30
  //     // let rf = random(90, 80);
  //     push();
  //     noStroke(200);
  //     fill(50);
  //     translate(x, y);
  //     blendMode(SCREEN);
  //     ellipse(vx, vy, dd);
  //     pop();
  //   }
  // }
}

function draw() {}

function mouseClicked() {
  setup();
}
