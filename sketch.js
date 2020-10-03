var monkey , monkey_running, ground; 
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstaclesGroup; 
var background, backImage; 
var score; 
var survivalTime = 0; 

function preload(){
    
  monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  backImage = loadImage("Jungle.png .jpg");
 
}

function setup() {

  //background = createSprite(300, 150, 600, 300);
  //background.velocityX = -0.03;
  //background.addImage(backImage);
  //background.scale = 0.85;
    
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1; 
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4; 
  console.log(ground.x);
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();

  score = 0; 
  
}

function draw() {
  
  createCanvas(600, 600);
  
  //stroke("white"); 
  //textSize(17);
  //fill("black");
  //text("Score: " + score, 250, 50)
  
  stroke("white");
  textSize(17);
  fill("black"); 
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 250, 70);
   
  if (ground.x < 450){
    ground.x = ground.width/2;
  }
  
  //score = score + Math.round(getFrameRate()/60);
  
  if(keyDown("space") && monkey.y <= 360) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  food();
  stones();
  
  drawSprites();
  
}

function food () {
  
  if(frameCount%80 === 0) {
    banana = createSprite(300, Math.round(random(120, 200)), 15, 15);
    banana.addImage(bananaImage);
    banana.scale = 0.06;
    banana.velocityX = -5;
    banana.lifetime = 300;
    
    bananaGroup.add(banana);
    
  } 
}

function stones() {
  
  if (frameCount % 300 === 0){
  var obstacle = createSprite(500, 330, 10, 10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -(5 + score/100);
   
  //assign scale and lifetime to the obstacle           
  obstacle.scale = 0.1;
  obstacle.lifetime = 900;
    
  obstaclesGroup.add(obstacle);
   
  }
 }


