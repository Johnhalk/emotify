function getDatasetfromJsonData(jsonData){
  return jsonData[0].scores;
};

function getLabels(dataset) {
  return Object.keys(dataset).sort()
};

function getData(dataset) {
  return getLabels(dataset).map(function(key) {
    return dataset[key];
  });
};

function chartData(dataset) {
    return {
      labels: getLabels(dataset),
      datasets: [{
          data: getData(dataset)
      }]
    }
};

function checkForErrors(JSONData) {
  if (!JSONData) {
    throw('Cannot convert data: missing JSON data object');
  }
};

module.exports = function(JSONdata) {
  checkForErrors(JSONdata)
  var dataset = getDatasetfromJsonData(JSONdata);
  return chartData(dataset);
};


 var multi_face = JSON.parse('[{"faceRectangle":{"height":64,"left":92,"top":31,"width":64},"scores":{"anger":0.009464583,"contempt":0.00514136534,"disgust":0.009724874,"fear":0.8031377,"happiness":0.000654127041,"neutral":0.0181976222,"sadness":0.0309382882,"surprise":0.122741394}},{"faceRectangle":{"height":62,"left":177,"top":140,"width":62},"scores":{"anger":0.00000215679233,"contempt":0.0000374046977,"disgust":0.00018394916,"fear":0.000370120455,"happiness":0.00000117360321,"neutral":0.0122825429,"sadness":0.9870647,"surprise":0.0000579475636}},{"faceRectangle":{"height":60,"left":95,"top":142,"width":60},"scores":{"anger":7.343825e-12,"contempt":5.385228e-13,"disgust":2.74761359e-11,"fear":1.45800987e-13,"happiness":1,"neutral":9.537651e-11,"sadness":8.355963e-13,"surprise":1.77664927e-9}},{"faceRectangle":{"height":59,"left":11,"top":142,"width":59},"scores":{"anger":0.0000439515825,"contempt":0.0000055311184,"disgust":0.000263027323,"fear":0.00151374482,"happiness":0.000266454415,"neutral":0.000255819876,"sadness":0.00000316210958,"surprise":0.9976483}},{"faceRectangle":{"height":58,"left":12,"top":29,"width":58},"scores":{"anger":0.1422279,"contempt":0.05332158,"disgust":0.0277194921,"fear":0.00249316776,"happiness":0.06367651,"neutral":0.675339341,"sadness":0.0180415642,"surprise":0.017180413}},{"faceRectangle":{"height":54,"left":178,"top":37,"width":54},"scores":{"anger":0.3329236,"contempt":0.0297864527,"disgust":0.6240645,"fear":4.33214e-7,"happiness":0.000310403382,"neutral":0.0105729261,"sadness":0.00233596284,"surprise":0.00000568962969}}]')
