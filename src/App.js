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
	 
	componentDidMount() {
		this.props.getToken(unsplash, code);
		this.props.getPhotos(unsplash, this.props.currentPage, this.props.photoPerPage);
		this.props.getUser(unsplash);
	}

	render() {
		return (
		<React.Fragment>
		    <Header 
		    	token = { this.props.token }
		    	userName = { this.props.userName }
		    	userLink = {this.props.userLink }
		    />
		    <Main 
		    	code = { this.props.token } 
		    	
		    />
		</React.Fragment>
		)
		
	}

}  

const mapStateToProps = state => {
	const { token, userName, userLink, photos, currentPage, photoPerPage } = state;
	return {
	    token,
	    userName,
	    userLink,
	    photos,
	    currentPage,
	    photoPerPage
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getToken: ( unsplash, code ) => dispatch(getToken( unsplash. code )),
		getPhotos: ( unsplash, currentPage, photoPerPage ) => dispatch(getPhotos( unsplash, currentPage, photoPerPage )),
		getUser: ( unsplash ) => dispatch(getUser( unsplash )),

	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default App;


