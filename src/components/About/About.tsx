import photo from '../../assets/photo.webp';
import LazyLoad from 'react-lazyload';

export const About = (): JSX.Element => {
	return (
		<section id="about" className="about">
			<h2 className="about-heading sectionHeading">
				<span className="underline">About</span>
			</h2>
			<div className="about__content" data-aos="fade-up">
				<p className="body">
					Hi, my name is Marek Bombera. I'm a web developer based in Prague in
					Czechia.
				</p>
				<p className="body">
					My web development journey started in late 2019 when I created my
					first WordPress website and tried to insert custom HTML into it.
				</p>
				<p className="body">
					Turned out to be quite a challenge at the time, and the only solution
					was to dive in and learn.
				</p>
				<p className="body">
					This led me into an exciting web development rabbit hole which I fell
					in love with.
				</p>
				<p className="body">
					Since then, I haven't stopped learning and creating.
				</p>
				<p className="body">
					I'm always working to be better at what I'm doing, and I don't shy
					await from any problems thrown at me.
				</p>
				<p className="body">
					I'm able to work independently and collaboratively in a team.
				</p>
			</div>
			<div className="about__photo" data-aos="fade-up">
				<LazyLoad once>
					<img src={photo} alt="My Photo" />
				</LazyLoad>
				<span className="about__photo-decoration"></span>
			</div>
		</section>
	);
};
