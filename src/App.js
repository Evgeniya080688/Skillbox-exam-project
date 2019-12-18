import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getToken, getPhotos } from './store/actions'
import { unsplash, code } from './services/unsplash'

import Header from './components/header/index.js';
import Main from './components/main/index.js';

class App extends React.Component {
	constructor(props) {	
	    super(props);	
	 }
	 
	componentDidMount() {
		this.props.getToken(unsplash, code);
	}

	render() {
		return (
		<React.Fragment>
		    <Header token = { this.props.token }/>
		    <Main code = { this.props.token } photos= { this.props.photos }/>
		</React.Fragment>
		)
		
	}

}  

const mapStateToProps = state => {
	const { token, photos, currentPage } = state;
	return {
	    token,
	    photos,
	    currentPage
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getToken: ( unsplash, code ) => dispatch(getToken( unsplash. code )),
		getPhotos: () => dispatch(getPhotos()),
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default App;


