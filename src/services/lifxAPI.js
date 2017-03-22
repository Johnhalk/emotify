export function updateColour(colour) {
  var request = new Request('https://api.lifx.com/v1/lights/all/state?', {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify({
      "power": "on",
      "color": colour.type + " hue:" + colour.hue/100 + " saturation: " + colour.saturation/100,
      "brightness": colour.brightness/100,
      "duration": 1
    }),
    headers: new Headers({
      "Accept": "*/*",
      "Authorization" : 'Bearer ' + process.env.REACT_APP_LIFX_SECTRET,
      "Content-Type": "application/json",
      "Content-Length": 56,
      "Accept-Encoding": "gzip, deflate"
    })
  })
  return fetch(request)
    .catch((err) => {
      console.log(err);
  });
}

export function togglePower() {
  var request = new Request('https://api.lifx.com/v1/lights/all/toggle', {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({
      "Authorization" : 'Bearer ' + process.env.REACT_APP_LIFX_SECTRET
    })
  })
  return fetch(request)
    .catch((err) => {
      console.log(err);
  });
}
