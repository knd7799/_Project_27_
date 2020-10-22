
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ball1;
var ball2;
var ball3;
var ball4;
var ball5;

var roof1;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


/*function preload()
{
	
}*/

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  
  ballDiameter=40;

  startballPositionX=width/2; 
  startballPositionY=height/4+500;
  

    ball1=new ball(startballPositionX-ballDiameter*2,startballPositionY,ballDiameter);

    ball2=new ball(startballPositionX-ballDiameter,startballPositionY,ballDiameter);
    
    ball3=new ball(startballPositionX,startballPositionY, ballDiameter);
    
    ball4=new ball(startballPositionX+ballDiameter,startballPositionY,ballDiameter);
    
    ball5=new ball(startballPositionX+ballDiameter*2,startballPositionY,ballDiameter);

    roof1=new roof(width/2,height/4,width/7,20);

    rope1=new Rope(ball1.body,roof1.body,-ballDiameter*2, 0);
    rope2=new Rope(ball2.body,roof1.body,-ballDiameter*1, 0);
    rope3=new Rope(ball3.body,roof1.body,0, 0);
    rope4=new Rope(ball4.body,roof1.body,ballDiameter*1, 0);
    rope5=new Rope(ball5.body,roof1.body,ballDiameter*2, 0);

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
      }
      });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(290);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  roof1.display();

  rope1.display ();
  rope2.display ();
  rope3.display ();
  rope4.display ();
  rope5.display ();

  drawSprites();
 
}
function keyPressed (){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});
  }
}
function drawLine (Constraint)
{
  ballBodyPosition=Constraint.bodyA.position
  roofBodyPosition=Constraint.bodyB.position

  roofBodyOffset=Constraint.pointB;

  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  line(ballBodyPosition.x, ballBodyPosition.y,roofBodyX,roofBodyY);

}



