"use strict";

window.onload = init;
window.onresize = resize;

function init(){
	initheadtrack();
	initGame();
	resize();
}

function initGame(){
	var c = document.querySelector("#container");
	var ctx = c.getContext("2d");
	var body = document.querySelector("body");

	var start = document.createElement("div");
	start.style.position = "absolute";
	start.textContent = "Start Game";
	body.appendChild(start);
}

function resize(){
	var body = document.querySelector("body");
	var mainCanvas = document.querySelector("#container");

	centerIn(mainCanvas, body);
}

//center child element in parent element
function centerIn(child, parent){
	var childW = window.getComputedStyle(child,null).getPropertyValue("width");
	var parentW = window.getComputedStyle(parent,null).getPropertyValue("width");

	childW  = removePXString(childW);
	parentW = removePXString(parentW);

	var childLeft = (parentW - childW)/2 + "px";

	if(childLeft < 0) childLeft = 0;

	child.style.marginLeft = childLeft;
}

// removes 'px' from sizeString
function removePXString(sizeString){
	var sliceCount = sizeString.length - 2;
	return sizeString.slice(0, sliceCount);
}

function initheadtrack()
{
 	var videoInput = document.getElementById('inputVideo');
  	var canvasInput = document.getElementById('inputCanvas');

  	var htracker = new headtrackr.Tracker();
  	htracker.init(videoInput, canvasInput);
  	htracker.start();
}