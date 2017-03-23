import * as CONF from './coloursSchema';
import {emotionAverager} from '../emotionScores'
import {getLargestEmotion} from '../emotionScores'
import {updateColour} from '../../services/lifxAPI'

function adjustLightnessToEmotionIntensity(maxEmotion, averageEmotion){
  var colour = CONF.EMOTION[maxEmotion];
  var emotionIntensity = averageEmotion[maxEmotion];
  colour.brightness = Math.min(Math.max(colour.brightness * emotionIntensity, 40), 95);
  return colour;
}

export function coloursConverter (dataset, api) {
  var averageEmotion = emotionAverager(dataset);
  var maxEmotion = getLargestEmotion(averageEmotion);
  var colour = adjustLightnessToEmotionIntensity(maxEmotion, averageEmotion);
  if (api === undefined) { updateColour(colour)}
  return colour
};
