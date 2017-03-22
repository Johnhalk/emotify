import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import SelectGraph from './selectGraph';


describe('Select Graph', () => {

  xit ('sends graphType up as props', () => {
    const myMock = jest.fn()
    myMock.mockReturnValue('positivity')
    const div = document.createElement('div');

    var selectGraph = ReactDOM.render(<SelectGraph />, div)
    console.log(selectGraph.handleChange(myMock()))
    console.log(select)
    expect(selectGraph.props).toEqual()
  })
});
