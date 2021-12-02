lipX= 0;
lipY= 0;

function preload(){
clone_lip= loadImage('Lipstick.gif');
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center()
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    lipX= results[0].pose.lip.x;
    lipY= results[0].pose.lip.y;
    console.log("lip x =" + results[0].pose.lip.x);
    console.log("lip y =" + results[0].pose.lip.y);
}
}

function modelLoaded(){
    console.log("Model has been loaded!!");
}

function draw(){
image(video, 0, 0, 300, 300);
image(clone_lip, lipX, lipY, 30, 30);
}

function take_snapshot(){
    save('Lipstick.png')
}