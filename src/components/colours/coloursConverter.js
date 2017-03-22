import * as CONF from './coloursSchema';
import {emotionAverager} from '../data/emotionScores'
import {getLargestEmotion} from '../data/emotionScores'
import {updateColour} from '../../services/lifxAPI'

function adjustLightnessToEmotionIntensity(maxEmotion, averageEmotion){
  var colour = CONF.EMOTION[maxEmotion];
  var emotionIntensity = averageEmotion[maxEmotion];
  colour.brightness = Math.min(Math.max(colour.brightness * emotionIntensity, 40), 95);
  return colour;
}

module.exports = function(dataset, api) {
  var averageEmotion = emotionAverager(dataset);
  var maxEmotion = getLargestEmotion(averageEmotion);
  var colour = adjustLightnessToEmotionIntensity(maxEmotion, averageEmotion);
  if (api === undefined) { updateColour(colour)}
  return colour
};
