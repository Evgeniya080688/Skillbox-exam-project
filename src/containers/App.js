import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header/index.js';
import Main from '../components/main/index.js';

let App = (props) => {
	const { token } = props;

	return (
		<React.Fragment>
		    <Header token = { token }/>
		    <Main token = { token }/>
		</React.Fragment>
		)	
}

const mapStateToProps = state => {
  return {
    photos: state.photoList.photos,
    currentPage: state.photoList.currentPage,
    token: state.auth.token
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

