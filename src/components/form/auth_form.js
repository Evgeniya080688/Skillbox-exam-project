import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const AuthForm = () => {

	return (		        
    	<React.Fragment>
        	<Link to={{ pathname: `/` }}>
    			<span>Пользователь1</span>
        	</Link>

	        <ul className="main-nav__links nav-links">
	        	<li className="nav-links__item">
	        		<Link to={{ pathname: `/` }}>
	        			<span>Профиль</span>
	        		</Link>
	        	</li>
	        	<li className="nav-links__item">
	        		<Link to={{ pathname: `/auth` }}>
	        			<span>Выход</span>
	        		</Link>
	        	</li>
	       	</ul> 	
    	</React.Fragment>
	)				      	      
			
};

export default AuthForm;