import { connect } from 'react-redux';
import Confirm from './confirm';
import { getUberQuote, clearConfirmState } from '../../actions/confirm_actions.js';
import { createUberRide, createLyftRide, createSandboxRide } from '../../actions/enroute_actions.js';

const mapStateToProps = ({ session, quotes, confirm }) => ({
  session,
  quotes,
  confirm,
  booked_ride: quotes.booked_ride,
  geos: quotes.geolocations,
  addresses: quotes.address
});

const mapDispatchToProps = dispatch => (
  {
    getUberQuote: (accessToken, product_id, startLat, startLong, endLat, endLong) =>
      dispatch(getUberQuote(accessToken, product_id, startLat, startLong,
      endLat, endLong)),
    clearConfirmState: () => dispatch(clearConfirmState()),
    createUberRide: (accessToken, fareId, productId, startLat, startLong, endLat, endLong) =>
    dispatch(createUberRide(accessToken, fareId, productId, startLat,
      startLong, endLat, endLong)),
    createSandboxRide: () => dispatch(createSandboxRide()),
    createLyftRide: (origin, destination, rideType) =>
      dispatch(createLyftRide(origin, destination, rideType))
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm);
