import React, { Component } from 'react';
import StartButton from './startButton';
import Camera from './camera';
import { callAPI } from '../../services/emotion';
import { convertToBlob } from './imageEncodingConverter'


class SnapshotContainer extends Component {
  constructor() {
    super()
    this.state = {
      buttonClicked: false
    }
  }

  renderCamera = () => {
    this.setState({buttonClicked: true})
  }

  handleSnapshot = (imageBase64) => {
    var blob = convertToBlob(imageBase64)
    this.handleFileUpload(blob)
  }

  handleFileUpload = (file) => {
    callAPI(file)
      .then(faceData => this.props.onChange(faceData))
      .catch(err => console.log(err, 'There was an error'))
  }

  render = () => {
    if (this.state.buttonClicked) {
      var camera = <Camera onNewSnapshot={this.handleSnapshot} width={this.props.width} height={this.props.height} />
    } else {
      var camera = ''
    }
    return (
      <div>
        <StartButton onClick={ this.renderCamera }/>
        {camera}
      </div>
    )
  }

};

export default SnapshotContainer
