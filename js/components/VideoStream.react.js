import React from "React";

export class VideoStream extends React.Component {
	play(){

	}
	render() {
		// var videoNode = this.refs.video.getDOMNode();
		return (
			<div className="SVP_video_container">
				<video >
					<source 
						src="http://media.w3.org/2010/05/sintel/trailer.mp4" 
						type='video/mp4; codecs="avc1, mp4a"'/>
					<source 
						src="http://media.w3.org/2010/05/sintel/trailer.ogv"
						type='video/ogg; codecs="theora, vorbis"'/>
					Your user agent does not support the HTML5 Video element.
				</video>
				<div className="SVP_controls_container">
				{this.props.children}
				</div>
			</div>
		);
	}
}

export default VideoStream;
