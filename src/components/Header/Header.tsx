import { MobileNavigation } from '../MobileNavigation/MobileNavigation';
import { Navigation } from '../Navigation/Navigation';

import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import logo from '../../assets/logo.svg';

export const Header = (): JSX.Element => {
	return (
		<header className="header">
			<div className="header__logo">
				<img src={logo} />
			</div>
			{useMediaQueryMatch('phone') ? <MobileNavigation /> : <Navigation />}
		</header>
	);
};
