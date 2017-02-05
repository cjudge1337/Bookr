// TODO: Add access token variable interpolation
export const sandboxRequestRide = (fareId) => (
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
      "fare_id": fareId,
      "product_id": "a1111c8c-c720-46c3-8534-2fcdd730040d",
      "start_latitude": 37.7752278,
      "start_longitude": -122.4197513,
      "end_latitude": 37.7773228,
      "end_longitude": -122.4272052})
    })
  );

export const sandboxAcceptedRide = () => (
  $.ajax({
    method: 'PUT',
    url: `https://sandbox-api.uber.com/v1.2/sandbox/requests/fb2a5728-def2-4a5f-b6c0-42fd748cd2d8`,
    headers: {
      Authorization: "Bearer " +
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsicmVxdWVzdCJdLCJzdWIiOiI2MWRlM2E2ZS1jM2ViLTRhMzAtOWJkOS0xNWQ5Y2Y1NjEyNzgiLCJpc3MiOiJ1YmVyLXVzMSIsImp0aSI6ImVjZmVjYTA1LWM1MjQtNGM2Zi05YjljLTk5Zjk1NzFiMzBiNCIsImV4cCI6MTQ4ODc3Mjk3MywiaWF0IjoxNDg2MTgwOTczLCJ1YWN0Ijoibkt5WERCTEFqa0dsekZsbWplY0R4MXNmMFFOVmlKIiwibmJmIjoxNDg2MTgwODgzLCJhdWQiOiJpVW1fcmhUT0xuWkxud3E0THl6UUxxMXBJMkJkMGEzUSJ9.nITy3IUeZwt4kffV9Cw3v5KTCFK75Ls_A3CxIYU7k32aAImCIaepVXQTZJ5D1RAxnotKUESmcJJwE_e-WFh7LWdfZ8Gtx7-NYLCWuDOmPoY_wDEG8nyNKgIGLWubyskcqyaE0YgHHp7wa_ZCTg-C-_2weBXaEjkfKU1YjQME4Hp0VeOhOZ6kSaGtXiec1orhfg2VthaZRwa9op9Nrl6Kk2nw6K2xuo7wMAZYw4rqXENYlG64j5YyxtIykfBdctKkul1EZoheWRCvVlShUsQE9Gz2DmeVJci9V_-uKOFlqdPttjB1hOjwV2qcJOWJh7TwHNpddbxjUvkWeASL6Ym7pA",
      'Content-Type': "application/json"
    },
    processData: false,
    data: JSON.stringify({
      'status': "accepted"
    })
  })
);

export const sandboxArrivedRide = () => (
  $.ajax({
    method: 'PUT',
    url: `https://sandbox-api.uber.com/v1.2/sandbox/requests/fb2a5728-def2-4a5f-b6c0-42fd748cd2d8`,
    headers: {
      Authorization: "Bearer " +
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsicmVxdWVzdCJdLCJzdWIiOiI2MWRlM2E2ZS1jM2ViLTRhMzAtOWJkOS0xNWQ5Y2Y1NjEyNzgiLCJpc3MiOiJ1YmVyLXVzMSIsImp0aSI6ImVjZmVjYTA1LWM1MjQtNGM2Zi05YjljLTk5Zjk1NzFiMzBiNCIsImV4cCI6MTQ4ODc3Mjk3MywiaWF0IjoxNDg2MTgwOTczLCJ1YWN0Ijoibkt5WERCTEFqa0dsekZsbWplY0R4MXNmMFFOVmlKIiwibmJmIjoxNDg2MTgwODgzLCJhdWQiOiJpVW1fcmhUT0xuWkxud3E0THl6UUxxMXBJMkJkMGEzUSJ9.nITy3IUeZwt4kffV9Cw3v5KTCFK75Ls_A3CxIYU7k32aAImCIaepVXQTZJ5D1RAxnotKUESmcJJwE_e-WFh7LWdfZ8Gtx7-NYLCWuDOmPoY_wDEG8nyNKgIGLWubyskcqyaE0YgHHp7wa_ZCTg-C-_2weBXaEjkfKU1YjQME4Hp0VeOhOZ6kSaGtXiec1orhfg2VthaZRwa9op9Nrl6Kk2nw6K2xuo7wMAZYw4rqXENYlG64j5YyxtIykfBdctKkul1EZoheWRCvVlShUsQE9Gz2DmeVJci9V_-uKOFlqdPttjB1hOjwV2qcJOWJh7TwHNpddbxjUvkWeASL6Ym7pA",
      'Content-Type': "application/json"
    },
    processData: false,
    data: JSON.stringify({
      'status': "arriving"
    })
  })
);

