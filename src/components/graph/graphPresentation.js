import React, { Component } from 'react';
var JSONDataConverter = require('./JSONDataConverter');
var RadarChart = require("react-chartjs").Radar;

const GraphPresentation = ({data, width, height}) => {
  return <RadarChart data={JSONDataConverter(data)} width={width} height={height} redraw />
};

export default GraphPresentation;
