import React from 'react';
import { Route } from 'react-router-dom';
import PageLogIn from '../PageLogIn/PageLogIn';
import PageHome from '../PageHome/PageHome';
import Game from '../Game/Game';
import PageBegin from '../PageBegin/PageBegin';

const Router = () => (
  <div>
    <Route exact path='/' component={PageHome} />
    <Route path='/login' component={PageLogIn} />
    <Route path='/begin' component={PageBegin} />
    <Route path='/game' component={Game} />
  </div>
)

export default Router;