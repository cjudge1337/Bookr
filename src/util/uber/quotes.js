
let uberToken = "vJ11xh5DBIe9Xc6dBG9S78PhX1dU8xx3ShIxqqdh";

import $ from "jquery";

const getQuote = (startLat, startLong, endLat, endLong) => (
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
        Authorization: "Token " + uberToken
    },
    data: {
        start_latitude: startLat,
        start_longitude: startLong,
        end_latitude: endLat,
        end_longitude: endLong
    },
  })
);

export default test;
