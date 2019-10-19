import React from 'react';
import { connect } from 'react-redux';
import PhotoList from '../components/photos/PhotoList';

let Home = ( props ) => {
	const { photos } = props;
	//const code = location.search.split( 'code=' )[1]; 
	const code = 'bae45466393d679eec4668dce80dc5f26dcf46220adef7c681ea053a2ef9a81f'; 

	if (code === undefined) {
	    return (
	      <Route exact path="/">
	        <Redirect to="/auth" />
	      </Route>
	    )
	} else {
	    return (
	      <div>
	        <PhotoList />
	      </div>
	    )
	}

}



const mapStateToProps = ( state ) => {	
	const { photos } = state;
	return {
		photos
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		
	}
}


Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

export default Home;