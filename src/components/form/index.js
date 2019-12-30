import React from 'react';
import { Link } from 'react-router-dom';

import AuthForm from './auth_form.js';
import NotAuthForm from './notauth_form.js';

import './index.css';

const Form = ( props ) => {
	const { token, userName, userLink } = props;

	if (token) {
		return (	
			<AuthForm 
				token = { token }
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