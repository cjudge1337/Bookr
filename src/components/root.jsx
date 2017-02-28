import React from 'react';
import { Router, hashHistory, Route } from 'react-router';
import { Provider } from 'react-redux';
import Open from './auth/open';
import UberAuthContainer from './auth/uber_auth_container';
import LyftAuthContainer from './auth/lyft_auth_container';
import EnrouteContainer from './enroute/enroute_container';
import SearchContainer from './search/search_container';
import Confirm from './search/confirm_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={Open}></Route>
        <Route path="/search" component={SearchContainer}></Route>
        <Route path='/confirm' component = { Confirm }></Route>
        <Route path="/uberAuth/:uberCreds" component={UberAuthContainer}></Route>
        <Route path="/lyftAuth/:lyftCreds" component={LyftAuthContainer}></Route>
        <Route path="/enroute" component={EnrouteContainer}></Route>
      </Router>
    </Provider>
  );
};

export default Root;
