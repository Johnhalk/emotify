import React, { Component } from 'react';
import {callAPI} from '../services/emotion'

class Upload extends Component {

  constructor() {
    super();
    this.state = {
      fileObj: null,
    };
  }

  handleFileUpload = () => {
    const file = this.refs.fileName.files[0];
    this.setState({fileObj: file})
    callAPI(file)
  }

  render() {
    return (
      <form>
      <input type="file" ref="fileName" name="fileName" />
      <button onClick={this.handleFileUpload}>Upload</button>
      </form>
    );
  }
}
export default Upload;
