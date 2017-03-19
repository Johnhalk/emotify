// https://www.w3schools.com/colors/colors_hsl.asp
import * as CONF from './colorsSchema';
import ColorsConverter from './colorsConverter';
// anger contempt disgust fear happiness neutral sadness surprise
describe('ColorsConverter', () => {
  var jsonData
  beforeEach(() => {
    jsonData = [{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000000001,"contempt":0.000000001,"disgust":0.000000001,"fear":0.000000001,"happiness":0.000000001,"neutral":0.000000001,"sadness":0.000000001,"surprise":0.000000001}}];
  })

  it('converts an MCS Emotion API JSON response to a color', () => {
    jsonData[0].scores.happiness = 1
    var colorExpected = {
      hue: 59,
      saturation: 100,
      lightness: 50
    }

    expect(ColorsConverter(jsonData)).toEqual(colorExpected);
  });

  it('converts happiness according to schema', () => {
    var emotionsList =  Object.keys(jsonData[0].scores)
    var index = emotionsList.indexOf('neutral');
    emotionsList.splice(index, 1);

    emotionsList.forEach(function(emotion){
      var original = jsonData[0].scores[emotion]
      jsonData[0].scores[emotion] = 1

      expect(ColorsConverter(jsonData)).toEqual(CONF.EMOTION[emotion]);
      jsonData[0].scores[emotion] = original
    })
  });


  xit('average on multiple faces', () => {})

  it('change lightness based on emotion intensity', () => { //not saturation, it can mix up colors
    jsonData[0].scores.happiness = 0.5
    var colorExpected = {
      hue: 59,
      saturation: 100,
      lightness: 25
    }

    expect(ColorsConverter(jsonData)).toEqual(colorExpected);
  })

});
