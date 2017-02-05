import { UBER_SERVER_TOKEN } from '../../../config.js';

import $ from "jquery";

// get quotes for all uber products given a trip
export const getAllProductQuotes = (startLat, startLong, endLat, endLong) => {
  return $.ajax({
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
  });
};

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

// get quote for specific uber product type given a trip
export const getProductQuote = (accessToken, product_id, startLat, startLong, endLat, endLong) => {
  return $.ajax({
    method: 'POST',
    url: "https://api.uber.com/v1.2/requests/estimate",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json"
    },
    processData: false,

    data: JSON.stringify({
      product_id: product_id,
      start_latitude: startLat,
      start_longitude: startLong,
      end_latitude: endLat,
      end_longitude: endLong
    }),
  });

};

// initialize an uber ride
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

// TODO: Add access token variable interpolation
export const sandboxRequestRide = () => (
  $.ajax({
    method: 'POST',
    url: `https://sandbox-api.uber.com/v1.2/requests`,
    headers: {
      Authorization: "Bearer " +
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsicmVxdWVzdCJdLCJzdWIiOiI2MWRlM2E2ZS1jM2ViLTRhMzAtOWJkOS0xNWQ5Y2Y1NjEyNzgiLCJpc3MiOiJ1YmVyLXVzMSIsImp0aSI6ImVjZmVjYTA1LWM1MjQtNGM2Zi05YjljLTk5Zjk1NzFiMzBiNCIsImV4cCI6MTQ4ODc3Mjk3MywiaWF0IjoxNDg2MTgwOTczLCJ1YWN0Ijoibkt5WERCTEFqa0dsekZsbWplY0R4MXNmMFFOVmlKIiwibmJmIjoxNDg2MTgwODgzLCJhdWQiOiJpVW1fcmhUT0xuWkxud3E0THl6UUxxMXBJMkJkMGEzUSJ9.nITy3IUeZwt4kffV9Cw3v5KTCFK75Ls_A3CxIYU7k32aAImCIaepVXQTZJ5D1RAxnotKUESmcJJwE_e-WFh7LWdfZ8Gtx7-NYLCWuDOmPoY_wDEG8nyNKgIGLWubyskcqyaE0YgHHp7wa_ZCTg-C-_2weBXaEjkfKU1YjQME4Hp0VeOhOZ6kSaGtXiec1orhfg2VthaZRwa9op9Nrl6Kk2nw6K2xuo7wMAZYw4rqXENYlG64j5YyxtIykfBdctKkul1EZoheWRCvVlShUsQE9Gz2DmeVJci9V_-uKOFlqdPttjB1hOjwV2qcJOWJh7TwHNpddbxjUvkWeASL6Ym7pA",
      'Content-Type': "application/json"
    },
    processData: false,
    data: JSON.stringify({
      "fare_id": "63113c4af7ba8048b45b099769e6fc043a0e5e9a13c6b92eb05d3d079dc49b25",
      "product_id": "a1111c8c-c720-46c3-8534-2fcdd730040d",
      "start_latitude": 37.7752278,
      "start_longitude": -122.4197513,
      "end_latitude": 37.7773228,
      "end_longitude": -122.4272052})
    })
  );

// get information about a ride created within the app
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


// get map for a ride created within the app
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

// cancel an uber ride
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
