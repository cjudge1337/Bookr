import { connect } from 'react-redux';
import Confirm from './confirm';
import { getUberQuote} from '../../actions/confirm_actions.js';

const mapStateToProps = store => ({
  quotes: store.quotes,
  confirm: store.confirm
});

const mapDispatchToProps = dispatch => (
  {
    getUberQuote: (product_id, startLat, startLong, endLat, endLong) => dispatch(getUberQuote(product_id, startLat, startLong, endLat, endLong))
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm);
