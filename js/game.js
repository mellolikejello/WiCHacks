"use strict";

// window.onload = initStuff;

// var c;
// var ctx;
var enemyProbablilityPerSecond=1;
var canvasWidth = 800;
var canvasHeight= 500;
var lastTime=0;
var enemies=[];

function draw(){
	//draw enemies


 	var dt=calculateDeltaTime();

 	update(dt);

	enemies.forEach(function(enemy){
		enemy.draw(ctx);
	});

	window.requestAnimationFrame(draw);
}

function update(dt){
	//Enemies
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	enemies.forEach(function(enemy){
		return enemy.update(dt);
	});

	enemies=enemies.filter(function(enemy){
		return enemy.active;
	});

	if(Math.random()<enemyProbablilityPerSecond/60){
		enemies.push(new Enemy(canvasWidth, canvasHeight));
	}

	for(var i = 0; i<enemies.length; i++){
		if(enemies[i].y>=canvasHeight+10){
			enemies.splice(i,1);
			console.log("enemy is out of array");
		}
	}


}

//HELPERS
/*
	Function Name: calculateDeltaTime()
	Author:Tony Jefferson
	Return Value: Time in seconds since function last called
	Dependencies: Needs a global variable named lastTime
	Description:this isn't the most efficient way to do this, but I think its more clear than other methods I've seen.
*/
function calculateDeltaTime(){
	//what's with (+ new Date)below?
	//+ calls Date.valueOf(), which converts it from an object to a primitive (number of milliseconds since January 1,1970)
	var now, fps;
	now=(+new Date);
	fps=1000/(now-lastTime);
	fps=clamp(fps,12,60);
	lastTime=now;
	return 1/fps;
}

function clamp(val, min, max){
    return Math.max(min, Math.min(max, val));
}

function loadImages(){
	var numLoadedImages=0;
	var numImages=0;
	//get num of sources

	//load images
	for(var imageName in IMAGE_SOURCES){
		console.log("Started loading " + imageName);
		images[imageName]= new Image();//image is a class
		images[imageName].src = IMAGE_SOURCES[imageName];

		images[imageName].onload = function(){
			console.log(this.src+" load complete");
			if(++numLoadedImages>=numImages){
				console.log("Done loading images");
				init();//start the game!
			}
		};//end onload
	}//end for
}//end loadimages
// function enemies(){

// 	//create array of enemies
// 	var enemies =[];
// 	 // enemy object
// 	var enemy = {
// 		x: Math.random()*canvasWidth,
// 		y: 0,
// 		xVelocity: 0,
// 		yVelocity: Math.random()*0.5,
// 		img: "images/shield.png"
// 	};

// 	function draw(){

// 		console.log("In enemy draw");
// 		ctx.clearRect(0,0,canvasWidth,canvasHeight);

// 		if(Math.random() < enemyProbablilityPerSecond/60) {
// 			enemies.push(enemy);

// 		}
// 		for(var i = 0; i< enemies.length;i++){
// 			var e = enemies[i];
// 			var o = new Image();
// 			o.src = e.img;
// 			// the x and y of each cloud will change (changes in update())
// 			ctx.drawImage(o,e.x,e.y);
// 		}
// 		update();
// 	}
// 	 function update(){


// 	 	for(var i = 0; i <enemies.length; i++)
// 			{
// 				var e = enemies[i];
// 				// set speed of clouds
// 				e.x += e.xVelocity;
// 				e.y += e.yVelocity;

// 				// if(e.y > canvasHeight)
// 				// {
// 				// 	this.enemies.splice(i,1);
// 				// }
// 			}

// 			window.requestAnimationFrame(draw);
// 			// if(cloudsAnimation){
// 			// 	window.requestAnimationFrame(draw);
// 			// }
// 	 }
// 	window.requestAnimationFrame(draw);
	// store 





// "use strict";

// // window.onload = init;
// window.Game = (function(){

// 	var lastTime = 0;
// 	function Game(canvasW,canvasHeight,ctx){

// 		console.log("In game");
// 		this.enemyProbablilityPerSecond=0.5;
// 		this.canvasWidth = 800;
// 		this.canvasHeight = 500;
// 		this.ctx = ctx;
// 		this.enemies = [];

// 		this.IMAGE_SOURCES={
// 			enemyImage:"images/shield.png"
// 		};
// 	}
// 	var g = Game.prototype;
	
// 	g.update = function(dt){
// 		//Enemies
// 		this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);

// 		for(var i = 0; i<this.enemies.length;i++){
// 			this.enemies[i].update(dt);
// 		}
// 		// this.enemies.forEach(function(enemy){
// 		// 	return enemy.update(dt);
// 		// });

// 		this.enemies=this.enemies.filter(function(enemy){
// 			return enemy.active;
// 		});

// 		if(Math.random()<this.enemyProbablilityPerSecond/60){
// 			enemies.push(new Enemy(this.canvasWidth, this.canvasHeight));
// 		}

// 		for(var i = 0; i<this.enemies.length; i++){
// 			if(this.enemies[i].y>=this.canvasHeight+10){
// 				this.enemies.splice(i,1);
// 				console.log("enemy is out of array");
// 			}
// 		}

// 	};

// 	g.draw =function(){
// 		//draw enemies

// 		console.log("In game.draw");
// 	 	var dt=calculateDeltaTime();

// 	 	if(this.enemies){
// 			for(var i = 0; i<this.enemies.length;i++){
// 				this.enemies[i].draw(this.ctx);
// 			}

// 		}
// 		this.Game.update(dt);

// 	};

// 	//HELPERS
// 	/*
// 		Function Name: calculateDeltaTime()
// 		Author:Tony Jefferson
// 		Return Value: Time in seconds since function last called
// 		Dependencies: Needs a global variable named lastTime
// 		Description:this isn't the most efficient way to do this, but I think its more clear than other methods I've seen.
// 	*/
// 	function calculateDeltaTime(){
// 		//what's with (+ new Date)below?
// 		//+ calls Date.valueOf(), which converts it from an object to a primitive (number of milliseconds since January 1,1970)
// 		var now, fps;
// 		now=(+new Date);
// 		fps=1000/(now-lastTime);
// 		fps=clamp(fps,12,60);
// 		lastTime=now;
// 		return 1/fps;
// 	}

// 	function clamp(val, min, max){
// 	    return Math.max(min, Math.min(max, val));
// 	}

// 	function loadImages(){
// 		var numLoadedImages=0;
// 		var numImages=0;
// 		//get num of sources

// 		//load images
// 		for(var imageName in IMAGE_SOURCES){
// 			console.log("Started loading " + imageName);
// 			images[imageName]= new Image();//image is a class
// 			images[imageName].src = this.IMAGE_SOURCES[imageName];

// 			this.images[imageName].onload = function(){
// 				console.log(this.src+" load complete");
// 				if(++numLoadedImages>=numImages){
// 					console.log("Done loading images");
// 					init();//start the game!
// 				}
// 			};//end onload
// 		}//end for
// 	}//end loadimages
// 	return Game;
// })();





