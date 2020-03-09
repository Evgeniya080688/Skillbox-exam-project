import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuth, getPhotos, getMorePhotos, likeImageAction, getUser } from '../store/actions';
import loadMoreByScroll from '../services/helpers.js';

import PhotoList from '../components/photos/PhotoList';
import LoadMore from '../components/buttons/LoadMore';

import store from '../store/index';
import { unsplash } from '../services/unsplash';

class Photos extends React.Component {
	constructor (props) {
        super(props);
    }

    componentWillUnmount() {

    }

	componentDidMount() {
		
		this.props.getPhotos();	
		// window.addEventListener('scroll', function() {
		// 	let loadingImages = false;
  //           let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  //           if (window.innerHeight + scrolled >= document.body.clientHeight - 400) {
  //               if(!loadingImages) {
  //                   loadingImages = true;
  //                   const res = store.dispatch(getMorePhotos());
  //                   alert('scroll');
  //                   if (res) { loadingImages = false;}  
  //               }
  //           }
		// } );

		
	}


	render() {	

		return (
			<React.Fragment>			
			    <div className="photos"> 	        	
			    	<PhotoList photos = { this.props.photos }  likeImageAction = { this.props.likeImageAction } />  		
		      	</div> 	
		      	<LoadMore getMorePhotos = { this.props.getMorePhotos } />
	     	</React.Fragment> 
			)
	
		
	}

} 

const mapStateToProps = state => {
	return {
	    photos: state.photos,
	    token: state.token
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		
		getPhotos: () => dispatch(getPhotos()),
		getMorePhotos: () => dispatch(getMorePhotos()),
		getUser: () => dispatch(getUser()),
		likeImageAction: (photo, id) => dispatch(likeImageAction(photo, id))
	}
}


Photos = connect(
	mapStateToProps,
	mapDispatchToProps
)(Photos);

export default Photos;
