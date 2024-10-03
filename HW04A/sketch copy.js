  function setup() {
    createCanvas(windowWidth, windowHeight);
    // rectMode(CENTER);
    angleMode(DEGREES);
    background(220, 120, 120);
  
    strokeWeight(2);
    rect(0, 0, width, 10)
      // draw a row of squares
      for (let x = 0; x < width; x +=50) {
        let rn = random(0, 50);

        push();
        translate(x, 0);
  
  
        if (rn < 10) {
          rect(0, 0, 10, 10);
        } else if (rn < 25) {
          rect(0, 0, 50, 10);
        } else if (rn < 50) {
            rect(0, 0, width, 10);
          }
        pop();
    }
  }
  
  function draw() {}
  
  function mouseClicked() {
    setup();
  }
  