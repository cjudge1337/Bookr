import { LYFT_CLIENT_TOKEN, LYFT_CLIENT_SECRET } from '../../../config';
import $ from 'jquery';

export const createRideWithoutPrime = (origin, destination, rideType) => (
  $.ajax({
    url: "https://api.lyft.com/v1/rides",
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${LYFT_CLIENT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    processData: false,
    data: JSON.stringify({
      "origin": origin,
      "destination": destination,
      "ride_type": rideType
    }),
  })
);

export const createRideWithPrime = (origin, destination, rideType, primetimeConfirmationToken) => (
  $.ajax({
    url: "https://api.lyft.com/v1/rides",
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${LYFT_CLIENT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    data: {
      origin,
      destination,
      ride_type: rideType,
      primetime_confirmation_token: primetimeConfirmationToken
    },
  })
);

export const getRideDetails = rideId => (
  $.ajax({
    url: `https://api.lyft.com/v1/rides/${rideId}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${LYFT_CLIENT_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
);

export const cancelRideWithoutFee = rideId => (
  $.ajax({
    url: `https://api.lyft.com/v1/rides/${rideId}/cancel`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${LYFT_CLIENT_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
);

export const cancelRideWithFee = (rideId, cancelConfirmationToken) => (
  $.ajax({
    url: `https://api.lyft.com/v1/rides/${rideId}/cancel`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${LYFT_CLIENT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    data: { cancel_confirmation_token: cancelConfirmationToken }
  })
);

export const cancelRide = rideId => (
  cancelRideWithoutFee(rideId).then(res => {
    if (res.cancel_confirmation_token) {
      cancelRideWithFee(rideId, res.cancel_confirmation_token);
    }
  })
);
