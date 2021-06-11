const colors = ["#3e4444", "#82b74b", "#405d27", "#c1946a"];
//console.log(colors[Math.floor(Math.random() * colors.length)]);

class Rect {
    x: number;
    y: number;
    size: number;
    p: P5;
    xSpeed: number;
    ySpeed: number;
    color: string;
    constructor(x: number, y: number, size: number, p: P5) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.p = p;
        this.xSpeed = this.p.random(-2, 2);
        this.ySpeed = this.p.random(-2, 2);
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    draw() {
        this.p.fill(this.color);
        this.p.rect(this.x, this.y, this.size, this.size, 5);
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    checkBounds() {
        if (this.x < 0 || this.x > this.p.width - this.size) {
            this.xSpeed *= -1;
        }
        if (this.y < 0 || this.y > this.p.height - this.size) {
            this.ySpeed *= -1;
        }
    }
}
