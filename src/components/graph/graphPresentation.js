import React, { Component } from 'react';

var RadarChart = require("react-chartjs").Radar;

const GraphPresentation = ({chartData, width, height}) => {
  return <RadarChart data={chartData} width={width} height={height} />
};

export default GraphPresentation;
