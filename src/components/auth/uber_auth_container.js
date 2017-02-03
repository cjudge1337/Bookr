import { connect } from 'react-redux';
import UberAuth from './uber_auth';
import { receiveUberCreds } from '../../actions/auth_actions';

const mapDispatchToProps = (dispatch) => ({
  receiveUberCreds: (creds) => dispatch(receiveUberCreds(creds))
});

export default connect(
  null,
  mapDispatchToProps
)(UberAuth);
