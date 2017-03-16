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

  handleSnapshot = (refs) => {
    var snapProps = this.getSnapshotProperties(refs)
    var imageBase64 = this.takeSnapshot(snapProps)
    var blob = this.convertToBlob(imageBase64)
    this.handleFileUpload(blob)
  }

  getSnapshotProperties = (refs) => {
    var p = {
      canvas: refs.snapshot,
      video: refs.video,
      context: refs.snapshot.getContext('2d'),
      width: refs.video.width,
      height: refs.video.height
    }
    p.canvas.width = p.width
    p.canvas.height = p.height
    return p
  }

  takeSnapshot = (snapProps) => {
    snapProps.context.drawImage(snapProps.video, 0, 0, snapProps.width, snapProps.height);
    var imageDataURL = snapProps.canvas.toDataURL('image/png');
    return imageDataURL;
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
    return <WebcamPresentation onClickStart={this.activateWebcam} onClickSnap={this.handleSnapshot}/>
  }
}

export default Webcam
