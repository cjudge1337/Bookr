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
    const geos = this.props.geos;
    let pickuplat = geos.current.lat;
    let pickuplng = geos.current.lng;
    let destlat = geos.destination.lat;
    let destlng = geos.destination.lng;

    if (this.props.booked_ride.uber) {
      this.props.getUberQuote(this.props.session.uberCreds.access_token,
        this.props.booked_ride.uber, pickuplat, pickuplng,
        destlat, destlng);
    }
  }

  componentDidUpdate() {
    const geos = this.props.geos;
    let pickuplat = geos.current.lat;
    let pickuplng = geos.current.lng;
    let destlat = geos.destination.lat;
    let destlng = geos.destination.lng;

    let pickupGeo = {
      lat: pickuplat,
      lng: pickuplng
    };

    let destGeo = {
      lat: destlat,
      lng: destlng
    };

    let centerGeo = {
      lat: (pickuplat + destlat) / 2,
      lng: (pickuplng + destlng) / 2
    };

    this.map = new google.maps.Map(this.refs.confmap, {
      center: centerGeo,
      zoom: 13,
      zoomControl: true
    });

    const pickupMarker = new google.maps.Marker({
      position: pickupGeo,
      map: this.map,
      title: 'Pickup location'
    });

    const destMarker = new google.maps.Marker({
      position: destGeo,
      map: this.map,
      title: 'Destination location'
    });
  }

  getUberServiceName() {
    const correctCode = this.props.booked_ride.uber;
    let name;

    this.props.quotes.prices.uber.forEach(priceObj => {
      if (correctCode === priceObj.product_id) {
        name = priceObj.display_name;
      }
    });
    return name;
  }

  getLyftObj() {
    const correctName = this.props.booked_ride.lyft;
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

  renderConfirmation() {
    if (this.props.confirm.trip) {
      return (
        <div className='confirm'>
          <div className='confirm-top'>
            <img id='uber-confirm-logo' src='../../../app/images/uber_rides_api_icon_2x_70px.png'/>
            <h2 id='service-title'>{this.getUberServiceName()}</h2>
            <h2>{this.props.confirm.trip.distance_estimate} Miles</h2>
            <h2>{this.props.confirm.trip.duration_estimate / 60} Minutes</h2>
          </div>

          <div className='confirm-bottom'>
            <h2>{this.props.addresses.current}</h2>
            <p id='to'>to...</p>
            <h2>{this.props.addresses.destination}</h2>
          </div>

          <a className='book-ride' onClick={() => this.orderUber()}>
            Confirm
          </a>

          <div className='confirm-map'>
            <div ref="confmap" className="conf-map"></div>
          </div>

          <a className='back-to-search' onClick={() => this.backToSearch()}>
            Back to Rides
          </a>
        </div>
      );
    } else if (this.props.booked_ride.lyft) {
      const lyftObj = this.getLyftObj();

      return (
        <div className='confirm'>
          <div className='confirm-top'>
            <img id='lyft-confirm-logo' src='../../../app/images/lyft_header.png'/>
            <h2 id='service-title'>{lyftObj.display_name}</h2>
            <h2>{lyftObj.estimated_distance_miles} Miles</h2>
            <h2>{Math.ceil(lyftObj.estimated_duration_seconds / 60)} Minutes</h2>
          </div>

          <div className='confirm-bottom'>
            <h2>{this.props.addresses.current}</h2>
            <p id='to'>to...</p>
            <h2>{this.props.addresses.destination}</h2>
          </div>

          <a className='book-ride' onClick={() => this.orderLyft()}>
            Confirm
          </a>

          <div className='confirm-map'>
            <div ref="confmap" className="conf-map"></div>
          </div>

          <a className='back-to-search' onClick={() => this.backToSearch()}>
            Back to Rides
          </a>
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
