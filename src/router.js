import React from 'react';
//import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken, unsplash } from './auth/unsplash';
import PhotoApp from './containers/homepage/index';
import UnregisterPage from './containers/authpage/index';

import { Switch, Route } from 'react-router-dom'

let Main = () => (  
    <Switch>
      <Route exact path='/' component={PhotoApp}/>
      <Route path='/auth' component={UnregisterPage}/>
    </Switch>
)

export default Main;