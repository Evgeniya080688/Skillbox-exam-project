import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import logo from '../../img/logo.svg';

const Logo = () => {	
	return (			
		<Link to={{ pathname: `/` }}>	
        	<img src={ logo } width="30" height="30" alt="My unplash App" title="My unplash App" />
        </Link>		   
	);
			
};

export default Logo;