import $ from 'jQuery';
import { LYFT_CLIENT_TOKEN, LYFT_CLIENT_SECRET } from '../../../config';
// Makes API call to lyft that returns ride types that are available at specified location
// Returns error if there are no rides available
export const getRideTypes = (lat, lng) => (
  $.ajax({
    url: "https://api.lyft.com/v1/ridetypes",
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${LYFT_CLIENT_TOKEN}`
    },
    data: {
      lat,
      lng
    },
  })
);

//Makes API call to lyft that returns cost of ride to and from locations you specify,
// for each type of ride
export const getCost = (startLat, startLong, endLat, endLong) => (
  $.ajax({
    url: "https://api.lyft.com/v1/cost",
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${LYFT_CLIENT_TOKEN}`
    },
    data: {
        start_lat: startLat,
        start_lng: startLong,
        end_lat: endLat,
        end_lng: endLong
    },
  })
);



// startLat, startLong, endLat, endLong
// start lat = 37.7913050,
  // start long = -122.3937350
// end lat 37.7713254, end long -122.5110340
