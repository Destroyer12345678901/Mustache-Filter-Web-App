noseX = 0;
noseY = 0;
function preload(){
  mustache_filter = loadImage("https://media.istockphoto.com/vectors/mustache-icon-hipster-moustache-stylish-symbol-template-design-for-vector-id1152878060");
}
function setup()
{
    canvas = createCanvas(430, 430);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(430, 430);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is initialized");
}
function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("nose x = " + results[0].pose.nose.x);
      console.log("nose y = " + results[0].pose.nose.y);
  }
}
function draw(){
 image(video, 0, 0, 430, 430)
 circle(noseX, noseY, 20);
 fill(255, 0, 0);
 stroke(255, 0, 0);
 circle(noseX, noseY,50);
 image( mustache_filter,noseX, noseY, 30, 30);
}
function download_img(){
    save('savedimagefromthiswebapp');
}