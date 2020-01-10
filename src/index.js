import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from "./store/index.js";
import App from './App.js';
import { unsplash, code, authenticationUrl } from './services/unsplash';


if (code ){
        //авторизируемся
        unsplash.auth.userAuthentication(code)
        .then(response => response.json())
        .then((json) => {
        // Сохраняем полученный токен для того, чтоб можно было выполнять какие-либо действия от имени пользователя
        unsplash.auth.setBearerToken(json.access_token)});
        //показываем первый экран
    }
else {
        //нет кода - перенаправляем на страницу авторизации
        location.assign(authenticationUrl);
    }


render(
	<Provider store={store}>
    	<Router>
	  		<App />
	  	</Router>
  	</Provider>,
	document.getElementById("app")
);



export default store;