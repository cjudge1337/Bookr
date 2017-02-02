import {bindAll} from 'lodash';
import React from 'react';
import Autocomplete from 'react-google-autocomplete';

class Search extends React.Component {
  constructor(props){
    super(props);
    bindAll(this, 'handleSubmit', 'handleDestinationChange');

    this.state = {current_address: "", destination_address: "", current_geolocation: "", destination_geolocation: ""};
  }

  componentDidMount(){

  }




  handleSubmit(event){
    this.setState({current_geolocation: this.props.getCurrentGeolocation(this.state.current_address)});
    this.setState({destination_geolocation: this.props.getDestinationGeolocation(this.state.destination_address)});
  }

  handleDestinationChange(event){
    this.setState({destination_address: event.target.value});
  }

  // TODO add location bias based on user's location https://github.com/ErrorPro/react-google-autocomplete https://developers.google.com/places/web-service/autocomplete#location_biasing
  render() {
    return (
      <div>
        <Autocomplete
          style={{width: '90%'}}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
          types={'address'}
        />
      </div>
    );
  }
}

export default Search;
