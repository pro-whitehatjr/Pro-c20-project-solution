const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var block1,block2,block3;


function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    //created plane and block bodies
    var plane_options={
      isStatic: true
    }

    plane = Bodies.rectangle(600,580,1200,2,plane_options);
    World.add(world,plane);
  
    //created multiple of block bodies 
    var block1_options = {
      restitution:0.5,
      friction:0.02,
      frictionAir:0
    }

    var block2_options = {
      restitution:0.7,
      friction:0.01,
      frictionAir:0.1
    }

    var block3_options = {
      restitution:0.01,
      friction:1,
      frictionAir:0.3
    }

    block1 = Bodies.circle(220,10,10,block1_options);
    World.add(world,block1);
    
    block2 = Bodies.rectangle(110,50,10,10,block2_options);
    World.add(world,block2);
    
    block3 = Bodies.rectangle(350,50,10,10,block3_options);
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
  rect(plane.position.x,plane.position.y,1200);
  

  //created shape for all the paticles
  ellipse(block1.position.x,block1.position.y,30);
  rect(block2.position.x,block2.position.y,50,50)
  rect(block3.position.x,block3.position.y,100,50)

  
}
