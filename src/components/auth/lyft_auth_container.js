import { connect } from 'react-redux';
import LyftAuth from './lyft_auth';
import { receiveLyftCreds } from '../../actions/auth_actions';

const mapDispatchToProps = (dispatch) => ({
  receiveLyftCreds: (creds) => dispatch(receiveLyftCreds(creds))
});

export default connect(
  null,
  mapDispatchToProps
)(LyftAuth);
