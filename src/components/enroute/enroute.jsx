import React from 'react';
import { Link, withRouter } from 'react-router';
import EnrouteMap from './enroute_map';
import TimeDisplay from './time_display';
import { sandboxRequestRide } from '../../util/uber/sandbox';

class Enroute extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    sandboxRequestRide()
    .then(res => this.props.getUberUpdate(res));
  }

  render() {
    return (
      <div className="enroute-container">
        <h2 className="driver-name">Test Driver</h2>
        <EnrouteMap />
        <TimeDisplay />
        <button className="cancel-ride">Current Ride</button>
        <button className="cancel-ride">Accepted Ride</button>
        <button className="cancel-ride">Arrived Ride</button>
        <button className="cancel-ride">Cancel Ride</button>
        <button className="cancel-ride">Driver Cancel Ride</button>
      </div>
    );
  }

}

export default Enroute;
