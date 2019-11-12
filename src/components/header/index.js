import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../form/index.js';
import Logo from './logo.js';

import './index.css';

const Header = ( props ) => {
	const { isAuthorizated } = props;
	
	return (
			<header className="main-header">
				<Logo />
		        <Form isAuthorizated = { isAuthorizated }/>
			</header>
	);
			
};

export default Header;