
// uberToken = vJ11xh5DBIe9Xc6dBG9S78PhX1dU8xx3ShIxqqdh;

import $ from "jquery";

const test = () => {
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
        Authorization: "Token " + "vJ11xh5DBIe9Xc6dBG9S78PhX1dU8xx3ShIxqqdh"
    },
    data: {
        start_latitude: 37.7918270,
        start_longitude: -122.4084770,
        end_latitude: 37.7913050,
        end_longitude: -122.3937350
    },
    success: function(result) {
        console.log(result);
    }
  });
};

export default test;
