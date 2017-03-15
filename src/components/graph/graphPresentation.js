import React, { Component } from 'react';
// import JSONDataConverter from './JSONDataConverter';

var JSONDataConverter = require('./JSONDataConverter');


var RadarChart = require("react-chartjs").Radar;

const GraphPresentation = ({data, width, height}) => {
  console.log("GraphPresentation", data)
  return <RadarChart data={JSONDataConverter(data)} width={width} height={height} redraw />
};

export default GraphPresentation;
