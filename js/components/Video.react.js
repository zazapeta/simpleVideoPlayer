// -------------------------------------------
import React from "React";
// -------------------------------------------
export default class Video extends React.Component {
	render() {
		return (
		    <video 
		    	className = {this.props.className + " video"}
		    	onTimeUpdate = {this.props.onTimeUpdate} 
		    	onProgress = {this.props.onProgress} 
		    	src={this.props.src}>
		    Your user agent does not support the HTML5 Video element.
		    </video>
		);
	}
}
