import React, { Component } from 'react';
import './Slide.css';
import Logo from '../helpers/brand.png';

class Slide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slideIndex: 0,
		};
	}

	plusSlides(n) {
		this.setState({ slideIndex: this.state.slideIndex + n });
	}

	minusSlides(n) {
		this.setState({ slideIndex: this.state.slideIndex - n });
	}

	currentSlide(n) {
		this.setState({ slideIndex: this.state.slideIndex });
	}

	showSlides(n) {
		var i;
		var slides = document.getElementsByClassName('mySlides');
		var dots = document.getElementsByClassName('dot');
		if (n > slides.length) {
			this.setState({ slideIndex: 1 });
		}
		if (n < 1) {
			this.setState({ slideIndex: slides.length });
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(' active', '');
		}
		slides[this.state.slideIndex - 1].style.display = 'block';
		dots[this.state.slideIndex - 1].className += ' active';
	}

	render() {
		return (
			<div>
				<div className="slideshow-container">
					<div className="mySlides fade">
						<div className="numbertext">1 / 3</div>
						<img src={Logo} style={{ width: '100%' }} alt="one" />
						<div className="text">Caption Text</div>
					</div>

					<div className="mySlides fade">
						<div className="numbertext">2 / 3</div>
						<img src={Logo} style={{ width: '100%' }} alt="one" />
						<div className="text">Caption Two</div>
					</div>

					<div className="mySlides fade">
						<div className="numbertext">3 / 3</div>
						<img src={Logo} style={{ width: '100%' }} alt="one" />
						<div className="text">Caption Three</div>
					</div>

					<a
						className="prev"
						onClick={() => this.minusSlides(-1)}
						href="previous"
					>
						&#10094;
					</a>
					<a
						className="next"
						onClick={() => this.plusSlides(1)}
						href="next"
					>
						&#10095;
					</a>
				</div>
				<br />

				<div style={{ textAalign: 'center' }}>
					<span
						className="dot"
						onClick={() => this.currentSlide(1)}
					></span>
					<span
						className="dot"
						onClick={() => this.currentSlide(2)}
					></span>
					<span
						className="dot"
						onClick={() => this.currentSlide(3)}
					></span>
				</div>
			</div>
		);
	}
}

export default Slide;
