import { connect } from 'react-redux';
import UberAuth from './uber_auth';
import { requestUberToken } from '../../actions/auth_actions';

const mapDispatchToProps = (dispatch) => ({
  requestUberToken: (code) => dispatch(requestUberToken(code))
});

export default connect(
  null,
  mapDispatchToProps
)(UberAuth);
