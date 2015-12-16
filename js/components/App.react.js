// -------------------------------------------
import React from "React";
import {SimpleVideoPlayer as SVP} from "./SimpleVideoPlayer.react";
// -------------------------------------------
export class App extends React.Component {
	render() {
		return (
			<div id="svp-wrapper">
				<SVP/>
			</div>
		);
	}
}
export default App;


