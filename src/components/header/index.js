import React from 'react';

import Menu from '../menu/index.js';
import Logo from './logo.js';

import './index.css';

const Header = ( ) => {
	
	return (
		<header className="main-header">
			<Logo />
	        <Menu />
		</header>
	);
			
};


export default Header;