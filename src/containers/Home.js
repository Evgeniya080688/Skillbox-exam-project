import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import PhotoList from '../components/photos/PhotoList';

let Home = ( props ) => {
	const { photos } = props;
	
	return (
    	<React.Fragment>
		    <div className="photos"> 	        	
		    	<PhotoList photos = { photos } />	     

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


Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

export default Home;
