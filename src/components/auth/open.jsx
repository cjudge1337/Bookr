import React from 'react';
// import { authorize } from '../../util/uber/auth_api';
import { UBER_CLIENT_ID } from '../../../config.js';

class Open extends React.Component {
  constructor() {
    super();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) return window.location.replace('order');
  }

  render() {
    return (
      <div className="auth-actions jawbone">
        <h1>im here</h1>
        <a href={`https://login.uber.com/oauth/v2/authorize?client_id=${UBER_CLIENT_ID}&response_type=code`} className="login">Log In</a>
      </div>
    );
  }
}

export default Open;
