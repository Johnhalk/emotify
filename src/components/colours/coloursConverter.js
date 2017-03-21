import * as CONF from './coloursSchema';
import {emotionAverager} from '../data/emotionScores'
import {getLargestEmotion} from '../data/emotionScores'
import {updateColour} from '../../services/lifxAPI'

function adjustLightnessToEmotionIntensity(maxEmotion, averageEmotion){
  var colour = CONF.EMOTION[maxEmotion];
  var emotionIntensity = averageEmotion[maxEmotion];
  colour.brightness = Math.min(Math.max(colour.brightness * emotionIntensity, 70), 100);
  return colour;
}

module.exports = function(dataset) {
  var averageEmotion = emotionAverager(dataset);
  var maxEmotion = getLargestEmotion(averageEmotion);
  var colour = adjustLightnessToEmotionIntensity(maxEmotion, averageEmotion);
  updateColour(JSON.stringify({
    "power": "on",
    "color": colour.type,
    "saturation": colour.saturation/100,
    "brightness": colour.brightness/100,
    "duration": 1
  }))
  return colour
};
