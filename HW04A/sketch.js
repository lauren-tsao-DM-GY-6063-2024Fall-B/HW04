function randomArc(x, y, rWidth, rStart, rStop) {
  let r = rWidth / 2;
  push();
  translate(x, y);

  arc(r, r, rWidth, rWidth, rStart, rStop);

  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  print(width, height, width * height);
  rectMode(CENTER);
  angleMode(DEGREES);
  let green = color("#D0EFB5");
  let Dpurple = color("#2F3E75");
  let pink = color("#EB7878");
  let yellow = color("#F3E595");
  background(Dpurple);
  noStroke();

  let rPosition = random(20, 30);

  for (let y = 0; y < height; y += rPosition) {
    for (let x = 0; x < width; x += rPosition) {
      let rStart = random([0, 90]);
      let rStop = random([90, 180, 270, 360]);
      let rf = random([green, pink, yellow]);
      let rWidth = random(rPosition, rPosition - 20);

      push();
      translate(x, y);

      fill(rf);

      randomArc(0, 0, rWidth, rStart, rStop);
      pop();
    }
  }
}
function draw() {}

function mouseClicked() {
  setup();
}
