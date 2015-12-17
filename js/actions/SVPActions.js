import alt from "../alt";

export class SVPActions {
	play(){
		console.log('action : play');
		return "play";
	}
	pause(){
		console.log('action : pause');
		return "pause";
	}
	fetchVideo(){
		console.log('action : fetch');
		return "fetch";
	}
}

export default alt.createActions(SVPActions);