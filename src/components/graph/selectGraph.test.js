import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import SelectGraph from './selectGraph';

describe('Select Graph', () => {

  it ('selects graph based on value', () => {
    const div = document.createElement('div');

    var selectGraph = ReactDOM.render(<SelectGraph  />, div)
    console.log(selectGraph.handleChange('radar'))
    expect(graphContainer.state.graphType).toEqual('radar')
  })

  it ('', () => {

  })




});
