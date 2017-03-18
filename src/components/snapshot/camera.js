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
    var video = this.refs.video;
    return navigator.mediaDevices.getUserMedia({video: true});
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
        <video ref="video" id="video" width={this.props.width} height={this.props.height} autoPlay></video>
        <canvas ref="snapshot" width={this.props.width} height={this.props.height} ></canvas>
      </div>
    )
  }
}

export default Camera
