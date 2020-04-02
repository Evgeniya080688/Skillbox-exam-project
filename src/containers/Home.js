import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOut } from '../store/actions';

import { unsplash } from '../services/unsplash';

class Home extends React.Component {
	constructor (props) {
        super(props);
    }

    componentDidMount() {
		this.props.authOut();	
	}

	render() {	
		return (
			<React.Fragment>			
			    <div>
		  			<p className = "enter-text" >Войдите или зарегистрируйтесь</p>
		  		</div>
	     	</React.Fragment> 
		)
	
		
	}
}	

const mapStateToProps = state => {
	return {
	    
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		authOut: () => dispatch( authOut() ),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

