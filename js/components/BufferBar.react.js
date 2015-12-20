// -------------------------------------------
import React from "React";
// -------------------------------------------
export default class BufferBar extends React.Component {
	render() {
		return (
		  <div className = {this.props.className + " ControlContainer"}>
		    <progress className={this.props.className + " bufferBar"} min="0" max="100" value={this.props.percentageBuffered}></progress>
		  </div>
		);
	}
}
