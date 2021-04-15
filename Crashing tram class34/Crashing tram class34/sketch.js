const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0
var coach1,coach2,coach3,coach4,coach5
var rock1,rock2
function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");

}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  coach1  = new Coach(50,150,100,50)
  coach2  = new Coach(150,150,100,50)
  coach3  = new Coach(250,150,100,50)
  coach4  = new Coach(350,150,100,50)
  coach5  = new Coach(450,150,100,50)
  chain1 = new Tramline(coach1.body,coach2.body);
  chain2 = new Tramline(coach2.body,coach3.body);
  chain3 = new Tramline(coach3.body,coach4.body);
  chain4 = new Tramline(coach4.body,coach5.body);
  rock1 = new Rock(1000,330,200,100);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

   coach1.display();
   coach2.display();
   coach3.display();
   coach4.display();
   coach5.display();

   chain1.display();
   chain2.display();
   chain3.display();
   chain4.display();

   rock1.display();
   var collision = Matter.SAT.collides(coach5.body,rock1.body); if(collision.collided) { flag=1; } if(flag ===1){ textSize(30); stroke(3); fill('blue'); text("CRASH",500,200); crashSound.play(); }
}

function keyPressed() { if(keyCode === UP_ARROW){ Matter.Body.applyForce(coach5.body,{x:coach5.body.position.x,y:coach5.body.position.y}, {x:0,y:-2})
  }
}
function keyPressed() { if(keyCode === LEFT_ARROW){ Matter.Body.applyForce(coach1.body,{x:coach1.body.position.x,y:coach1.body.position.y}, {x:-0.5,y:0})
  }
}


