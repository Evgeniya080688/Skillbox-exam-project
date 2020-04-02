import React from 'react';
import { connect } from 'react-redux';

import Main from './components/main/index.js';
import Header from './components/header/index.js';
import { unsplash, code } from './services/unsplash';

import { getAuth } from './store/actions';

class App extends React.Component {
	constructor(props) {	
	    super(props);	
	}

	componentDidMount() {
		if (code) {
			this.props.getAuth();
		}
		else {
		//нет кода - перенаправляем на страницу авторизации
	        const authenticationUrl = unsplash.auth.getAuthenticationUrl([
	            "public",
	            "write_likes",
	        ]);

	        location.assign(authenticationUrl);
		}
		
	}

	render() {
		return (
		<React.Fragment>
			<Header/>
		    <Main />
		</React.Fragment>
		)
		
	}
}  

const mapStateToProps = state => {
	return {
	    token: state.token,
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getAuth: () => dispatch(getAuth()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);



