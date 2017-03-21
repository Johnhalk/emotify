import React, { Component } from 'react';
import coloursConverters from './coloursConverter';

const ColoursPresentation = ({data, width, height}) => {
  var colour = coloursConverters(data)
  var style = {
    backgroundColor: `hsl(${colour.hue}, ${colour.saturation}%,  ${colour.brightness}%)`,
    width: 300,
    height: 300
  }
  return (
    <div style={style}></div>
    )
};

export default ColoursPresentation;
