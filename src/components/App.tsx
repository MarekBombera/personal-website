import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { About } from './About/About';
import { Skills } from './Skills/Skills';
import { Projects } from './Projects/Projects';
import { Contact } from './Contact/Contact';
import { Footer } from './Footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import '../styles/css/main.css';

export const App = (): JSX.Element => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			delay: 0,
			once: true,
			disable: 'phone',
		});
	}, []);

	return (
		<div className="App">
			<Header />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};
