import React from "React";
import SVPActions from "../actions/SVPActions";
import SVPStore from "../stores/SVPStore";
// ------------------------------------------
export class VideoPlayPause extends React.Component {
	constructor(props) {
		super(props);
		this.state = SVPStore.getState();
		this._onClick = this._onClick.bind(this);
    }
    componentDidMount() {
        SVPStore.listen(this._onClick);
        // this._setImg();
    }

    componentWillUnmount() {
        SVPStore.unlisten(this._onClick);
    }
	render() {
		// var img = this.state.playing ? (this.props.img_pause) : (this.props.img_play);
		var img = this.state.playing ? "pause" : "play";
		return (
				<div onClick={this._onClick} className="SVP_button_container">
					<span id="SVP_button_container" className="SVP_button"><i className={"fa fa-" + img}></i></span>
				</div>
		);
	}
	_onClick(){
		this.setState({
			playing : !this.state.playing
		});
		this.state.playing ? SVPActions.pause() : SVPActions.play();
		// this._setImg();
	}
	// UNSAFE METHODE -- HTML INJECTION 
	// _setImg(){ 
	// 	document.getElementById("SVP_button_container").innerHTML = this.state.playing ? (this.props.img_play) : (this.props.img_pause) ;
	// }
}

export default VideoPlayPause;