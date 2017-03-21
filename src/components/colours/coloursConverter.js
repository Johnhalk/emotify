import * as CONF from './coloursSchema';
import {emotionAverager} from '../data/emotionScores'
import {getLargestEmotion} from '../data/emotionScores'
import {updateColour} from '../../services/lifxAPI'

function adjustLightnessToEmotionIntensity(maxEmotion, averageEmotion){
  var colour = CONF.EMOTION[maxEmotion];
  var emotionIntensity = averageEmotion[maxEmotion];
  colour.lightness = Math.min(Math.max(colour.lightness * emotionIntensity, 10), 100);
  return colour;
}

module.exports = function(dataset) {
  var averageEmotion = emotionAverager(dataset);
  var maxEmotion = getLargestEmotion(averageEmotion);
  return adjustLightnessToEmotionIntensity(maxEmotion, averageEmotion);
};
