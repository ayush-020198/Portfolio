import React from 'react';
import { Zoom } from 'react-slideshow-image';
import Tilt from 'react-tilt';
import './Slide.css';

const properties = {
  duration: 5000000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
    return (
      <div>
        <h1 className="proj">Projects</h1>
      <div className="slide-container" id="projects">
        <Zoom {...properties}>
          <div className="each-slide">
            <div className="P1">
              <Tilt className="Tilt link1 br2 shadow-2" options={{ max : 25, speed: 300 }}><a style={{color: 'white', padding: '20px'}} href="https://agile-chamber-11888.herokuapp.com/" target="_blank" rel="noopener noreferrer">Mailsify</a></Tilt>
              <Tilt className="Tilt code1 br2 shadow-2" options={{ max : 25, speed: 300 }}><a style={{color: 'white', padding: '20px'}} href="https://github.com/ayush-020198/Mailsify" target="_blank" rel="noopener noreferrer">Code</a></Tilt>
            </div>
          </div>
          <div className="each-slide">
          <div className="P2">
          <Tilt className="Tilt link2 br2 shadow-2"><a style={{color: 'white', padding: '20px'}} href="https://face-webapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">Facerecognition-Webapp</a></Tilt>
          <Tilt className="Tilt code2 br2 shadow-2"><a style={{color: 'white', padding: '20px'}} href="https://github.com/ayush-020198/facerecogn_front_end" target="_blank" rel="noopener noreferrer">Code</a></Tilt>
            </div>
          </div>
          <div className="each-slide">
          <div className="P3">
          <Tilt className="Tilt link3 br2 shadow-2"><a style={{color: 'white', padding: '20px'}} href="https://hygieia.sarswat.co/" target="_blank" rel="noopener noreferrer">Hygieia</a></Tilt>
          <Tilt className="Tilt code3 br2 shadow-2"><a style={{color: 'white', padding: '20px'}} href="https://github.com/ayush-020198/hygieia-frontend" target="_blank" rel="noopener noreferrer">Code</a></Tilt>
            </div>
          </div>
          <div className="each-slide">
          <div className="P4">
              <Tilt className="Tilt link4 br2 shadow-2"><a style={{color: 'white', padding: '20px'}} href="https://ayush-020198.github.io/dice-game/" target="_blank" rel="noopener noreferrer">Dice Game</a></Tilt>
              <Tilt className="Tilt code4 br2 shadow-2"><a style={{color: 'white', padding: '20px'}} href="https://github.com/ayush-020198/dice-game" target="_blank" rel="noopener noreferrer">Code</a></Tilt>
            </div>
          </div>
          <div className="each-slide">
          <div className="P5">
              <Tilt className="Tilt link5 br2 shadow-2"><a style={{color: 'white', padding: '20px'}} href="https://ayush-020198.github.io/Robot5o/" target="_blank" rel="noopener noreferrer">Robo Friends</a></Tilt>
              <Tilt className="Tilt code5 br2 shadow-2"><a style={{color: 'white', padding: '20px'}} href="https://github.com/ayush-020198/Robot5o/" target="_blank" rel="noopener noreferrer">Code</a></Tilt>
            </div>
          </div>
        </Zoom>
      </div>
      </div>
    )
}

export default Slideshow;