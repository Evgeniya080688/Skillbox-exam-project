import './index.css';

import React from 'react';
import { Link } from 'react-router-dom'

const Like = ( props ) => {
    const { id, unsplash, toggleLike } = props;
	return (			
		<React.Fragment>
			<button
                type="button"
                className="btn btn-like"
                onClick = { () => {
                        toggleLike(unsplash, id);
                    }
                }                           
            >
                like
            </button>
		</React.Fragment>	
	);
}


export default Like;