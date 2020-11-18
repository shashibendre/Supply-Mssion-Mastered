var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,DroppingpointR,DroppingpointC,DroppingpointL;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(700, 700);
	rectMode(CENTER);
	
	DroppingpointR = createSprite(380,620,10,100);
	DroppingpointL = createSprite(280,620,10,100);
	DroppingpointC = createSprite(330,660,100,10);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	//packageBody.restitution = 0.05;
	World.add(world, packageBody);
	
	
	World.add(world,DroppingpointR);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  
  drawSprites();
  //keyPressed();
  
}
/*
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    //Matter.Body.applyForce(packageSprite,packageBody,{x:0,y:50});
	packageBody.velocityY = 3;
	 World.add(world, packageBody);
 }
  }
  */
 
 function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   //packageBody.velocityY = 6
	   //packageSprite.velocityY = 6
		//World.add(world,packageBody);
		//World.add(world,packageSprite);
		Matter.Body.setStatic(packageBody,false);

	}
   
   
	 }
   
