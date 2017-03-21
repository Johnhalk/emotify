import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import GraphContainer from './graphContainer';
var JSONDataConverter = require('./JSONDataConverter');
var RadarChart = require("react-chartjs").Radar;
import RadarPresentation from './graphTypes/radarPresentation'
import PositivityIndex from './graphTypes/positivityIndex'



describe('Graph container', () => {

  it('renders a radar graph', () => {
    var jsonData = JSONDataConverter([{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000008362581,"contempt":0.00023066772,"disgust":0.00000190693913,"fear":0.00000262125877,"happiness":0.0000301946984,"neutral":0.000008362581,"sadness":0.000635955657,"surprise":0.0000298200466}}], 'radar')
    const graph = mount(<RadarPresentation data={jsonData} width={600} height={600}/>);
    expect(graph).toExist
  });

    it('renders a time series graph', () => {
      var jsonData = JSONDataConverter([{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000008362581,"contempt":0.00023066772,"disgust":0.00000190693913,"fear":0.00000262125877,"happiness":0.0000301946984,"neutral":0.000008362581,"sadness":0.000635955657,"surprise":0.0000298200466}}], 'timeSeries')
      const graph = mount(<PositivityIndex data={jsonData} interval={1000}/>);
      expect(graph).toExist
    });

    it('renders a SelectGraph', () => {
      const div = document.createElement('div');
      ReactDOM.render(<SelectGraph onChange = 'radar'/>, div);
    });
});
