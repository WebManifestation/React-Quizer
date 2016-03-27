import React from 'react';

export default class Overlay extends React.Component {

	constructor(props) {
		super(props);

	}

	getStyles() {

		let style = {
			backgroundColor: 'slateblue',
			top: '0',
			left: '0',
			position: 'fixed',
			zIndex: '99999',
			overflow: 'auto',
			width: '100%',
			height: window.innerHeight
		};

		if (!this.props.onScreen) {

			style.display = 'none';
		}

		return style;
	}

	// openOverlay(e) {
	// 	this.props.openOverlay()
	// }

	render() {
		return (
			<div className="overlay" style={this.getStyles()} onClick={this.props.openOverlay} />
			)
	}
}