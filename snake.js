class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.xDirection = 0;
        this.yDirection = 0;

    }


    update() {
       this.body[0].x += this.xDirection;
       this.body[0].y += this.yDirection;     
    }


    show() {
        
        rect(30,30,30,30);
    }
}


//snake needs a body, head, direction vertical and horizontal, length