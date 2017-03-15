// export function callAPI (file) {
//   console.log('HERE')
//   console.log(file)
//       $.ajax({
//           url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?",
//           beforeSend: function(xhrObj){
//               xhrObj.setRequestHeader("Content-Type","application/octet-stream");
//               xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","991aa06967c04a8dbd519baee38b07be");
//           },
//           type: "POST",
//           data: file,
//           processData: false
//       })
//       .done(function(response) {
//         console.log("HERE2")
//           ProcessResult(response);
//       })
//       .fail(function(error) {
//           console.log(error)
//           console.log(error.getAllResponseHeaders());
//           console.log("HERE3")
//       });
//   };
//
//   function ProcessResult(response) {
//       var data = JSON.stringify(response);
//       console.log(data)
//   }

export function callAPI(file) {
  console.log(file)
  return fetch('http://ip.jsontest.com', {
    headers: new Headers({
      'Content-Type': 'application/json',
    })
  })
  .then((response) => console.log(response))
  .then((payload) => {
    console.log(payload)
    return Promise.resolve(payload.ip);
  });
}
