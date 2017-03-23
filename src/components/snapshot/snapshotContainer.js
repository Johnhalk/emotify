import React, { Component } from 'react';
import Camera from './camera';
import { convertToBlob } from './imageEncodingConverter'
import { Button } from 'react-bootstrap';

class SnapshotContainer extends Component {
  constructor() {
    super()
    this.state = {
      buttonClicked: false,
      autoCall: null,
      videoStream: null
    }
  }

  setButtonClickedTrue = () => {
    this.setState({buttonClicked: true})
  }

  setButtonClickedFalse = () => {
    this.setState({buttonClicked: false})
    clearInterval(this.state.autoCall)
    this.state.videoStream.getTracks()[0].stop();
  }

  handleSnapshot = (imageBase64) => {
    var blob = convertToBlob(imageBase64)
    this.props.onChange(blob)
  }

  handleCall = (autoCall) => {
    this.setState({autoCall: autoCall})
  }

  handleStream = (videoStream) => {
    this.setState({videoStream: videoStream})
  }

  handleCameraButton = () => {
    this.state.buttonClicked ? this.setButtonClickedFalse() : this.setButtonClickedTrue()
  }

  render = () => {
    if (this.state.buttonClicked) {
      var camera = <Camera onStream={this.handleStream} onCall={this.handleCall} onNewSnapshot={this.handleSnapshot} interval={this.props.interval} />
    } else {
      var camera;
    }

    let cameraButtonText = this.state.buttonClicked ? "Stop" : "Start"
    let cameraButtonClass =  this.state.buttonClicked ? "danger" : "success"

    return (
        <div>
          <Button bsStyle={cameraButtonClass} block  onClick={this.handleCameraButton} active={this.state.buttonClicked}>{cameraButtonText} Capturing</Button>
          {camera}
        </div>
    )
  }
};

export default SnapshotContainer
