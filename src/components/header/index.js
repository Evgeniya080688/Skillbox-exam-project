import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../form/index.js';

import './index.css';
import logo from '../../img/logo.svg';

const Header = ( props ) => {
	const { token } = props;
	
	return (
			<header className="main-header">
				<Link to={{ pathname: `/` }}>	
		        	<img src={ logo } width="30" height="30" alt="My unplash App" title="My unplash App" />
		        </Link>

		        <Form />
			</header>
	);
			
};

export default Header;