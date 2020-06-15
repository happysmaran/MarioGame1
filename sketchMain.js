var bgimg, marioimg, marioDeadimg, marioHeadImg, groundimg, bulletimg, cloudimg, coinimg, gameOverimg, pipesimg, restartimg, textimg, enem1img, enemy2img;
var mario, ground;

function preload(){
    marioimg=loadAnimation("mario1.png","mario2.png");
    marioDeadimg=loadImage("mario_dead.png");
    marioHeadimg=loadImage("mario-head.png");
    groundImg=loadImage("ground.png");
    bulletimg=loadImage("bullet.png");
    bgimg=loadImage("bg.png");
    cloudimg=loadImage("cloud.png");

}
function setup(){
    createCanvas(2000,1000);
    mario=createSprite(100,100,40,40);
    mario.addAnimation("mario", marioimg);

    mario.scale=0.8;

    ground=createSprite(1000,965,2000,20);
    ground.addImage("gnd",groundImg);

}
function draw(){
    background(bgimg);

    if(keyDown(UP_ARROW)){
        mario.velocityY=-12
    }

    mario.velocityY=mario.velocityY+3;

    mario.collide(ground);

    drawSprites();
}