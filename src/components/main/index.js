import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../containers/Home';
import Auth from '../../containers/Auth';
import PhotoList from '../photos/PhotoList';
import PageNotFound from '../../containers/PageNotFound';
import PhotoView from '../../containers/PhotoView';

const Main = () => (
  	<main>
    	<Switch>
     		<Route exact path='/' component={Home}/>
     		<Route path='/auth' component={Auth}/>
     		<Route path="/photo/:id" component={PhotoView} />
     		<Route component={PageNotFound} />
    	</Switch>
  	</main>
)


export default Main;