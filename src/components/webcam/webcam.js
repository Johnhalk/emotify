import React, { Component } from 'react';
import { callAPI } from '../../services/emotion';

class Webcam extends Component {
  constructor() {
    super();
    this.state = {
      snapshot: null
    }
  }

  activateWebcam = () => {
    var video = this.refs.video
    navigator.mediaDevices.getUserMedia(
      {
        video: true
      }
    ).then(function(stream){
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }).catch(function(err){
      console.log(err);
    })
  }

  takeSnapshot = () => {
    var hidden_canvas = this.refs.snapshot,
        video = this.refs.video,
        image = this.refs.snap,

        width = video.videoWidth,
        height = video.videoHeight,

        context = hidden_canvas.getContext('2d');

    hidden_canvas.width = width;
    hidden_canvas.height = height;

    context.drawImage(video, 0, 0, width, height);

    // // Get an image dataURL from the canvas.
    var imageDataURL = hidden_canvas.toDataURL('image/png');
    this.setState({snapshot: this.convertToBlob(imageDataURL)})
  }

  convertToBlob = (imageDataURL) => {
    var binary = atob(imageDataURL.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/png'});
  }

  handleFileUpload = () => {
    const file = this.state.snapshot;
    callAPI(file)
      .then(faceData => this.props.onChange(faceData))
      .catch(err => console.log(err, 'There was an error'))
  }

  render() {
    return (
      <div>
        <form>
          <video ref="video" id="video" width="300" height="300" autoPlay></video>
          <button type="button" onClick={this.activateWebcam}>Start</button>
          <button type="button" onClick={this.takeSnapshot}>Snap Photo</button>
          <img ref="snap" id='snap' />
        <canvas ref="snapshot"></canvas>
          <button type="button" id="btn" onClick={this.handleFileUpload}>Analyse</button>
        </form>
      </div>
    )
  }
}

export default Webcam
