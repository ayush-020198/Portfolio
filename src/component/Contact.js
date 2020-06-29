import React from 'react';
import './css/Contact.css';
import Github from './helpers/git.png';
import Linkedin from './helpers/linkedin.png';
import Twitter from './helpers/twitter.png';

function Contact() {
	return (
		<div id="contact">
			<nav className="footer">
				<a href="https://www.linkedin.com/in/ayush-shrivastava-99b15b160">
					<img
						className="contactimage"
						src={Linkedin}
						alt="LinkedIn"
					/>
				</a>
				<a href="https://github.com/ayush-020198">
					<img className="contactimage" src={Github} alt="Github" />
				</a>
				<a href="https://twitter.com/ayush020198/">
					<img className="contactimage" src={Twitter} alt="Twitter" />
				</a>
			</nav>
		</div>
	);
}

export default Contact;
