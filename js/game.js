"use strict";

var enemyProbablilityPerSecond=0.5;
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
