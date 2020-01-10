import './index.css';

import React from 'react';
import { Link } from 'react-router-dom'
import { toggleClassLike } from '../../services/helpers';

const Like = ( props ) => {
    const { id, unsplash, toggleLike, likes } = props;
	return (			
		<React.Fragment>
			<button
                type="button"
                className="btn btn-like"
                onClick = { () => {
                        toggleLike(unsplash, id);
                        toggleClassLike();
                    }
                }                           
            >
                <span>{ likes }</span>
                <img src="../../img/like.svg" alt="Like" title="Like" />
            </button>
		</React.Fragment>	
	);
}


export default Like;