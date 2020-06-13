import React, { Component } from 'react';
import Logo from './helpers/brand.png';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import UseNightMode from './nightMode/UseNightMode';
import './css/Header.css';
class Header extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg py-1 navbar-light head">
					<a className="navbar-brand" href="#home">
						<img className="brand" src={Logo} alt="brand" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#about">
									<div className="direct">About </div>
								</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link" href="#projects">
									<div className="direct">Projects </div>
								</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link" href="#skills">
									<div className="direct">Skills </div>{' '}
								</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link" href="#contact">
									<div className="direct">Contact </div>{' '}
								</a>
							</li>
							<UseNightMode />
						</ul>
					</div>
				</nav>
				<About id="about" />
				<Skills id="skills" />
				<Contact id="contact" />
			</div>
		);
	}
}

export default Header;
