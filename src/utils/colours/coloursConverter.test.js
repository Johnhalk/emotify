import * as CONF from './coloursSchema';
import {coloursConverter} from './coloursConverter';

describe('ColoursConverter', () => {
  it('converts an MCS Emotion API JSON response to a color', () => {
    let jsonData = [{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.5,"contempt":0.000000001,"disgust":0.000000001,"fear":0.000000001,"happiness":0.000000001,"neutral":0.000000001,"sadness":0.000000001,"surprise":0.000000001}}];
    let colorExpected = {
      hue: 0,
      saturation: 100,
      brightness: 50,
      type: "red"
    }
    expect(coloursConverter(jsonData, true)).toEqual(colorExpected);
  });

  xit('converts happiness according to schema', () => {
    let jsonData = [{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.5,"contempt":0.000000001,"disgust":0.000000001,"fear":0.000000001,"happiness":0.000000001,"neutral":0.000000001,"sadness":0.000000001,"surprise":0.000000001}}];
    let emotionsList =  Object.keys(jsonData[0].scores)
    let index = emotionsList.indexOf('neutral');
    emotionsList.splice(index, 1);

    emotionsList.forEach(function(emotion){
      let original = jsonData[0].scores[emotion]
      jsonData[0].scores[emotion] = 1

      expect(coloursConverter(jsonData)).toEqual(CONF.EMOTION[emotion]);
      jsonData[0].scores[emotion] = original
    })
  });


  xit('average on multiple faces', () => {})

  it('change lightness based on emotion intensity', () => { //not saturation, it can mix up colors
    let data = [{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000000001,"contempt":0.000000001,"disgust":0.000000001,"fear":0.000000001,"happiness":0.999999,"neutral":0.000000001,"sadness":0.000000001,"surprise":0.000000001}}];
    let colourExpected = {
      brightness: 95,
      hue: 59,
      saturation: 100,
      type: "yellow"
    }

    expect(coloursConverter(data, true)).toEqual(colourExpected);
  })

});
