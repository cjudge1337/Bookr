import {bindAll} from 'lodash';
import React from 'react';
import Autocomplete from 'react-google-autocomplete';

class Search extends React.Component {
  constructor(props){
    super(props);
    bindAll(this, 'handleSelectDestination','renderAutocomplete');

  }

  componentDidMount(){
    // TODO temporary fixed start point for testing until we can get user's geolocation with navigator.geolocation.getCurrentPosition()
    this.props.updateCurrentAddress("160 Spear St, San Francisco, CA 94105, USA");
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


  // this.props.getCurrentGeolocation(this.state.current_address);

  handleSelectDestination(place){
    this.props.updateDestinationAddress(place.formatted_address);
    this.props.getDestinationGeolocation(this.props.quotes.address.destination);
    // this.setState({destination_geolocation: });
  }

  renderAutocomplete(){
    return <Autocomplete
      style={{width: '90%'}}
      onPlaceSelected={ (place) => this.handleSelectDestination(place) }
      types={'address'}/>;
  }

  // TODO add location bias based on user's location https://github.com/ErrorPro/react-google-autocomplete https://developers.google.com/places/web-service/autocomplete#location_biasing
  render() {
    return (
      <div>
        {this.renderAutocomplete()}
      </div>
    );
  }
}

export default Search;
