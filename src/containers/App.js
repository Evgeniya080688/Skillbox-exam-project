import React from 'react';
import { connect } from 'react-redux';

import { getToken } from '../actions/index'
import { unsplash, code } from '../api/unsplash'

import Header from '../components/header/index.js';
import Main from '../components/main/index.js';

class App extends React.Component {

	componentDidMount() {
		this.props.getToken(code);
		unsplash.auth.setBearerToken(this.props.token)
	}

	render() {
		return (
		<React.Fragment>
		    <Header token = { this.props.token }/>
		    <Main token = { this.props.token }/>
		</React.Fragment>
		)
	}

}  

// let App = (props) => {
// 	const { isAuthorizated } = props;

// 	componentDidMount() {
// 	    this.props.unsplashAuth(code)
// 	    unsplash.auth.setBearerToken(this.props.token)
// 	  }

// 	return (
// 		<React.Fragment>
// 		    <Header isAuthorizated = { isAuthorizated }/>
// 		    <Main isAuthorizated = { isAuthorizated }/>
// 		</React.Fragment>
// 		)	
// }

const mapStateToProps = state => {
  return {
    token: state.token,
  }
}

export default connect(
  mapStateToProps,
  { getToken }
)(App)


