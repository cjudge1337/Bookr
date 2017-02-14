import * as UberAPIUtil from '../util/uber/quotes';
import * as LyftAPIUtil from '../util/lyft/rides';
import { sandboxRideDetails, sandboxRequestRide, sandboxCancelRide } from '../util/lyft/sandbox';

export const RECEIVE_UBER_RIDE_INFO = "RECEIVE_UBER_RIDE_INFO";
export const RECEIVE_UBER_MAP = "RECEIVE_UBER_MAP";
export const REMOVE_UBER_RIDE = "REMOVE_UBER_RIDE";
export const RECEIVE_LYFT_RIDE_INFO = "RECEIVE_LYFT_RIDE_INFO";
export const REMOVE_LYFT_RIDE = "REMOVE_LYFT_RIDE";

// Sync actions

export const receiveUberRideInfo = info => ({
  type: RECEIVE_UBER_RIDE_INFO,
  info
});

export const receiveUberMap = mapInfo => ({
  type: RECEIVE_UBER_RIDE_INFO,
  mapInfo
});

export const removeUberRide = () => ({
  type: REMOVE_UBER_RIDE
});

export const receiveLyftRideInfo = info => ({
  type: RECEIVE_LYFT_RIDE_INFO,
  info
});

export const removeLyftRide = () => ({
  type: REMOVE_LYFT_RIDE
});

// Async actions

export const getUberRideInfo = accessToken => dispatch => (
  UberAPIUtil.getCurrentRide(accessToken)
  .then(info => dispatch(receiveUberRideInfo(info)),
    error => console.log(error))
);

export const createUberRide = (accessToken, fareId, productId, startLat,
  startLong, endLat, endLong) => dispatch => (
  UberAPIUtil.createRide(accessToken, fareId, productId, startLat,
    startLong, endLat, endLong)
  .then(info => dispatch(receiveUberRideInfo(info)),
    error => alert(error))
);

export const createSandboxRide = () => dispatch => (
  sandboxRequestRide()
  .then(info => dispatch(receiveLyftRideInfo(info)),
    error => console.log(error))
);

export const getUberUpdate = info => dispatch => (
  dispatch(receiveUberRideInfo(info))
);

export const checkSandboxStatus = rideId => dispatch => (
  sandboxRideDetails(rideId)
  .then(info => dispatch(receiveLyftRideInfo(info)),
        error => console.log(error))
);

export const getUberMap = requestId => dispatch => (
  UberAPIUtil.getRideMap(requestId)
  .then(mapInfo => dispatch(receiveUberMap(mapInfo)),
    error => console.log(error))
);

export const deleteUberRide = accessToken => dispatch => {
  UberAPIUtil.deleteRide(accessToken);
  return dispatch(removeUberRide());
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

export const deleteSandboxRide = () => dispatch => {
  sandboxCancelRide();
  return dispatch(removeLyftRide());
};
