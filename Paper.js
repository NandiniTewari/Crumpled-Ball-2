class Paper{
    constructor(x,y,radius){

this.image = ("sprites/paper.png");

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;

    World.add(world, this.body);
}
display(){
var pos =this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(RADIUS);
image(this.image,0,0,this.radius*2,this.radius*2)
pop();
}
};