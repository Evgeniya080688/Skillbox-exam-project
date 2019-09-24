import React, { Component } from 'react';
import './index.css';
import { authenticationUnsplash, unsplash, getToken, code } from '../../api/unsplash';

const UnregisterPage = () => {
    return (
	    <main className="main-auth">
	    	<h1>Войдите в систему</h1>
	        <button className="btn btn__auth" onClick={ev=>{authenticationUnsplash(unsplash)}}>Авторизация</button>
	    </main>
    )
}

export default UnregisterPage;
