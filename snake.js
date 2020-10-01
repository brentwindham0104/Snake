//const { FILL } = require("./libraries/p5");

class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.body[1] = createVector(120,120);
        this.body[0].x = 0
        this.body[0].y = 0;
        this.body[1].x = 0
        this.body[1].y = 0;
        this.head = createVector(0,0);
        this.head.x = 0;
        this.head.y = 0;
        background('red');
        this.food = createVector(200,200);
        this.xDirection = 0;
        this.yDirection = 0;

    }

    //This should just be for updating locations, not displaying anything
    update() {
        //We need to find new head values
        //Also, we need to move down the history
        //Then set body[0] to new head
        // setNewHead();

        //initialize head
        //transfer history
        //set beginning of array

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

        //Head is done
        //Now transfer history

        for (var i = 0; i < this.body.length - 1; i++) {
            console.log("Transferring " + this.body.length);
  
            this.body[i + 1].x = this.body[i].x;
            this.body[i + 1].y = this.body[i].y;
        }
        this.body[0].x = this.head.x;
        this.body[0].y = this.head.y;   
    }

    show() {
        background('red');
        let c = color(255, 204, 0);
        fill(c);
        console.log("showing " + this.body.length);

        for (var i = 0; i < this.body.length; i++) {
            console.log("body[0].x: " + this.body[0].x);
            console.log("body[0].y: " + this.body[0].y);
            console.log("body[1].x: " + this.body[1].x);
            console.log("body[1].y: " + this.body[1].y);


            //ellipse(this.body[i].x, this.body[i].y, 40, 40);

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
        //this.head = createVector(this.body[0].x + this.xDirection, this.body[0].y + this.yDirection);
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