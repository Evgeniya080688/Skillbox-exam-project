import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPhotos, likeImageAction, getCurrentPhoto } from '../store/actions';
import { infinityScroll } from '../services/helpers.js'

import PhotoList from '../components/photos/PhotoList';
import LoadMore from '../components/buttons/LoadMore';

import { unsplash } from '../services/unsplash';

class Photos extends React.Component {
	constructor (props) {
        super(props);
    }

	componentDidMount() {
		window.addEventListener('scroll', infinityScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', infinityScroll);
	}

	render() {	
		const { photos, likeImageAction, getCurrentPhoto } = this.props;

		return (
			<React.Fragment>			
			    <div className = "photos"> 	        	
			    	<PhotoList photos = { photos }  likeImageAction = { likeImageAction }  getCurrentPhoto = { getCurrentPhoto } />  		
		      	</div> 	
	     	</React.Fragment> 
			)	
	}

} 

const mapStateToProps = state => {
	const { photos, loadingPhotos } = state.photo;
	return {
	    photos,
	    loadingPhotos
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getPhotos: () => dispatch( getPhotos() ),
		likeImageAction: (photo, id) => dispatch( likeImageAction(photo, id) ),
		getCurrentPhoto: (photo) => dispatch( getCurrentPhoto(photo) ),
		loadingControl: () => dispatch( loadingControl() )
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Photos);

