import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
	return {
	    userLink: state.userLink,
	    userName: state.userName
	}
}

export default connect(
	mapStateToProps
)(Form);