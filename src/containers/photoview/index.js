import React from 'react';
import { connect } from 'react-redux';
import Photo from '../../components/photos/Photo';

import css from './index.css';

let PhotoView = ( { id, photos } ) => {
	const photo = photos.filter(photo => photo.id === id)[0]

	const { updated_at, user, urls, descripton } = photo

	return (
		<main className="main-photo-view view">
			<div class="view-picture">
				<Photo src={urls.regular} descripton={descripton} />
			</div>		
			<div class="view-info">
				<span>
					photo by&nbsp;
              		<a href={user.links.html}>{user.name}</a> on
              		<a href="https://unsplash.com/">&nbsp;Unsplash</a>
				</span>
		    	<span>дата {date}</span>
		    	<span>{ likes }</span>
			</div>	
			
			<button
	            type="button"
	            className="btn like-btn"            
	          >
	            Нравится
		    </button>

		    <button
	            type="button"
	            className="btn like-btn"            
	          >
	            Назад
		    </button>			
		</main>	
	)
}

const mapStateToProps = state => {
  return {
    photos: state.photoList.photos,
    token: state.auth.token,
  }
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		
	}
}

PhotoView = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoView);

export default PhotoView;