// -------------------------------------------
import React from "React";
import {SimpleVideoPlayer as SVP} from "./SimpleVideoPlayer.react";
// -------------------------------------------
export class App extends React.Component {
	render() {
		return (
			<div id="svp-wrapper">
				<SVP src="http://media.w3.org/2010/05/sintel/trailer.mp4" />
			</div>
		);
	}
}
export default App;


