const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var plinks1=[];
var plinks2=[];
var plinks3=[];
var plinks4=[];
var particles;
var balls=[];
var gameState="onSling";
function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    d1 = new Ground(300,340,10,120);
    d2 = new Ground(400,340,10,120);
    d3 = new Ground(500,340,10,120);
    d4 = new Ground(600,340,10,120);
    border1 = new Ground(600,340,10,700);
    border2 = new Ground(200,340,10,700);
    for (let i = 0; i < 8; i++) {
    
      plinks1[i]= new Box(220+i*40,20,10,"yellow");
      plinks2[i]= new Box(220+i*50,60,10,"red");
      
    }
    for (let i = 0; i < 8; i++) {
    
      plinks3[i]= new Box(220+i*40,100,10,"yellow");
      plinks4[i]= new Box(220+i*50,140,10,"red");
      
    }
    //for (let i = 0; i < 18; i++)
    //if(particles!=null)
  
 
    {
    
      particles= new Particle(430,20,10);
     
      
    }
    
  }

function draw() {
  background(255,255,255);
  //this.particles.body.position.x= mouseX; 
  particles.display();
  ground.display(); 
  d1.display(); 
  d2.display(); 
  d3.display(); 
  d4.display(); 
  border1.display();
  border2.display();
  for (let i = 0; i < 8; i++) {
  plinks1[i].display();
  plinks2[i].display();
  plinks3[i].display();
  plinks4[i].display();
  
  }
  for (let i = 0; i < balls.length; i++) 
  {
    balls[i].display();
  }
  Engine.update(engine);
  drawSprites();
}
function mouseClicked()
{
 // for (let index = 0; index < 10; index++)
   {
    particles=new Particle(mouseX, mouseY, 10); 
    console.log("POP");
   balls.push(particles);
    //particles.display();
  }
  //if(gameState!=="end")
  {
    //  count++;
     
  }   
}