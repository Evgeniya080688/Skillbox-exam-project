import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getToken, getPhotos } from '../actions/index'
import { unsplash, code } from '../api/unsplash'

import Header from '../components/header/index.js';
import Main from '../components/main/index.js';

import Auth from './Auth';
import PageNotFound from './PageNotFound';

class App extends React.Component {
	// constructor(props) {
	//     super(props);
	//  }

	componentDidMount() {
		this.props.getToken(unsplash, code);
		this.props.getPhotos();
	}

	render() {
		return (
		<React.Fragment>
		    <Header token = { this.props.token }/>
		    <Main code = { code } photos= { this.props.photos }/>
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
		getToken: ( unsplash, code ) => dispatch(getToken( unsplash, code )),
		getPhotos: () => dispatch(getPhotos()),
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default App;


// export default connect(
//   mapStateToProps,
//   { getToken }
// )(App)


