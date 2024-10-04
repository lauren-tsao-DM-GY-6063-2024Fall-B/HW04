function randomArc(x, y, rWidth, rStart, rStop) {
  let r = rWidth / 2
  push();
  translate(x, y);

  arc(r, r, rWidth, rWidth, rStart, rStop);

  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  print(width, height, width*height);
  rectMode(CENTER)
  angleMode(DEGREES);
  background(220, 120, 120);
  noStroke()

  let rWidth = random(50, 200)

  for(let y = 0; y < height; y += rWidth) {

  for(let x = 0; x < width; x += rWidth){
  let rStart = random([0, 90])
  let rStop = random([90, 180, 270, 360])

  push();
  translate(x, y)
  randomArc(0, 0, rWidth, rStart, rStop)
  pop();

  }
}
}
  function draw() {}

function mouseClicked() {
  setup();
}