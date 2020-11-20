const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var hasfired = false;

var particles = [];
var plinkos = [];
//var divisons = [];
var score = 0;
var particle;
var turn = 0;
var gamestate = 1;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,10);
  division1 = new Division(80,650,5,400);
  division2 = new Division(160,650,5,400);
  division3 = new Division(240,650,5,400);
  division4 = new Division(320,650,5,400);
  division5 = new Division(400,650,5,400);
  division6 = new Division(480,650,10,4000);
  division7 = new Division(0,650,10,4000);
  
  for (x=2; x<6; x++){
    for (i=40; i<480; i=i+40){
      plinkos.push(new Plinko(i,x*70))
    }
  }
}

function draw() {
  background(0);  

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  if (particle){
  particle.display();
  if (particle.body.position.y > 450){
    console.log(particle.body.position.y)
    if (particle.body.position.y> 770){
      if (particle.body.position.x < 160){
        score = score + 500;
        console.log(particle.body.position.x)
      }
      if (particle.body.position.x > 160 && particle.body.position.x < 320){
        score = score + 100;
        console.log(particle.body.position.x)
      }
      if (particle.body.position.x > 320){
        score = score + 200;
        console.log(particle.body.position.x)
      }
      World.remove(world,particle.body);
      particle = undefined;
    }
  }
  }
  /*if(frameCount%60===0){
    particles.push(new Particle(random(20,460),10));
  }//*/

  for (i=0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  for (i=0; i < particles.length; i++){
    particles[i].display();
  }
  ground.display();

  fill(255,255,255);
  text("Score: "+score,400,15);
  textdisplay();

  if (turn === 5 && gamestate === 1 && particle === undefined){
    gamestate = 0;
  }

  if (gamestate === 0) {
    push()
    textSize(40)
    text("GAME OVER",200,200)
    pop()
  }

  Engine.update(engine);
  drawSprites();
}

function textdisplay(){
  text("500",30,450);
  text("500",110,450);
  text("100",190,450);
  text("100",270,450);
  text("200",350,450);
  text("200",430,450);
}

function mouseReleased(){
  if (gamestate === 1 && particle === undefined){
    turn++
    particle = new Particle(mouseX,10);
  }
}



/*
function mouseDragged(){
  if(hasfired === false){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  hasfired = true;
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(stone.body);
      hasfired = false;
  }
}*/