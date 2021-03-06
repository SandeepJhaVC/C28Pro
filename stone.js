class Stone {
    constructor(x, y, radius) {
        var options = {
            //isStatic: true,
            restituion: 0,
            friction: 1,
            density:1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
         translate(pos.x,pos.y)
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image, 0,0, this.r, this.r);
        pop();
    }
}