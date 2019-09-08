import React, { Component } from 'react';
import './index.css';
import { authenticationUnsplash, unsplash, getToken, code } from '../../auth/unsplash';

const UnregisterPage = () => {
    return (
	    <div>
	        <button onClick={ev=>{authenticationUnsplash(unsplash); getToken(unsplash, code)}}>Авторизация</button>
	    </div>
    )
}

export default UnregisterPage;
