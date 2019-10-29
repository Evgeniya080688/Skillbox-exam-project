import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

let PhotoView = ( { match, history, photos, token } ) => {
	const photo = photos.filter(photo => photo.id === match.params.id)[0]

	const { updated_at, user, urls, location, likes } = photo

	return (
		<React.Fragment>
			<div class="view-picture">				
				<img alt={location} src={urls.regular} />
			</div>		
			<div class="view-info">
				<span>
					photo by&nbsp;
              		<a href={user.links.html}>{user.name}</a> on
              		<a href="https://unsplash.com/">&nbsp;Unsplash</a>
				</span>
		    	<span>дата {updated_at}</span>
		    	<span>{ likes }</span>
			</div>	
			
			<button
                type="button"
                className="btn btn-like"
                onClick = { () => {}}			                
            >
                like
            </button>

		    <button
	            type="button"
	            className="btn like-btn"            
	        >
	            <Link to='/photos'>Back</Link>
		    </button>			
		</React.Fragment>
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