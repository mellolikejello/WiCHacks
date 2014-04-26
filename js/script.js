"use strict";

window.onload = init;
window.onresize = resize;

var ctx;
var c;

var headPos = [0,0,0,0];

function init(){
	initGame();
	initheadtrack();
	resize();

}

function initGame(){
	c = document.querySelector("#container");
	ctx = c.getContext("2d");
	var body = document.querySelector("body");

	draw();

	var start = document.createElement("div");
	start.style.position = "absolute";
	start.textContent = "Start Game";
	//body.appendChild(start);
}

function resize(){
	var body = document.querySelector("body");
	var overlay = document.getElementById('overlay');
	centerIn(c, body);
	centerIn(overlay, body);
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
  	var canvasOverlay = document.getElementById('overlay');
    var overlayContext = canvasOverlay.getContext('2d');
   
    canvasOverlay.style.position = "absolute";
	canvasOverlay.style.top = '0px';
	canvasOverlay.style.zIndex = '100001';
	canvasOverlay.style.display = 'block';
	
  	var htracker = new headtrackr.Tracker();
  	htracker.init(videoInput, canvasInput);
  	htracker.start();

  	document.addEventListener("facetrackingEvent", function( event ) {
		// clear canvas
     	overlayContext.clearRect(0,0,800,500);
		// once we have stable tracking, draw rectangle
		if (event.detection == "CS") {
			overlayContext.translate(event.x, event.y)
			overlayContext.rotate(event.angle-(Math.PI/2));
			overlayContext.strokeStyle = "#00CC00";
			overlayContext.strokeRect((-(event.width/2)) >> 0, (-(event.height/2)) >> 0, event.width, event.height);
			overlayContext.rotate((Math.PI/2)-event.angle);
			overlayContext.translate(-event.x, -event.y);
		}
	});
}

  	
