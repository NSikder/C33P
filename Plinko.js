class Plinko {
    constructor(x,y){
        var options = {
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10;
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        stroke("Black");
        fill(255,255,255);
        ellipse(pos.x,pos.y, this.radius, this.radius);
        pop();
    }
};