import React from 'react';
import { UBER_CLIENT_ID, LYFT_CLIENT_ID } from '../../../config.js';

class Open extends React.Component {
  render() {
    return (
      <div className="auth-actions jawbone">
        <h1>Bookr</h1>
        <a href={'http://localhost:3000/uber'} className="login">Log In Uber</a>
        <a href={'http://localhost:3000/lyft'} className="login">Log In Lyft</a>
      </div>
    );
  }
}

export default Open;
