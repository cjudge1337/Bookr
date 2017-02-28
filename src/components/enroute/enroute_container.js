import { connect } from 'react-redux';
import Enroute from './enroute';
import { getUberRideInfo, getUberMap, deleteUberRide, getUberUpdate,
  getLyftRideInfo, getLyftUpdate, deleteLyftRide } from '../../actions/enroute_actions';

const mapStateToProps = ({ session, enroute }) => ({
  session,
  enroute
});

const mapDispatchToProps = (dispatch) => ({
  getUberRideInfo: accessToken => dispatch(getUberRideInfo(accessToken)),
  getUberMap: requestId => dispatch(getUberMap(requestId)),
  deleteUberRide: requestId => dispatch(deleteUberRide(requestId)),
  getUberUpdate: info => dispatch(getUberUpdate(info)),
  getLyftRideInfo: (accessToken, rideId) => dispatch(getLyftRideInfo(accessToken, rideId)),
  getLyftUpdate: info => dispatch(getLyftUpdate(info)),
  deleteLyftRide: (accessToken, rideId) => dispatch(deleteLyftRide(accessToken, rideId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Enroute);
