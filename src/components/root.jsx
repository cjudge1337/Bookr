import React from 'react';
import { Router, hashHistory, Route } from 'react-router';
import { Provider } from 'react-redux';
import Open from './auth/open';
import UberAuthContainer from './auth/uber_auth_container';
import LyftAuthContainer from './auth/lyft_auth_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={Open}></Route>
        <Route path="/uberAuth" component={UberAuthContainer}></Route>
        <Route path="/lyftAuth/:lyftAuthCode" component={LyftAuthContainer}></Route>
      </Router>
    </Provider>
  );
};

export default Root;
