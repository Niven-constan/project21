const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball;

function preload()
{
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 700, 800, 30);
	ball = new Ball(200, 500, 40, 40);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.show();
  ball.show();
  Body.applyForce(ball, {x:0.1, y:0.1}, {x:0.1, y:0.1});
}



