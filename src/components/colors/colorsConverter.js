import * as CONF from './colorsSchema';
function adjustLightnessToEmotionIntensity(emotion, jsonData){
  var color = CONF.EMOTION[emotion]
  var emotionIntensity = jsonData[0].scores[emotion]
  color.lightness = color.lightness * emotionIntensity
  return color
}

function findLargestEmotion(jsonData) {
  var emotions = jsonData[0].scores
  delete emotions['neutral']
  var emotionsList =  Object.keys(emotions)

  var higherEmotion = emotionsList.reduce(function(higherEmotion, currEmotion) {
      return Number(emotions[higherEmotion]) > Number(emotions[currEmotion]) ? higherEmotion : currEmotion
  });

  return higherEmotion
};

module.exports = function(jsonData) {
  var largestEmotion = findLargestEmotion(jsonData)
  return adjustLightnessToEmotionIntensity(largestEmotion, jsonData)

};
