function Particle()
{
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 2.5;
  
  this.prevpos = this.pos.copy();
  
  this.update = function()
  {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.follow = function(vectors)
  {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * col;
    var force = vectors[index];
    this.applyForce(force);
  }
  
  this.applyForce  = function(force)
  {
    this.acc.add(force);
  }
  
  this.show = function()
  {
    stroke(0, 5);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevpos.x, this.prevpos.y);
    //int(this.pos.x, this.pos.y);
    this.upprev();
  }
  
  this.upprev = function()
  {
    this.prevpos.x = this.pos.x;
    this.prevpos.y = this.pos.y;
  }
  
  this.edges = function()
  {
    if(this.pos.x > width)
    {
      this.pos.x = 0;
      this.upprev();
    }
    if(this.pos.x < 0)
    {
      this.pos.x = width;
      this.upprev();
    }
    if(this.pos.y > height)
    {
      this.pos.y = 0;
      this.upprev();
    }
    if(this.pos.y < 0)
    {
      this.pos.x = height;
      this.upprev();
    }
  }
}
