import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PhotoList from './PhotoList';
import PhotoView from './PhotoView';
import Home from '../../containers/Home'

const Photos = () => (
  <Switch>
    <Route exact path='/photos' component={Home}/>
    <Route path='/photos/:id' component={PhotoView}/>
  </Switch>
)

export default Photos;