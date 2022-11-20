//const { FILL } = require("./libraries/p5");

class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.body[0].x = 0
        this.body[0].y = 0;
        this.head = createVector(0,0);
        this.head.x = 0;
        this.head.y = 0;
        this.food = createVector(200,200);
        this.xDirection = 0;
        this.yDirection = 0;
    }

    update() {
        if (this.body[0].x + (this.xDirection) > 360) {
            this.head.x = 0;
            this.head.y = this.body[0].y;

        } else if (this.body[0].x + (this.xDirection) < 0) {
            this.head.x = 360;
            this.head.y = this.body[0].y;

        }  else if (this.body[0].y + (this.yDirection) > 360) {
            this.head.x = this.body[0].x;
            this.head.y = 0;

        }  else if (this.body[0].y + (this.yDirection) < 0) {
            this.head.y = 360;
            this.head.x = this.body[0].x;
        } else {
            this.head.x = this.body[0].x + this.xDirection;
            this.head.y = this.body[0].y + this.yDirection;

        }
        if (this.isEating()) {

            console.log("EATINGGGGGG");
        }

        for (var i = this.body.length- 1; i > 0;  i--) {
            console.log("Transferring " + this.body.length);
  
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        this.body[0].x = this.head.x;
        this.body[0].y = this.head.y;   
    }

    show() {
        let c = color('green');
        //fea3aa
        //fill(c);
        console.log("Right befroe creating rects there are supposed to be " + this.body.length + " number of rects");

        for (var i = 0; i < this.body.length; i++) {
            console.log("body[" + i + "].x: " + this.body[i].x);
            console.log("body[" + i + "].y: " + this.body[i].y);
            rect(this.body[i].x, this.body[i].y, 40, 40);
        }
        this.addFoodToCanvas();
    }

    addToTail() {
        this.body[this.body.length] = createVector(this.body[this.body.length-1].x,this.body[this.body.length-1].y );
    }

    isEating() {
        return this.food.x == (this.body[0].x + this.xDirection)  && this.food.y == (this.body[0].y + this.yDirection);
    }

    isGameEnded() {
        let x = this.body[0].x;
        let y = this.body[0].y;
        for (var i = 1; i < this.body.length; i++) {
            let part = this.body[i];
            if (x == part.x && y == part.y){
                return true;
            }
            
        }
        return false;
    }

    nextFood() {
        this.food.x = 40 * floor(random(0,10));
        this.food.y = 40 * floor(random(0,10));
    }

    addFoodToCanvas() {
        let c = color('red');
        fill(c);
        rect(this.food.x, this.food.y, 40, 40);
    }
    setDirection(x,y){
        this.xDirection = x * 40;
        this.yDirection = y * 40;
    }
}
