var alarmClock,time,button,alarmClockimg,score=0,startButton, stopButton,bg,st
function preload(){
    alarmClockimg = loadImage("xedited.png");
   st = loadImage("start.png");
    bg=loadImage("download.jpg")
    song = loadSound("song.mp3");
}
function setup (){
    canvas = createCanvas(400,500);

 
  startButton=createSprite(200, 40, 60,50) 
  startButton.addAnimation("start", st)
startButton.scale=0.1
text(score+"ms",200,200)
    alarmClock = createSprite(200,200,20,50);
  
  alarmClock.addAnimation("xedited", alarmClockimg)
  alarmClock.scale = 1.0

  
}

function draw(){
  background(bg)
  
   if(mousePressedOver(startButton)){
start()
}
 textSize(20)
    drawSprites()
    song.play()
text(score+"   ms",190,200) 

    
}
 function start(){
score+=1
}
