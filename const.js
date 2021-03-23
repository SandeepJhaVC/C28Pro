class Chain {
    constructor(bodyA, pointb) {
        var options = {
            bodyA: bodyA,
            pointB: pointb,
            stiffness: 0.01,
            length: 50
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly() {
        this.chain.bodyA = null;
    }

    attach(){
        this.chain.bodyA = stone.body;
    }

    display() {
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}