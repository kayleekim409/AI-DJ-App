var song = "";
var leftWristX = "";
var leftWristY = "";
var rightWristX = "";
var rightWristY = "";
function preload() {
    song = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0,0, 600,500);
}
function playSound() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded() {
    console.log('Posenet is Initialized');
}
function gotPoses(results) {
    if (results.length>0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist x = "+leftWristX+ "Left wrist y = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x = "+rightWristX+"Right wrist y = "+rightWristY);
    }
}