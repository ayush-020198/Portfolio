import React from 'react';
import './css/About.css';
import Logo from './helpers/brand.png';
import Transition from './Transition';
function About() {
	return (
		<div className="about">
			<div className="row justify-content-md-center">
				<div className="col-md-4">
					<img className="aboutimage" src={Logo} alt="brand" />
				</div>
				<div className="col-md-6">
					<Transition className="about" />
				</div>
			</div>
		</div>
	);
}

export default About;
