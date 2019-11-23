import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getToken } from '../actions/index'
import { unsplash, code } from '../api/unsplash'

import Header from '../components/header/index.js';
import Main from '../components/main/index.js';

import Auth from './Auth';
import PageNotFound from './PageNotFound';

class App extends React.Component {

	componentDidMount() {
		this.props.getToken(code);
		unsplash.auth.setBearerToken(this.props.token)
	}

	render() {
		return (
		<React.Fragment>
		    <Header code = { code }/>
		    <Main code = { code }/>
		</React.Fragment>
		)
		
	}

}  

const mapStateToProps = state => {
  return {
    token: state.token,
  }
}

export default connect(
  mapStateToProps,
  { getToken }
)(App)


