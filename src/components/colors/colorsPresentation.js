import React, { Component } from 'react';
import colorsConverters from './colorsConverter';

const ColorsPresentation = ({data, width, height}) => {
  var color = colorsConverters(data)
  var style = {
    backgroundColor: `hsl(${color.hue}, ${color.saturation}%,  ${color.lightness}%)`,
    width: 300,
    height: 300
  }
  return (
    <div style={style}></div>
    )
};

export default ColorsPresentation;
