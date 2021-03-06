import React from 'react';
import './css/Contact.css';
import Github from './helpers/git.png';
import Linkedin from './helpers/linkedin.png';
import Twitter from './helpers/twitter.png';

function Contact() {
	return (
		<div>
		<div>
			<nav className="footer">
				<a href="https://www.linkedin.com/in/ayush-shrivastava-99b15b160" target="_blank" rel="noopener noreferrer">
					<img
						className="contactimage"
						src={Linkedin}
						alt="LinkedIn"
					/>
				</a>
				<a href="https://github.com/ayush-020198" target="_blank" rel="noopener noreferrer">
					<img className="contactimage" src={Github} alt="Github" />
				</a>
				<a href="https://twitter.com/ayush020198/" target="_blank" rel="noopener noreferrer">
					<img className="contactimage" src={Twitter} alt="Twitter" />
				</a>
			</nav>
		</div>
		</div>
	);
}

export default Contact;
