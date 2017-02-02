import {bindAll} from 'lodash';
import React from 'react';
import Autocomplete from 'react-google-autocomplete';

class Search extends React.Component {
  constructor(props){
    super(props);
    bindAll(this, 'handleSelectDestination');

  }

  componentDidMount(){

  }



  // this.setState({current_geolocation: this.props.getCurrentGeolocation(this.state.current_address)});

  handleSelectDestination(place){
    this.props.updateDestinationAddress(place.formatted_address);
    this.props.getDestinationGeolocation(this.props.quotes.address.destination);
    // this.setState({destination_geolocation: });
  }

  // TODO add location bias based on user's location https://github.com/ErrorPro/react-google-autocomplete https://developers.google.com/places/web-service/autocomplete#location_biasing
  render() {
    return (
      <div>
        <Autocomplete
          style={{width: '90%'}}
          onPlaceSelected={ (place) => this.handleSelectDestination(place) }
          types={'address'}
        />
      </div>
    );
  }
}

export default Search;
