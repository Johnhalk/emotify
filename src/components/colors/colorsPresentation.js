import React, { Component } from 'react';
import ColorsConverter from './colorsConverter';

const ColorsPresentation = ({data, width, height}) => {
  var color = ColorsConverter(data)
  var style = {
    backgroundColor: `hsl(${color.hue}, ${color.saturation}%,  ${color.lightness}%)`,
    width: width,
    height:height
  }
  return (
    <div style={style}></div>
    )
};

export default ColorsPresentation;
