import React from 'react';
import { Link } from 'react-router-dom';

import AuthForm from './auth_form.js';
import NotAuthForm from './notauth_form.js';

import './index.css';

const Form = ( props ) => {
	const { userName, userLink } = props;

	if (userName) {
		return (	
			<AuthForm 
				userLink= { userLink }
				userName = { userName }
			/>	        
    	)				      	      	
	}
	else {
		return (
			<NotAuthForm />
		)
	}
			
};

export default Form;