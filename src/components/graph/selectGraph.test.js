import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import SelectGraph from './selectGraph';

describe('Select Graph', () => {
  it('it renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<select />, div);
    });

  it('it can show a radar graph', () =>{
    const graph = render(<option value = 'radar'> Radar </option>)
    expect(graph).toExist
  });

  it('it can show a radar graph', () =>{
    const graph = render(<option value = 'timeSeries'> Time Series </option>)
    expect(graph).toExist
  });

  it('changes depending on graph type', () => {
    var graph = handleChange(radar)
    expect(graph).toContain('radar')
  });
});
