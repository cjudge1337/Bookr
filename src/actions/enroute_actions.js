import * as UberAPIUtil from '../util/uber/quotes';
import * as LyftAPIUtil from '../util/lyft/rides';

export const RECEIVE_UBER_RIDE_INFO = "RECEIVE_UBER_RIDE_INFO";
export const RECEIVE_UBER_MAP = "RECEIVE_UBER_MAP";
export const REMOVE_UBER_RIDE = "REMOVE_UBER_RIDE";
export const RECEIVE_LYFT_RIDE_INFO = "RECEIVE_LYFT_RIDE_INFO";
export const REMOVE_LYFT_RIDE = "REMOVE_LYFT_RIDE";

export const receiveUberRideInfo = info => ({
  type: RECEIVE_UBER_RIDE_INFO,
  info
});

export const receiveUberMap = mapInfo => ({
  type: RECEIVE_UBER_RIDE_INFO,
  mapInfo
});

export const removeUberRide = requestId => ({
  type: REMOVE_UBER_RIDE
});

export const receiveLyftRideInfo = info => ({
  type: RECEIVE_LYFT_RIDE_INFO,
  info
});

export const removeLyftRide = rideId => ({
  type: REMOVE_LYFT_RIDE
});

export const getUberRideInfo = requestId => dispatch => (
  UberAPIUtil.getRideInfo(requestId)
  .then(info => dispatch(receiveUberRideInfo(info)),
    error => console.log(error))
);

export const getUberUpdate = info => dispatch => (
  dispatch(receiveUberRideInfo(info))
);

export const getUberMap = requestId => dispatch => (
  UberAPIUtil.getRideMap(requestId)
  .then(mapInfo => dispatch(receiveUberMap(mapInfo)),
    error => console.log(error))
);

export const deleteUberRide = requestId => dispatch => {
  UberAPIUtil.deleteRide(requestId);
  return dispatch(removeUberRide(requestId));
};

export const getLyftRideInfo = rideId => dispatch => (
  LyftAPIUtil.getRideDetails(rideId)
  .then(info => dispatch(receiveLyftRideInfo(info)),
    error => console.log(error))
);

export const getLyftUpdate = info => dispatch => (
  dispatch(receiveLyftRideInfo(info))
);

export const deleteLyftRide = rideId => dispatch => {
  LyftAPIUtil.cancelRide(rideId);
  return dispatch(removeLyftRide(rideId));
};
