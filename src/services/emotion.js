export function callAPI(file) {
  var request = new Request('https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?', {
    method: 'POST',
    mode: 'cors',
    body: file,
    headers: new Headers({
      "Content-Type": "application/octet-stream",
      "Ocp-Apim-Subscription-Key": "991aa06967c04a8dbd519baee38b07be"
    })
  })
  return fetch(request)
  .then((response) => {
    return response.json();
  })
  .then((payload) => {
    console.log(payload)
    console.log(JSON.stringify(payload))
  })
}