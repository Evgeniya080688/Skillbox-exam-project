import React from 'react';
import { connect } from 'react-redux';

import Main from './components/main/index.js';
import Header from './components/header/index.js';
import { unsplash, code } from './services/unsplash';

import { getAuth, getUser } from './store/actions';


class App extends React.Component {
	constructor(props) {	
	    super(props);	
	}

	componentDidMount() {
		if (code) {
			this.props.getAuth();
			//unsplash.auth.setBearerToken( this.props.token );
			
		}
		else {
		//нет кода - перенаправляем на страницу авторизации
	        const authenticationUrl = unsplash.auth.getAuthenticationUrl([
	            "public",
	            "write_likes",
	        ]);

	        location.assign(authenticationUrl);
		}

		if (this.props.token !== null )
			{
				this.props.getUser( );
			}	
		
	}

	render() {
		return (
		<React.Fragment>
			<Header userName = { this.props.userName } userLink = { this.props.userLink }/>
		    <Main token = { this.props.token }/>
		</React.Fragment>
		)
		
	}
}  

const mapStateToProps = state => {
	return {
	    token: state.token,
	    userName: state.userName,
	    userLink: state.userLink
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getAuth: () => dispatch(getAuth()),
		getUser: () => dispatch(getUser( )),
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);


export default App;


