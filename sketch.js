
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gorund1, ground2 , ground3 ,ground4
var box1 
var chopper
function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

gorund1 = new Ground(250,495,700,10);
gorund2 = new Ground2(300,480,100,20);
gorund3 = new Ground2(250,450,20,80);
gorund4 = new Ground2(350,450,20,80);
box1 = new Box(300,100,40,40)
chopper = new Box2(300,100,150,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
gorund1.display();
gorund2.display()
gorund3.display()
gorund4.display()
box1.display();
chopper.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		Body.setStatic(box1.body,false)
	}
}



