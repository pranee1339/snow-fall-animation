const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;



var b1,bg;
var boy,b2,invG, s1,s2 ,s3,s4,s5,s6,s7,s8,s9,s10,s11;
var engine, world;


function preload(){
  b1 =loadImage("snow1.jpg");
  b2= loadImage("boy.png");
 
  
}

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  boy=createSprite(400, 500, 50, 50);
  boy.addImage(b2);
  boy.scale=0.5;
 
  invG=createSprite(300,500,400,10);
  invG.visible=false

  var rand1=Math.round(random(10,690));
  var rand2=Math.round(random(10,690));
  var rand3=Math.round(random(10,690));
  var rand4=Math.round(random(10,690));
  var rand5=Math.round(random(10,690));
  var rand6=Math.round(random(10,690));
  var rand7=Math.round(random(10,690));
  var rand8=Math.round(random(10,690));
  var rand9=Math.round(random(10,690));
  var rand10=Math.round(random(10,690))
  var rand11=Math.round(random(10,690))

  s1 = new snw(rand1,-100,5,5);
  s2= new snw(rand2,-300,5,5);
  s3= new snw(rand3,-600,5,5);
  s4= new snw(rand4,-700,5,5);
  
  s5= new snw(rand5,-1000,5,5);
  s6= new snw(rand6,-2000,5,5);
  s7= new snw(rand7,-1100,5,5);
  s8= new snw(rand8,-800,5,5);
  s9= new snw(rand9,-900,5,5);
  s10= new snw(rand10,-1500,5,5);
  s11= new snw(rand11,-1700,5,5);


}

function draw() {
  background(b1); 
  Engine.update(engine);
  if(keyDown("space")){
    boy.velocityY=-2;
  }
 
  boy.velocityY+=0.1;
  boy.collide(invG);
 
  s5.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  s10.display();
  s11.display();
  drawSprites();

}
