const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof=new Roof(300,50,300,20)
	bob5=new Bob(180,300,40)
	bob1=new Bob(240,300,40)
	bob3=new Bob(310,300,40)
	bob2=new Bob(380,300,40)
	bob4=new Bob(450,300,40)
	rope=new Rope(bob1.body,roof.body,-50,0)
  rope1=new Rope(bob3.body,roof.body,10,0)
  rope2=new Rope(bob2.body,roof.body,80,0)
  rope3=new Rope(bob4.body,roof.body,145,0)
  rope4=new Rope(bob5.body,roof.body,-110,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
rope.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()

//  drawLine()
  drawSprites();
 
}

function keyPressed() { 
  if (keyCode === UP_ARROW) 
  {
     Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-300,y:-75}); 
     }
     } 
  