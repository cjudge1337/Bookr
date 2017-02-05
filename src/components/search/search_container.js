import { connect } from 'react-redux';
import Search from './search';
import { clearPricesErrors, updateCurrentAddress, updateDestinationAddress,
  getDestinationGeolocation, getCurrentGeolocation, getLyftQuotes, getUberQuotes,
  getLyftETAs, getUberETAs } from '../../actions/quote_actions.js';

const mapStateToProps = store => ({
  quotes: store.quotes,
});

const mapDispatchToProps = (dispatch, {location}) => (
  {
    getLyftQuotes: (startLat, startLong, endLat, endLong) =>
      dispatch(getLyftQuotes(startLat, startLong, endLat, endLong)),
    getUberQuotes: (startLat, startLong, endLat, endLong) =>
      dispatch(getUberQuotes(startLat, startLong, endLat, endLong)),
    getLyftETAs: (latitude, longitude) =>
      dispatch(getLyftETAs(latitude, longitude)),
    getUberETAs: (latitude, longitude) =>
      dispatch(getUberETAs(latitude, longitude)),
    getDestinationGeolocation: (address) =>
      dispatch(getDestinationGeolocation(address)),
    getCurrentGeolocation: (address) =>
      dispatch(getCurrentGeolocation(address)),
    updateCurrentAddress: address => dispatch(updateCurrentAddress(address)),
    updateDestinationAddress: address =>
      dispatch(updateDestinationAddress(address)),
    clearStuff: () => dispatch(clearPricesErrors()),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
