import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const AuthForm = (props) => {
	const { token, userName, userLink } = props;
	const link = "https://unsplash.com/@" + userLink;

	return (		        
    	<React.Fragment>
    		<div className="auth-form">
    			<a href='/'>
        			<span>Выход</span>
        		</a>

	        	<Link to={{ pathname: `/` }}>
	    			<span className="auth-form__name">{ userName }</span>
	        	</Link>

		        <ul className="auth-form__menu auth-menu">
		        	<li className="auth-menu__item">
		        		<a target='blank' href= { link } >
		        			<span>Профиль</span>
		        		</a>
		        	</li>
		        	<li className="auth-menu__item">
		        		<a href='/'>
		        			<span>Выход</span>
		        		</a>
		        	</li>
		       	</ul> 
		    </div>   		
    	</React.Fragment>
	)				      	      
			
};

export default AuthForm;