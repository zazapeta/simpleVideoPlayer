'use strict';

var _VIDEO = document.getElementById("SVP");


// ---------------------------------------------
// Button Play Pause

function vid_play_pause(){
	console.log("vid_play_pause");
	_VIDEO.paused ? video_play() : video_pause();
}

function video_play(){
	console.log("video_play");
	document.getElementById("SVP_iconPlayPause").classList.remove("fa-play");
	document.getElementById("SVP_iconPlayPause").classList.add("fa-pause");
	_VIDEO.play();
}

function video_pause(){
	console.log("video_pause");
	document.getElementById("SVP_iconPlayPause").classList.remove("fa-pause");
	document.getElementById("SVP_iconPlayPause").classList.add("fa-play");
	_VIDEO.pause();
}

// ---------------------------------------------
// Progress Bar
function update_progress_bar(){
	console.log("update_progress_bar");
	var progressBar = document.getElementById('SVP_progressBar');
   	var percentage = Math.floor((100 / _VIDEO.duration) * _VIDEO.currentTime);
   	progressBar.value = percentage;
}

var _BUFFER = setInterval(update_buffer_bar,1000);
function update_buffer_bar(){
	console.log("update_buffer_bar");
	var bufferBar = document.getElementById('SVP_bufferBar');
   	var percentage = Math.floor((100 / _VIDEO.duration) * _VIDEO.buffered.end(0));
   	bufferBar.value = percentage;
   	if (percentage === 100){
   		clearInterval(_BUFFER);
   	}
}