import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header/index.js';
import Main from '../components/main/index.js';

let App = (props) => {
	const { isAuthorizated } = props;

	return (
		<React.Fragment>
		    <Header isAuthorizated = { isAuthorizated }/>
		    <Main isAuthorizated = { isAuthorizated }/>
		</React.Fragment>
		)	
}

const mapStateToProps = state => {
  return {
    isAuthorizated: state.isAuthorizated
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

