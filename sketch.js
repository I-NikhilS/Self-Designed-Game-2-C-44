var catimg,cat,dogimg,dog,horseimg,horse, pigimg, pig, barnimg, barn
function preload(){
  catimg=loadAnimation("Images/Cat/cat0.gif","Images/Cat/cat1.gif","Images/Cat/cat2.gif","Images/Cat/cat3.gif","Images/Cat/cat4.gif","Images/Cat/cat5.gif","Images/Cat/cat6.gif")
  dogimg=loadAnimation("Images/Dog/dog0.gif","Images/Dog/dog1.gif","Images/Dog/dog2.gif","Images/Dog/dog3.gif","Images/Dog/dog4.gif","Images/Dog/dog5.gif","Images/Dog/dog6.gif","Images/Dog/dog7.gif")
  horseimg=loadAnimation("Images/Horse/horse0.gif","Images/Horse/horse1.gif","Images/Horse/horse2.gif","Images/Horse/horse3.gif","Images/Horse/horse4.gif","Images/Horse/horse5.gif","Images/Horse/horse6.gif","Images/Horse/horse7.gif","Images/Horse/horse8.gif")
  pigimg=loadAnimation("Images/Pig/pig0.gif","Images/Pig/pig1.gif","Images/Pig/pig2.gif","Images/Pig/pig3.gif","Images/Pig/pig4.gif","Images/Pig/pig5.gif","Images/Pig/pig6.gif","Images/Pig/pig7.gif","Images/Pig/pig8.gif","Images/Pig/pig9.gif","Images/Pig/pig10.gif","Images/Pig/pig11.gif")
  barnimg=loadImage("Images/barn.png");
  backgroundimg=loadImage("Images/backgroundimage.jpeg")


}
function setup() {
  createCanvas(1000,800);
cat=createSprite(100,600,2,2)
  cat.addAnimation("walking",catimg)
  cat.scale=0.1
dog=createSprite(50,500,2,2)
  dog.addAnimation("walking",dogimg)
  dog.scale=0.4
  //dog.rotate(PI/0.3);
  
horse=createSprite(100,500,2,2)
  horse.addAnimation("walking",horseimg)
  horse.scale=0.4
pig=createSprite(100,550,2,2)
  pig.addAnimation("walking",pigimg)
  pig.scale=0.4
barn=createSprite(100,600,2,2)
}

function draw() {
  background(backgroundimg);  


  if(keyDown("RIGHT_ARROW")){
   pig.x=pig.x+2
  }
  if(keyDown("LEFT_ARROW")){
    pig.x=pig.x-2
   }
  if(keyDown("UP_ARROW")){
    pig.y=pig.y-2
   }
   if(keyDown("DOWN_ARROW")){
    pig.y=pig.y+2
   }
   
  
 
 





  drawSprites();

  }