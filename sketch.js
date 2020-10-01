//const { DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW } = require("./libraries/p5");

let snake;
// let rez = 20;

function setup() {
   createCanvas(400, 400);
    background('red');
    snake = new Snake();
    frameRate(5);
    console.log("test");
    snake.addFood();
  }
  
  function draw() {
    // scale(rez);
    if (snake.isEating()) {
      snake.moreFood();
      console.log("More food please");
    }
    snake.update();
    snake.show();
    console.log("test draw");

  }


  function keyPressed() {
    if (keyCode === DOWN_ARROW) {
      snake.setDirection(0,1);
    } else if (keyCode === UP_ARROW) {
      snake.setDirection(0,-1);
    } else if (keyCode === RIGHT_ARROW) {
      snake.setDirection(1,0);
    } else if (keyCode === LEFT_ARROW) {
      snake.setDirection(-1,0);
    }
  }