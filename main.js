var song = "";
var leftWristX = "";
var leftWristY = "";
var rightWristX = "";
var rightWristY = "";
var leftWristscore = "";
var righWristscore = "";
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
    if(righWristscore > 0.2) {
        circle(rightWristX, rightWristY, 20);
    if (rightWristY > 0 && rightWristY<=100) {
        document.getElementById("speed").innerHTML = "Speed is: 0.5x";
        song.rate(0.5);
    }
    if (rightWristY > 100 && rightWristY<=200) {
        document.getElementById("speed").innerHTML = "Speed is: 0.5x";
        song.rate(0.5);
    }
    if (rightWristY > 200 && rightWristY<=300) {
        document.getElementById("speed").innerHTML = "Speed is: 0.5x";
        song.rate(0.5);
    }
    if (rightWristY >300 && rightWristY <=400) {
        document.getElementById("speed").innerHTML = "Speed is: 0.5x";
        song.rate(0.5);
    }
    if (rightWristY > 400 && rightWristY<=500) {
        document.getElementById("speed").innerHTML = "Speed is : 0.5x";
        song.rate(0.5);
    }
    }
    
    fill("red");
    stroke("red");
    if(leftWristscore > 0.2) {
    circle(leftWristX, leftWristY, 20);
    InNumberLeftWristY = Number(leftWristY);
    remove_decimal = floor(leftWristY);
    leftWristYdivide = remove_decimal / 1000;
    volume = leftWristYdivide * 2;
    document.getElementById("volume").value = "Volume is "+volume;

    }

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

        leftWristscore = results[0].pose.keypoints[9].score;
        console.log("leftWristscore = " + leftWristscore);
        
        righWristscore = results[0].pose.keypoints[9].score;
        console.log("rightWristscore = " + righWristscore);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist x = "+leftWristX+ "Left wrist y = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x = "+rightWristX+"Right wrist y = "+rightWristY);

    }
}