import './index.css';
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { likeImageAction, getCurrentPhoto } from '../../store/actions';

const Like = ( props ) => {
    const { id, likes, liked_by_user, photo, likeImageAction, getCurrentPhoto } = props;
    
	return (			
		<React.Fragment>
			<button
                type="button"
                className="btn btn-like"
                className= { liked_by_user ? "btn btn-like btn-like--liked" : "btn btn-like" }   
                onClick = { () => {
                        getCurrentPhoto(photo);
                        likeImageAction(photo, id);   
                    }   
                }       
            >
                <span>{ likes }</span>
               
            </button>
		</React.Fragment>	
	);
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        likeImageAction: (photo, id) => dispatch( likeImageAction(photo, id) ),
        getCurrentPhoto: (photo) => dispatch( getCurrentPhoto(photo) ),
    }
}
        
export default connect(
    null,
    mapDispatchToProps
)(Like);