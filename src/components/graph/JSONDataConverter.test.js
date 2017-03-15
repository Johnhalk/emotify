var JSONDataConverter = require('./JSONDataConverter');

describe('JSONDataConverter', () => {
  it('converts an MCS Emotion API JSON response to a ChartJS data object', () => {
    var jsonData = JSON.parse('[{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000008362581,"contempt":0.00023066772,"disgust":0.00000190693913,"fear":0.00000262125877,"happiness":0.0000301946984,"neutral":0.000008362581,"sadness":0.000635955657,"surprise":0.0000298200466}}]');
    var expectedObj = JSON.parse('{"labels":["anger","contempt","disgust","fear","happiness","neutral","sadness","surprise"],"datasets":[{"data":[0.000008362581,0.00023066772,0.00000190693913,0.00000262125877,0.0000301946984,0.000008362581,0.000635955657,0.0000298200466]}]}')
    expect(JSONDataConverter(jsonData)).toEqual(expectedObj);
  });

  it('fails if there is no argument', () => {
    expect(function(){JSONDataConverter()}).toThrow('Cannot convert data: missing JSON data object');
  });
});
