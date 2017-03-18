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


function getDatasetfromJsonData (dataset) {
  var faceNumber = dataset.length
  var emotions = Object.keys(dataset[0].scores)

  var averageEmotions = {}
  emotions.forEach(function(emotion) {
    averageEmotions[emotion] = 0
    dataset.forEach(function(face) {
      averageEmotions[emotion] += face.scores[emotion]
    })
    averageEmotions[emotion] = averageEmotions[emotion] / faceNumber
  })

  return averageEmotions
}



module.exports = function(JSONdata) {
  checkForErrors(JSONdata)
  var dataset = getDatasetfromJsonData(JSONdata);
  return chartData(dataset);
};
