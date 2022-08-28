class Wave{
	constructor(amp,period,phase){
		this.amplitude=amp;
		this.period=period;
		this.phase=phase;
	}
	calculate(x){
		return sin(this.phase + TWO_PI * x /this.period)*this.amplitude;

	}


}
let waves=[];
function setup(){
	createCanvas(600,1200);
	waves[0] = new Wave(6,150,TWO_PI);
	waves[1] = new Wave(5,150,TWO_PI);
	waves[2] = new Wave(10,150,150,TWO_PI);
	waves[3] = new Wave(5,150,TWO_PI);
}
let hei=400;
function draw(){
	
	background(0);
	stroke(255);
	strokeWeight(10);
	line(70,600, 70, 140);
	let y=0;
	fill(255);
	strokeWeight(0);
	for(let x=100;x<400;x+=20){
		
		

		y += waves[0].calculate(x);
		
		y+=10;
		 
		ellipse(x,y+ hei/3,10);
	 
	}
	waves[0].phase+=0.09;
	for(let x1=80;x1<390;x1+=20){
		
		let y1=0;

		y1+= waves[1].calculate(x1);
		
		 
		 
		ellipse(x1-10,y1+ hei/3+150,10);
	 
	}
	waves[1].phase+=0.11;
	let y2=0;
	for(let x2=100;x2<430;x2+=20){
		
		

		y2 += waves[0].calculate(x2);
		
		y2+=10;
		 
		ellipse(x2,y2+ hei/3+160,10);
	 
	}
	waves[2].phase+=0.11;
	for(let x3=100;x3<430;x3+=20){
		
		let y3=0;

		y3+= waves[3].calculate(x3);
		
		 
		 
		ellipse(x3-10,y3+ hei/3+337,9);
	 
	}
	waves[3].phase+=0.11;
 

	
}


