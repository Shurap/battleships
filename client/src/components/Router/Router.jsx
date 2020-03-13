import React from 'react';
import { Route } from 'react-router-dom';
import LogInPage from '../LogInPage/LogInPage';
import HomePage from '../HomePage/HomePage';
import Game from '../Game/Game';

const Router = () => (
  <div>
    <Route exact path='/' component={HomePage} />
    <Route path='/login' component={LogInPage} />
    <Route path='/game' component={Game} />
  </div>
)

export default Router;