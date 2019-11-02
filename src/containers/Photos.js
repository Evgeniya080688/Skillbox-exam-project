import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import PhotoList from '../components/photos/PhotoList';
import LoadMore from '../components/buttons/LoadMore';

let Photos = ( props ) => {
	const { photos } = props;
	
	return (
    	<React.Fragment>
		    <div className="photos"> 	        	
		    	<PhotoList photos = { photos } /> 
		        <LoadMore />
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


Photos = connect(
	mapStateToProps,
	mapDispatchToProps
)(Photos);

export default Photos;
