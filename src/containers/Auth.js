import React, { Component } from 'react';
import { authenticationUnsplash, unsplash, code } from '../mocks/api/unsplash';

const Auth  = () => {
    return (
	    <div>
	    	<h1>Войдите в систему</h1>
	        <button className="btn btn__auth" onClick={ev=>{authenticationUnsplash(unsplash)}}>Авторизация</button>
	    </div>
    )
}

export default Auth ;

