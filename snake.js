class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.xDirection = 1;
        this.yDirection = 0;

    }


    update() {
       this.body[0].x += this.xDirection;
       this.body[0].y += this.yDirection;     
    }


    show() {
        rect(this.body[0].x ,this.body[0].y ,40,40);
    }

    setDirection(x,y){
        this.xDirection = x;
        this.yDirection = y;
    }
}


//snake needs a body, head, direction vertical and horizontal, length