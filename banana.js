class Banana {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        this.image = loadImage("banana.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image, 0,0, this.r, this.r);
        pop();
    }
}