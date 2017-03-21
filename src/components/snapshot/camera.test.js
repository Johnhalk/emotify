import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import Camera from './camera'

describe('Webcam presentation', () => {
  // let activateWebcam = jest.fn();
  let camera = render(<Camera handleClickStart={activateWebcam}/>)
  //
  // beforeEach(function(){
  //   activateWebcam.mockClear();
  // })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Camera />, div);
  });

  it('renders a start <button>', () =>{
    expect(webcamPresentation.find("start")).toExist
  });

  xit('handleClickStart calls activateWebcam', () =>{
    webcamPresentation.simulate('click', 'start')
    expect(activateWebcam).toBeCalled();
  });

  it('renders a video', () =>{
    console.log(webcamPresentation.find('video'))
    expect(webcamPresentation.find('video')).toExist
  });

  // it('contains text \'Webcam\'', () =>{
  //   const webcam = shallow(<Webcam />);
  //   expect(webcam.find('button').text()).toEqual('Analyse')
  // });

});
