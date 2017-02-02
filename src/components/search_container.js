import {connect} from 'react-redux';
import { getDestinationGeolocation, getCurrentGeolocation, getLyftQuotes, getUberQuotes, getLyftETAs, getUberETAs } from '../actions/quote_actions.js';
import Search from './search';

const mapStateToProps = store => ({
  quotes: store.quotes,
});

const mapDispatchToProps = (dispatch, {location}) => (
  {
    getLyftQuotes: (startLat, startLong, endLat, endLong) => dispatch(getLyftQuotes(startLat, startLong, endLat, endLong)),
    getUberQuotes: (startLat, startLong, endLat, endLong) => dispatch(getUberQuotes(startLat, startLong, endLat, endLong)),
    getLyftETAs: (latitude, longitude) => dispatch(getLyftETAs(latitude, longitude)),
    getUberETAs: (latitude, longitude) => dispatch(getUberETAs(latitude, longitude)),
    getDestinationGeolocation: (address) => dispatch(getDestinationGeolocation(address)),
    getCurrentGeolocation: (address) => dispatch(getCurrentGeolocation(address)),

  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
