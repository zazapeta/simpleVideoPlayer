// -------------------------------------------
import React from "React";
// -------------------------------------------
export default class ButtonPlayPause extends React.Component {
	render() {
		var _b = this.props.playing ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i> ;
		return (
			<div 
				className = {this.props.className + " container"}
				onClick = {this.props.onClick}>
				<span className = {this.props.className + " buttonPP"}>{_b}</span>
			</div>
		);
	}
}
