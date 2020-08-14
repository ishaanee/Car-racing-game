var database;
var position;
var gamestate=0;
var count
var form,player,game;
var distance=0;
var allplayers;
var car1,car2,car3,car4,cars;
var track,ground
var car1img,car2img,car3img,car4img
var flag=0;


function preload()
  {
track=loadImage("track.jpg")

ground=loadImage("ground.png")
car1img=loadImage("car1.png")
car2img=loadImage("car2.png")
car3img=loadImage("car3.png")
car4img=loadImage("car4.png")


  }
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);


  game =new Game();
  game.getstate();
  game.start();

}


function draw(){
 
if (count===4&&flag===0)
{
game.update(1);
flag=1
}
if (gamestate===1)
{
  clear()
  game.play()
}
 /*if(gamestate===2)
 {
   console.log("gameover")
   game.update(2)
 }*/
 game.end()


  

}

