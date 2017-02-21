export const sandboxRequestRide = () => (
  $.ajax({
    method: 'POST',
    url: `https://api.lyft.com/v1/rides`,
    headers: {
      Authorization: "Bearer " +
      "SANDBOX-gAAAAABYpKJ1yGivkSCmhbNEKAvBOPphdGOIEQwEe4-Ed26xBWelix73qIv7GixccJjG378YZ6H6nGx32PHSeY28nrOqq0zecDoGVCAb6Fh4jdihguQO1G1U9G9Lj4YOX2zhnZ5cddizeLcdqcwjHlxmEcxdG4El9XdVZtF72DwrdusAzA9Q7SsKWNeH4EnWmwCPJbua6sFAwtv5FfaZMivWWX_U8MrM1t6-Y-X78os1Tk2So5DCQw-5HU1zJucjcbGh_msaAXrNueSxU-7chy26sLgPJsAKFMBzp_4r9PYVgpt7unWEk80ahEODHYENkYVsH03ZQBuj",
      'Content-Type': "application/json"
    },
    processData: false,
    data: JSON.stringify({
      "ride_type" : "lyft",
      "origin" : {
        "lat" : 34.305658,
        "lng" : -118.8893667
      },
      'destination': {
        'lat': 37.7773228,
        'lng': -122.4272052
      }
    })
  })
);

export const sandboxRideDetails = rideId => (
  $.ajax({
    method: 'GET',
    url: `https://api.lyft.com/v1/rides/${rideId}`,
    headers: {
      Authorization: "Bearer " +
      "SANDBOX-gAAAAABYpKJ1yGivkSCmhbNEKAvBOPphdGOIEQwEe4-Ed26xBWelix73qIv7GixccJjG378YZ6H6nGx32PHSeY28nrOqq0zecDoGVCAb6Fh4jdihguQO1G1U9G9Lj4YOX2zhnZ5cddizeLcdqcwjHlxmEcxdG4El9XdVZtF72DwrdusAzA9Q7SsKWNeH4EnWmwCPJbua6sFAwtv5FfaZMivWWX_U8MrM1t6-Y-X78os1Tk2So5DCQw-5HU1zJucjcbGh_msaAXrNueSxU-7chy26sLgPJsAKFMBzp_4r9PYVgpt7unWEk80ahEODHYENkYVsH03ZQBuj",
      'Content-Type': "application/json"
    }
  })
);

export const sandboxAcceptedRide = () => (
  $.ajax({
    method: 'PUT',
    url: `https://api.lyft.com/v1/sandbox/rides/15842693761403856693`,
    headers: {
      Authorization: "Bearer " +
      "SANDBOX-gAAAAABYpKJ1yGivkSCmhbNEKAvBOPphdGOIEQwEe4-Ed26xBWelix73qIv7GixccJjG378YZ6H6nGx32PHSeY28nrOqq0zecDoGVCAb6Fh4jdihguQO1G1U9G9Lj4YOX2zhnZ5cddizeLcdqcwjHlxmEcxdG4El9XdVZtF72DwrdusAzA9Q7SsKWNeH4EnWmwCPJbua6sFAwtv5FfaZMivWWX_U8MrM1t6-Y-X78os1Tk2So5DCQw-5HU1zJucjcbGh_msaAXrNueSxU-7chy26sLgPJsAKFMBzp_4r9PYVgpt7unWEk80ahEODHYENkYVsH03ZQBuj",
      'Content-Type': "application/json"
    },
    processData: false,
    data: JSON.stringify({
      "status": "accepted"
    })
  }).then(res => console.log(res))
);

export const sandboxArrivedRide = () => (
  $.ajax({
    method: 'PUT',
    url: `https://api.lyft.com/v1/sandbox/rides/15842693761403856693`,
    headers: {
      Authorization: "Bearer " +
      "SANDBOX-gAAAAABYpKJ1yGivkSCmhbNEKAvBOPphdGOIEQwEe4-Ed26xBWelix73qIv7GixccJjG378YZ6H6nGx32PHSeY28nrOqq0zecDoGVCAb6Fh4jdihguQO1G1U9G9Lj4YOX2zhnZ5cddizeLcdqcwjHlxmEcxdG4El9XdVZtF72DwrdusAzA9Q7SsKWNeH4EnWmwCPJbua6sFAwtv5FfaZMivWWX_U8MrM1t6-Y-X78os1Tk2So5DCQw-5HU1zJucjcbGh_msaAXrNueSxU-7chy26sLgPJsAKFMBzp_4r9PYVgpt7unWEk80ahEODHYENkYVsH03ZQBuj",
      'Content-Type': "application/json"
    },
    processData: false,
    data: JSON.stringify({
      "status": "arrived"
    })
  }).then(res => console.log(res))
);

export const sandboxCancelRide = () => (
  $.ajax({
    method: 'POST',
    url: `https://api.lyft.com/v1/rides/15842693761403856693/cancel`,
    headers: {
      Authorization: "Bearer " +
      "SANDBOX-gAAAAABYpKJ1yGivkSCmhbNEKAvBOPphdGOIEQwEe4-Ed26xBWelix73qIv7GixccJjG378YZ6H6nGx32PHSeY28nrOqq0zecDoGVCAb6Fh4jdihguQO1G1U9G9Lj4YOX2zhnZ5cddizeLcdqcwjHlxmEcxdG4El9XdVZtF72DwrdusAzA9Q7SsKWNeH4EnWmwCPJbua6sFAwtv5FfaZMivWWX_U8MrM1t6-Y-X78os1Tk2So5DCQw-5HU1zJucjcbGh_msaAXrNueSxU-7chy26sLgPJsAKFMBzp_4r9PYVgpt7unWEk80ahEODHYENkYVsH03ZQBuj",
      'Content-Type': "application/json"
    }
  }).then(res => console.log(res))
);
