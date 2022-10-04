nosex=0;
nosey=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
}
function preload(){
    clownNose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");

}
function modelLoaded(){
    console.log("Moddel is loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-40;
        nosey=results[0].pose.nose.y;
    }

}
function draw(){
    image(video,0,0,300,300);
    image(clownNose,nosex,nosey,80,35);

}
function take_snapshot(){
  save("@MISS_CLOWN.PNG");
}