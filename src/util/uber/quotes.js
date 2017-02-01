import { UBER_SERVER_TOKEN } from '../../../config.js';

import $ from "jquery";

export const getAllProductQuotes = (startLat, startLong, endLat, endLong) => (
  $.ajax({
    method: 'GET',
    url: "https://api.uber.com/v1.2/estimates/price",
    headers: {
        Authorization: "Token " + UBER_SERVER_TOKEN
    },
    data: {
        start_latitude: startLat,
        start_longitude: startLong,
        end_latitude: endLat,
        end_longitude: endLong
    },
  })
);

export const getProductQuote = (product_id, startLat, startLong, endLat, endLong) => (
  $.ajax({
    method: 'GET',
    url: "https://api.uber.com/v1.2/requests/estimates",
    headers: {
        Authorization: "Token " + UBER_SERVER_TOKEN
    },
    data: {
        product_id: product_id,
        start_latitude: startLat,
        start_longitude: startLong,
        end_latitude: endLat,
        end_longitude: endLong
    },
  })
);

export const createRide = (fare_id, product_id, startLat, startLong, endLat, endLong) => (
  $.ajax({
    method: 'POST',
    url: "https://api.uber.com/v1.2/requests",
    headers: {
        Authorization: "Token " + UBER_SERVER_TOKEN
    },
    data: {
        fare_id: fare_id,
        product_id: product_id,
        start_latitude: startLat,
        start_longitude: startLong,
        end_latitude: endLat,
        end_longitude: endLong
    },
  })
);

export const getRideInfo = (requestId) => (
  $.ajax({
    method: 'GET',
    url: `https://api.uber.com/v1.2/requests/${requestId}`,
    headers: {
        Authorization: "Token " + UBER_SERVER_TOKEN
    }
  })
);

export const getRideMap = (requestId) => (
  $.ajax({
    method: 'GET',
    url: `https://api.uber.com/v1.2/requests/${requestId}/map`,
    headers: {
        Authorization: "Token " + UBER_SERVER_TOKEN
    }
  })
);

export const deleteRide = (requestId) => (
  $.ajax({
    method: 'DELETE',
    url: `https://api.uber.com/v1.2/requests/${requestId}`,
    headers: {
        Authorization: "Token " + UBER_SERVER_TOKEN
    }
  })
);

export const getUberProducts = (lat, longitude) => (
  $.ajax({
    method: 'GET',
    url: `https://api.uber.com/v1.2/products`,
    headers: {
        Authorization: "Token " + UBER_SERVER_TOKEN
    },
    data: {
      latitude: lat,
      longitude: longitude
    }
  })
);
