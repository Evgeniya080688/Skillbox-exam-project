import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import PhotoList from '../components/photos/PhotoList';
import PhotoView from '../components/photos/PhotoView';

let Home = ( props ) => {
	const { photos } = props;
	
	return (
    	<React.Fragment>
		    <div className="photos"> 	        	
		    	<PhotoList />	     

		        <div className="photos__loadmore loadmore">
			            <button
			                type="button"
			                className="btn loadmore-btn"			                
			            >
			                Загрузить еще
			            </button>
		        </div>
	      	</div> 
     	</React.Fragment>    
	)
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