export const sandboxDriverCancel = () => (
  $.ajax({
    method: 'PUT',
    url: `https://sandbox-api.uber.com/v1.2/sandbox/requests/fb2a5728-def2-4a5f-b6c0-42fd748cd2d8`,
    headers: {
      Authorization: "Bearer " +
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsicmVxdWVzdCJdLCJzdWIiOiI2MWRlM2E2ZS1jM2ViLTRhMzAtOWJkOS0xNWQ5Y2Y1NjEyNzgiLCJpc3MiOiJ1YmVyLXVzMSIsImp0aSI6ImVjZmVjYTA1LWM1MjQtNGM2Zi05YjljLTk5Zjk1NzFiMzBiNCIsImV4cCI6MTQ4ODc3Mjk3MywiaWF0IjoxNDg2MTgwOTczLCJ1YWN0Ijoibkt5WERCTEFqa0dsekZsbWplY0R4MXNmMFFOVmlKIiwibmJmIjoxNDg2MTgwODgzLCJhdWQiOiJpVW1fcmhUT0xuWkxud3E0THl6UUxxMXBJMkJkMGEzUSJ9.nITy3IUeZwt4kffV9Cw3v5KTCFK75Ls_A3CxIYU7k32aAImCIaepVXQTZJ5D1RAxnotKUESmcJJwE_e-WFh7LWdfZ8Gtx7-NYLCWuDOmPoY_wDEG8nyNKgIGLWubyskcqyaE0YgHHp7wa_ZCTg-C-_2weBXaEjkfKU1YjQME4Hp0VeOhOZ6kSaGtXiec1orhfg2VthaZRwa9op9Nrl6Kk2nw6K2xuo7wMAZYw4rqXENYlG64j5YyxtIykfBdctKkul1EZoheWRCvVlShUsQE9Gz2DmeVJci9V_-uKOFlqdPttjB1hOjwV2qcJOWJh7TwHNpddbxjUvkWeASL6Ym7pA",
      'Content-Type': "application/json"
    },
    processData: false,
    data: JSON.stringify({
      'status': "driver_canceled"
    })
  })
);

export const sandboxDeleteRide = () => (
  $.ajax({
    method: 'DELETE',
    url: `https://sandbox-api.uber.com/v1.2/requests/current`,
    headers: {
      Authorization: "Bearer " +
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsicmVxdWVzdCJdLCJzdWIiOiI2MWRlM2E2ZS1jM2ViLTRhMzAtOWJkOS0xNWQ5Y2Y1NjEyNzgiLCJpc3MiOiJ1YmVyLXVzMSIsImp0aSI6ImVjZmVjYTA1LWM1MjQtNGM2Zi05YjljLTk5Zjk1NzFiMzBiNCIsImV4cCI6MTQ4ODc3Mjk3MywiaWF0IjoxNDg2MTgwOTczLCJ1YWN0Ijoibkt5WERCTEFqa0dsekZsbWplY0R4MXNmMFFOVmlKIiwibmJmIjoxNDg2MTgwODgzLCJhdWQiOiJpVW1fcmhUT0xuWkxud3E0THl6UUxxMXBJMkJkMGEzUSJ9.nITy3IUeZwt4kffV9Cw3v5KTCFK75Ls_A3CxIYU7k32aAImCIaepVXQTZJ5D1RAxnotKUESmcJJwE_e-WFh7LWdfZ8Gtx7-NYLCWuDOmPoY_wDEG8nyNKgIGLWubyskcqyaE0YgHHp7wa_ZCTg-C-_2weBXaEjkfKU1YjQME4Hp0VeOhOZ6kSaGtXiec1orhfg2VthaZRwa9op9Nrl6Kk2nw6K2xuo7wMAZYw4rqXENYlG64j5YyxtIykfBdctKkul1EZoheWRCvVlShUsQE9Gz2DmeVJci9V_-uKOFlqdPttjB1hOjwV2qcJOWJh7TwHNpddbxjUvkWeASL6Ym7pA",
      'Content-Type': "application/json"
    }
  })
);

