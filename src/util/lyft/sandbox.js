export const sandboxRequestRide = () => (
  $.ajax({
    method: 'POST',
    url: `https://api.lyft.com/v1/rides`,
    headers: {
      Authorization: "Bearer " +
      "SANDBOX-gAAAAABYrM2o_f1CtIyKqN8rvFbYUODqSPIuGH-cvJhpT6oZmxBmBe1tPkNaG31cIScy5hs2xGEDEUgXUjQBy-7X3CKZtEjLI58VRTKBaq-tEatsGEOW09rGXOy5FAjXibCR0fcm5SxIp390y1EB0FClggHAfyip9ibmgW-ufYlLprW2bpu-Fpw6-UNdZZOc7s8S1NbmBYpOClpXkdxJzQMc9unkN8233yeaIWPXGbRa647--7K5_OqpkLQxwh1b2ToYzU4ftIIivNjXeUDOWWorfOA7gP3b6qi4b99DwI_958rHusEE6poHFc7M5ySQ4nq7NEqYE-GL",
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
      "SANDBOX-gAAAAABYrM2o_f1CtIyKqN8rvFbYUODqSPIuGH-cvJhpT6oZmxBmBe1tPkNaG31cIScy5hs2xGEDEUgXUjQBy-7X3CKZtEjLI58VRTKBaq-tEatsGEOW09rGXOy5FAjXibCR0fcm5SxIp390y1EB0FClggHAfyip9ibmgW-ufYlLprW2bpu-Fpw6-UNdZZOc7s8S1NbmBYpOClpXkdxJzQMc9unkN8233yeaIWPXGbRa647--7K5_OqpkLQxwh1b2ToYzU4ftIIivNjXeUDOWWorfOA7gP3b6qi4b99DwI_958rHusEE6poHFc7M5ySQ4nq7NEqYE-GL",
      'Content-Type': "application/json"
    }
  })
);

export const sandboxAcceptedRide = () => (
  $.ajax({
    method: 'PUT',
    url: `https://api.lyft.com/v1/sandbox/rides/7270598162866272817`,
    headers: {
      Authorization: "Bearer " +
      "SANDBOX-gAAAAABYrM2o_f1CtIyKqN8rvFbYUODqSPIuGH-cvJhpT6oZmxBmBe1tPkNaG31cIScy5hs2xGEDEUgXUjQBy-7X3CKZtEjLI58VRTKBaq-tEatsGEOW09rGXOy5FAjXibCR0fcm5SxIp390y1EB0FClggHAfyip9ibmgW-ufYlLprW2bpu-Fpw6-UNdZZOc7s8S1NbmBYpOClpXkdxJzQMc9unkN8233yeaIWPXGbRa647--7K5_OqpkLQxwh1b2ToYzU4ftIIivNjXeUDOWWorfOA7gP3b6qi4b99DwI_958rHusEE6poHFc7M5ySQ4nq7NEqYE-GL",
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
    url: `https://api.lyft.com/v1/sandbox/rides/7270598162866272817`,
    headers: {
      Authorization: "Bearer " +
      "SANDBOX-gAAAAABYrM2o_f1CtIyKqN8rvFbYUODqSPIuGH-cvJhpT6oZmxBmBe1tPkNaG31cIScy5hs2xGEDEUgXUjQBy-7X3CKZtEjLI58VRTKBaq-tEatsGEOW09rGXOy5FAjXibCR0fcm5SxIp390y1EB0FClggHAfyip9ibmgW-ufYlLprW2bpu-Fpw6-UNdZZOc7s8S1NbmBYpOClpXkdxJzQMc9unkN8233yeaIWPXGbRa647--7K5_OqpkLQxwh1b2ToYzU4ftIIivNjXeUDOWWorfOA7gP3b6qi4b99DwI_958rHusEE6poHFc7M5ySQ4nq7NEqYE-GL",
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
    url: `https://api.lyft.com/v1/rides/7270598162866272817/cancel`,
    headers: {
      Authorization: "Bearer " +
      "SANDBOX-gAAAAABYrM2o_f1CtIyKqN8rvFbYUODqSPIuGH-cvJhpT6oZmxBmBe1tPkNaG31cIScy5hs2xGEDEUgXUjQBy-7X3CKZtEjLI58VRTKBaq-tEatsGEOW09rGXOy5FAjXibCR0fcm5SxIp390y1EB0FClggHAfyip9ibmgW-ufYlLprW2bpu-Fpw6-UNdZZOc7s8S1NbmBYpOClpXkdxJzQMc9unkN8233yeaIWPXGbRa647--7K5_OqpkLQxwh1b2ToYzU4ftIIivNjXeUDOWWorfOA7gP3b6qi4b99DwI_958rHusEE6poHFc7M5ySQ4nq7NEqYE-GL",
      'Content-Type': "application/json"
    }
  }).then(res => console.log(res))
);
