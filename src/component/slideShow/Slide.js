import React from 'react';
import './Slide.scss';

const Slideshow = () => {
    return (
      <div id="projects">
      <h1 className="projbox">Projects</h1>
        <ul className="container d-flex">
          <li className="booking-card b1">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://agile-chamber-11888.herokuapp.com/' target="_blank" rel="noopener noreferrer" className="alink">Mailsify</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/Mailsify' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
              </div>
            </div>
          </li>
          <li className="booking-card b7">
            <div className="book-container">
              <div className="content">
              <button className="btn"><a href='https://github.com/ayush-020198/graphql-server' target="_blank" rel="noopener noreferrer" className="alink">GraphQL-server</a></button>
              </div>
            </div>
          </li>
          <li className="booking-card b2">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://face-webapp.herokuapp.com/' target="_blank" rel="noopener noreferrer" className="alink">Face-Recog-App</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/face_recogn_bac' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
              </div>
            </div>
          </li>
          <li className="booking-card b3">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://hygieia.sarswat.co/' target="_blank" rel="noopener noreferrer" className="alink">Hygieia</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/hygieia-backend' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
              </div>
            </div>
          </li>
          <li className="booking-card b8">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://ayush-020198.github.io/github-react/' target="_blank" rel="noopener noreferrer" className="alink">Github-Searcher</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/github-react' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
              </div>
            </div>
          </li>
          <li className="booking-card b4">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://ayush-020198.github.io/dice-game/' target="_blank" rel="noopener noreferrer" className="alink">Dice-Game</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/dice-game' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
              </div>
            </div>
          </li>
          <li className="booking-card b5">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://ayush-020198.github.io/Robot5o/' target="_blank" rel="noopener noreferrer" className="alink">Robo5o</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/Robot5o' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
              </div>
            </div>
          </li>
          <li className="booking-card b6">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://ayush-020198.github.io/DrumKit/' target="_blank" rel="noopener noreferrer" className="alink">Drum-Kit</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/DrumKit' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
              </div>
            </div>
          </li>
        </ul>
     </div>
    )
}

export default Slideshow;