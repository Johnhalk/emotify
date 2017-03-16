import React, { Component } from 'react';
import WebcamPresentation from './webcamPresentation'
import { callAPI } from '../../services/emotion';

class Webcam extends Component {
  activateWebcam = (refs) => {
    var video = refs.video
    navigator.mediaDevices.getUserMedia({video: true}
    )
      .then(function(stream){
      video.src = window.URL.createObjectURL(stream);
      video.play();
    })
      .catch(function(err){
      console.log(err);
    })
  }

  takeSnapshot = (refs) => {
    var hidden_canvas = refs.snapshot,
        video = refs.video,
        image = refs.snap,

        width = video.width,
        height = video.height,

        context = hidden_canvas.getContext('2d');

    hidden_canvas.width = width;
    hidden_canvas.height = height;

    context.drawImage(video, 0, 0, width, height);

    var imageDataURL = hidden_canvas.toDataURL('image/png');
    this.handleFileUpload(this.convertToBlob(imageDataURL))
  }

  convertToBlob = (imageDataURL) => {
    var binary = atob(imageDataURL.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/png'});
  }

  handleFileUpload = (file) => {
    callAPI(file)
      .then(faceData => this.props.onChange(faceData))
      .catch(err => console.log(err, 'There was an error'))
  }

  render(){
    return <WebcamPresentation onClickStart={this.activateWebcam} onClickSnap={this.takeSnapshot}/>
  }
}

export default Webcam
