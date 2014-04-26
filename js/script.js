window.onload = init;
window.onresize = resize;

function init(){
	initheadtrack();
	resize();
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