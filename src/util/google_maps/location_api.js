import { GOOGLE_API_KEY } from '../../../config.js';

import $ from "jquery";

export const addressToGeo = addressStr => (
  $.ajax({
    method: 'GET',
    url: "https://maps.googleapis.com/maps/api/geocode/json",
    data: {
        address: addressStr,
        key: GOOGLE_API_KEY
    },
  })
);

export const geoToAddress = (latitude, longitude) => (
  $.ajax({
    method: 'GET',
    url: "https://maps.googleapis.com/maps/api/geocode/json",
    data: {
        latlng: `${latitude},${longitude}`,
        key: GOOGLE_API_KEY
    },
  })
);



// translate lat/long to address
// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
