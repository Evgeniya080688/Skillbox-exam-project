import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { unsplash, code } from '../services/unsplash'

import { getToken, getPhotos, loadMorePhotos, toggleLike } from '../store/actions'

import PhotoList from '../components/photos/PhotoList';
import LoadMore from '../components/buttons/LoadMore';

class Photos extends React.Component {

	componentDidMount() {
		//this.props.getToken(unsplash, code);
		//this.props.getPhotos();
	}

	render() {
		return (
		<React.Fragment>
		    <div className="photos"> 	        	
		    	<PhotoList photos = { this.props.photos } toggleLike = { this.props.toggleLike } /> 
		        <LoadMore currentPage = { this.props.currentPage } loadMorePhotos = { this.props.loadMorePhotos }/>
	      	</div> 
     	</React.Fragment> 
		)
		
	}

} 

const mapStateToProps = state => {
	return {
	  	token: state.token,
	    photos: state.photos,
	    currentPage: state.currentPage,
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		loadMorePhotos: (currentPage) => dispatch(loadMorePhotos( currentPage )),
		toggleLike: ( unsplash, photo ) => dispatch(toggleLike ( unsplash, photo )),
	}
}


Photos = connect(
	mapStateToProps,
	mapDispatchToProps
)(Photos);

export default Photos;
