import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import StartButton from './startButton'

describe('Start Button', () => {
  it('is renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StartButton />, div);
  });

  it('renders a <button>', () =>{
    const startButton = shallow(<StartButton />);
    expect(startButton.find('Start')).toExist
  });

});
