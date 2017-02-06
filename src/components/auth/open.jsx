import React from 'react';
import { UBER_CLIENT_ID, LYFT_CLIENT_ID } from '../../../config.js';

class Open extends React.Component {
  render() {
    return (
      <div className="open">
        <div id='title'>
          <h1>Bookr</h1>
        </div>

        <div id='login'>
          <a href={'http://localhost:3000/uber'} id="uber-login">Log In Uber</a>
          <a href={'http://localhost:3000/lyft'} id="lyft-login">Log In Lyft</a>
        </div>
      </div>
    );
  }
}

export default Open;
