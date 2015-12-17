import alt from "../alt";
import SVPActions from "../actions/SVPActions";
import SVPSources from "../sources/SVPsource";

// this.refs.video.getDOMNode().pause()

export class SVPStore {
	constructor(){
		this.playing = false;
		this.videoSrc = null;

		this.bindListeners({
			play: SVPActions.PLAY,
			pause: SVPActions.PAUSE
		});
	}
	play(){
		console.log("STORE : PLAY");
		this.playing = true;
		return false;
	}
	pause(){
		console.log("STORE : PAUSE");
		this.playing = false;
		return false;
	}
}

export default alt.createStore(SVPStore, "SVPStore");