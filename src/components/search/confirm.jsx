import React from 'react';
import Loading from '../loading';
import { bindAll } from 'lodash';
import { hashHistory } from 'react-router';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, 'getUberServiceName', 'orderUber', 'renderConfirmation');
  }

  componentDidMount(){
    const geos = this.props.quotes.geolocations;
    if(this.props.quotes.booked_ride.uber){
      this.props.getUberQuote(this.props.session.uberCreds.access_token,
        this.props.quotes.booked_ride.uber,
        geos.current.lat, geos.current.lng,
        geos.destination.lat, geos.destination.lng);
    }
  }

  getUberServiceName(){
    this.props.quotes.prices.uber.forEach(priceObj => {
      if(this.props.quotes.booked_ride.uber === priceObj.product_id){
        return priceObj.product_id;
      }
    });
  }

  orderUber(){
    console.log('Uber ordered!');
    hashHistory.push('/enroute');
    // TODO correct route?
  }

  renderConfirmation(){
    if(this.props.confirm.trip){
      return (<div className="uber-confirm">
        <h2 className="uber-confirm-element">Uber {this.getUberServiceName()}</h2>

        <h2 className="uber-confirm-element">A {this.props.confirm.trip.distance_estimate} Mile Trip</h2>
        <h2 className="uber-confirm-element">From: {this.props.quotes.address.current}</h2>
        <h2 className="uber-confirm-element">To: {this.props.quotes.address.destination}</h2>
        <h2 className="uber-confirm-element">Should Cost: {this.props.confirm.fare.display}</h2>
        <h2 className="uber-confirm-element"> And Take: {this.props.confirm.trip.duration_estimate / 60} minutes </h2>
        <div className="options">
          <h2 className="uber-confirm-element buy-it" onClick={() => this.orderUber()}>Confirm Purchase</h2>
          <h2 className="uber-confirm-element buy-it" onClick={() => hashHistory.push('/search')}>Back to Rides</h2>
        </div>
      </div>);
    }else{
      return <Loading/>;
    }
  }

  render(){
    return (<div>
      {this.renderConfirmation()}
    </div>);
  }
}

export default Confirm;
