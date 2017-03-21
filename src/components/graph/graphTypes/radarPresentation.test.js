import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import RadarPresentation from './radarPresentation';
var jsdom = require("jsdom");


describe('RadarPresentation', () => {
  it('renders without crashing', () => {
    var jsonData = {"datasets": [{"data": [0.08077703189702896, 0.01471538897610642, 0.11032597376841269, 0.13458586104152429, 0.17748477807353502, 0.1194413753618961, 0.17306394622506927, 0.1896056243283232]}], "labels": ["anger", "contempt", "disgust", "fear", "happiness", "neutral", "sadness", "surprise"]}
    const graph = mount(<RadarPresentation data={jsonData} width={600} height={600}   />)
    expect(graph).toExist
  });

});
