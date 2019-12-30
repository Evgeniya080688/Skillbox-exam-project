import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

import { authenticationUnsplash, unsplash, code } from '../services/unsplash';

class Auth extends React.Component {

	render() {
		return (
		    <React.Fragment>
		    	<h1>Войдите в систему</h1>
		        <button className="btn btn__auth" onClick={ () => 
	        		{
	        			
	        			authenticationUnsplash();
	        		}
		        }>
		        	Авторизация
		        </button>
		    </React.Fragment>
   		)
		
	}

}  



export default Auth;
