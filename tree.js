class Tree {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        
        this.width = 400;
        this.height = 1000;
        this.thickness = 10;
        this.image = loadImage("tree.png");
        this.Bbody = Bodies.rectangle(x, y,this.width, this.thickness, options);
        this.Lbody = Bodies.rectangle(0,y-this.height/2,this.thickness,this.height,{isStatic:false});
        this.Rbody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,{isStatic:false});
        World.add(world, this.Bbody);
        World.add(world, this.Lbody);
        World.add(world, this.Rbody);
    }
    display() {
        var pos = this.Bbody.position;
        push();
        translate(pos.x,pos.y+10);
        imageMode(CENTER);
        image(this.image, 0, -this.height/2, this.width, this.height);
        pop();
    }
}