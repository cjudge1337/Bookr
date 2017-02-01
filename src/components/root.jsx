import React from 'react';
import { Router, hashHistory, Route } from 'react-router';
import { Provider } from 'react-redux';
import Open from './auth/open';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={Open}></Route>
      </Router>
    </Provider>
  );
};

export default Root;
