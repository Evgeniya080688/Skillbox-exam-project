import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthForm from './auth_form.js';
import NotAuthForm from './notauth_form.js';

import { getAuth } from '../../store/actions';

import './index.css';

const Form = ( props ) => {
	const { userName, userLink, getAuth } = props;

	if (userName) {
		return (	
			<AuthForm 
				userLink = { userLink }
				userName = { userName }
			/>	        
    	)				      	      	
	}
	else {
		return (
			<NotAuthForm 
				getAuth = { getAuth }
			/>
		)
	}
			
};

const mapStateToProps = state => {
	return {
	    userLink: state.userLink,
	    userName: state.userName
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getAuth: () => dispatch( getAuth() ),
	}
}
		
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);