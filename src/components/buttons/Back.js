import './index.css';

import React from 'react';
import { Link } from 'react-router-dom'

const Back = () => {

	return (			
		<React.Fragment>
		<Link to='/'>
			<button
                type="button"
                className="btn btn-back"            
            >
                Back
            </button>
        </Link>	
		</React.Fragment>	
	);
}


export default Back;