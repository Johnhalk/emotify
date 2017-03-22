import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ColoursPresentation from './coloursPresentation';
var jsdom = require("jsdom");


describe('ColoursPresentation', () => {
  it('renders without crashing', () => {
    var jsonData = JSON.parse('[{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000008362581,"contempt":0.00023066772,"disgust":0.00000190693913,"fear":0.00000262125877,"happiness":0.0000301946984,"neutral":0.000008362581,"sadness":0.000635955657,"surprise":0.0000298200466}}]');
    const colours = mount(<ColoursPresentation data={jsonData} width={600} height={600}  api={true} />)
    expect(colours).toExist
  });

});
