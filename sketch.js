let snake;

function setup() {
    createCanvas(400, 400);
    snake = new snake();
  }
  
  function draw() {
    background(51);
    snake.update();
    snake.show();
  }