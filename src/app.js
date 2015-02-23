'use strict';

var gl = null;

function start() {
	var canvas = document.getElementById("game");
	try {
		gl = canvas.getContext("webgl") ||
			canvas.getContext("experimental-webgl");
	} catch(e) {
	}
	if (!gl) {
		alert("Could not initialize WebGL.");
		return;
	}
	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	gl.clearColor(0.2, 0.5, 0.3, 0.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}

start();
