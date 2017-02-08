import React from 'react';
import { Link } from 'react-router';
import { PORT, UBER_CLIENT_ID, LYFT_CLIENT_ID } from '../../../config.js';

class Open extends React.Component {
  render() {
    return (
      <div className="open">
        <div id='title'>
          <h1>Bookr</h1>
        </div>

        <div id='login'>
          <div id='login-links'>
            <a id='login-hover' href={`http://localhost:${PORT}/uber`}
              className="uber-login">Log In Uber
            </a>
            <a id='login-hover' href={`http://localhost:${PORT}/lyft`}
              className="lyft-login">Log In Lyft
            </a>
          </div>
          <div id='skip'>
            <Link id='skip-link' to={'/search'}>Skip to Search</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Open;
