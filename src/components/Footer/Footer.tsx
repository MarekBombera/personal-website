import { gitHubUrl, linkedinUr, twitterUrl } from '../../utils/urls';
import LazyLoad from 'react-lazyload';

import icon_github from '../../assets/icon-github.svg';
import icon_linkedin from '../../assets/icon-linkedin.svg';
import icon_twitter from '../../assets/icon-twitter.svg';
import icon_email from '../../assets/icon-email.svg';

export const Footer = (): JSX.Element => {
	return (
		<footer className="footer">
			<div className="footer__social">
				<a href={gitHubUrl} target="_blank">
					<LazyLoad once>
						<img src={icon_github} alt="GitHub" />
					</LazyLoad>
				</a>
				<a href={linkedinUr} target="_blank">
					<LazyLoad once>
						<img src={icon_linkedin} alt="Linkedin" />
					</LazyLoad>
				</a>
				<a href={twitterUrl} target="_blank">
					<LazyLoad once>
						<img src={icon_twitter} alt="Twitter" />
					</LazyLoad>
				</a>
				<a href="#contact">
					<LazyLoad once>
						<img src={icon_email} alt="Email" />
					</LazyLoad>
				</a>
			</div>
			<p>{'© 2022, Built & designed by Marek Bombera'}</p>
		</footer>
	);
};
