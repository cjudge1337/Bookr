import { UBER_SERVER_TOKEN } from '../../../config.js';
import $ from "jquery";

// Get quotes for all uber products given a trip

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

// Get Estimated time of pickup for different uber products

export const getAllProductTimes = (startLat, startLong) => (
  $.ajax({
    method: 'GET',
    url: "https://api.uber.com/v1.2/estimates/time",
    headers: {
        Authorization: "Token " + UBER_SERVER_TOKEN
    },
    data: {
        start_latitude: startLat,
        start_longitude: startLong
    },
  })
);

// Get quote for specific uber product type given a trip

export const getProductQuote = (accessToken, productId, startLat, startLong, endLat, endLong) => (
  $.ajax({
    method: 'POST',
    url: "https://api.uber.com/v1.2/requests/estimate",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json"
    },
    processData: false,

    data: JSON.stringify({
      productId: productId,
      start_latitude: startLat,
      start_longitude: startLong,
      end_latitude: endLat,
      end_longitude: endLong
    }),
  })
);

// Initialize an uber ride

export const createRide = (accessToken, fareId, productId, startLat, startLong, endLat, endLong) => (
  $.ajax({
    method: 'POST',
    url: "https://api.uber.com/v1.2/requests",
    headers: {
        Authorization: "Bearer " + accessToken,
        'Content-Type': "application/json"
    },
    processData: false,
    data: JSON.stringify({
        fare_id: fareId,
        product_id: productId,
        start_latitude: startLat,
        start_longitude: startLong,
        end_latitude: endLat,
        end_longitude: endLong
    }),
  })
);

// Get information about a ride created within the app

export const getRideInfo = (requestId, accessToken) => (
  $.ajax({
    method: 'GET',
    url: `https://api.uber.com/v1.2/requests/${requestId}`,
    headers: {
        Authorization: "Bearer " + accessToken,
        'Content-Type': 'application/json'
    }
  })
);

// Get map for a ride created within the app

export const getRideMap = (requestId, accessToken) => (
  $.ajax({
    method: 'GET',
    url: `https://api.uber.com/v1.2/requests/${requestId}/map`,
    headers: {
        Authorization: "Bearer " + accessToken,
        'Content-Type': 'application/json'
    }
  })
);

// Cancel an uber ride

export const deleteRide = (requestId, accessToken) => (
  $.ajax({
    method: 'DELETE',
    url: `https://api.uber.com/v1.2/requests/${requestId}`,
    headers: {
        Authorization: "Bearer " + accessToken,
        'Content-Type': 'application/json'
    }
  })
);

export const getUberProducts = (lat, longitude, authToken) => (
  $.ajax({
    method: 'GET',
    url: `https://api.uber.com/v1.2/products`,
    headers: {
        Authorization: "Token " + authToken
    },
    data: {
      latitude: lat,
      longitude: longitude
    }
  })
);
