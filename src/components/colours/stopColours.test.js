import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import StopColours from './stopColours'

describe('Stop Button', () => {
  it('is renders a stop button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StopColours />, div);
  });

  it('renders a <button>', () =>{
    const stopColours = shallow(<StopColours />);
    expect(stopColours.find('Stop')).toExist
  });

});
