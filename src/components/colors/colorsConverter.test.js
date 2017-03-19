// https://www.w3schools.com/colors/colors_hsl.asp
import * as CONF from './colorsSchema';

import ColorsConverter from './colorsConverter';
// anger contempt disgust fear happiness neutral sadness surprise
describe('ColorsConverter', () => {
  it('converts an MCS Emotion API JSON response to a color', () => {
    var jsonData = [{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000008362581,"contempt":0.00023066772,"disgust":0.00000190693913,"fear":0.00000262125877,"happiness":1,"neutral":0.000008362581,"sadness":0.000635955657,"surprise":0.0000298200466}}];
    var colorExpected = {
      hue: 59,
      saturation: 100,
      lightness: 50
    }

    expect(ColorsConverter(jsonData)).toEqual(colorExpected);
  });

  it('converts happiness according to schema', () => {
    var jsonData = [{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000008362581,"contempt":0.00023066772,"disgust":0.00000190693913,"fear":0.00000262125877,"happiness":1,"neutral":0.000008362581,"sadness":0.000635955657,"surprise":0.0000298200466}}];
    expect(ColorsConverter(jsonData)).toEqual(CONF.EMOTION.happiness);
  });


  xit('average on multiple faces', () => {})
});
