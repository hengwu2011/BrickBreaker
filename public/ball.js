
class Ball {
    constructor(xspeed, yspeed, size, color) {
        this.color = color;
        this.radius = size;
        this.x = xspeed;
        this.y = yspeed;
       
    }
    display() {
        ellipse(this.x, this.y, this.radius)
    }
    physics() {
        this.x++;
        this.y++;
    }
}