import React from "React";

export class VideoProgressBar extends React.Component {
	render() {
	    var playedStyle = {width: this.props.percentPlayed + '%'}
	    var bufferStyle = {width: this.props.percentBuffered + '%'}
    	return (
		      <div className="SVP_progress_bar">
		      THE PROGRESS BAR !
		        <div className="SVP_progress_percent" style={playedStyle}><span></span></div>
		        <div className="SVP_buffer_percent" style={bufferStyle}></div>
		      </div>
    	);
  	}
}

export default VideoProgressBar;
