  
  var color1=[],color2=[],color3=[];
  var leng=100;
  var heig=[];
  var x=[];
  x[0]=0;
function setup() {
 let myCanvas= createCanvas(800, 200);
 myCanvas.parent('divX');

  for(let i=0;i<leng-1;i++){
    color1[i]=(ran(0,255));
    color2.push(ran(0,255));
    color3.push(ran(0,255));
    heig.push(ran(0,-100));
    x[i+1]=x[i]+8;

  }

}
var j=0;
function draw() {
  background(220);
    for(var i=0;i<leng-2;i++) {
      fill(color1[i],color2[i],color3[i]);
      rect(x[i],100,8,heig[i]);
      
      
    }
      if(heig[j]<heig[j+1]){
        var temp=heig[j];
        heig[j]=heig[j+1];
        heig[j+1]=temp;
      }
      j+=1;
      if(j>100){
        j=0;
      }

      
 
 


}

function ran(x,y){

  let rin=  Math.floor(Math.random() * y)+x;
  return rin;

  
}
