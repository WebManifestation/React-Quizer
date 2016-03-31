import React from 'react';

export default class Overlay extends React.Component {

	transition(time) {
		return {
			'MozTransition': 'all ' + time + ' ease',
			'OTransition': 'all ' + time + ' ease',
			'WebkitTransition': 'all ' + time + ' ease',
			transition: 'all ' + time + ' ease'
		};
	}

	transform(transformString) {
		return {
			'MozTransform': transformString,
			'OTransform': transformString,
			'WebkitTransform': transformString,
			transform: transformString,
		};
	}

	constructor(props) {
		super(props);

		this.state = {
			bgColor: this.props.bgColor,
			bgImage: this.props.bgImage,
		}

	}

	getStyles() {

		let style = {
			backgroundColor: this.state.bgColor,
			backgroundImage: 'url(' + this.state.bgImage + ')',
			top: '0',
			left: '0',
			position: 'fixed',
			zIndex: '99999',
			overflow: 'auto',
			width: '100%',
			height: window.innerHeight,
			backgroundSize: '100px',
			backgroundPosition: '50% 50%',
			backgroundRepeat: 'no-repeat'
		};

		Object.assign(style, this.transition('1s'));

		if (!this.props.onScreen) {
			Object.assign(style, this.transform('translateX(-'+ window.innerWidth +'px)'));
			// style.display = 'none';
			// style.transform = 'translateX(-1700px)';
		}

		return style;
	}

	// openOverlay(e) {
	// 	this.props.openOverlay()
	// }

	render() {
		// console.log(this);
		return (
			<div className="overlay" style={this.getStyles()} onClick={this.props.openOverlay} />
			)
	}
}