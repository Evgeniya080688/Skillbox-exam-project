import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

import { getToken } from '../actions/index';

import { authenticationUrl, authenticationUnsplash, unsplash, code } from '../api/unsplash';

class Auth extends React.Component {

	render() {
		return (
		    <React.Fragment>
		    	<h1>Войдите в систему</h1>
		        <button className="btn btn__auth" onClick={ () => 
	        		{
	        			//this.props.getToken(unsplash, code);
	        			authenticationUnsplash(unsplash);
	        		}
		        }>
		        	Авторизация
		        </button>
		    </React.Fragment>
   		)
		
	}

}  

// const Auth  = () => {
//     return (
// 	    <React.Fragment>
// 	    	<h1>Войдите в систему</h1>
// 	        <button className="btn btn__auth" onClick={ () => 
//         		{
//         			authenticationUnsplash(unsplash);
//         			this.props.getToken(unsplash);
//         		}
// 	        }>
// 	        	Авторизация
// 	        </button>
// 	    </React.Fragment>
//     )
// }

const mapStateToProps = state => {
	const { token } = state;
	return {
	    token,
	
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getToken: ( unsplash, code ) => dispatch(getToken( unsplash, code )),
		
	}
}

Auth = connect(
	mapStateToProps,
	mapDispatchToProps
)(Auth);

export default Auth;
