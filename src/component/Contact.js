import React from 'react';
import './css/Contact.css';
import Github from './helpers/git.png';
import Linkedin from './helpers/linkedin.png';
import Instagram from './helpers/instagram.png';

function Contact() {
	return (
		<div id="contact">
			<nav className="navbar footer">
				<a href="https://www.linkedin.com/in/ayush-shrivastava-99b15b160">
					<img
						className="contactimage"
						src={Linkedin}
						alt="LinkedIn"
					/>
				</a>
				<a href="https://www.instagram.com/ayush.00786/">
					<img
						className="contactimage"
						src={Instagram}
						alt="Instagram"
					/>
				</a>
				<a href="https://github.com/ayush-020198">
					<img className="contactimage" src={Github} alt="Github" />
				</a>
			</nav>
		</div>
	);
}

export default Contact;
