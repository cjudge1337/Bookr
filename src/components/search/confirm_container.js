import { connect } from 'react-redux';
import Confirm from './confirm';
import { getUberQuote, clearConfirmState } from '../../actions/confirm_actions.js';

const mapStateToProps = store => ({
  session: store.session,
  quotes: store.quotes,
  confirm: store.confirm
});

const mapDispatchToProps = dispatch => (
  {
    getUberQuote: (accessToken, product_id, startLat, startLong, endLat, endLong) => dispatch(getUberQuote(accessToken, product_id, startLat, startLong, endLat, endLong)),
    clearConfirmState: () => dispatch(clearConfirmState())
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm);
