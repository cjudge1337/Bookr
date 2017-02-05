import React from 'react';
import { Link, withRouter } from 'react-router';
import EnrouteMap from './enroute_map';
import TimeDisplay from './time_display';
import { sandboxRequestRide,
         sandboxCurrentRide,
         sandboxAcceptedRide,
         sandboxArrivedRide,
         sandboxDeleteRide,
         sandboxDriverCancel,
         getFareId } from '../../util/uber/sandbox';

class Enroute extends React.Component {
  constructor(props) {
    super(props);

    this.currentRide = this.currentRide.bind(this);
    this.acceptedRide = this.acceptedRide.bind(this);
    this.arrivedRide = this.arrivedRide.bind(this);
    this.cancelRide = this.cancelRide.bind(this);
    this.driverCancel = this.driverCancel.bind(this);
  }

  componentDidMount() {
    // debugger
    let fareId = getFareId();
    sandboxRequestRide(fareId)
    .then(res => this.props.getUberUpdate(res));
  }

  currentRide() {
    sandboxCurrentRide().then(res => console.log(res));
  }

  acceptedRide() {
    sandboxAcceptedRide()
    .then(res => this.props.getUberUpdate(res));
  }

  arrivedRide() {
    sandboxArrivedRide()
    .then(res => this.props.getUberUpdate(res));
  }

  cancelRide() {
    sandboxDeleteRide();
    this.props.deleteUberRide();
  }

  driverCancel() {
    sandboxDriverCancel();
    this.props.deleteUberRide();
  }

  render() {
    return (
      <div className="enroute-container">
        <h2 className="driver-name">Test Driver</h2>
        <button className="cancel-ride" onClick={this.currentRide}>Current Ride</button>
        <button className="cancel-ride" onClick={this.acceptedRide}>Accepted Ride</button>
        <button className="cancel-ride" onClick={this.arrivedRide}>Arrived Ride</button>
        <button className="cancel-ride" onClick={this.cancelRide}>Cancel Ride</button>
        <button className="cancel-ride" onClick={this.driverCancel}>Driver Cancel Ride</button>
        <EnrouteMap />
        <TimeDisplay />
      </div>
    );
  }

}

export default Enroute;
