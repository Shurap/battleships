import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';
import history from './components/common/history';

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  ), document.getElementById('root'));

serviceWorker.unregister();
