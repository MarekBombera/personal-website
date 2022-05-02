import LazyLoad from 'react-lazyload';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

export const Project = ({
	name,
	description,
	technologies,
	img,
	url,
	gitHubLink,
}: any): JSX.Element => {
	const renderTechnologies = technologies.map((tech: string) => {
		return (
			<p key={tech} className="project-tech">
				{tech}
			</p>
		);
	});

	const renderMobileVersion = (): JSX.Element => {
		return (
			<div className="project">
				<h2 className="project-name">{name}</h2>
				<a
					className={`project-img project-img-container `}
					href={`https://www.${url}`}
					target="_blank"
				>
					<LazyLoad once>
						<img className="project-img" src={img} alt="" />
					</LazyLoad>
				</a>
				<div className="project-technologies">{renderTechnologies}</div>
				<p className="project-description body">{description}</p>

				<div className="project__buttons">
					<a href={`https://www.${url}`} target="_blank">
						<button className="project__buttons-view" type="button">
							View
						</button>
					</a>
					<a href={`https://www.${gitHubLink}`} target="_blank">
						<button className="project__buttons-github" type="button">
							GitHub
						</button>
					</a>
				</div>
			</div>
		);
	};

	const renderDesktopVersion = (): JSX.Element => {
		AOS.refreshHard();
		return (
			<div className="project" data-aos="fade-right">
				<div className="project-content">
					<h2 className="project-name project-name-underline">{name}</h2>
					<div className="project-technologies">{renderTechnologies}</div>
					<p className="project-description body">{description}</p>
					<div className="project__buttons">
						<a href={`https://www.${url}`} target="_blank">
							<button className="project__buttons-view" type="button">
								View
							</button>
						</a>
						<a href={`https://www.${gitHubLink}`} target="_blank">
							<button className="project__buttons-github" type="button">
								GitHub
							</button>
						</a>
					</div>
				</div>
				<a
					className={`project-img project-img-container `}
					href={`https://www.${url}`}
					target="_blank"
				>
					<img className="project-img" src={img} alt="" />
				</a>
			</div>
		);
	};

	return (
		<>
			{!useMediaQueryMatch('desktop')
				? renderMobileVersion()
				: renderDesktopVersion()}
		</>
	);
};
