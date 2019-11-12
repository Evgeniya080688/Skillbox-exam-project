import React from 'react';
import { Link } from 'react-router-dom';

import AuthForm from './auth_form.js';
import NotAuthForm from './notauth_form.js';

import './index.css';

const Form = ( props ) => {
	const { isAuthorizated } = props;

	if (isAuthorizated) {
		return (		        
	    	<AuthForm />
    	)				      	      	
	}
	else {
		return (
			<NotAuthForm />
		)
	}
			
};

export default Form;