// -------------------------------------------
import React from "React";
import {SimpleVideoPlayer as SVP} from "./SimpleVideoPlayer.react";
// -------------------------------------------
export default class App extends React.Component {
	render() {
		return (
			<div id = "svp">
				<h1>Simple Video Player !</h1>
				<SVP
					src = "https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4"/>
			</div>
		);
	}
}


