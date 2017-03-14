var React = require('react');
var LineChart = require("react-chartjs").Line;

var jsonData = JSON.parse('[{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000008362581,"contempt":0.00023066772,"disgust":0.00000190693913,"fear":0.00000262125877,"happiness":0.0000301946984,"neutral":0.999060452,"sadness":0.000635955657,"surprise":0.0000298200466}}]')
var chartData = jsonData[0].scores

var Graph = React.createClass({
  render: function() {
    return  <LineChart data={chartData} width="600" height="250"/>
    // return <p> Hey {JSON.stringify(chartData)} </p>
  }
});

export default Graph;
