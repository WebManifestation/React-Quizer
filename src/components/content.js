import React from 'react';

export default class Content extends React.Component {

	render() {
		return (
			<div onClick={this.props.closeOverlay}>
			<h1>React quizer</h1>
			Work in the initial content
			</div>
		);
	}
}