export const MobileNavigation = (): JSX.Element => {
	const toggleMenu = (): void => {
		const mobileNav = document.querySelector('.mobileNav');
		const hamburger = document.querySelector('.mobileNav__hamburger');
		const links = document.querySelector('.mobileNav-links');

		mobileNav?.classList.toggle('mobileNav--active');
		hamburger?.classList.toggle('mobileNav__hamburger--active');
		links?.classList.toggle('mobileNav-links--active');
	};

	return (
		<nav className="mobileNav">
			<input
				type="checkbox"
				id="mobileNav__menu-toggle"
				onClick={() => toggleMenu()}
			/>
			<label htmlFor="mobileNav__menu-toggle" className="mobileNav__hamburger">
				<span className="mobileNav__bun mobileNav__bun-top">
					<span className="mobileNav__bun-crust mobileNav__bun-crust-top"></span>
				</span>
				<span className="mobileNav__bun mobileNav__bun-bottom">
					<span className="mobileNav__bun-crust mobileNav__bun-crust-bottom"></span>
				</span>
			</label>
			<div className="mobileNav-links">
				<span className="mobileNav-links-underline">
					<a href="#about" onClick={() => toggleMenu()}>
						<p>About</p>
					</a>
				</span>
				<span className="mobileNav-links-underline">
					<a href="#skills" onClick={() => toggleMenu()}>
						<p>Skills</p>
					</a>
				</span>
				<span className="mobileNav-links-underline">
					<a href="#projects" onClick={() => toggleMenu()}>
						<p>Projects</p>
					</a>
				</span>
				<span className="mobileNav-links-underline">
					<a href="#contact" onClick={() => toggleMenu()}>
						<p>Contact</p>
					</a>
				</span>
			</div>
		</nav>
	);
};
