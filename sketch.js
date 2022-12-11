var plane,planeimg
var backgroundimg
var health,healthimg
var gas,gasimg
var nukes,nukesimg
function preload() {
backgroundimg=loadImage("Cloud.jpg")
planeimg=loadImage("Plane.png")
healthimg=loadImage("health.png")
//gasimg=loadImage("Gas.png")
//nukesimg=loadImage("nukesfromrussia.png")
}


function setup() {
  createCanvas(850,600)

  bg=createSprite(750,300,15000,6000);
  bg.addImage("background",backgroundimg)
  bg.scale=6;
  bg.velocityX=-3;

    plane=createSprite(70,500,10,10)
    plane.addImage("plane",planeimg)
    plane.scale=1
    health=createSprite(1000,100,100)
    health.addImage("health",healthimg)
    health.scale=0.1

   

    


}

function draw() {
  background(backgroundimg);

  if(bg.x<0){
    bg.x=bg.width/7;
  }
  
  if (keyDown("down"))
  {
    plane.y-=-4
  } 
  if(keyDown("up"))
  {
    plane.y-=4
  }
  drawSprites();
}

