<script type="text/javascript">
let bgCol=255;
let textMes = '🐝';
function setup() {
  createCanvas(innerWidth, 1200);
  background(255);
  textFont("helvetica");
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(255);
  strokeWeight(100);
  stroke(255,209,102);
}
function draw() {
  //background(255);
  stroke(255,209,102,10);
  fill(255,209,102);
  circle(mouseX, mouseY,70);
  stroke(255,209,102,80);
  circle(mouseX, mouseY,10);
  text(textMes, mouseX, mouseY);
}

function mouseClicked(){
  fill(255,0,0);
  stroke(255,0,0);
  circle(mouseX, mouseY,50);
}


</script>