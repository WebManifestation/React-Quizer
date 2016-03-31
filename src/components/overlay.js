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
			bgColor: props.bgColor,
			bgImage: props.bgImage,
		}

		console.log(this.state);

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

		Object.assign(style, this.transition('0.5s'));

		if (!this.props.onScreen) {

			Object.assign(style, this.transition('0.75s'));

			Object.assign(style, this.transform('translateY('+ window.innerHeight +'px)'));
			// Object.assign(style, { opacity: 0});
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