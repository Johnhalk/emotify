import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import WebcamPresentation from '../snapshot/camera'

describe('Webcam presentation', () => {
  let activateWebcam = jest.fn();
  let webcamPresentation = render(<WebcamPresentation handleClickStart={activateWebcam}/>)

  beforeEach(function(){
    activateWebcam.mockClear();
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WebcamPresentation />, div);
  });

  it('renders a start <button>', () =>{
    expect(webcamPresentation.find("start")).toExist
  });

  it('handleClickStart calls activateWebcam', () =>{
    webcamPresentation.simulate('click', 'start')
    expect(activateWebcam).toBeCalled();
  });

  it('renders a video', () =>{
    expect(webcamPresentation.find('video')).toExist
  });

  // it('contains text \'Webcam\'', () =>{
  //   const webcam = shallow(<Webcam />);
  //   expect(webcam.find('button').text()).toEqual('Analyse')
  // });

});
