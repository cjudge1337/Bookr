import $ from 'jQuery';

const lyftToken = "gAAAAABYkAOD1VwOl3AjcIFIdxnYYMWSGp_nVoh9k0ddxYU4CxVlouZUkVqYNfnQLozgXFeVC_3XsOrQL2JUEEi63WcftIBNO1uM_YHq-KDEwbMEPmcfG4zzFmYwKKvlowBxNj2rJAfGrLP0_YNlHQ8CQ2jxVCL87awI-ZBMbpS1rhyCYdVaGqk=";
const lyftClientSecret = "M2fCNYbYNMBDCAp-LqLJ7BaZE3_5aZsy";

const test = () => (
  $.ajax({
    url: "https://api.lyft.com/v1/cost",
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${lyftToken}`
    },
    data: {
        start_lat: 37.7913050,
        start_lng: -122.3937350,
        end_lat: 37.7713254,
        end_lng: -122.5110340
    },
  }).then(res => console.log(res))
);

export default test;

// startLat, startLong, endLat, endLong
// start lat = 37.7913050,
// start long = -122.3937350
// end lat 37.7713254, end long -122.5110340
