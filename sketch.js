var PLAY=1;
var END=0;
var gameState=PLAY;

var Bmonster, Smonster, player, Arrow, sword;
var Bmonsterimg, Smonsterimg, playerimg, Arrowimg, swordimg;
var ground, groundimg, border;
var score



function preload(){
    playerimg=loadImage("player.jpg");
    Bmonsterimg=loadImage("big monster.jpg");
    Smonsterimg=loadImage("small monster.png");
    Arrowimg=loadImage("arrow0.png");
    swordimg=loadImage("sword.png")
    groundimg=loadImage("background.png");
}

function setup(){
  createCanvas(500,500);
  
  smallMonsterGroup = createGroup();
  bigMonsterGroup = createGroup();
  
  ground=createSprite(480, 500);
  ground.addImage("bg",groundimg);
  //ground.y = ground.height/2;
  ground.scale=5;
  
  border=createSprite(0,480,1010,20);
  border.shapeColor="black"
  
  Player=createSprite(200,448,50,50);
  Player.addImage("player",playerimg)
  Player.scale=0.6;
  
 sword=createSprite(169,457,25,25);
  sword.addImage("sword",swordimg)
  sword.scale=0.4;
  sword.visible=false;
  
 Arrow=createSprite(169,45,10,10);
  Arrow.addImage("arrow0",Arrowimg);
  Arrow.scale=0.4
}

function draw() {
  background("white");
  
   if(gameState===PLAY){

    ground.velocityY=5
    if(ground.y>500){
      ground.y=250
    }

    if(keyDown("RIGHT_ARROW")){
      Player.velocityX=5;
    }
    
    if(keyDown("LEFT_ARROW")){
      Player.velocityX=-5;
    }
  
  if(keyDown("DOWN_ARROW")){
    sword.visible=true;
  }
   
  sword.x=Player.x;

  spawnSmallMonsters();
  spawnBigMonster();
   
}
  
  else if(gameState===END){
    ground.velocityY=0
    Player.velocityY=0
    
    smallMonsterGroup.lifeTime(-5);
    bigMonsterGroup.lifeTime(-5);
  }
  

   
   
  
  
  drawSprites();
}

function spawnSmallMonsters(){
  
    if(frameCount % 100 === 0){
        Smonster=createSprite(200,200,30,30);
        Smonster.addImage("smallmonster",Smonsterimg);
        Smonster.velocityY=5;
        Smonster.scale = 0.08;
        Smonster.lifeTime=180;
        smallMonsterGroup.add(Smonster)
      }
  }

function spawnBigMonster(){
  
    if(frameCount % 60 === 0){
      Bmonster=createSprite(200,200,30,30);
      Bmonster.addImage("Bigmonster",Bmonsterimg);
      Bmonster.velocityY=5;
      Bmonster.scale = 0.5;
      Bmonster.lifeTime=180;
      bigMonsterGroup.add(Bmonster)
    }
  }