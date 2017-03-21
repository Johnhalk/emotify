import React, { Component } from 'react';

class Camera extends Component {
  getSnapshotProperties = () => {
    return {
      canvas: this.refs.snapshot,
      video: this.refs.video,
      context: this.refs.snapshot.getContext('2d'),
      width: this.refs.video.width,
      height: this.refs.video.height
    }
  }

  takeSnapshot = () => {
    var snapProps = this.getSnapshotProperties()
    snapProps.context.drawImage(snapProps.video, 0, 0, snapProps.width, snapProps.height);
    var imageDataURL = snapProps.canvas.toDataURL('image/png');
    return imageDataURL;
  }

  getPromiseCameraActivation = () => {
    navigator.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (navigator.getUserMedia) {
      return navigator.mediaDevices.getUserMedia({video: {
        width: {min: 600, ideal: 1280, max: 1920},
        height: {min: 600, ideal: 720, max: 1080}
      }});
    }
  }

  injectVideoFeed = (stream) => {
    var video = this.refs.video;
    var videoStream = stream
    this.props.onStream(videoStream)
    video.src = window.URL.createObjectURL(stream);
    video.play();
  }

  componentDidMount = () => {
    this.getPromiseCameraActivation(
    )
      .then(function(stream){
        this.injectVideoFeed(stream);
        var autoCall = setInterval(function(){
            var image = this.takeSnapshot()
            this.props.onNewSnapshot(image)
          }.bind(this), this.props.interval);
          this.props.onCall(autoCall)
      }.bind(this))

      .catch(function(err){
        throw(err);
      })
  }

  render(){
    return (
      <div>
        <video type='file' style={{display: "none"}} accept='video/*' capture='camera' ref="video" id="video" width={700} height={700} autoPlay="true"></video>
        <canvas ref="snapshot" style={{display: "none"}} width={700} height={700} ></canvas>
      </div>
    )
  }
}

export default Camera
