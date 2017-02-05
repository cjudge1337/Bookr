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

    this.state = { timer: 0 };

    this.currentRide = this.currentRide.bind(this);
    this.acceptedRide = this.acceptedRide.bind(this);
    this.arrivedRide = this.arrivedRide.bind(this);
    this.cancelRide = this.cancelRide.bind(this);
    this.driverCancel = this.driverCancel.bind(this);
  }

  updateStatus() {
    this.props.checkSandboxStatus();
  }

  componentDidMount() {
    sandboxRequestRide()
    .then(res => this.props.getUberUpdate(res));

    const newTimer = setInterval(this.updateStatus.bind(this), 5000);
    this.setState({ timer: newTimer });
  }

  currentRide(e) {
    e.preventDefault();
    sandboxCurrentRide().then(res => console.log(res));
  }

  acceptedRide(e) {
    e.preventDefault();
    sandboxAcceptedRide()
    .then(res => this.props.getUberUpdate(res));
  }

  arrivedRide(e) {
    e.preventDefault();
    sandboxArrivedRide()
    .then(res => this.props.getUberUpdate(res));
  }

  cancelRide(e) {
    e.preventDefault();
    sandboxDeleteRide();
    this.props.deleteUberRide();
  }

  driverCancel(e) {
    e.preventDefault();
    sandboxDriverCancel();
    this.props.deleteUberRide();
  }

  render() {
    if (this.props.enroute.uber) {
      return (
        <div className="enroute-container">
          <h2 className="status">{this.props.enroute.uber.info.status}</h2>
          <div className="driver-info">
            <h2 className="driver-name">{this.props.enroute.uber.info.driver.name}</h2>
            <img src={this.props.enroute.uber.info.driver.picture_url} className="driver-pic"/>
            <h2 className="driver-rating">Rating: {this.props.enroute.uber.info.driver.rating}</h2>
            <h2 className="eta">ETA: {this.props.enroute.uber.info.pickup.eta} Minutes</h2>
          </div>
          <EnrouteMap pickup={this.props.enroute.uber.info.pickup}
                      destination={this.props.enroute.uber.info.destination}
                      location={this.props.enroute.uber.info.location} />

          <button className="test-button" onClick={this.currentRide}>Current Ride</button>
          <button className="test-button" onClick={this.acceptedRide}>Accepted Ride</button>
          <button className="test-button" onClick={this.arrivedRide}>Arrived Ride</button>
          <button className="test-button" onClick={this.cancelRide}>Cancel Ride</button>
          <button className="test-button" onClick={this.driverCancel}>Driver Cancel Ride</button>
        </div>
      );
    } else {
      //TODO put loading component
      return <div>Requesting</div>;
    }

  }

}

export default Enroute;
