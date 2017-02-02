import React from 'react';
import { Router, hashHistory, Route } from 'react-router';
import { Provider } from 'react-redux';
import SearchContainer from './search_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={SearchContainer}></Route>
      </Router>
    </Provider>
  );
};

export default Root;
