import React from 'react';

export default class Content extends React.Component {

	getStyles() {
		return {
			minHeight: window.innerHeight
		}
	}

	render() {
		return (
			<div onClick={this.props.closeOverlay} className="content" style={this.getStyles()}>
			<div>React quizer</div>
			Work in the initial content
			</div>
		);
	}
}