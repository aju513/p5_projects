var s;
var scl=10;
var foo;
var total=0;


function setup() {
  createCanvas(400, 400);
  s= new Snake();
  
  foo= new Food(floor(random(0,width/scl)*scl) ,floor(random(0,height/scl)*scl));
  
  frameRate(10);
}

function draw() {
  background(220);
  s.update(1,0);
  s.show();
  eat();
  foo.show();
  s.death();
 
 
}

function eat(){
  if(dist(foo.x,foo.y,s.x,s.y)<=7){
    foo.x=floor(random(0,width/scl)*scl);
    foo.y=floor(random(0,height/scl)*scl);
    total+=1;
    
  }
}
 

 
function keyPressed(){
    if(keyCode == RIGHT_ARROW){
      s.dir(1,0);
    }
    if(keyCode == LEFT_ARROW){
      s.dir(-1,0);
    }
    if(keyCode == UP_ARROW){
      s.dir(0,-1);
    }
    if(keyCode == DOWN_ARROW){
      s.dir(0,1);
    }

}
