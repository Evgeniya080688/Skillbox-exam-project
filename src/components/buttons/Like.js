import './index.css';

import React from 'react';
import { Link } from 'react-router-dom'

const Like = ( props ) => {
    const { id, likes } = props;
	return (			
		<React.Fragment>
			<button
                type="button"
                className="btn btn-like"
                onClick = { () => {
                        
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