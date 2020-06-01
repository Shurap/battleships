import React from 'react';
import { Route } from 'react-router-dom';
import PageLogIn from '../PageLogIn/PageLogIn';
import PageHome from '../PageHome/PageHome';
import PageGame from '../PageGame/PageGame';
import PageBegin from '../PageBegin/PageBegin';
import PageEnd from '../PageEnd/PageEnd';

const Router = () => (
  <div>
    <Route exact path='/' component={PageHome} />
    <Route path='/login' component={PageLogIn} />
    <Route path='/begin' component={PageBegin} />
    <Route path='/game' component={PageGame} />
    <Route path='/end' component={PageEnd} />
  </div>
)

export default Router;