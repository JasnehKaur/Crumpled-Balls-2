
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;
var side1, side2, side3;

function preload(){
  this.dustbin = loadImage('Dustbin.png');
  this.paper = loadImage('Paper.png');
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = Bodies.rectangle(600, 680, 1200, 20, {isStatic: true});
World.add(world, ground);

paper = Bodies.circle(350, 500, 30);
World.add(world, paper);

side1 = Bodies.rectangle(600, 500, 20, 80);
World.add(world, side1);

side2 = Bodies.rectangle(660, 500, 120, 20);
World.add(world, side2);

side3 = Bodies.rectangle(700, 500, 20, 80);
World.add(world, side3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  rect(ground.position.x, ground.position.y, 1200, 20);
  rect(side1.position.x, side1.position.y, 20, 80);
  rect(side2.position.x, side2.position.y, 120, 20);
  rect(side3.position.x, side3.position.y, 20, 80);

  ellipse(paper.position.x, paper.position.y, 30);

  //image(this.paper, 350, 500);
  image(this.dustbin, 800, 520, 150, 150);
 
}

function keyPressed(){
  if(keyDown('UP_ARROW')){
    Matter.Body.applyForce(paper, paper.position, {x: 0.5, y: -80});
  }

}



