import photo from '../../assets/photo.webp';
import LazyLoad from 'react-lazyload';

export const About = (): JSX.Element => {
	return (
		<div id="about" className="about">
			<h2 className="about-heading sectionHeading">
				<span className="underline">About</span>
			</h2>
			<div className="about__content" data-aos="fade-up">
				<p className="body">
					Hi, my name is Marek Bombera. I'm a web developer based in Prague in
					Czechia.
				</p>
				<p className="body">
					My interest in web development started in 2020 when I decided to
					create a WordPress website and then tried to insert custom HTML into
					it.
				</p>
				<p className="body">
					Turned out I had no idea what to do, and the only solution was to go
					and learn.
				</p>
				<p className="body">
					This led me into exciting web development rabid hole, and I decided to
					become a developer myself.
				</p>
				<p className="body">
					Since then I haven't stopped learning and creating.
				</p>
				<p className="body">
					I take pride in <span></span>writing clean code and taking on any
					problem thrown at me.
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
		</div>
	);
};
