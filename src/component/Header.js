import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './helpers/brand.png';
import UseNightMode from './nightMode/UseNightMode';
import './css/Header.css';
class Header extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg py-1 navbar-light head">
					<Link to="/" className="navbar-brand">
						<img className="brand" src={Logo} alt="brand" />
					</Link>
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
								<a className="nav-link" href="#skills">
									<div className="direct">Skills </div>{' '}
								</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link" href="#contact">
									<div className="direct">Contact </div>{' '}
								</a>
							</li>
							<li className="nav-item active">
								<Link to="/projects" className="nav-link">
									<div className="direct">Projects </div>
								</Link>
							</li>
							<UseNightMode />
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
