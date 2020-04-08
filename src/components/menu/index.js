import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthMenu from './auth_menu.js';
import NotAuthMenu from './notauth_menu.js';

import { getAuth } from '../../store/actions';

import './index.css';

const Menu = ( props ) => {
	const { userName, userLink, getAuth } = props;

	if (userName) {
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
	const { userName, userLink } = state;
	return {
	    userLink,
	    userName
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