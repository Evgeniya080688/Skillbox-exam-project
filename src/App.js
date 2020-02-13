import React from 'react';
import { connect } from 'react-redux';

import Main from './components/main/index.js';

class App extends React.Component {
	constructor(props) {	
	    super(props);	
	 }

	render() {
		return (
		<React.Fragment>
		    <Main/>
		</React.Fragment>
		)
		
	}
}  


export default App;


