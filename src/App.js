import React, { Component } from 'react';
import Header from './component/Header';
import './component/nightMode/style.scss';
import Slide from './component/slideShow/Slide';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './component/About';
import Skills from './component/Skills';
import Contact from './component/Contact';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Header} />
					<Route exact path="/" component={About} />
					<Route exact path="/" component={Skills} />
					<Route exact path="/" component={Contact} />
					<Route exact path="/projects" component={Slide} />
				</div>
			</Router>
		);
	}
}

export default App;
