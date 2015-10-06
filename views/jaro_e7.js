function car(PlateNo, Model, Color){
	this.PlateNo = PlateNo;
	this.Model = Model;
	this.Color = Color;
	this.Speed = 0;
	
	this.startCar = startCar;
	this.stopCar = stopCar;
	this.accelerate = accelerate;
	this.decelerate = decelerate;
	this.repaintCar = repaintCar;

}

function startCar(){
	this.Speed = 10;
}

function stopCar(){
	this.Speed = 0;
}

function accelerate(n){
	this.Speed = this.Speed+n;
}

function decelerate(n){
	this.Speed = this.Speed-n;
}

function repaintCar(newColor){
	this.Color = newColor;
}
