import React, { Component } from 'react';
// import JSONDataConverter from './JSONDataConverter';

var JSONDataConverter = require('./JSONDataConverter');


var RadarChart = require("react-chartjs").Radar;

const GraphPresentation = ({JSONData, width, height}) => {
  return <RadarChart data={JSONDataConverter(JSONData)} width={width} height={height} />
};

export default GraphPresentation;
