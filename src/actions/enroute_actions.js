import * as UberAPIUtil from '../util/uber/quotes';

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
  type: REMOVE_UBER_RIDE,
  requestId
});

export const receieveLyftRideInfo = info => ({
  type: RECEIVE_LYFT_RIDE_INFO,
  info
});

export const removeLyftRide = rideId => ({
  type: REMOVE_LYFT_RIDE,
  rideId
});
