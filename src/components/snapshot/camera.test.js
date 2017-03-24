import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import Camera from './camera'

describe('Webcam presentation', () => {
  let webcamPresentation = shallow(<Camera/>)

  it('renders a start <button>', () =>{
    expect(webcamPresentation.find("start")).toExist
  });

  it('renders a video', () =>{
    expect(webcamPresentation.find('video')).toExist
  });
});
