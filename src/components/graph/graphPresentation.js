import React, { Component } from 'react';
var RadarChart = require("react-chartjs").Radar;

const GraphPresentation = ({data, width, height}) => {
  return <RadarChart data={data} width={width} height={height} redraw />
};

export default GraphPresentation;
