import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getToken, getPhotos, getUser, toggleLike, loadMorePhotos } from './store/actions'
import { unsplash, code } from './services/unsplash'

import Header from './components/header/index.js';
import Main from './components/main/index.js';

class App extends React.Component {
	constructor(props) {	
	    super(props);	
	 }

	render() {
		return (
		<React.Fragment>
		    <Header 
		    	userName = { this.props.userName }
		    	userLink = {this.props.userLink }
		    />
		    <Main/>
		</React.Fragment>
		)
		
	}

}  

const mapStateToProps = state => {
	const {userName, userLink } = state;
	return {
	    userName,
	    userLink
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default App;


