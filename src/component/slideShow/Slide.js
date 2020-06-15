import React, { Component } from 'react';
import P1 from '../helpers/brand.png';
import ReactAnime from 'react-animejs';
const { Anime, stagger } = ReactAnime;

class Slide extends Component {
	render() {
		return (
			<div>
				<Anime
					initial={[
						{
							targets: '.slide',
							translateX: 150,
							easing: 'linear',
							duration: 5000,
						},
					]}
				>
					<a href="https://github.com">
						<img src={P1} className="slide" alt="project1" />
					</a>
				</Anime>
			</div>
		);
	}
}

export default Slide;
