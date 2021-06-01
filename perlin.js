var inc = 0.1;
var scl = 20;
var zoff = 0;
var col, row;
var fr;
var particle = [];
var flowfield;

function setup() {
  createCanvas(800, 600);
  pixelDensity(4);
  col = floor(width / scl);
  row = floor(height / scl);
  fr = createP('');
  
  for(var i = 0; i < 10000; i++)
    {
      particle[i] = new Particle();
    }
  
  flowfield = new Array(col * row);
  
  background(255);
}

function draw() {
  var yoff = 0;
  
  for(var y = 0; y < row; y++)
    {
      var xoff = 0;
      for(var x = 0; x < col; x++)
        {
          var index = x + y * col;
          var ang = noise(xoff, yoff, zoff) * TWO_PI * 3;
          var v = p5.Vector.fromAngle(ang);
          v.setMag(0.24);
          flowfield[index] = v;
          xoff += inc;
          //stroke(255, 50);
          //strokeWeight(1);
          //push();
          //translate(x * scl, y * scl);
          //rotate(v.heading(0));
          //line(0, 0, scl, 0);
          //pop();
        }
      yoff += inc;
      zoff += 0.0015;
    }
  for(var i = 0; i < particle.length; i++)
  {
    particle[i].follow(flowfield);
    particle[i].update();
    particle[i].show();
  }
  fr.html(floor(frameRate()));
}
