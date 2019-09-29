import React from 'react';
import './index.css';
import logo from '../../img/logo.svg';

const Header = ( props ) => {
	const { userInfo } = props;
	if (userInfo) {
		return 
		<header className="main-header">
			<nav className="main-header__nav main-nav">
		        <a className="main-nav__logo nav-logo" href="#" onClick={ev=>ev.preventDefault()}>	
		        	<img src={ logo } width="30" height="30" alt="My unplash App" title="My unplash App" />
		        </a>

		        <a className="main-nav__author nav-author" > 
		        	<span>Пользователь1</span>
		        </a>

		        <ul className="main-nav__links nav-links">
		        	<li className="nav-links__item">
		        		<a href="#">Профиль</a>
		        	</li>
		        	<li className="nav-links__item">
		        		<a href="#">Выход</a>
		        	</li>
		       	</ul> 	
	      	</nav>
		</header>;
	}
	else {
		return (		
		<header className="main-header">
			<nav className="main-header__nav main-nav">
		        <a className="main-nav__logo nav-logo" href="#" onClick={ev=>ev.preventDefault()}>		          
		          <img src={ logo } width="30" height="30" alt="My unplash App" title="My unplash App" />
		        </a>

		        <a className="main-nav__author nav-author" href="/auth"> 
		        	<span>Войти</span>
		        </a>
	      	</nav>
		</header>	
		)
	}
			
};

export default Header;