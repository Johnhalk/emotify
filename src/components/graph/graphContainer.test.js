import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import GraphContainer from './graphContainer';
import {dataConverter}  from '../../utils/graph/chartDataConverter'

describe('Graph container', () => {
  it ('default graphType of radar', () => {
    var data = [{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000008362581,"contempt":0.00023066772,"disgust":0.00000190693913,"fear":0.00000262125877,"happiness":0.0000301946984,"neutral":0.000008362581,"sadness":0.000635955657,"surprise":0.0000298200466}}]
    const div = document.createElement('div');
    var graphContainer = ReactDOM.render(<GraphContainer data={data} />, div)
    expect(graphContainer.state.graphType).toEqual('radar')
  })

  it ('switches graph based on graphType', () => {
    var data = [{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000008362581,"contempt":0.00023066772,"disgust":0.00000190693913,"fear":0.00000262125877,"happiness":0.0000301946984,"neutral":0.000008362581,"sadness":0.000635955657,"surprise":0.0000298200466}}]
    const div = document.createElement('div');
    var graphContainer = ReactDOM.render(<GraphContainer data={data} />, div)
    graphContainer.changeGraphType('positivity')
    expect(graphContainer.state.graphType).toEqual('positivity')
  })

});
