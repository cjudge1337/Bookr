import React from 'react';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const geos = this.props.quotes.geolocations;
    if(this.props.quotes.booked_ride.uber){
      debugger
      this.props.getUberQuote(this.props.session.uberCreds.access_token,
        this.props.quotes.booked_ride.uber,
        geos.current.lat, geos.current.lng,
        geos.destination.lat, geos.destination.lng);
    }else if(this.props.quotes.booked_ride.lyft){
      this.props.getUberQuote(this.props.quotes.booked_ride.lyft);
    }
  }

  render() {
    return <h1>yo</h1>;
  }
}

export default Confirm;
