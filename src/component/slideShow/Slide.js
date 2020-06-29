import React from 'react';
import './Slide.scss';

const Slideshow = () => {
    return (
      <div id="projects">
      <h1 className="boxing">Projects</h1>
        <ul className="container d-flex">
          <li className="booking-card b1">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://agile-chamber-11888.herokuapp.com/' className="alink">App</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/Mailsify' className="alink">Code</a></button>
              </div>
            </div>
          </li>
          <li className="booking-card b2">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://face-webapp.herokuapp.com/' className="alink">App</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/face_recogn_bac' className="alink">Code</a></button>
              </div>
            </div>
          </li>
          <li className="booking-card b3">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://hygieia.sarswat.co/' className="alink">App</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/hygieia-backend' className="alink">Code</a></button>
              </div>
            </div>
          </li>
          <li className="booking-card b4">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://ayush-020198.github.io/dice-game/' className="alink">App</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/dice-game' className="alink">Code</a></button>
              </div>
            </div>
          </li>
          <li className="booking-card b5">
            <div className="book-container">
              <div className="content">
                <button className="btn"><a href='https://ayush-020198.github.io/Robot5o/' className="alink">App</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/Robot5o' className="alink">Code</a></button>
              </div>
            </div>
          </li>
        </ul>
     </div>
    )
}

export default Slideshow;