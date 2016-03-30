import React from 'react';
import Content from './content';
import Overlay from './overlay';

export default class App extends React.Component {

	constructor() {
		super()
		this.state = {
			overlay: true
		}
	}

	getStyles() {

		return({
			backgroundColor: 'tomato',
			top: '0',
			left: '0',
			position: 'fixed',
			zIndex: '9999',
			overflow: 'auto',
			width: '100%',
			height: window.innerHeight
		});
	}

	openOverlay() {
		this.setState({ overlay: false });
	}
	closeOverlay() {
		// console.log('test');
		this.setState({ overlay: true });
	}

	render() {
		return (
			<div className="wrapper" style={this.getStyles()}>
				<Content closeOverlay={this.closeOverlay.bind(this)} />
				<Overlay
				onScreen={this.state.overlay}
				openOverlay={this.openOverlay.bind(this)}
				/>
			</div>
			)
	}
}