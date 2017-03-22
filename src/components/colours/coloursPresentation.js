import React, { Component } from 'react';
import coloursConverters from './coloursConverter';

const ColoursPresentation = ({data, width, height, api}) => {
  if (api === undefined) {
    var colour = coloursConverters(data)
  } else {
    var colour = coloursConverters(data, true)
  }
  let style = {
    backgroundColor: `hsl(${colour.hue}, ${colour.saturation}%,  ${colour.brightness}%)`,
    width: 300,
    height: 300
  }
  return (
    <div style={style}></div>
    )
};

export default ColoursPresentation;
