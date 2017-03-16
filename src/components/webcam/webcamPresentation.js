import React, { Component } from 'react';

class WebcamPresentation extends Component {
  handleClickStart = () => {
    this.props.onClickStart(this.refs)
  }

  handleClickSnap = () => {
    this.props.onClickSnap(this.refs)
  }

  render(){
    return (
      <div>
        <p>
          <button type="button" className="start" onClick={this.handleClickStart}>Start</button>
          <button type="button" className="snap" onClick={this.handleClickSnap}>Snap Photo</button>
        </p>
        <video ref="video" id="video" width="400" height="300" autoPlay></video>
        <canvas ref="snapshot"></canvas>
      </div>
    )
  }
}

export default WebcamPresentation
