// -------------------------------------------
import React from "React";
// -------------------------------------------
export default class ProgressBar extends React.Component {
	render() {
		return (
		  <div className = {this.props.className + " ControlContainer"}>
		    <progress className={this.props.className + " progressBar"} min="0" max="100" value={this.props.percentagePlayed}></progress>
		  </div>
		);
	}
}