export const sandboxDeleteRideId = () => (
  $.ajax({
    method: 'DELETE',
    url: `https://sandbox-api.uber.com/v1.2/requests/fb2a5728-def2-4a5f-b6c0-42fd748cd2d8`,
    headers: {
      Authorization: "Bearer " +
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsicmVxdWVzdCJdLCJzdWIiOiI2MWRlM2E2ZS1jM2ViLTRhMzAtOWJkOS0xNWQ5Y2Y1NjEyNzgiLCJpc3MiOiJ1YmVyLXVzMSIsImp0aSI6ImVjZmVjYTA1LWM1MjQtNGM2Zi05YjljLTk5Zjk1NzFiMzBiNCIsImV4cCI6MTQ4ODc3Mjk3MywiaWF0IjoxNDg2MTgwOTczLCJ1YWN0Ijoibkt5WERCTEFqa0dsekZsbWplY0R4MXNmMFFOVmlKIiwibmJmIjoxNDg2MTgwODgzLCJhdWQiOiJpVW1fcmhUT0xuWkxud3E0THl6UUxxMXBJMkJkMGEzUSJ9.nITy3IUeZwt4kffV9Cw3v5KTCFK75Ls_A3CxIYU7k32aAImCIaepVXQTZJ5D1RAxnotKUESmcJJwE_e-WFh7LWdfZ8Gtx7-NYLCWuDOmPoY_wDEG8nyNKgIGLWubyskcqyaE0YgHHp7wa_ZCTg-C-_2weBXaEjkfKU1YjQME4Hp0VeOhOZ6kSaGtXiec1orhfg2VthaZRwa9op9Nrl6Kk2nw6K2xuo7wMAZYw4rqXENYlG64j5YyxtIykfBdctKkul1EZoheWRCvVlShUsQE9Gz2DmeVJci9V_-uKOFlqdPttjB1hOjwV2qcJOWJh7TwHNpddbxjUvkWeASL6Ym7pA",
      'Content-Type': "application/json"
    }
  })
);

