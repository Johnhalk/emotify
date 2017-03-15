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

function isValid(JSONData) {

};

function checkForErrors(JSONData) {
  if (!JSONData) {
    throw('Cannot convert data: missing JSON data object');
  }

  if (!isValid(JSONData)) {
    throw('Cannot convert data: JSON data object not correct format');
  }
};

module.exports = function(JSONdata) {
  checkForErrors(JSONdata)
  var dataset = getDatasetfromJsonData(JSONdata);
  console.log("JSONDataConverter", chartData(dataset));
  return chartData(dataset);
};
