import React, { Component } from 'react';
import Header from './component/Header';
import './component/nightMode/style.scss';
import Slideshow from './component/slideShow/Slide';
import About from './component/About';
import Skills from './component/Skills';
import Contact from './component/Contact';
import MyForm from './component/MyForm';

class App extends Component {
	render() {
		return (
				<div>
					<Header />
					<About />
					<hr />
					<Skills />
					<hr />
					<Slideshow />
					<hr />
					<MyForm />
					<Contact />
				</div>
		);
	}
}

export default App;
