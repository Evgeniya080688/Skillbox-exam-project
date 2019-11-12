import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { authenticationUnsplash, unsplash, code } from '../mocks/api/unsplash';
import { unsplashAuth } from '../mocks/actions/index.js';

const Auth  = () => {
    return (
	    <React.Fragment>
	    	<h1>Войдите в систему</h1>
	        <button className="btn btn__auth" onClick={ev=>{authenticationUnsplash(unsplash)}}>Авторизация</button>
	    </React.Fragment>
    )
}

const mapStateToProps = state => {
  return { isAuthorzated: state.isAuthorzated }
}

export default connect(
  mapStateToProps,
  { unsplashAuth }
)(Auth)



