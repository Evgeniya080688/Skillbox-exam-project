import './index.css';

import React from 'react';
import { Link } from 'react-router-dom'

const Like = ( props ) => {
    const { id, likes, photo, likeImageAction, getCurrentPhoto, liked_by_user } = props;
    
	return (			
		<React.Fragment>
			<button
                type="button"
                className="btn btn-like"
                className= { liked_by_user ? "btn btn-like btn-like--liked" : "btn btn-like" }   
                onClick = { () => {
                        console.log("onclick "+photo);
                        getCurrentPhoto(photo);
                        likeImageAction(photo, id);   
                    }   
                }  
                // onClick = { 
                //         likeImageAction   
                //     }   
                                    
            >
                <span>{ likes }</span>
               
            </button>
		</React.Fragment>	
	);
}


export default Like;