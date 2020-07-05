import React from 'react';
import './Slide.scss';
import Mongo from '../helpers/mongo.jpg';
import Express from '../helpers/express.jpg';
import Reactjs from '../helpers/react.jpg';
import Nodejs from '../helpers/node.jpg';
import Redux from '../helpers/redux.jpg';
import Gphq from '../helpers/graphql.jpg';
import Postg from '../helpers/postgres.jpg'
import JQ from '../helpers/jquery.jpg'


const Slideshow = () => {
    return (
      <div id="projects">
      <h1 className="projbox">Projects</h1>
        <ul className="container d-flex">
          <li className="booking-card b1">
            <div className="container">
            <div className="book-container">
              <div className="content row center">
                <button className="btn"><a href='https://agile-chamber-11888.herokuapp.com/' target="_blank" rel="noopener noreferrer" className="alink">Mailsify</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/Mailsify' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
                <div className="informations-container image-grid-container info-and-date-container">
                    <img className="stack" src={Mongo} alt="" />
                    <img className="stack" src={Express} alt="" />
                    <img className="stack" src={Reactjs} alt="" />
                    <img className="stack" src={Nodejs} alt="" />
                    <img className="stack" src={Redux} alt="" />

                </div>
              </div>
            </div>
            </div>
          </li>
          <li className="booking-card b7">
            <div className="book-container">
              <div className="content row center">
              <button className="btn"><a href='https://github.com/ayush-020198/graphql-server' target="_blank" rel="noopener noreferrer" className="alink">GraphQL-server</a></button>
              <div className="informations-container image-grid-container info-and-date-container">
                    <img className="stack" src={Gphq} alt="" />
                    <img className="stack" src={Express} alt="" />
                    <img className="stack" src={Nodejs} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li className="booking-card b2">
            <div className="book-container">
              <div className="content row center">
                <button className="btn"><a href='https://face-webapp.herokuapp.com/' target="_blank" rel="noopener noreferrer" className="alink">Face-Recog-App</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/face_recogn_bac' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
                <div className="informations-container image-grid-container info-and-date-container">
                    <img className="stack" src={Postg} alt="" />
                    <img className="stack" src={Express} alt="" />
                    <img className="stack" src={Reactjs} alt="" />
                    <img className="stack" src={Nodejs} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li className="booking-card b3">
            <div className="book-container">
              <div className="content row center">
                <button className="btn"><a href='https://hygieia.sarswat.co/' target="_blank" rel="noopener noreferrer" className="alink">Hygieia</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/hygieia-backend' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
                <div className="informations-container image-grid-container info-and-date-container">
                    <img className="stack" src={Mongo} alt="" />
                    <img className="stack" src={Express} alt="" />
                    <img className="stack" src={Reactjs} alt="" />
                    <img className="stack" src={Nodejs} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li className="booking-card b8">
            <div className="book-container">
              <div className="content row center">
                <button className="btn"><a href='https://ayush-020198.github.io/github-react/' target="_blank" rel="noopener noreferrer" className="alink">Github-Searcher</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/github-react' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
                <div className="informations-container image-grid-container info-and-date-container">
                    <img className="stack" src={Reactjs} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li className="booking-card b9">
            <div className="book-container">
              <div className="content row center">
                <button className="btn"><a href='https://ayush-020198.github.io/simon-game/' target="_blank" rel="noopener noreferrer" className="alink">Simon-Game</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/simon-game' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
                <div className="informations-container image-grid-container info-and-date-container">
                    <img className="stack" src={JQ} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li className="booking-card b5">
            <div className="book-container">
              <div className="content row center">
                <button className="btn"><a href='https://ayush-020198.github.io/Robot5o/' target="_blank" rel="noopener noreferrer" className="alink">Robotttt5o</a></button>
                <button className="btn"><a href='https://github.com/ayush-020198/Robot5o/' target="_blank" rel="noopener noreferrer" className="alink">Code</a></button>
                <div className="informations-container image-grid-container info-and-date-container">
                    <img className="stack" src={Reactjs} alt="" />
                </div>
              </div>
            </div>
          </li>
        </ul>
     </div>
    )
}

export default Slideshow;