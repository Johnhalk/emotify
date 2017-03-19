import * as CONF from './colorsSchema';

function findLargestEmotion(jsonData) {
  var emotions = jsonData[0].scores
  var emotionsList =  Object.keys(emotions)
  
  var higherEmotion = emotionsList.reduce(function(higherEmotion, currEmotion) {
    return Number(emotions[higherEmotion]) > Number(emotions[currEmotion]) ? higherEmotion : currEmotion
  });

  return higherEmotion
};

module.exports = function(jsonData) {
  var largestEmotion = findLargestEmotion(jsonData)
  return CONF.EMOTION[largestEmotion]

};
