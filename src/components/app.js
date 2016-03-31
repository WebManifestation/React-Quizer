import React from 'react';
import Content from './content';
import Overlay from './overlay';

export default class App extends React.Component {

	constructor() {
		super();

		const dataObj = {
			overlay: {
				active: true,
				bgColor: 'white',//'slateblue',
				img: 'http://localhost/Quizer/imgs/loading.jpg',
				placeholder: 'Avatar - The last airbender'
			},
			qNa: [
				{
					question: 'Which nation is Toph from?',
					image: 'http://vignette2.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png',

					options: [
						{
							icon: 'http://vignette3.wikia.nocookie.net/avatar/images/e/e4/Earthbending_emblem.png',
							option: 'Earth nation'
						},
						{
							icon: 'http://vignette1.wikia.nocookie.net/avatarthelastairbenderroleplaying/images/b/b2/Water_nation.png',
							option: 'Water Nation'
						},
						{
							icon: 'http://acimg.auctivacommerce.com/imgdata/0/2/0/4/2/7/webimg/7853619.jpg',
							option: 'Fire Nation'
						},
						{
							icon: 'http://i.ebayimg.com/00/s/NzUwWDc1MA==/z/tMcAAOSw5dNWpqI9/$_35.JPG',
							option: 'Air Nation'
						},
					],
				}
			],
			results: {}
		}

		this.state = {
			
		}

		Object.assign(this.state, dataObj);
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
		// console.log(this);
		return (
			<div className="wrapper" style={this.getStyles()}>
				<Content closeOverlay={this.closeOverlay.bind(this)} />
				<Overlay
				onScreen={this.state.overlay}
				openOverlay={this.openOverlay.bind(this)}
				bgColor={this.state.overlay.bgColor}
				bgImage={this.state.overlay.img}
				/>
			</div>
			)
	}
}