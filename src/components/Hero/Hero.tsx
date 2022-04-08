import { gitHubUrl, linkedinUr, twitterUrl } from '../../utils/urls';

import icon_github from '../../assets/icon-github.svg';
import icon_linkedin from '../../assets/icon-linkedin.svg';
import icon_twitter from '../../assets/icon-twitter.svg';
import icon_email from '../../assets/icon-email.svg';

export const Hero = (): JSX.Element => {
	return (
		<section className="hero">
			<div className="hero__content">
				<h1 className="heading">
					Hi, I'm Marek | <span className="hero__underline-web">Web</span>
					<span> </span>
					<span className="hero__underline-developer">Developer</span>
				</h1>
				<p>I love exploring, creating and building things for the web.</p>
				<div className="hero__social">
					<a href={gitHubUrl} target="_blank">
						<img src={icon_github} alt="GitHub" />
					</a>
					<a href={linkedinUr} target="_blank">
						<img src={icon_linkedin} alt="Linkedin" />
					</a>
					<a href={twitterUrl} target="_blank">
						<img src={icon_twitter} alt="Twitter" />
					</a>
					<a href="#contact">
						<img src={icon_email} alt="Email" />
					</a>
				</div>
				<div className="hero__button">
					<a href="#projects">
						<button>See Projects</button>
					</a>
				</div>
			</div>
		</section>
	);
};
