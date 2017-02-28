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

export const getUserGeo = () => (
  $.ajax({
    method: 'GET',
    url: "https://maps.googleapis.com/maps/api/browserlocation/json?browser=chromium&sensor=true",
  })
);
