'use strict';

var gl = null;

function start() {
	var canvas = document.getElementById("canvas");
	try {
		gl = canvas.getContext("webgl") ||
			canvas.getContext("experimental-webgl");
	} catch(e) {
	}
	if (!gl) {
		alert("Could not initialize WebGL.");
		return;
	}
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;
	var aspect = canvas.clientWidth / canvas.clientHeight;
	console.log("Aspect: " + aspect);
	window.requestAnimationFrame(render);
}

function render(time) {
	window.requestAnimationFrame(render);
	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	gl.clearColor(0.2, Math.sin(time*0.003)*0.5+0.5, 0.3, 0.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}

start();
