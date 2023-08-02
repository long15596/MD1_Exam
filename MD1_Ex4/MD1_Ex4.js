let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    render () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0,  2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
let circle = new Circle(50, 50,  80, "#000000");
circle.render();