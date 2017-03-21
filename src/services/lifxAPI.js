export function updateColour(colour) {
  console.log(colour);
  var request = new Request('https://api.lifx.com/v1/lights/all/state?', {
    method: 'PUT',
    mode: 'cors',
    body: colour,
    headers: new Headers({
      "Accept": "*/*",
      "Authorization" : "Bearer c19dd2b0a1fe3916afbc45116b6b153dac02e5c784c31a5e5cc0900b60dbe8fd",
      "Content-Type": "application/json",
      "Content-Length": 56,
      "Accept-Encoding": "gzip, deflate"
    })
  })
  return fetch(request)
    .then((response) => {
      console.log(response);
  })
    .catch((err) => {
      console.log(err);
  });
}

export function togglePower() {
  var request = new Request('https://api.lifx.com/v1/lights/all/toggle', {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({
      "Authorization" : "Bearer c19dd2b0a1fe3916afbc45116b6b153dac02e5c784c31a5e5cc0900b60dbe8fd"
    })
  })
  return fetch(request)
    .then((response) => {
      console.log(response);
  })
    .catch((err) => {
      console.log(err);
  });
}
