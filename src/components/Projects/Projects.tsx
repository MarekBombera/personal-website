import { Project } from './Project';

import linvoice_img from '../../assets/linvoice.webp';
import photosnap_img from '../../assets/photosnap.webp';
import ip_address_finder_img from '../../assets/ipaddressfinder.webp';
import tick_tack_toe_img from '../../assets/tick-tack-toe.webp';
import audiophile_img from '../../assets/audiophile.webp';
import spacex_img from '../../assets/spacex.webp';

export const Projects = (): JSX.Element => {
	return (
		<section className="projects" id="projects">
			<h2 className="projects-heading sectionHeading">
				<span className="underline">Projects</span>
			</h2>
			<Project
				name="Audiophile"
				description="E-commerce website with 11 pages for a fictional company called Audiophile. The website has integrated Stripe payments and uses local storage in a browser to remember users shopping cart."
				technologies={[
					'Next.js',
					'Redux',
					'Typescript',
					'Styled-Components',
					'Stripe API',
					'Vercel',
				]}
				img={audiophile_img}
				url="audiophile-audio.com"
				gitHubLink="github.com/MarekBombera/audiophile"
			/>
			<Project
				name="Linvoice"
				description="Linvoice is a full-stack web app where users can manage their invoices. The app uses Google OAuth 2.0 for authentication."
				technologies={[
					'React',
					'Redux',
					'Typescript',
					'Sass',
					'Jest',
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
				description="Website created for a fictional photo-sharing company called Photosnap. The website layout was built mainly with css grid."
				technologies={[
					'React',
					'React-Router',
					'Typescript',
					'Jest',
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
				description="An app that displays users IP address with some information about its origin and finds its approximate location on the map. Users can also search for any IPv4 or IPv6."
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
				name="Tick-Tack-Toe"
				description="Classic Tic-Tac-Toe game with light and dark mode. Choose to play in a single-player mode against CPU or in a two-player mode against your friend."
				technologies={[
					'React',
					'Redux',
					'Typescript',
					'Styled-Components',
					'Netlify',
				]}
				img={tick_tack_toe_img}
				url="ticktacktoe-game.com/"
				gitHubLink="github.com/MarekBombera/tick-tack-toe"
			/>
			<Project
				name="SpaceX"
				description="SpaceX fanpage with information about the company, it's technology and upcoming launches."
				technologies={[
					'Next.js',
					'Redux',
					'Typescript',
					'Styled-Components',
					'GraphQL',
					'Jest',
					'Cypress',
					'Vercel',
				]}
				img={spacex_img}
				url="marekbombera.com"
				gitHubLink="marekbombera.com"
			/>
		</section>
	);
};
