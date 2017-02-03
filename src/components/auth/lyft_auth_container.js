import { connect } from 'react-redux';
import LyftAuth from './lyft_auth';
import { requestLyftToken } from '../../actions/auth_actions';

const mapDispatchToProps = (dispatch) => ({
  requestLyftToken: (code) => dispatch(requestLyftToken(code))
});

export default connect(
  null,
  mapDispatchToProps
)(LyftAuth);
