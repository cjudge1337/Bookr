import { connect } from 'react-redux';
import { getUberRideInfo,
         getUberMap,
         deleteUberRide,
         getUberUpdate,
         getLyftRideInfo,
         getLyftUpdate,
         deleteLyftRide,
         checkSandboxStatus } from '../../actions/enroute_actions';
import Enroute from './enroute';

const mapStateToProps = ({ session, enroute }) => (
  session,
  enroute
);

const mapDispatchToProps = (dispatch) => ({
  getUberRideInfo: requestId => dispatch(getUberRideInfo(requestId)),
  getUberMap: requestId => dispatch(getUberMap(requestId)),
  deleteUberRide: requestId => dispatch(deleteUberRide(requestId)),
  getUberUpdate: info => dispatch(getUberUpdate(info)),
  getLyftRideInfo: rideId => dispatch(getLyftRideInfo(rideId)),
  getLyftUpdate: info => dispatch(getLyftUpdate(info)),
  deleteLyftRide: rideId => dispatch(deleteLyftRide(rideId)),
  checkSandboxStatus: () => dispatch(checkSandboxStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Enroute);
