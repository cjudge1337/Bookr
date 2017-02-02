import * as UberAPIUtil from '../util/uber/quotes';
import * as LyftAPIUtil from '../util/lyft/rides';

export const RECEIVE_UBER_RIDE_INFO = "RECEIVE_UBER_RIDE_INFO";
export const RECEIVE_UBER_MAP = "RECEIVE_UBER_MAP";
export const REMOVE_UBER_RIDE = "REMOVE_UBER_RIDE";
export const RECEIVE_LYFT_RIDE_INFO = "RECEIVE_LYFT_RIDE_INFO";
export const REMOVE_LYFT_RIDE = "REMOVE_LYFT_RIDE";

export const receieveUberRideInfo = info => ({
  type: RECEIVE_UBER_RIDE_INFO,
  info
});

export const receieveUberMap = mapInfo => ({
  type: RECEIVE_UBER_RIDE_INFO,
  mapInfo
});

export const removeUberRide = requestId => ({
  type: REMOVE_UBER_RIDE
});

export const receieveLyftRideInfo = info => ({
  type: RECEIVE_LYFT_RIDE_INFO,
  info
});

export const removeLyftRide = rideId => ({
  type: REMOVE_LYFT_RIDE
});

export const getUberRideInfo = requestId => dispatch => (
  UberAPIUtil.getRideInfo(requestId)
  .then(info => dispatch(receieveUberRideInfo(info)),
        error => console.log(error))
);

export const getUberMap = requestId => dispatch => (
  UberAPIUtil.getRideMap(requestId)
  .then(mapInfo => dispatch(receieveUberMap(mapInfo)),
        error => console.log(error))
);

export const deleteUberRide = requestId => dispatch => {
  UberAPIUtil.deleteRide(requestId);
  return dispatch(removeUberRide(requestId));
};

export const getLyftRideInfo = rideId => dispatch => (
  LyftAPIUtil.getRideDetails(rideId)
  .then(info => dispatch(receieveLyftRideInfo(info)),
        error => console.log(error))
);

export const deleteLyftRide = rideId => dispatch => {
  LyftAPIUtil.cancelRide(rideId);
  return dispatch(removeLyftRide(rideId));
};
