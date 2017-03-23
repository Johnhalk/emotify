export function callAPI(file, stub) {
  var request = new Request('https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?', {
    method: 'POST',
    mode: 'cors',
    body: file,
    headers: new Headers({
      "Content-Type": "application/octet-stream",
      "Ocp-Apim-Subscription-Key": process.env.REACT_APP_MSC_SECRET
    })
  });
  return fetch(request)
    .then((response) => {
      return response.json();
  })
    .then((payload) => {
      return Promise.resolve(payload);
  })
}
