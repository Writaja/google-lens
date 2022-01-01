function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("MobileNet",modelloaded);
  
  }
  function draw(){
    image(video,0,0,300,300);
  classifier.classify(video,gotresult);
  
  }
  function modelloaded(){
    console.log("modelloaded");
  }
  var previousresult="";
  function gotresult(error,result){
    if(error){
      console.log(error);
    }
}