video="";
status="";
function preload(){
    img=loadImage('trend.jpg');
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status decteting objects";
}
function modelLoaded(){
    console.log(" Model Loaded!")
    status=true;
    
}