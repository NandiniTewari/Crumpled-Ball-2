class Dustbin{
    constructor(x,y,width,height){
        
        var options={
            isStatic:true,
            restitution:0.3,
            friction:1.0,
            density:1.2
        
            
    }
        this.box1 = Bodies.rectangle(950,640,20,100,options)
        this.box2 = Bodies.rectangle(1050,680,175,20,options)
        this.box3 = Bodies.rectangle(1150,640,20,100,options)
    

        this.image = loadImage ("sprites/dustbingreen.png");
   
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    World.add(world, this.box1);
    World.add(world, this.box2);
    World.add(world, this.box3);

}
display(){

imageMode(CENTER)
image(this.image,this.x,this.y, this.width, this.height);
}
};