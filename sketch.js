//const { DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW } = require("./libraries/p5");

let snake;

function setup() {
    createCanvas(400, 400);
    snake = new Snake();
  }
  
  function draw() {
    background(51);
    snake.update();
    snake.show();
    
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