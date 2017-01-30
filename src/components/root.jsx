import React from 'react';
import { Router, hashHistory, Route } from 'react-router';
import { Provider } from 'react-redux';
import Test from './test';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={Test}></Route>
      </Router>
    </Provider>
  );
};

export default Root;
