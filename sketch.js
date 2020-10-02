
let snake;

function setup() {
   createCanvas(400, 400);
   //background(255);
    snake = new Snake();
    frameRate(5);
    console.log("test");
    snake.addFoodToCanvas();
  }
  
  function draw() {

    if (snake.isEating()) {
      snake.nextFood();
      snake.addToTail();
      console.log("More food please");
    }
    snake.update();
    snake.show();
    console.log("test draw");
    if (snake.isGameEnded()){
      console.log("GAME ENDED");
      noLoop();
    }

    
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