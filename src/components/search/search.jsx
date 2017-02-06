import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { bindAll } from 'lodash';
import { hashHistory } from 'react-router';
import { getUserGeo, geoToAddress } from '../../util/google_maps/location_api';

const UBER_PRODUCTS= ["uberX", "POOL", "uberXL", "BLACK", "SUV"];

class Search extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, 'orderUberRide', 'orderLyftRide',
    'createETA', 'getTime','handleSelectDestination', 'renderOriginAutocomplete',
    'renderDestinationAutocomplete', 'centsToDollars', 'renderResults',
    'getUberResults','getLyftResults', 'getUserLocation');
  }

  componentDidMount() {
    // TODO temporary fixed start point for testing until we can get user's geolocation with navigator.geolocation.getCurrentPosition()

    this.getUserLocation().then(address => {
      this.props.updateCurrentAddress(address);
    });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.quotes.address.current === ""){
      this.props.getCurrentGeolocation(newProps.quotes.address.current);
    } else {
      const newGeos = newProps.quotes.geolocations;
      const oldGeos = this.props.quotes.geolocations;

      if (newGeos.current !== "" && newGeos.destination !== "" &&
        (newGeos.current.lat !== oldGeos.current.lat ||
          newGeos.current.lng !== oldGeos.current.lng ||
          newGeos.destination.lat !== oldGeos.destination.lat ||
          newGeos.destination.lng !== oldGeos.destination.lng)) {
        this.props.clearStuff();
        this.props.getLyftQuotes(newGeos.current.lat, newGeos.current.lng,
          newGeos.destination.lat, newGeos.destination.lng);
        this.props.getUberQuotes(newGeos.current.lat, newGeos.current.lng,
          newGeos.destination.lat, newGeos.destination.lng);
        this.props.getLyftETAs(newGeos.current.lat, newGeos.current.lng);
        this.props.getUberETAs(newGeos.current.lat, newGeos.current.lng);
      }
    }
  }

  getUserLocation() {
    let coords;
    const that = this;

    return getUserGeo()
      .then(res => {
        coords = res.location;
        return geoToAddress(coords.lat, coords.lng)
        .then(res2 => {
          coords = res2;
          return coords.results[0].formatted_address;
        });
      });
  }

  handleSelectDestination(place) {
    this.props.updateDestinationAddress(place.formatted_address);
    this.props.getDestinationGeolocation(this.props.quotes.address.destination);
  }

  handleSelectOrigin(place) {
    this.props.updateCurrentAddress(place.formatted_address);
    this.props.getCurrentGeolocation(this.props.quotes.address.current);
  }

  renderOriginAutocomplete() {
    return <Autocomplete
      onPlaceSelected={ (place) => this.handleSelectOrigin(place) }
      placeholder={this.props.quotes.address.current ?
        this.props.quotes.address.current : 'Pickup Location'}
      types={'address'}
      id='pickup-input'/>;
  }

  renderDestinationAutocomplete() {
    return <Autocomplete
      onPlaceSelected={ (place) => this.handleSelectDestination(place) }
      placeholder={this.props.quotes.address.destination.length > 0 ?
        this.props.quotes.address.destination : "Enter a destination" }
      types={'address'}
      id='dropoff-input'/>;
  }

  orderUberRide(rideData) {
    if (this.props.session.uberCreds) {
      this.props.bookUberRide(rideData);
      hashHistory.push('/confirm');
    } else {
      alert("You must be logged in to Uber to book this ride.");
    }
  }

  orderLyftRide(rideData) {
    if(this.props.session.lyftCreds){
      this.props.bookLyftRide(rideData);
      hashHistory.push('/confirm');
    } else{
      alert("You must be logged in to Lyft to book this ride.");
    }
  }

  getUberResults() {
    const that = this;
    let count = 0;
    const uberLoggedIn = this.props.session.uberCreds;

    return this.props.quotes.prices.uber.map((productObj, idx) => {
      if (productObj.high_estimate > 0 &&
        UBER_PRODUCTS.includes(productObj.display_name)) {
          count += 1;
        return (
          <li onClick={() => this.orderUberRide(productObj.product_id)}
            key={productObj.display_name}
            className={"uber lineitem " + (uberLoggedIn ?
              "conditional-hover" : "lineitem-tooltip")}>
            <span className="ub-tool tooltip">
              Login Below With Uber to Book!
            </span>

            <div className="uber-important">
              <h3 className="key-data">{productObj.display_name}</h3>
              <h3 className="key-data">{productObj.estimate}</h3>
            </div>

            <div className="time-inner-div">
              <h5 className="time-data">
                {that.getTime(productObj.display_name)} min away
              </h5>
              <h5 className="time-data">
                ETA: {this.createETA(that.getTime(productObj.display_name)
                  + (productObj.duration / 60))}
              </h5>
            </div>
          </li>
        );
      }
    });
  }

  getLyftResults() {
    const that = this;
    const lyftLoggedIn = this.props.session.lyftCreds;

    return this.props.quotes.prices.lyft.map(productObj => {
      if (productObj.estimated_cost_cents_max > 0) {
        return (
          <li onClick={() => this.orderLyftRide(productObj.display_name)}
            key={productObj.display_name}
            className={"lyft lineitem " + (lyftLoggedIn ?
              "conditional-hover" : "lineitem-tooltip")}>
            <span className="ly-tool tooltip">
              Login Below With Lyft to Book!
            </span>

            <div className="uber-important">
              <h3 className="key-data">{productObj.display_name}</h3>
              <h3 className="key-data">
                {that.centsToDollars(productObj.estimated_cost_cents_min,
                productObj.estimated_cost_cents_max)}
              </h3>
            </div>
            
            <div className="time-inner-div">
              <h5 className="time-data">
                {that.getTime(productObj.display_name)} min away
              </h5>
              <h5 className="time-data">
                ETA: {that.createETA(that.getTime(productObj.display_name)
                  + Math.ceil(productObj.estimated_duration_seconds / 60))}
              </h5>
            </div>
          </li>
        );
      }
    });
  }

  createETA(rideLength) {
    const now = new Date();
    let hrs = now.getHours();
    let mins = now.getMinutes();
    let indicator;
    mins = (mins + rideLength) % 60;

    if (mins < 10){
      mins = `0${mins}`;
    }

    if (now.getMinutes() + rideLength > 59) {
      hrs = (hrs + 1) % 24;
    }

    if (hrs > 12) {
      hrs -= 12;
      indicator = "PM";
    } else if (hrs === 12) {
      indicator = "PM";
    } else if (hrs > 0) {
      indicator = "AM";
    } else {
      hrs = 12;
      indicator = "AM";
    }

    return `${hrs}:${mins} ${indicator}`;
  }

  getTime(displayName) {
    let time;

    this.props.quotes.times.uber.forEach(timeObj => {
      if (timeObj.display_name === displayName) {
        time = timeObj.estimate / 60;
      }
    });

    this.props.quotes.times.lyft.forEach(timeObj => {
      if (timeObj.display_name === displayName) {
        time = timeObj.eta_seconds / 60;
      }
    });

    return time;
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

  renderResults() {
    if (this.props.quotes.prices.uber && this.props.quotes.prices.lyft) {
      return (
        <div className="results-container">
          <section className="results-list">
            <div className="results-header">
              <img id="uber-logo" src="https://res.cloudinary.com/dlhshbg79/image/upload/v1486390181/uber_rides_api_icon_2x_70px_gdxdim.png"/>
              <h1 className="company-titles">UBER</h1>
            </div>

            {this.getUberResults()}
          </section>

          <section className="results-list">
            <div className="results-header">
              <img id="lyft-logo" src="https://res.cloudinary.com/dlhshbg79/image/upload/v1486390221/lyft_header_oxhofm.png"/>
            </div>

            {this.getLyftResults()}
          </section>
        </div>
      );
    } else if (this.props.quotes.errors.uber && this.props.quotes.errors.lyft) {
      return (
        <div className='errors'>
          <h6>{this.props.quotes.errors.uber}</h6>
          <h6>{this.props.quotes.errors.lyft}</h6>
        </div>
      );
    } else if (this.props.quotes.geolocations.current !== "" &&
        this.props.quotes.geolocations.destination !== "") {
      return <div id='loading' className="requesting animated infinite pulse">
        Searching...</div>;
    } else {
      return <div className="results-container"></div>;
    }
  }

  renderLogins() {
    // TODO: add check to see if access token is expired

    if (this.props.session.uberCreds && this.props.session.lyftCreds) {
      return (
        <div className='search-logins'>
        </div>
      );
    } else if (this.props.session.uberCreds) {
      return (
        <div className='search-logins'>
          <a id='lone' href={'http://localhost:3000/lyft'}
            className="lyft-login">
            Log In Lyft
          </a>
        </div>
      );
    } else if (this.props.session.lyftCreds) {
      return (
        <div className='search-logins'>
          <a id='lone' href={'http://localhost:3000/uber'} c
            lassName="uber-login">
            Log In Uber
          </a>
        </div>
      );
    } else {
      return (
        <div className='search-logins'>
          <a href={'http://localhost:3000/uber'} className="uber-login">
            Log In Uber
          </a>
          <a href={'http://localhost:3000/lyft'} className="lyft-login">
            Log In Lyft
          </a>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="search-page">
        <div className="search-container">
          {this.renderOriginAutocomplete()}
          {this.renderDestinationAutocomplete()}
        </div>

        {this.renderResults()}
        {this.renderLogins()}
      </div>
    );
  }
}

export default Search;
