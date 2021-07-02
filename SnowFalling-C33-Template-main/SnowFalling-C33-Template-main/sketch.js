const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var ground,groundImg;
var boy, boyImg;
var reindeer,reindeerImg;
var ice = [];
var maxSnow = 100;
function preload(){
  backgroundImg = loadImage("snow2.jpg");
  groundImg = loadImage("ground.png");
  boyImg = loadAnimation("sc1.PNG","sc2.PNG","sc3.PNG","sc4.PNG","sc5.PNG","sc6.PNG","sc7.PNG","sc8.PNG","sc9.PNG","sc10.PNG","sc11.PNG","sc12.PNG");
  reindeerImg = loadImage("reindeer1.png");
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;

  ground=createSprite(650,670); 
  ground.addImage(groundImg);
  ground.scale=3.2; 
  ground.velocityX=-10;
  
  boy = createSprite(150,555)
  boy.addAnimation("santa",boyImg)
  boy.scale = 1;
  boy.velocityX=2;
  boy.setCollider("rectangle",15, -20,100,180) 

  reindeer = createSprite(400,565)
  reindeer.addAnimation("rein",reindeerImg)
  reindeer.scale = 0.8;
  reindeer.velocityX=2;
  reindeer.setCollider("rectangle",15, -20,100,180)


  if(frameCount % 275 === 0){
    for(var i=0; i<maxSnow; i++){
    ice.push(new Snow(random(0,1350), random(0,50)));
    }
  }
 
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);

  boy.collide(ground);
  reindeer.collide(ground);

  if(ground.x<530){
    ground.x=600;
  }
  if(boy.x>1300){
    boy.x=150;
  }
  if(reindeer.x>1450){
    reindeer.x=250;
  }
  if(keyWentDown("space")&& boy.y >= 100) { 
    boy.velocityY = -12; 
  } 

  boy.velocityY = boy.velocityY + 0.8;

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    

  ground.display();

  drawSprites();
}

