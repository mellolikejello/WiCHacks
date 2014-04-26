"use strict";

window.onload = init;

function init(){
	var c = document.getElementById("container");
	var ctx = c.getContext('2d');
	var g = new Game(800,500,ctx);

	window.requestAnimationFrame(g.draw);
}




