import React from 'react';
import { connect } from 'react-redux';

import AuthMenu from './auth_menu.js';
import NotAuthMenu from './notauth_menu.js';

import { getAuth } from '../../store/actions';

import './index.css';

const Menu = ( props ) => {
	const { userName, userLink, getAuth, token } = props;

	if ( token ) {
		return (	
			<AuthMenu 
				userLink = { userLink }
				userName = { userName }
			/>	        
    	)				      	      	
	}
	else {
		return (
			<NotAuthMenu
				getAuth = { getAuth }
			/>
		)
	}
			
};

const mapStateToProps = ( state ) => {
	const { userName, userLink, token } = state.auth;
	return {
	    userLink,
	    userName,
	    token
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
)(Menu);