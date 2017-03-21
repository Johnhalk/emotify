import {positiveIndexer} from './indexer'
import {emotionAverager} from './emotionScores'

function getLabels(dataset) {
  return Object.keys(dataset).sort()
};

function getData(dataset) {
  return getLabels(dataset).map(function(key) {
    return dataset[key];
  });
};

function chartData(dataset, graphType) {
  switch (graphType) {
    case 'radar':
        return {
          labels: getLabels(dataset),
          datasets: [{
              data: getData(dataset)
          }]
        }
      break;
      case 'positivity':
        return {
          date: new Date(),
          positivity: positiveIndexer(dataset)
        };
    }
  };

function checkForErrors(JSONData) {
  if (!JSONData) {
    throw('Cannot convert data: missing JSON data object');
  }
};

module.exports = function(JSONdata, graphType) {
  checkForErrors(JSONdata)
  var dataset = emotionAverager(JSONdata);
  return chartData(dataset, graphType);
};
