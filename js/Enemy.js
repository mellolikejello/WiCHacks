"use strict"

window.Enemy = (function(){

	function Enemy(canvasW, canvasH){
		//ivars
		this.active=true;
		this.age= Math.floor(Math.random()*128);
		this.color="#A2B";
		this.canvasWidth= canvasWidth;
		this.canvasHeight = canvasHeight;
		this.x = this.canvasWidth/4+Math.random()*this.canvasWidth/2;
		this.y= 0;
		this.xVelocity=0;
		this.yVelocity=200;
		this.width= 50;
		this.height=50;
	};

	var e = Enemy.prototype;

	// e.inBounds = function(){
	// 	return this.x>=0&& this.x <this.canvasWidth && this.y>0 && this.y <= this.canvasHeight;

	// };

	e.draw = function (ctx){
		var halfWidth = this.width/2;
		var halfHeight = this.height/2;

		ctx.fillStyle = this.color;
		ctx.fillRect(this.x - halfWidth, this.y - halfHeight,
		this.width, this.height);
		// ctx.drawImage(images["enemyImage"],this.x-halfWidth,this.y-halfHeight,this.width,this.height);
	};

	e.update=function(dt){
		// this.xVelocity=this.amplitude * Math.sin(this.age*Math.PI*dt);
		this.x+=this.xVelocity;
		this.y+=this.yVelocity*dt;
		this.age++;
		this.active = this.active&& inBounds(this);

	};

		// private
	function inBounds(obj) {
		return obj.y <= obj.canvasHeight + obj.height * 0.5;
	};
	return Enemy;
})();