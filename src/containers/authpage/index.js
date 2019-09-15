import React, { Component } from 'react';
import './index.css';
import { authenticationUnsplash, unsplash, getToken, code } from '../../auth/unsplash';

const UnregisterPage = () => {
    return (
	    <div>
	    	<h1>Войдите в систему</h1>
	        <button onClick={ev=>{authenticationUnsplash(unsplash)}}>Авторизация</button>
	    </div>
    )
}

export default UnregisterPage;
