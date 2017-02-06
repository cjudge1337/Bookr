import React from 'react';
import { Link, withRouter } from 'react-router';
import EnrouteMap from './enroute_map';
import { hashHistory } from 'react-router';
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
    this.cancelRide = this.cancelRide.bind(this);
  }

  updateStatus() {
    this.props.checkSandboxStatus();
  }

  componentDidMount() {
    const newTimer = setInterval(this.updateStatus.bind(this), 5000);
    this.setState({ timer: newTimer });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.enroute.uber.info.status === "completed") {
      hashHistory.push('/search');
    }
  }

  cancelRide(e) {
    e.preventDefault();
    sandboxDeleteRide();
    hashHistory.push('/search');
  }

  render() {
    if (this.props.enroute.uber.info.status === "processing") {
      return <div id='loading' className="requesting animated infinite pulse">Requesting...</div>;
    } else {
      return (
          <div className="enroute-container">
            <div className="driver-bar">
              <div className="driver-container">
                <div className="driver-info">
                  <img src={this.props.enroute.uber.info.driver.picture_url} className="driver-pic"/>
                  <h2 className="driver-name">{this.props.enroute.uber.info.driver.name}</h2>
                  <h2 className="driver-rating">{this.props.enroute.uber.info.driver.rating}</h2>
                </div>
                <div className="car-info">
                  <img src={this.props.enroute.uber.info.vehicle.picture_url} className="car-pic"/>
                  <h2 className="car-make">{this.props.enroute.uber.info.vehicle.make + " "}
                                              {this.props.enroute.uber.info.vehicle.model}</h2>
                </div>
              </div>
              <div className="ride-info">
                <h2 className="status">Status: {this.props.enroute.uber.info.status.toUpperCase()}</h2>
                <h2 className="eta">ETA: {this.props.enroute.uber.info.pickup.eta} Min</h2>
              </div>
            </div>
            <EnrouteMap pickup={this.props.enroute.uber.info.pickup}
                        destination={this.props.enroute.uber.info.destination}
                        location={this.props.enroute.uber.info.location} />

            <button className="cancel-button" onClick={this.cancelRide}>Cancel Ride</button>
          </div>
      );
    }
  }

}

export default Enroute;
