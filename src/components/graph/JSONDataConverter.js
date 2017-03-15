var JSONDataConverter = (function () {
  var getDatasetfromJsonData = function(jsonData){
    return jsonData[0].scores;
  };

  var getLabels = function(dataset) {
    return Object.keys(dataset)
  };

  var getData = function(dataset) {
    return Object.keys(dataset).map(function(key) {
      return dataset[key];
    });
  };

  var chartData = function(dataset) {
      return {
        labels: getLabels(dataset),
        datasets: [{
            data: getData(dataset)
        }]
      }
  }

  return function(JSONdata) {
    var dataset = getDatasetfromJsonData(JSONdata);
    return chartData(dataset)
  }
}());

export default JSONDataConverter
