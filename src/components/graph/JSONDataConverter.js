function getDatasetfromJsonData(jsonData){
  return jsonData[0].scores;
};

function getLabels(dataset) {
  return Object.keys(dataset)
};

function getData(dataset) {
  return Object.keys(dataset).map(function(key) {
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

function validate(JSONData) {
  if (!JSONData) {
    throw('Cannot convert data: missing JSON data object')
  }
};

module.exports = function(JSONdata) {
  validate(JSONdata)
  var dataset = getDatasetfromJsonData(JSONdata);
  return chartData(dataset)
};
