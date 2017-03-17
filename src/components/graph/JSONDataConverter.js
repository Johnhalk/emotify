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
   var accumulatedEmotions = {
     totalAnger: 0,
     totalContempt: 0,
     totalDisgust: 0,
     totalFear: 0,
     totalHappiness: 0,
     totalNeutral: 0,
     totalSadness: 0,
     totalSurprise: 0,
   };

   dataset.forEach(function(object, index) {
     if (index !== dataset.length) {
       accumulatedEmotions.totalAnger += object.scores.anger
       accumulatedEmotions.totalContempt += object.scores.contempt
       accumulatedEmotions.totalDisgust += object.scores.disgust
       accumulatedEmotions.totalFear += object.scores.fear
       accumulatedEmotions.totalHappiness += object.scores.happiness
       accumulatedEmotions.totalNeutral += object.scores.neutral
       accumulatedEmotions.totalSadness += object.scores.sadness
       accumulatedEmotions.totalSurprise += object.scores.surprise
     }

   });
   var averagedEmotions = {
     anger:  accumulatedEmotions.totalAnger / dataset.length,
     contempt:  accumulatedEmotions.totalContempt / dataset.length,
     disgust:  accumulatedEmotions.totalDisgust / dataset.length,
     fear:  accumulatedEmotions.totalFear / dataset.length,
     happiness:  accumulatedEmotions.totalHappiness / dataset.length,
     neutral:  accumulatedEmotions.totalNeutral / dataset.length,
     sadness:  accumulatedEmotions.totalSadness / dataset.length,
     surprise:  accumulatedEmotions.totalSurprise / dataset.length,
   }
   return averagedEmotions
 }

module.exports = function(JSONdata) {
  checkForErrors(JSONdata)
  var dataset = getDatasetfromJsonData(JSONdata);
  return chartData(dataset);
};