export const sandboxCurrentRide = () => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox-api.uber.com/v1.2/requests/current`,
    headers: {
      Authorization: "Bearer " +
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsicmVxdWVzdCJdLCJzdWIiOiI2MWRlM2E2ZS1jM2ViLTRhMzAtOWJkOS0xNWQ5Y2Y1NjEyNzgiLCJpc3MiOiJ1YmVyLXVzMSIsImp0aSI6ImVjZmVjYTA1LWM1MjQtNGM2Zi05YjljLTk5Zjk1NzFiMzBiNCIsImV4cCI6MTQ4ODc3Mjk3MywiaWF0IjoxNDg2MTgwOTczLCJ1YWN0Ijoibkt5WERCTEFqa0dsekZsbWplY0R4MXNmMFFOVmlKIiwibmJmIjoxNDg2MTgwODgzLCJhdWQiOiJpVW1fcmhUT0xuWkxud3E0THl6UUxxMXBJMkJkMGEzUSJ9.nITy3IUeZwt4kffV9Cw3v5KTCFK75Ls_A3CxIYU7k32aAImCIaepVXQTZJ5D1RAxnotKUESmcJJwE_e-WFh7LWdfZ8Gtx7-NYLCWuDOmPoY_wDEG8nyNKgIGLWubyskcqyaE0YgHHp7wa_ZCTg-C-_2weBXaEjkfKU1YjQME4Hp0VeOhOZ6kSaGtXiec1orhfg2VthaZRwa9op9Nrl6Kk2nw6K2xuo7wMAZYw4rqXENYlG64j5YyxtIykfBdctKkul1EZoheWRCvVlShUsQE9Gz2DmeVJci9V_-uKOFlqdPttjB1hOjwV2qcJOWJh7TwHNpddbxjUvkWeASL6Ym7pA",
      'Content-Type': "application/json"
    }
  })
);

export const getFareId = () => {
  let fareId;
  $.ajax({
    method: 'POST',
    url: 'https://api.uber.com/v1.2/requests/estimate',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsicmVxdWVzdCJdLCJzdWIiOiI2MWRlM2E2ZS1jM2ViLTRhMzAtOWJkOS0xNWQ5Y2Y1NjEyNzgiLCJpc3MiOiJ1YmVyLXVzMSIsImp0aSI6ImVjZmVjYTA1LWM1MjQtNGM2Zi05YjljLTk5Zjk1NzFiMzBiNCIsImV4cCI6MTQ4ODc3Mjk3MywiaWF0IjoxNDg2MTgwOTczLCJ1YWN0Ijoibkt5WERCTEFqa0dsekZsbWplY0R4MXNmMFFOVmlKIiwibmJmIjoxNDg2MTgwODgzLCJhdWQiOiJpVW1fcmhUT0xuWkxud3E0THl6UUxxMXBJMkJkMGEzUSJ9.nITy3IUeZwt4kffV9Cw3v5KTCFK75Ls_A3CxIYU7k32aAImCIaepVXQTZJ5D1RAxnotKUESmcJJwE_e-WFh7LWdfZ8Gtx7-NYLCWuDOmPoY_wDEG8nyNKgIGLWubyskcqyaE0YgHHp7wa_ZCTg-C-_2weBXaEjkfKU1YjQME4Hp0VeOhOZ6kSaGtXiec1orhfg2VthaZRwa9op9Nrl6Kk2nw6K2xuo7wMAZYw4rqXENYlG64j5YyxtIykfBdctKkul1EZoheWRCvVlShUsQE9Gz2DmeVJci9V_-uKOFlqdPttjB1hOjwV2qcJOWJh7TwHNpddbxjUvkWeASL6Ym7pA',
      'Content-Type': 'application/json'
    },
    processData: false,
    data: JSON.stringify({
      "start_latitude": 37.7752278,
      "start_longitude": -122.4197513,
      "end_latitude": 37.7773228,
      "end_longitude": -122.4272052
    })
  }).then(res => {
    fareId = res.fare.fare_id;
    return fareId;
  });
};

// 88cd9f03-399d-4c7b-b54e-6b85574a0e36

// cURL to get a fare_id
// curl -X POST \
//    -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsicmVxdWVzdCJdLCJzdWIiOiI2MWRlM2E2ZS1jM2ViLTRhMzAtOWJkOS0xNWQ5Y2Y1NjEyNzgiLCJpc3MiOiJ1YmVyLXVzMSIsImp0aSI6ImVjZmVjYTA1LWM1MjQtNGM2Zi05YjljLTk5Zjk1NzFiMzBiNCIsImV4cCI6MTQ4ODc3Mjk3MywiaWF0IjoxNDg2MTgwOTczLCJ1YWN0Ijoibkt5WERCTEFqa0dsekZsbWplY0R4MXNmMFFOVmlKIiwibmJmIjoxNDg2MTgwODgzLCJhdWQiOiJpVW1fcmhUT0xuWkxud3E0THl6UUxxMXBJMkJkMGEzUSJ9.nITy3IUeZwt4kffV9Cw3v5KTCFK75Ls_A3CxIYU7k32aAImCIaepVXQTZJ5D1RAxnotKUESmcJJwE_e-WFh7LWdfZ8Gtx7-NYLCWuDOmPoY_wDEG8nyNKgIGLWubyskcqyaE0YgHHp7wa_ZCTg-C-_2weBXaEjkfKU1YjQME4Hp0VeOhOZ6kSaGtXiec1orhfg2VthaZRwa9op9Nrl6Kk2nw6K2xuo7wMAZYw4rqXENYlG64j5YyxtIykfBdctKkul1EZoheWRCvVlShUsQE9Gz2DmeVJci9V_-uKOFlqdPttjB1hOjwV2qcJOWJh7TwHNpddbxjUvkWeASL6Ym7pA' \
//    -H 'Accept-Language: en_US' \
//    -H 'Content-Type: application/json' \
//    -d '{
//      "start_latitude": 37.7752278,
//      "start_longitude": -122.4197513,
//      "end_latitude": 37.7773228,
//      "end_longitude": -122.4272052
//    }' "https://api.uber.com/v1.2/requests/estimate"
