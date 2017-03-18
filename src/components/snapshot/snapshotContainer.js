import React, { Component } from 'react';
import StartButton from './startButton';
import Camera from './camera';
import { convertToBlob } from './imageEncodingConverter'


class SnapshotContainer extends Component {
  constructor() {
    super()
    this.state = {
      buttonClicked: false
    }
  }

  setButtonClickedTrue = () => {
    this.setState({buttonClicked: true})
  }

  handleSnapshot = (imageBase64) => {
    var blob = convertToBlob(imageBase64)
    this.props.onChange(blob)
  }

  render = () => {
    if (this.state.buttonClicked) {
      var camera = <Camera onNewSnapshot={this.handleSnapshot} interval={this.props.interval} width={this.props.width} height={this.props.height} />
    } else {
      var camera = ''
    }
    return (
      <div>
        <StartButton onClick={ this.setButtonClickedTrue }/>
        {camera}
      </div>
    )
  }

};

export default SnapshotContainer
