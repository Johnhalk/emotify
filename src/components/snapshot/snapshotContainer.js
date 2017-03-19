import React, { Component } from 'react';
import StartButton from './startButton';
import StopButton from './stopButton';
import Camera from './camera';
import { convertToBlob } from './imageEncodingConverter'


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

  render = () => {
    if (this.state.buttonClicked) {
      var camera = <Camera onStream={this.handleStream} onCall={this.handleCall} onNewSnapshot={this.handleSnapshot} interval={this.props.interval} width={this.props.width} height={this.props.height} />
    } else {
      var camera;
    }
    return (
      <div>
        <StartButton onClick={ this.setButtonClickedTrue }/>
        <StopButton  onClick={ this.setButtonClickedFalse }/>
        {camera}
      </div>
    )
  }
};

export default SnapshotContainer
