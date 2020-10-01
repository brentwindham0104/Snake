//const { FILL } = require("./libraries/p5");

class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.body[0].x = 0
        this.body[0].y = 0;
        background('red');
        this.food = createVector(200,200);
        this.xDirection = 0;
        this.yDirection = 0;

    }

    // getX(){
    //     return this.body[0].x;
    // }

    // getY(){
    //     return this.body[0].y;
    // }


    update() {   
        if (this.body[0].x + (this.xDirection) > 360) {
            this.body[0].x = 0;
        } else if (this.body[0].x + (this.xDirection) < 0) {
            this.body[0].x = 360;
        }  else if (this.body[0].y + (this.yDirection) > 360) {
            this.body[0].y = 0;
        }  else if (this.body[0].y + (this.yDirection) < 0) {
            this.body[0].y = 360;
        }
        else {
            this.body[0].x += this.xDirection;
            this.body[0].y += this.yDirection; 
        } 
    }


    show() {
        // fill(0);
        //clear();
        background('red');
        let c = color(255, 204, 0);
        fill(c);
        rect(this.body[0].x, this.body[0].y, 40, 40);
        this.addFood();

        //background('red');
    }

    isEating() {
        return this.food.x === (this.body[0].x + this.xDirection)  && this.food.y === (this.body[0].y + this.yDirection);
    }

    moreFood() {
        this.food.x = 40 * floor(random(0,10));
        this.food.y = 40 * floor(random(0,10));
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