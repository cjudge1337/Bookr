import React from 'react';
import { bindAll } from 'lodash';
import { hashHistory } from 'react-router';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, 'centsToDollars', 'getLyftObj', 'getUberServiceName',
    'orderUber', 'orderLyft', 'renderConfirmation', 'backToSearch');
  }

  componentDidMount() {
    const geos = this.props.quotes.geolocations;

    if (this.props.quotes.booked_ride.uber) {
      this.props.getUberQuote(this.props.session.uberCreds.access_token,
        this.props.quotes.booked_ride.uber, geos.current.lat, geos.current.lng,
        geos.destination.lat, geos.destination.lng);
    }
  }

  getUberServiceName() {
    const correctCode = this.props.quotes.booked_ride.uber;
    let name;

    this.props.quotes.prices.uber.forEach(priceObj => {
      if (correctCode === priceObj.product_id) {
        name = priceObj.display_name;
      }
    });
    return name;
  }

  getLyftObj() {
    const correctName = this.props.quotes.booked_ride.lyft;
    let obj;
    this.props.quotes.prices.lyft.forEach(priceObj => {
      if (correctName === priceObj.display_name) {
        obj = priceObj;
      }
    });
    return obj;
  }

  orderUber() {
    this.props.createSandboxRide()
      .then(() => hashHistory.push('/enroute'));
  }

  orderLyft() {
    console.log('Lyft ordered!');
    hashHistory.push('/enroute');
  }

  backToSearch() {
    this.props.clearConfirmState();
    hashHistory.push('/search');
  }

  centsToDollars(min, max) {
    let newMin = min;
    let newMax = max;

    if (newMin % 100 === 0) {
      newMin = `$${newMin / 100}.00`;
    } else if (newMin % 10 === 0) {
      newMin = `$${newMin / 100}0`;
    } else {
      newMin = `$${newMin / 100}`;
    }

    if (newMax % 100 === 0) {
      newMax = `${newMax / 100}.00`;
    } else if (newMax % 10 === 0) {
      newMax = `${newMax / 100}0`;
    } else {
      newMax = `${newMax / 100}`;
    }

    if (min === max) {
      return `${newMin}`;
    }

    return `${newMin}-${newMax}`;
  }

  renderConfirmation(){
    if (this.props.confirm.trip) {
      return (
        <div className='confirm'>
          <div className='back-to-search' onClick={() =>
            this.backToSearch() }>Back to Rides
          </div>

          <div className='confirm-body'>
            <img id='uber-confirm-logo' src='../../../app/images/uber_rides_api_icon_2x_78px.png'/>
            <h2>{this.getUberServiceName()}</h2>
            <h2>A {this.props.confirm.trip.distance_estimate} Mile Trip</h2>
            <h2>From: {this.props.quotes.address.current}</h2>
            <h2>To: {this.props.quotes.address.destination}</h2>
            <h2>Should Cost: {this.props.confirm.fare.display}</h2>
            <h2> And Take: {this.props.confirm.trip.duration_estimate / 60} minutes </h2>
          </div>

          <div className='book-ride' onClick={() =>
            this.orderUber()}>Confirm Purchase
          </div>
        </div>
      );
    } else if (this.props.quotes.booked_ride.lyft) {
      const lyftObj = this.getLyftObj();

      return (
        <div className='confirm'>
          <div className='back-to-search' onClick={() =>
            this.backToSearch() }>Back to Rides
          </div>

          <div className='confirm-body'>
            <img id='lyft-confirm-logo' src='../../../app/images/lyft_standard_silver.png'/>
            <h2>{lyftObj.display_name}</h2>
            <h2>A {lyftObj.estimated_distance_miles} Mile Trip</h2>
            <h2>From: {this.props.quotes.address.current}</h2>
            <h2>To: {this.props.quotes.address.destination}</h2>
            <h2>Should Cost: {this.centsToDollars(lyftObj.estimated_cost_cents_min, lyftObj.estimated_cost_cents_max)}</h2>
            <h2> And Take: {Math.ceil(lyftObj.estimated_duration_seconds / 60)} minutes </h2>
          </div>

          <div className='book-ride' onClick={() =>
            this.orderLyft()}>Confirm
          </div>
        </div>
      );
    } else {
      return (
        <div id='loading' className="requesting animated infinite pulse">
          Just a moment...
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderConfirmation()}
      </div>
    );
  }
}

export default Confirm;
