import { Project } from './Project';

import linvoice_img from '../../assets/linvoice.webp';
import photosnap_img from '../../assets/photosnap.webp';
import ip_address_finder_img from '../../assets/ipaddressfinder.webp';
import space_tourism_img from '../../assets/space-tourism.webp';

export const Projects = (): JSX.Element => {
	return (
		<section className="projects" id="projects">
			<h2 className="projects-heading sectionHeading">
				<span className="underline">Projects</span>
			</h2>
			<Project
				name="Linvoice"
				description="Linvoice is a full-stack web app where users after signing in with their Google account can manage their invoices. "
				technologies={[
					'React',
					'Redux',
					'Typescript',
					'Sass',
					'Node.js',
					'Express',
					'MySQL',
					'Google OAuth 2.0',
					'Netlify',
					'Heroku',
					'AWS',
				]}
				img={linvoice_img}
				url="linvoice.org"
				gitHubLink="github.com/MarekBombera/Linvoice-client"
			/>
			<Project
				name="Photosnap"
				description="Website I created for a fictional photo-sharing company called Photosnap. The website layout was built mainly with css grid."
				technologies={[
					'React',
					'React-Router',
					'Typescript',
					'Sass',
					'Netlify',
				]}
				img={photosnap_img}
				url="photosnap-photo.com/"
				gitHubLink="github.com/MarekBombera/photosnap-landing-page"
				className="reverse"
			/>
			<Project
				name="Ip Address Finder"
				description="An app that displays users IP address with some basic information and finds its approximate location on the map. Users can also search for any IPv4 or IPv6."
				technologies={[
					'React',
					'Redux',
					'Typescript',
					'Sass',
					'Abstract API - IP Geolocation',
					'Google Maps - Javascript API',
					'Netlify',
				]}
				img={ip_address_finder_img}
				url="ipaddressfinder.org"
				gitHubLink="github.com/MarekBombera/ip-address-finder"
			/>
			<Project
				name="Space Tourism"
				description="A website about space tourism company with information about destination, crew and technology which will take you to the space."
				technologies={['React', 'React-Router', 'Sass', 'Netlify']}
				img={space_tourism_img}
				url="spacetourism-space.com/"
				gitHubLink="github.com/MarekBombera/Linvoice-client"
			/>
		</section>
	);
};
