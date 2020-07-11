import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Root from './client/Root';

import UserContext from './client/context';
import UserService from './client/services/auth.service';
import './client/styles';

const userService = new UserService();

ReactDOM.render(
  <React.StrictMode>
      <UserContext.Provider value={userService}>
          <Router>
              <Root />
          </Router>
      </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
