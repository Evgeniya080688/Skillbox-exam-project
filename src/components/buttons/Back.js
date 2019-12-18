import './index.css';

import React from 'react';
import { Link } from 'react-router-dom'

const Back = () => {

	return (			
		<React.Fragment>
			<button
                type="button"
                className="btn like-btn"            
            >
                <Link to='/photos'>Back</Link>
            </button>	
		</React.Fragment>	
	);
}


export default Back;