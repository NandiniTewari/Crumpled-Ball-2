
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin;

function preload()
{
	

}

function setup() {
	createCanvas(1200, 700);
	
	engine = Engine.create();
	world = engine.world;

paper = new Paper(150,600,20);
dustbin = new Dustbin(950,680,100,100);
ground = new Ground(600,height,1200,20)


	Engine.run(engine);
  
}

function draw() {
  background(255);

//Engine.update(engine);
ground.display();
paper.display();
dustbin.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

