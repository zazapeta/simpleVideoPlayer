import React from "React";
import SVPStore from "../stores/SVPStore";
import SVPActions from "../actions/SVPActions";

import VideoPlayPause from "./VideoPlayPause.react";
import VideoProgressBar from "./VideoProgressBar.react";
import VideoStream from "./VideoStream.react";

import Header from "./Header.react";
import Footer from "./Footer.react";
// ------------------------------------------
export class SimpleVideoPlayer extends React.Component {
	constructor(props){
		super(props);
		this.state = SVPStore.getState()
	}
	componentDidMount() {
		console.log("componentDidMount : SimpleVideoPlayer")
  	}

	render() {
		return (
			<div className="SVP_container">
				<VideoStream src={this.props.src}>
					<div className="SVP_controls_container">
						<VideoProgressBar 
							percentPlayed={this.state.percentPlayed}
							percentBuffered={this.state.percentBuffered} />

						<VideoPlayPause 
							playing={this.state.playing}/>
					</div>
				</VideoStream>
			</div>
		);
	}
}

export default SimpleVideoPlayer;

