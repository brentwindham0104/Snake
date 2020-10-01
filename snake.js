//const { FILL } = require("./libraries/p5");

class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.body[0].x = 0
        this.body[0].y = 0;
        this.head;
        background('red');
        this.food = createVector(200,200);
        this.xDirection = 0;
        this.yDirection = 0;

    }

    update() {
        
        for (var i = 0; i < this.body.length; i++) {
            if (this.body[i].x + (this.xDirection) > 360) {
                this.body[i].x = 0;
            } else if (this.body[i].x + (this.xDirection) < 0) {
                this.body[0].x = 360;
            }  else if (this.body[i].y + (this.yDirection) > 360) {
                this.body[i].y = 0;
            }  else if (this.body[i].y + (this.yDirection) < 0) {
                this.body[i].y = 360;
            }
            else {
                this.head = this.body[i].x + this.xDirection;
                this.head = this.body[i].y + this.yDirection;
            }
            this.body[i + 1] = this.body[i];
        }
        this.body[0] = this.head;   
    }
    show() {
        background('red');
        let c = color(255, 204, 0);
        fill(c);
        for (var i = 0; i < this.body.length; i++) {
            rect(this.body[i].x, this.body[i].y, 40, 40);
        }
        this.addFood();
    }

    isEating() {
        return this.food.x === (this.body[0].x + this.xDirection)  && this.food.y === (this.body[0].y + this.yDirection);
    }

    nextFood() {
        this.food.x = 40 * floor(random(0,10));
        this.food.y = 40 * floor(random(0,10));
        this.head = createVector(this.body[0].x + this.xDirection, this.body[0].y + this.yDirection);
    }
    addFood() {
        let c = color('blue');
        fill(c);
        rect(this.food.x, this.food.y, 40, 40);
    }
    setDirection(x,y){
        this.xDirection = x * 40;
        this.yDirection = y * 40;
    }
}


//snake needs a body, head, direction vertical and horizontal, length