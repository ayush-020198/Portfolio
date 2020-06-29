import React, { Component } from 'react';
import ReactTextTransition from 'react-text-transition';
import './css/About.css';

const paragraphs = [
	'Hello Visitor',
	'My name is...',
	'Ayush Shrivastava',
	'I love to code...',
	'and like to',
	 'hack code of others',
	'I am a student of', 
	'Indian Institute of Information Technology, Gwalior'
];

class Transition extends Component {
	state = {
		paragraphIndex: 0,
	};

	componentDidMount() {
		setInterval(() => {
			this.setState({ paragraphIndex: this.state.paragraphIndex + 1 });
		}, 3000);
	}

	render() {
		return (
			<React.Fragment>
				<section>
					<section className="inline">
						<ReactTextTransition
							className="aboutt"
							text={
								paragraphs[
									this.state.paragraphIndex %
										paragraphs.length
								]
							}
							overflow
						/>
					</section>
				</section>
			</React.Fragment>
		);
	}
}

export default Transition;
