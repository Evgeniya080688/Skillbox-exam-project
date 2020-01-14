import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const NotAuthForm = ( props ) => {
	const { token } = props;

	return (
		<Link to={{ pathname: `/` }}>
			<span></span>
    	</Link>    	
	)
	
			
};

export default NotAuthForm;