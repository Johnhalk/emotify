import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import StopButton from './stopButton'

describe('Stop Button', () => {
  it('is renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StopButton />, div);
  });

  it('renders a <button>', () =>{
    const stopButton = shallow(<StopButton />);
    expect(stopButton.find('Stop')).toExist
  });

});
