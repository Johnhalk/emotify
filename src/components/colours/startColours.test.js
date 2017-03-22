import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import StartColours from './startColours'

describe('Start Button', () => {
  it('is renders a start button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StartColours />, div);
  });

  it('renders a <button>', () =>{
    const startColours = shallow(<StartColours />);
    expect(startColours.find('Start')).toExist
  });

});
