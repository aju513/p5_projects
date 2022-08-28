class Snake{
	constructor(){
		this.x=height/2;
		this.y=width/2;
		this.x_speed=0;
		this.y_speed=0;
	
		this.tail=[];
		

	}
	dir(x,y){

		this.x_speed=x;
		this.y_speed=y;

	}
	death(){
		for(let i=0;i<this.tail.length;i++){
			var pos=this.tail[i];
			if(dist(pos.x,pos.y,this.x,this.y)<2){
				this.tail=[];
				total=0;
				this.x=width/2;
				this.y=height/2;

			}

		}
	}
	update(){
		if(total===this.tail.length){

		for(let i=0;i<this.tail.length-1;i++){
			this.tail[i]=this.tail[i+1];
			
		}
		}
		this.tail[total-1]=createVector(this.x,this.y)
		console.log(this.tail);
		this.x=this.x+this.x_speed*scl;
		this.y=this.y+this.y_speed*scl;
		this.x= constrain(this.x,0,width-scl);
		this.y= constrain(this.y,0,height-scl);

	}
	show(){
		for(let i=0;i<total;i++){
			rect(this.tail[i].x,this.tail[i].y,scl,scl);
		}
		rect(this.x,this.y,scl,scl);
	}
}