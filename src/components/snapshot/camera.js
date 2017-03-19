import React, { Component } from 'react';

class Camera extends Component {
  constructor() {
    super();
    this.state = {
      isCameraFront: true,
      alert: ''
    }
  }

  changeCamera = () => {
    this.setState({isCameraFront: !this.state.isCameraFront})
  }

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
    console.log("enumerateDevices",navigator.mediaDevices.enumerateDevices());


    var video = this.refs.video;
    navigator.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (navigator.getUserMedia) {
      var facingMode = this.state.isCameraFront ? "user" : "environment"
      return navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280, max: 1920 },
          height: { ideal: 720, max: 1080 },
          facingMode: "environment"
        }
      });
    }

  }

  injectVideoFeed = (stream) => {
    var video = this.refs.video;
    this.props.onStream(stream)
    console.log(stream.getTracks());
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
        <pre ref="alert">{JSON.stringify(this.state.alert,null,4)}</pre>
        <button type='button' onClick={this.changeCamera}>Back Camera</button>
        <video type='file' accept='video/*' capture='camera' ref="video" id="video" width={this.props.width} height={this.props.height} autoPlay="true"></video>
        <canvas ref="snapshot" width={this.props.width} height={this.props.height} className={'hidden'}></canvas>
      </div>
    )
  }
}

export default Camera
