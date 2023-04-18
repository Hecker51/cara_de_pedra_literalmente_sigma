function draw()
{
image(video, 0, 0, 300, 300);
fill("preto ")
stroke(255,0, 0, 0)

image(cria, oho_y - 50, oho_x1 - 50, 100, 100)

}


function preload()
{
cria = loadImage('https://i.postimg.cc/1R6KZWBX/1f5ff.png')
}

function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide()
poseNet = ml5.poseNet(video, modelcarregado)
poseNet.on('pose', gotPoses);

}


function modelcarregado()
{
console.log("serto")
   
}


var oho_x = 0
var oho_x1 = 0
var oho_y = 0
var oho_y2 = 0

function gotPoses(results)
{
    if(results.length > 0){ 
    console.log(results)

   oho_x = results[0].pose.rightEye.x
   oho_x1 = results[0].pose.leftEye.x
   oho_y = results[0].pose.leftEye.y
   oho_y2 = results[0].pose.rightEye.y
   

}
}