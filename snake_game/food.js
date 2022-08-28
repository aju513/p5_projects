class Food{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	show(){
		this.x= constrain(this.x,0,width-scl);
		this.y= constrain(this.y,0,height-scl);

		rect(this.x,this.y,scl,scl);
	}
}