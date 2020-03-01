import React from 'react';
import { connect } from 'react-redux';
import { getAuth, getPhotos, likeImageAction, getUser } from '../store/actions'

import PhotoList from '../components/photos/PhotoList';
import LoadMore from '../components/buttons/LoadMore';

import store from '../store/index';

class Photos extends React.Component {
	constructor (props) {
        super(props);
    }

    componentWillUnmount() {
    	window.onscroll = function() {

    	}	
    }

	componentDidMount() {
		let countPhotos = 18;
		this.props.getPhotos();
		this.props.getUser();
		this.props.getAuth();

		window.onscroll = function() {
			let loadingImages = false;
	     	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    	 	if (window.innerHeight + scrolled >= document.body.clientHeight - 300) {
		    	if(!loadingImages) {
		    		loadingImages = true;
		    		const res = store.dispatch(getPhotos());
		    		if (res) { loadingImages = false;}	
		    	}
		    }
		}  
	}


	render() {		
		const { photos, likeImageAction } = this.props;
		return (
		<React.Fragment>			
		    <div className="photos"> 	        	
		    	<PhotoList photos = { photos }  likeImageAction = { likeImageAction } />  		
	      	</div> 	
     	</React.Fragment> 
		)
		
	}

} 

const mapStateToProps = state => {
	return {
	    photos: state.photos,
	    currentPage: state.currentPage,
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getAuth: () => dispatch(getAuth()),
		getPhotos: () => dispatch(getPhotos()),
		getUser: () => dispatch(getUser()),
		likeImageAction: (photo, id) => dispatch(likeImageAction(photo, id))
	}
}


Photos = connect(
	mapStateToProps,
	mapDispatchToProps
)(Photos);

export default Photos;
