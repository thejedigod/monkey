
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(50,320,20,50);
    monkey.addAnimation("running",monkey_running );
  monkey.scale = 0.1;
ground=createSprite(400,350,900,10)
 
FoodGroup=new Group();
  obstacleGroup=new Group();
  
  
}
 


function draw(){
  
  background("white");
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 2   ;
  monkey.collide(ground)
 drawSprites();
  var select_obs = Math.round(random(1,2));
  
  if (World.frameCount % 100 == 0) {
    if (select_obs == 1) {
     banana();
    }else if (select_obs == 2) {
      rok();
      
}

    

    
}
  if (FoodGroup.isTouching(monkey)){
    monkey.x=122
    monkey.y=33
  }
   if (obstacleGroup.isTouching(monkey)){
    obstacleGroup.velocityX =0;
    monkey.velocityY=90
    
  }
  var survivaltime=0; 
stroke("white");    
textSize(20);
fill("white")    
    
stroke("black");
textSize(20) ;
fill("black");
 survivaltime=Math.ceil(frameCount/frameRate())   
 text("Survival Time:"+survivaltime,100,50);   
}
function banana() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(bananaImage);
  red.x=400
  red.y=250
  red.velocityX =-10;
  red.lifetime = 150;
  red.scale = 0.1;
  FoodGroup.add(red);
  }

function rok() {
  var obstacle = createSprite(0,Math.round(random(20, 370)), 10, 10);
  obstacle.addImage(obstaceImage);
  obstacle.x=400
  obstacle.y=330
  obstacle.velocityX =-10;
  obstacle.lifetime = 150;
  obstacle.scale = 0.1;
   obstacleGroup.add(obstacle);
  return obstacle
  
 
  }