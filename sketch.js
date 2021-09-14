const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle1, particle2,particle3,particle4,particle5;
var particle6, particle7,particle8,particle9,particle10;
var block1, block2, block3;
var block1, block2;

var angle1=60;
var angle2=50;
var angle3=60;

function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    //created plane and block bodies
    var plane_options={
      isStatic: true
    }

    plane = Bodies.rectangle(600,height,1200,20,plane_options);
    World.add(world,plane);
  
    //created multiple of particle bodies 
    var particle_options = {
      restitution:0.5,
      friction:0.02
    }

    particle1 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle1);
    
    
    //created all the three block bodies
    var block_options={
      isStatic:true
    };

    block1 = Bodies.rectangle(200,150,150,20,block_options);
    World.add(world,block1);

    block2 = Bodies.rectangle(300 ,300,150,20,block_options);
    World.add(world,block2);

    block3 = Bodies.rectangle(100,400,150,20,block_options);
    World.add(world,block3);

    //styling the bodies here
    fill("brown");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("lightgreen");
    Engine.update(engine);

  //created shape for plane and stand
  rect(plane.position.x,plane.position.y,1200,20);
  

  //created shape for all the paticles
  ellipse(particle1.position.x,particle1.position.y,10);
 

  //created shape for all the blocks
  Matter.Body.rotate(block1,angle1)
  push();
  translate(block1.position.x,block1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  

  Matter.Body.rotate(block2,angle2)
  push();
  translate(block2.position.x,block2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
    

  Matter.Body.rotate(block3,angle3)
  push();
  translate(block3.position.x,block3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
    
}