function setup() {
    createCanvas(windowWidth, windowHeight);
  
    print(width, height, width*height);
  
    rectMode(CENTER);
    angleMode(DEGREES);
    background(220, 120, 120);

    let dashSpace = random(20, 50)
    let dashLength = random(0, 100)

    for (let dd = windowWidth; dd > 0; dd -= 50) {
        print(dd) //the exact dimensions of what is being drawn by the loop
        push();
        translate(windowWidth/2, windowHeight/2);
        strokeWeight(5)
        strokeCap(SQUARE);
        drawingContext.setLineDash([dashLength, dashSpace])
        rect(0, 0, dd);
        pop();
      }
    }

    function draw() {
    }