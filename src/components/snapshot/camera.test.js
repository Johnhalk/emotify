import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import Camera from './camera'

describe('Webcam presentation', () => {
  let webcamPresentation = render(<Camera handleClickStart={activateWebcam}/>)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Camera />, div);
  });

  it('renders a start <button>', () =>{
    expect(webcamPresentation.find("start")).toExist
  });

  xit('handleClickStart calls activateWebcam', () =>{
    let activateWebcam = jest.fn();
    var camera = render(<Camera handleClickStart={activateWebcam}/>)
    activateWebcam.mockClear();
    camera.simulate('click', 'start')
    expect(activateWebcam).toBeCalled();
  });

  it('renders a video', () =>{
    console.log(webcamPresentation.find('video'))
    expect(webcamPresentation.find('video')).toExist
  });
});
