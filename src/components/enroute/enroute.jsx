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
    let newTimer = setInterval(() => {
      if (this.props.enroute.lyft.info.status === "") {
        this.props.getUberRideInfo(this.props.session.uberCreds.access_token);
      } else if (this.props.enroute.uber.info.status === "") {
        this.props.checkSandboxStatus(this.props.enroute.lyft.info.ride_id);
      }
    }, 5000);
    this.setState({ timer: newTimer });
  }


  // componentWillReceiveProps(newProps) {
  //   if (newProps.enroute.uber.info.status === "completed") {
  //     hashHistory.push('/search');
  //   }
  // }

  cancelRide(e) {
    e.preventDefault();
    if (this.props.enroute.lyft.info.status === "") {
      this.props.deleteUberRide(this.props.session.uberCreds.access_token);
    } else if (this.props.enroute.uber.info.status === "") {
      this.props.deleteSandboxRide();
    }
    clearInterval(this.state.timer);
    hashHistory.push('/search');
  }

  renderService(service) {
    if (service === "uber") {
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
    } else if (service === "lyft") {
      let pickup = {
        latitude: this.props.enroute.lyft.info.origin.lat,
        longitude: this.props.enroute.lyft.info.origin.lng
      };
      let destination = {
        latitude: this.props.enroute.lyft.info.destination.lat,
        longitude: this.props.enroute.lyft.info.destination.lng
      };
      let location = {
        latitude: this.props.enroute.lyft.info.location.lat,
        longitude: this.props.enroute.lyft.info.location.lng
      };

      return (
        <div className="enroute-container">
          <div className="driver-bar">
            <div className="driver-container">
              <div className="driver-info">
                <img src={this.props.enroute.lyft.info.driver.image_url}
                  className="driver-pic"/>
                <h2 className="driver-name">
                  {this.props.enroute.lyft.info.driver.first_name}
                </h2>
                <h2 className="driver-rating">
                  {this.props.enroute.lyft.info.driver.rating}
                </h2>
              </div>

              <div className="car-info">
                <img src={this.props.enroute.lyft.info.vehicle.image_url}
                  className="car-pic"/>
                <h2 className="car-make">
                  {this.props.enroute.lyft.info.vehicle.make + " "}
                  {this.props.enroute.lyft.info.vehicle.model}
                </h2>
              </div>
            </div>

            <div className="ride-info">
              <h2 className="status">
                Status: {this.props.enroute.lyft.info.status.toUpperCase()}
              </h2>
              <h2 className="eta">
                ETA: { Math.round(this.props.enroute.lyft.info.origin.eta_seconds / 60) } Min
              </h2>
            </div>
          </div>

          <EnrouteMap pickup={pickup}
            destination={destination}
            location={location} />

          <button className="cancel-button" onClick={this.cancelRide}>
            Cancel Ride
          </button>
        </div>
      );
    }
  }

  render() {
    if (this.props.enroute.uber.info.status === "processing" ||
        this.props.enroute.lyft.info.status === "pending") {
      return <div id='loading' className="requesting animated infinite pulse">Requesting...</div>;
    } else {
      if (this.props.enroute.uber.info.status === "") {
        return (
          <div className="enroute-container">
            {this.renderService("lyft")}
          </div>
        );
      } else if (this.props.enroute.lyft.info.status === "") {
        return (
          <div className="enroute-container">
            {this.renderService("uber")}
          </div>
        );
      }
    }
  }
}

export default Enroute;
