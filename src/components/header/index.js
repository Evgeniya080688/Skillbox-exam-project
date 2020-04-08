import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Menu from '../menu/index.js';
import Logo from './logo.js';

import './index.css';

const Header = ( props ) => {
	const { userName, userLink } = props;
	
	return (
		<header className="main-header">
			<Logo />
	        <Menu userLink = { userLink } userName = { userName } />
		</header>
	);
			
};


export default Header;