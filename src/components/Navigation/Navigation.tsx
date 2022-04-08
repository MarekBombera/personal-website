export const Navigation = (): JSX.Element => {
	return (
		<nav className="navigation">
			<div className="navigation-links">
				<span className="navigation-links-underline">
					<a href="#about">
						<p>About</p>
					</a>
				</span>
				<span className="navigation-links-underline">
					<a href="#skills">
						<p>Skills</p>
					</a>
				</span>
				<span className="navigation-links-underline">
					<a href="#projects">
						<p>Projects</p>
					</a>
				</span>
				<span className="navigation-links-underline">
					<a href="#contact">
						<p>Contact</p>
					</a>
				</span>
			</div>
		</nav>
	);
};
