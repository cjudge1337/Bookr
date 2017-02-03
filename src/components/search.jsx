import {bindAll} from 'lodash';
import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { getUserGeo, geoToAddress } from '../util/google_maps/location_api';

class Search extends React.Component {
  constructor(props){
    super(props);

    bindAll(this, 'getUberTime','handleSelectDestination','renderOriginAutocomplete', 'renderDestinationAutocomplete', 'centsToDollars', 'renderResults', 'getUberResults','getLyftResults', 'getUserLocation');


  }

  componentDidMount(){
    // TODO temporary fixed start point for testing until we can get user's geolocation with navigator.geolocation.getCurrentPosition()

    this.getUserLocation().then(address => {
      this.props.updateCurrentAddress(address);
    });

  }

  componentWillReceiveProps(newProps){
    if(this.props.quotes.address.current === ""){
      this.props.getCurrentGeolocation(newProps.quotes.address.current);
    } else{
      const newGeos = newProps.quotes.geolocations;
      const oldGeos = this.props.quotes.geolocations;
      if(newGeos.current !== "" && newGeos.destination !== ""
      &&
      (newGeos.current.lat !== oldGeos.current.lat
        ||
        newGeos.current.lng !== oldGeos.current.lng
        ||
        newGeos.destination.lat !== oldGeos.destination.lat
        ||
        newGeos.destination.lng !== oldGeos.destination.lng)){
          this.props.getLyftQuotes(newGeos.current.lat, newGeos.current.lng, newGeos.destination.lat, newGeos.destination.lng);
          this.props.getUberQuotes(newGeos.current.lat, newGeos.current.lng, newGeos.destination.lat, newGeos.destination.lng);
          this.props.getLyftETAs(newGeos.current.lat, newGeos.current.lng);
          this.props.getUberETAs(newGeos.current.lat, newGeos.current.lng);
        }
    }
  }

  getUserLocation() {
    let coords;
    const that = this;
    return getUserGeo().then(res => {
      coords = res.location;
      return geoToAddress(coords.lat, coords.lng).then(res2 => {
        coords = res2;
        return coords.results[0].formatted_address;
      });
    });
  }



  // this.props.getCurrentGeolocation(this.state.current_address);

  handleSelectDestination(place){
    this.props.updateDestinationAddress(place.formatted_address);
    this.props.getDestinationGeolocation(this.props.quotes.address.destination);
    // this.setState({destination_geolocation: });
  }



  handleSelectOrigin(place){
    this.props.updateCurrentAddress(place.formatted_address);
    this.props.getCurrentGeolocation(this.props.quotes.address.current);
  }

  renderDestinationAutocomplete(){
    return <Autocomplete
      onPlaceSelected={ (place) => this.handleSelectDestination(place) }
      types={'address'}/>;
  }

  renderOriginAutocomplete(){
    return <Autocomplete
      // style={{width: '90%'}}
      onPlaceSelected={ (place) => this.handleSelectOrigin(place) }
      placeholder={this.props.quotes.address.current}
      types={'address'}/>;
  }

  getUberResults(){
      return this.props.quotes.prices.uber.map(productObj => {

        if(productObj.high_estimate > 0  && productObj.display_name !== "ASSIST" && productObj.display_name !== "WAV"){
          return <li key={productObj.display_name} className="uber-lineitem">Uber {productObj.display_name} costs {productObj.estimate} and can pick you up in {this.getUberTime(productObj.display_name)} minutes</li>;
        }
      });
  }

  getUberTime(displayName){
    this.props.quotes.times.uber.forEach(timeObj => {
      if(timeObj.display_name === displayName){
        console.log(timeObj.estimate / 60);
        return timeObj.estimate / 60;
      }
    });
  }

  centsToDollars(min, max){
    return `$${min / 100}-${max/100}`;
  }

  getLyftResults(){
      return this.props.quotes.prices.lyft.map(productObj => {
        if(productObj.estimated_cost_cents_max > 0){
          return <li key={productObj.display_name} className="lyft-lineitem">{productObj.display_name} costs {this.centsToDollars(productObj.estimated_cost_cents_min,
            productObj.estimated_cost_cents_max)}</li>;
        }
      });
  }

  renderResults(){
    if(this.props.quotes.prices.uber && this.props.quotes.prices.lyft){
      return (<div className="quotes-container">
        <section className="ride-info">
          <h3>{this.props.quotes.prices.uber[0].distance} Mile Ride</h3>
          <h3>Should take {this.props.quotes.prices.uber[0].duration / 60} Minutes</h3>
        </section>
        <section className="results-container">
          <section className="uber-results">
            {this.getUberResults()}
          </section>
          <section className="lyft-results">
            {this.getLyftResults()}
          </section>
        </section>
      </div>);
    }else{
      return <div></div>;
    }
  }

  // TODO add location bias based on user's location https://github.com/ErrorPro/react-google-autocomplete https://developers.google.com/places/web-service/autocomplete#location_biasing
  render() {
    return (
      <div>
        <div className="search-container">
          {this.renderOriginAutocomplete()}
          {this.renderDestinationAutocomplete()}
        </div>
        {this.renderResults()}
      </div>
    );
  }
}

export default Search;
