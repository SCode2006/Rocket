var issImg, spacebkground,sp1,sp2,sp3,sp4;
var iss, spaceCraft, hasDocked, xPos;
hasDocked = false;


function preload(){
  issImg = loadImage("./assets/iss.png");
  spacebkground = loadImage("./assets/spacebg.jpg");
  sp1 = loadImage("./assets/spacecraft1.png");
  sp2 = loadImage("./assets/spacecraft2.png");
  sp3 = loadImage("./assets/spacecraft3.png");
  sp4 = loadImage("./assets/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.5;

  spaceCraft = createSprite(xPos,300);
  spaceCraft.addImage(sp1);
  spaceCraft.scale = 0.1;
}

function draw() {
  background(0);  
  image(spacebkground,0,0,800,400);

  if(!hasDocked){
    xPos = Math.round(random(100,700));
    if(keyIsDown(LEFT_ARROW)){
      spaceCraft.addImage(sp3);
      spaceCraft.x - 10;
    }
    if(keyIsDown(RIGHT_ARROW)){
      spaceCraft.addImage(sp4);
      spaceCraft.x + 10;
    }
    if(keyIsDown(DOWN_ARROW)){
      spaceCraft.addImage(sp2);
    }
    if(keyIsDown(UP_ARROW)){
      spaceCraft.y - 10;
    }
  }

  drawSprites();
}