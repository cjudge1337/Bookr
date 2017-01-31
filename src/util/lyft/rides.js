import $ from 'jQuery';
import { LYFT_CLIENT_TOKEN, LYFT_CLIENT_SECRET } from '../../../config';

export const createRideWithoutPrime = (origin, destination, rideType) => (
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
      ride_type: rideType
    },
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
