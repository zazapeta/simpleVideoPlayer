// -------------------------------------------
import React from "React";
import ReactDOM from "React";
// -------------------------------------------
import ButtonPlayPause from "./ButtonPlayPause.react";
import ProgressBar from "./ProgressBar.react";
import BufferBar from "./BufferBar.react";
import Video from "./Video.react";
// -------------------------------------------
export class SimpleVideoPlayer extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			playing: false,
			percentagePlayed: 0,
			percentageBuffered: 0
		}
		// ####################
		// Bindings
		this.onTimeUpdate 	= this.onTimeUpdate.bind(this);
		this.onProgress 	= this.onProgress.bind(this);
		this.pause 			= this.pause.bind(this);
		this.play 			= this.play.bind(this);
		// ####################
	}

  	componentDidMount(){
  		this.setState({
  			percentageBuffered : 0
  		});
	}

	render() {
		// ####################
		// Video
		var _video = <Video ref={(ref) => this.video = ReactDOM.findDOMNode(ref)}
						className = "svpVideo"
						onTimeUpdate = {this.onTimeUpdate}
						onProgress = {this.onProgress}
						src = {this.props.src}/>;
		// ####################
		var _CONTROLS = [];
		// Button Play Pause
		var _button = <ButtonPlayPause ref = "buttonPP" key = "controls.buttonPP"
						className = "svpControls svpButtonPP"
					 	playing = {this.state.playing}
					 	onClick = {this.state.playing ? this.pause : this.play}
					 	/>;
		// ProgressBar
		var _progressBar = <ProgressBar ref = "progressBar" key = "controls.progressBar"
						className = "svpControls svpProgressBar"
						percentagePlayed = {this.state.percentagePlayed}/>;
		// BufferBar
		var _bufferBar = <BufferBar ref = "bufferBar" key = "controls.bufferBar"
						className = "svpControls svpBufferBar"
						percentageBuffered = {this.state.percentageBuffered}/>;
		// Adding controls
		_CONTROLS.push(_button,_progressBar,_bufferBar);
		// ####################
		return (
			<div className = "svpContainer">
				{_video}
				{_CONTROLS}
			</div>
		);
	}
	// -------------------------------------------
	// Events
	onProgress(){
		// bufferBar
		console.log("onProgress");
		this.setState({
			percentageBuffered: this._getPercentageBuffered()
		});
	}
	onTimeUpdate(){
		// progressBar
		console.log("onTimeUpdate");
		this.setState({
			percentagePlayed: this._getPercentagePlayed()
		});
	}
	play(){
		console.log("play");
		this.video.play();
		this.setState({
			playing: true
		});
	}
	pause(){
		console.log("pause");
		this.video.pause();
		this.setState({
			playing: false
		});
	}
	// -------------------------------------------
	_getPercentagePlayed(){
		console.log("_getPercentagePlayed");
		return Math.floor((100 / this.video.duration) * this.video.currentTime);
	}

	_getPercentageBuffered(){
		console.log("_getPercentageBuffered");
		try{
			return Math.floor((100 / this.video.duration) * this.video.buffered.end(0));
		}
		catch(e){
			return 0;
		}
	}

}
