import React from 'react';
import EnrouteMap from './enroute_map';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';
import { sandboxRequestRide, sandboxRideDetails, sandboxAcceptedRide,
          sandboxArrivedRide, sandboxCancelRide } from '../../util/lyft/sandbox';

class Enroute extends React.Component {
  constructor(props) {
    super(props);

    this.state = { timer: 0 };
    this.cancelRide = this.cancelRide.bind(this);
  }

  componentDidMount() {
    debugger
    const newTimer = setInterval(() => {
      if (this.props.enroute.lyft.info.status === "") {
        this.props.getUberRideInfo(this.props.session.uberCreds.access_token);
      } else if (this.props.enroute.uber.info.status === "") {
        this.props.checkSandboxStatus(this.props.enroute.lyft.info.ride_id);
      }
    }, 5000);
  }


  // componentWillReceiveProps(newProps) {
  //   if (newProps.enroute.uber.info.status === "completed") {
  //     hashHistory.push('/search');
  //   }
  // }

  cancelRide(e) {
    e.preventDefault();
    // this.props.deleteUberRide()
    hashHistory.push('/search');
  }

  render() {
    debugger
    if (this.props.enroute.uber.info.status === "processing" ||
        this.props.enroute.lyft.info.status === "pending") {
      return <div id='loading' className="requesting animated infinite pulse">Requesting...</div>;
    } else {
      return (
        <div className="enroute-container">
          <div className="driver-bar">
            <div className="driver-container">
              <div className="driver-info">
                <img src={this.props.enroute.uber.info.driver.picture_url}
                  className="driver-pic"/>
                <h2 className="driver-name">
                  {this.props.enroute.uber.info.driver.name}
                </h2>
                <h2 className="driver-rating">
                  {this.props.enroute.uber.info.driver.rating}
                </h2>
              </div>

              <div className="car-info">
                <img src={this.props.enroute.uber.info.vehicle.picture_url}
                  className="car-pic"/>
                <h2 className="car-make">
                  {this.props.enroute.uber.info.vehicle.make + " "}
                  {this.props.enroute.uber.info.vehicle.model}
                </h2>
              </div>
            </div>

            <div className="ride-info">
              <h2 className="status">
                Status: {this.props.enroute.uber.info.status.toUpperCase()}
              </h2>
              <h2 className="eta">
                ETA: {this.props.enroute.uber.info.pickup.eta} Min
              </h2>
            </div>
          </div>

          <EnrouteMap pickup={this.props.enroute.uber.info.pickup}
            destination={this.props.enroute.uber.info.destination}
            location={this.props.enroute.uber.info.location} />

          <button className="cancel-button" onClick={this.cancelRide}>
            Cancel Ride
          </button>
        </div>
      );
    }
  }
}

export default Enroute;
