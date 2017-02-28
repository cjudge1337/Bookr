import { connect } from 'react-redux';
import LyftAuth from './lyft_auth';
import { receiveLyftCreds } from '../../actions/auth_actions';

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = (dispatch) => ({
  receiveLyftCreds: (creds) => dispatch(receiveLyftCreds(creds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LyftAuth);
