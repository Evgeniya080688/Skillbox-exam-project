import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Form = ( props ) => {
	const { token } = props;

	if (token) {
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
	}
	else {
		return (
			<Link to={{ pathname: `/` }}>
    			<span></span>
        	</Link>
		)
	}
			
};

export default Form;