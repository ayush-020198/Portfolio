import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slide.css';

const properties = {
  duration: 100000000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
    return (
      <div className="slide-container" id="projects">
        <Slide {...properties}>
          <div className="each-slide">
            <div className="P1">
              <button className="link1"><a href="https://agile-chamber-11888.herokuapp.com/" target="_blank" rel="noopener noreferrer">Mailsify</a></button>
              <button className="code1"><a href="https://github.com/ayush-020198/Mailsify" target="_blank" rel="noopener noreferrer">Code</a></button>
            </div>
          </div>
          <div className="each-slide">
          <div className="P2">
              <button className="link2"><a href="https://face-webapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">Facerecognition-Webapp</a></button>
              <button className="code2"><a href="https://github.com/ayush-020198/facerecogn_front_end" target="_blank" rel="noopener noreferrer">Code</a></button>
            </div>
          </div>
          <div className="each-slide">
          <div className="P3">
              <button className="link3"><a href="https://hygieia.sarswat.co/" target="_blank" rel="noopener noreferrer">Hygieia</a></button>
              <button className="code3"><a href="https://github.com/ayush-020198/hygieia-frontend" target="_blank" rel="noopener noreferrer">Code</a></button>
            </div>
          </div>
          <div className="each-slide">
          <div className="P4">
              <button className="link4"><a href="https://ayush-020198.github.io/dice-game/" target="_blank" rel="noopener noreferrer">Dice Game</a></button>
              <button className="code4"><a href="https://github.com/ayush-020198/dice-game" target="_blank" rel="noopener noreferrer">Code</a></button>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;