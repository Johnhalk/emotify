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
    video.src = window.URL.createObjectURL(stream);
    video.play();
  }

  componentDidMount = () => {
      this.getPromiseCameraActivation(
      )
        .then(function(stream){
          this.injectVideoFeed(stream);
          setInterval(function(){
              var image = this.takeSnapshot()
              // return image to parent and then api etc
            }.bind(this), 500);
        }.bind(this))

        .catch(function(err){
          throw(err);
        })
  }

  render(){
    return (
      <div>
        <video ref="video" id="video" width="400" height="300" autoPlay></video>
        <canvas ref="snapshot" width="400" height="300" ></canvas>
      </div>
    )
  }
}

export default Camera
