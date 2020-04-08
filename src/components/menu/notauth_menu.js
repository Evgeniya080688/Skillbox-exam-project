import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const NotAuthMenu = (props) => {
	const { getAuth } = props;

	return (    
  		<a className="dropdown-item" href="/" 
  			onClick	= { ev => {
		      		getAuth();
		      		window.location.assign('/');
		    		}
		    	}
        >
        	<span>Войти</span>  
        </a>	
	)
	
			
};

export default NotAuthMenu;

