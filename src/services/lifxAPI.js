function turnOn() {
  var request = new Request('https://api.lifx.com/v1/lights/all/toggle', {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({
      "Authorization: Bearer YOUR_APP_TOKEN",
    })
  })
  return fetch(request)
    .then((response) => {
      console.log(response);
      return
  })
    .then((payload) => {
      console.log(payload);
      return
  })
}

function updateColour(hue, brightness, saturation) {
  var request = new Request('https://api.lifx.com/v1/lights/all/state', {
    method: 'POST',
    mode: 'cors',
    body: {
      "power": "on",
      "hue": hue,
      "saturation": brightness,
      "brightness": saturation,
      "duration": 5,
    }
    headers: new Headers({
      "Authorization: Bearer YOUR_APP_TOKEN",
    })
  })
  return fetch(request)
    .then((response) => {
      console.log(response);
      return
  })
    .then((payload) => {
      console.log(payload);
      return
  })
}
