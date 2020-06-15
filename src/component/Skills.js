import React from 'react';
import ReactAnime from 'react-animejs';
import './css/Skills.css';
import Node from './helpers/node.jpg';
import Mongo from './helpers/mongo.jpg';
import Express from './helpers/express.jpg';
import Reac from './helpers/react.jpg';
import Git from './helpers/github.jpg';
import Docker from './helpers/docker.jpg';
import C from './helpers/c.jpg';
import Bash from './helpers/bash.jpg';
import BootStrap from './helpers/bootstrap.jpg';
import FireBase from './helpers/firebase.jpg';
import Postgres from './helpers/postgres.jpg';
import Redux from './helpers/redux.jpg';

const { Anime } = ReactAnime;

function Skills() {
	return (
		<div id="skills">
			<Anime
				initial={[
					{
						targets: '#Name',
						keyframes: [
							{ translateY: -40 },
							{ translateX: 250 },
							{ translateY: 40 },
							{ translateX: 0 },
						],
						duration: 4000,
						easing: 'easeOutElastic(1, .8)',
						loop: true,
					},
					{
						targets: '#Box',
						translateX: [-1800, 0],
						easing: 'easeInOutQuad',
						duration: 3000,
					},
				]}
			>
				<div className="mx-lg-5 px-md-5 my-md-3">
					<h2 id="Name" className="skillheading">
						Technical Skills
					</h2>
					<p className="lead">
						I am a Full Stack web developer and also have knowledge
						of essentials like Docker and Git.
					</p>
					<div
						id="Box"
						className="row d-flex justify-content-md-center "
					>
						<div className="col-4 col-md-2">
							<div className="skill node">
								<img className="image" src={Node} alt="" />
								<p className=" tag lead">NodeJS</p>
							</div>
						</div>

						<div className="col-4 col-md-2">
							<div className="skill mongo">
								<img className="image" src={Mongo} alt="" />
								<p className=" tag lead">MongoDB</p>
							</div>
						</div>

						<div className="col-4 col-md-2">
							<div className="skill">
								<img className="image" src={Express} alt="" />
								<p className=" tag lead">ExpressJS</p>
							</div>
						</div>

						<div className="col-4 col-md-2">
							<div className="skill">
								<img className="image" src={Reac} alt="" />
								<p className=" tag lead">React</p>
							</div>
						</div>

						<div className="col-4 col-md-2">
							<div className="skill">
								<img className="image" src={Git} alt="" />
								<p className=" tag lead">Git</p>
							</div>
						</div>

						<div className="col-4 col-md-2">
							<div className="skill">
								<img className="image" src={Docker} alt="" />
								<p className=" tag lead">Docker</p>
							</div>
						</div>

						<div className="col-4 col-md-2">
							<div className="skill">
								<img className="image" src={C} alt="" />
								<p className=" tag lead">C/C++</p>
							</div>
						</div>

						<div className="col-4 col-md-2">
							<div className="skill">
								<img className="image" src={Bash} alt="" />
								<p className=" tag lead">Bash</p>
							</div>
						</div>

						<div className="col-4 col-md-2">
							<div className="skill">
								<img className="image" src={BootStrap} alt="" />
								<p className=" tag lead">BootStrap4</p>
							</div>
						</div>

						<div className="col-4 col-md-2">
							<div className="skill">
								<img className="image" src={Redux} alt="" />
								<p className=" tag lead">Redux</p>
							</div>
						</div>

						<div className="col-4 col-md-2">
							<div className="skill">
								<img className="image" src={FireBase} alt="" />
								<p className=" tag lead">FireBase</p>
							</div>
						</div>
						<div className="col-4 col-md-2">
							<div className="skill">
								<img className="image" src={Postgres} alt="" />
								<p className=" tag lead">Postgres</p>
							</div>
						</div>
					</div>
				</div>
			</Anime>
		</div>
	);
}

export default Skills;
