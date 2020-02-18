import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../store/actions'

import PhotoList from '../components/photos/PhotoList';

import store from '../store/index';

class Photos extends React.Component {

	componentDidMount() {
		let countPhotos = 18;
		this.props.getPhotos();
		

		window.onscroll = function() {
			let loadingImages = false;
	     	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    	 	if (window.innerHeight + scrolled >= document.body.clientHeight - 300) {
		    	if(!loadingImages) {
		    		loadingImages = true;
		    		store.dispatch(getPhotos());
		    		loadingImages = false;	
		    	}
		    }
		}  
	}


	render() {		
		return (
		<React.Fragment>			
		    <div className="photos"> 	        	
		    	<PhotoList photos = { this.props.photos }  />  		
	      	</div> 		    
     	</React.Fragment> 
		)
		
	}

} 

const mapStateToProps = state => {
	return {
	    photos: state.photos,
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getPhotos: () => dispatch(getPhotos()),
	}
}


Photos = connect(
	mapStateToProps,
	mapDispatchToProps
)(Photos);

export default Photos;
