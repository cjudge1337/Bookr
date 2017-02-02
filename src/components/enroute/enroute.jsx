import React from 'react';
import { Link, withRouter } from 'react-router';
import EnrouteMap from './enroute_map';
import TimeDisplay from './time_display';

class Enroute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="enroute-container">
        <h2 className="driver-name">Test Driver</h2>
        <EnrouteMap />
        <TimeDisplay />
        <button className="cancel-ride" value="Cancel Ride"></button>
      </div>
    );
  }

}

export default Enroute;
