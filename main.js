NoseX = 0;
NoseY = 0;
function preload()
{
  Moustache = ('https://i.postimg.cc/fWgM8HX2/moustache2-0.jpg');
}
function setup()
{
  var canvas = createCanvas(400,400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400,400);
  video.hide();
  poseNet = ml5.poseNet(video,ModelLoaded);
  poseNet.on('pose',gotposes);

}
function draw()
{
  image(video,0,0,400,400);
}
function takeSnapshot()
{
    save('picture.jpg');
}
function ModelLoaded()
{
  console.log("PoseNet is initialized");
}
function gotposes(results)
{

  if (results.length > 0)
   
  {
    console.log(results);
    NoseX = results[0].pose.nose.x;
    NoseY = results[0].pose.nose.y;
    console.log("Nose x = "+ NoseX);
    console.log("Nose y = "+ NoseY);
    
  }};