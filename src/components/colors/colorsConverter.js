import * as CONF from './colorsSchema';
import {emotionAverager} from '../data/emotionScores'
import {getLargestEmotion} from '../data/emotionScores'

function adjustLightnessToEmotionIntensity(maxEmotion, averageEmotion){
  var color = CONF.EMOTION[maxEmotion];
  var emotionIntensity = averageEmotion[maxEmotion];
  color.lightness = Math.min(Math.max(color.lightness * emotionIntensity, 10), 100);
  return color;
}

module.exports = function(dataset) {
  var averageEmotion = emotionAverager(dataset);
  var maxEmotion = getLargestEmotion(averageEmotion);
  return adjustLightnessToEmotionIntensity(maxEmotion, averageEmotion);
};
