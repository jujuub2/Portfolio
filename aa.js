var x =0;
var dx = 2;
function setup() {
  /*remplacer le createCanvas, par les deux lignes suivantes (evidement vous choissez la taille du canevas !*/
  var canvas = createCanvas(100, 100);
  canvas.parent('conteneur_de_mon_Sketch');

  background(255, 0, 200);
}

function draw(){
   background(mouseX, 0, 200);
  x=x+dx;
  ellipse (x,width/2,10,10);
  if (x>width || x<0){
    dx=-dx;
  }
  
}

