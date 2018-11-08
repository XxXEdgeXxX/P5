var drop = []; // array of Jitter objects
var scl;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //for (var x = 0; x < windowWidth; x++) {
  //  drop[x] = []; // create nested array
  //  for (var y = 0; y < windowHeight; y++) {      
  //    drop[x][y].push(new Drop(x,y));
  //  }
      
  // Create objects
  //for (var i=0; i<50; i++) {
  //  drop.push(new Drop());
  //}
}

function draw() {
  background(0);
  for (var i=0; i<drop.length; i++) {
    drop[i].move();
    
    drop[i].display();
    //drop[i].grow();
    
  }
}

function mouseDragged()
{
    drop.push(new Drop(mouseX, mouseY));

}


// Jitter class
function Drop(X, Y) {
  this.x = X;
  this.y = Y;
  this.diameter = 20; //random(20,100);
  this.speed = 1;
  this.acc = 0.2;
  this.amount = 1;
  this.groworshrink = true;
  
  this.grow = function()
  {
    if(this.diameter < 2)
    {
      this.groworshrink = true;      
    }
    if(this.diameter > 99)
    {
      this.groworshrink = false;
    }
    
    if (this.groworshrink)
    {
      this.diameter = this.diameter + amount;
    } 
    if (!this.groworshrink)
    {
      this.diameter = this.diameter - amount;
    }
  }
  

  this.move = function() {
    //this.diameter++;
    this.speed = this.speed+this.acc;
    this.x += sin(this.speed+1);
    this.y += cos(this.speed+1);
    
  };

  this.display = function() {
    fill(random(255),random(255),random(255));
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
