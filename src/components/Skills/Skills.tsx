import js_img from '../../assets/icon-js.svg';
import ts_img from '../../assets/icon-ts.svg';
import react_img from '../../assets/icon-react.svg';
import nextjs_img from '../../assets/icon-next.svg';
import html_img from '../../assets/icon-html.svg';
import sass_img from '../../assets/icon-sass.svg';

import nodejs_img from '../../assets/icon-nodejs.svg';
import express_img from '../../assets/icon-express.svg';
import mysql_img from '../../assets/icon-mysql.svg';
import docker_img from '../../assets/icon-docker.svg';
import git_img from '../../assets/icon-git.svg';
import jest_img from '../../assets/icon-jest.svg';

import graphql_img from '../../assets/icon-graphql.svg';
import cypress_img from '../../assets/icon-cypress.svg';

import 'aos/dist/aos.css';

import { Field } from './Field';

export const Skills = (): JSX.Element => {
	return (
		<div className="skills" id="skills">
			<h2 className="skills-heading sectionHeading">
				<span className="underline">My Skills</span>
			</h2>
			<p className="skills-body-learned body" data-aos="fade-up">
				Here are some technologies I've been working with:
			</p>
			<div className="skills-list" data-aos="fade-up">
				<Field img={js_img} text="Javascript" />
				<Field img={ts_img} text="Typescript" />
				<Field img={react_img} text="React" />
				<Field img={nextjs_img} text="Next.js" className="nextjs" />
				<Field img={html_img} text="HTML" />
				<Field img={sass_img} text={'CSS & Sass'} />

				<Field img={nodejs_img} text="Node.js" />
				<Field img={express_img} text="Express" />
				<Field img={mysql_img} text="MySQL" />
				<Field img={docker_img} text="Docker" />
				<Field img={git_img} text="Git" />
				<Field img={jest_img} text="Jest" />
			</div>
			<p className="skills-body-learning body" data-aos="fade-up">
				What I'm working on now:
			</p>
			<div className="skills-learning" data-aos="fade-up">
				<Field img={graphql_img} text="GraphQL" />
				<Field img={cypress_img} text="Cypress" />
			</div>
		</div>
	);
};
