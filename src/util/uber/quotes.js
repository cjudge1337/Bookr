import { UBER_SERVER_TOKEN } from '../../../config.js';

import $ from "jquery";

const getQuote = (startLat, startLong, endLat, endLong) => (
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
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

export default getQuote;
