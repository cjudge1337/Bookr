import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as LyftAPIUtil from './util/lyft/quotes';
import { authorize, login } from './util/uber/auth_api';
import $ from 'jquery';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.$ = $;
  window.login = login;
  window.authorize = authorize;
  window.getCost = LyftAPIUtil.getCost;
  const store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={ store }/>, root);
});
