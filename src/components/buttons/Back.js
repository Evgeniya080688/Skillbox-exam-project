import './index.css';

import React from 'react';
import { Link } from 'react-router-dom'

 const comeBack = e => {
    e.stopPropagation()
    history.goBack()
  }

const Back = (props) => {
	const { comeBack } = props;

	return (			
		<React.Fragment>
			<button
                type="button"
                className="btn btn-back" 
                onClick={ comeBack }           
            >
                Back
            </button>
		</React.Fragment>	
	);
}


export default Back;