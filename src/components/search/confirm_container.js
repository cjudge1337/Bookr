import { connect } from 'react-redux';
import Confirm from './confirm';
import { getUberQuote, clearConfirmState } from '../../actions/confirm_actions.js';
import { createUberRide, createSandboxRide } from '../../actions/enroute_actions.js';

const mapStateToProps = store => ({
  session: store.session,
  quotes: store.quotes,
  confirm: store.confirm
});

const mapDispatchToProps = dispatch => (
  {
    getUberQuote: (accessToken, product_id, startLat, startLong, endLat, endLong) => dispatch(getUberQuote(accessToken, product_id, startLat, startLong, endLat, endLong)),
    clearConfirmState: () => dispatch(clearConfirmState()),
    createUberRide: (accessToken, fareId, productId, startLat, startLong, endLat, endLong) => dispatch(createUberRide(accessToken, fareId, productId, startLat, startLong, endLat, endLong)),
    createSandboxRide: () => dispatch(createSandboxRide())
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm);
